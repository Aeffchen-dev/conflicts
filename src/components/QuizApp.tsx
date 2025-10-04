import { useState, useEffect } from 'react';
import { QuizCard } from './QuizCard';
import { CategorySelector } from './CategorySelector';
import { IntroSlide } from './IntroSlide';
import { Switch } from './ui/switch';

interface Question {
  question: string;
  category: string;
  depth: 'light' | 'deep';
  type?: string; // "Frage" or "Aktion"
}

interface SlideItem {
  type: 'intro' | 'question';
  question?: Question;
}

// Smart shuffle algorithm to distribute categories more evenly
const smartShuffle = (questions: Question[]): Question[] => {
  // Group questions by category
  const categorizedQuestions: { [category: string]: Question[] } = {};
  questions.forEach(q => {
    if (!categorizedQuestions[q.category]) {
      categorizedQuestions[q.category] = [];
    }
    categorizedQuestions[q.category].push(q);
  });

  // Shuffle questions within each category
  Object.keys(categorizedQuestions).forEach(category => {
    categorizedQuestions[category] = categorizedQuestions[category].sort(() => Math.random() - 0.5);
  });

  const categories = Object.keys(categorizedQuestions);
  const result: Question[] = [];
  const categoryCounters: { [category: string]: number } = {};
  
  // Initialize counters
  categories.forEach(cat => categoryCounters[cat] = 0);

  // Distribute questions more evenly
  while (result.length < questions.length) {
    // Shuffle categories for each round
    const shuffledCategories = [...categories].sort(() => Math.random() - 0.5);
    
    for (const category of shuffledCategories) {
      const categoryQuestions = categorizedQuestions[category];
      const counter = categoryCounters[category];
      
      if (counter < categoryQuestions.length) {
        result.push(categoryQuestions[counter]);
        categoryCounters[category]++;
        
        // Break if we've added all questions
        if (result.length >= questions.length) break;
      }
    }
  }

  return result;
};

export function QuizApp() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState('');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [allQuestions, setAllQuestions] = useState<Question[]>([]);
  const [introSlide, setIntroSlide] = useState<Question | null>(null);
  const [slides, setSlides] = useState<SlideItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [categorySelectorOpen, setCategorySelectorOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [availableCategories, setAvailableCategories] = useState<string[]>([]);
  const [isMixedMode, setIsMixedMode] = useState(true);
  const [hasToggleBeenChanged, setHasToggleBeenChanged] = useState(false);
  const [categoryColorMap, setCategoryColorMap] = useState<{ [category: string]: number }>({});
  const [logoAnimating, setLogoAnimating] = useState(false);
  const [animatingLetterIndex, setAnimatingLetterIndex] = useState(-1);
  const [toggleAnimating, setToggleAnimating] = useState(false);
  const [loadingSmileyRotating, setLoadingSmileyRotating] = useState(false);
  const [logoSmileyRotating, setLogoSmileyRotating] = useState(false);
  const [showBandaid, setShowBandaid] = useState(false);

  useEffect(() => {
    fetchQuestions();
  }, []);

  // Rotate smiley during loading
  useEffect(() => {
    if (loading) {
      setLoadingSmileyRotating(true);
      setTimeout(() => {
        setLoadingSmileyRotating(false);
      }, 1200);
    }
  }, [loading]);

  // Add touch/mouse handlers for desktop swipe
  useEffect(() => {
    let startX = 0;
    let startY = 0;
    let isDragging = false;

    const handleStart = (clientX: number, clientY: number) => {
      startX = clientX;
      startY = clientY;
      isDragging = true;
    };

    const handleEnd = (clientX: number, clientY: number) => {
      if (!isDragging) return;
      
      const deltaX = clientX - startX;
      const deltaY = clientY - startY;
      
      // Only trigger if horizontal movement is greater than vertical
      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
        if (deltaX > 0) {
          prevQuestion();
        } else {
          nextQuestion();
        }
      }
      
      isDragging = false;
    };

    const handleMouseDown = (e: MouseEvent) => {
      handleStart(e.clientX, e.clientY);
    };

    const handleMouseUp = (e: MouseEvent) => {
      handleEnd(e.clientX, e.clientY);
    };

    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0];
      handleStart(touch.clientX, touch.clientY);
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const touch = e.changedTouches[0];
      handleEnd(touch.clientX, touch.clientY);
    };

    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  const fetchQuestions = async () => {
    try {
      let csvText = '';
      
      try {
        // Use the new Google Sheets URL with cache busting
        const spreadsheetId = '1IG87hW3UKttiucjEQSv-YXq6tvTUf_NQBgFCcaWw1wM';
        const timestamp = new Date().getTime();
        const csvUrl = `https://docs.google.com/spreadsheets/d/${spreadsheetId}/export?format=csv&gid=0&cachebust=${timestamp}`;
        
        const response = await fetch(csvUrl, {
          cache: 'no-cache',
          headers: {
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache'
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch spreadsheet data');
        }
        
        csvText = await response.text();
      } catch (sheetsError) {
        console.log('Google Sheets failed, trying local CSV file:', sheetsError);
        // Fallback to local CSV file
        const localResponse = await fetch('/quiz_questions.csv');
        if (!localResponse.ok) {
          throw new Error('Failed to fetch local CSV data');
        }
        csvText = await localResponse.text();
      }
      
      // Parse CSV data - handle multi-line quoted fields
      const questions: Question[] = [];
      let introContent: Question | null = null;
      
      // Parse CSV properly to handle multi-line quoted fields
      const parseCSV = (csvText: string): string[][] => {
        const result: string[][] = [];
        let current = '';
        let inQuotes = false;
        let row: string[] = [];
        
        for (let i = 0; i < csvText.length; i++) {
          const char = csvText[i];
          
          if (char === '"') {
            if (inQuotes && csvText[i + 1] === '"') {
              // Escaped quote
              current += '"';
              i++; // Skip next quote
            } else {
              // Toggle quote state
              inQuotes = !inQuotes;
            }
          } else if (char === ',' && !inQuotes) {
            // Field separator outside quotes
            row.push(current.trim());
            current = '';
          } else if ((char === '\n' || char === '\r') && !inQuotes) {
            // Row separator outside quotes
            if (current.trim() || row.length > 0) {
              row.push(current.trim());
              if (row.some(field => field.length > 0)) {
                result.push(row);
              }
              row = [];
              current = '';
            }
          } else {
            // Regular character or line break inside quotes
            current += char;
          }
        }
        
        // Add the last field and row
        if (current.trim() || row.length > 0) {
          row.push(current.trim());
          if (row.some(field => field.length > 0)) {
            result.push(row);
          }
        }
        
        return result;
      };
      
      const rows = parseCSV(csvText);
      
      for (let i = 0; i < rows.length; i++) {
        const values = rows[i];
        
        // Skip header row
        if (i === 0 && (values[0]?.toLowerCase().includes('categor') || values[1]?.toLowerCase().includes('question'))) {
          continue;
        }
        
        if (values.length >= 2 && values[0] && values[1]) {
          const question: Question = {
            category: values[0],
            question: values[1],
            depth: values[0].toLowerCase() === 'aktion' ? 'deep' : 'light',
            type: values[2] || 'Frage' // Default to "Frage" if third column is empty
          };
          
          // Handle intro content
          if (question.category.toLowerCase() === 'intro') {
            introContent = question;
          } else {
            questions.push(question);
          }
        }
      }
      
      if (questions.length > 0) {
        // Better shuffling algorithm to distribute categories evenly
        const shuffledQuestions = smartShuffle(questions);
        
        setAllQuestions(shuffledQuestions);
        setIntroSlide(introContent);
        
        // Extract unique categories (exclude 'Intro') and assign specific colors
        const categories = Array.from(new Set(questions.map(q => q.category)))
          .filter(cat => cat.toLowerCase() !== 'intro');
        
        // Specific color mapping for each category
        const colorMap: { [category: string]: number } = {};
        categories.forEach((category) => {
          switch(category) {
            case 'Körperliche Intimität':
              colorMap[category] = 0; // Now cyan (category1)
              break;
            case 'Emotionale Intimität':
              colorMap[category] = 1; // Red (category2)
              break;
            case 'Geistige Intimität':
              colorMap[category] = 2; // Now blue (category3)
              break;
            case 'Kreative Intimität':
              colorMap[category] = 3; // Pink (category4)
              break;
            case 'Spielerische Intimität':
              colorMap[category] = 4; // Yellow (category5)
              break;
            case 'Spirituelle Intimität':
              colorMap[category] = 5; // Mint green (category6)
              break;
            case 'Alltagsintimität':
              colorMap[category] = 5; // Mint green (category6)
              break;
            case 'Gemeinsame Abenteuer':
              colorMap[category] = 6; // Orange (category7)
              break;
            default:
              colorMap[category] = categories.indexOf(category) % 7;
          }
        });
        setCategoryColorMap(colorMap);
        setAvailableCategories(categories);
        setSelectedCategories(categories); // Start with all categories selected
      }
    } catch (error) {
      console.error('Error fetching questions:', error);
    } finally {
      setLoading(false);
    }
  };

  // Multi-slide system state
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionDirection, setTransitionDirection] = useState<'left' | 'right' | null>(null);

  // Real-time dragging state
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [dragStartX, setDragStartX] = useState(0);

  const nextQuestion = () => {
    if (currentIndex < slides.length - 1 && !isTransitioning) {
      setIsTransitioning(true);
      setTransitionDirection('left');
      
      setTimeout(() => {
        setCurrentIndex(prev => prev + 1);
        setIsTransitioning(false);
        setTransitionDirection(null);
      }, 300);
    }
  };

  const prevQuestion = () => {
    if (currentIndex > 0 && !isTransitioning) {
      setIsTransitioning(true);
      setTransitionDirection('right');
      
      setTimeout(() => {
        setCurrentIndex(prev => prev - 1);
        setIsTransitioning(false);
        setTransitionDirection(null);
      }, 300);
    }
  };

  // Real-time drag handlers
  const handleDragStart = (clientX: number) => {
    if (isTransitioning) return;
    setIsDragging(true);
    setDragStartX(clientX);
    setDragOffset(0);
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging) return;
    const offset = clientX - dragStartX;
    setDragOffset(offset);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    
    const threshold = 120;
    
    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset > 0 && currentIndex > 0) {
        prevQuestion();
      } else if (dragOffset < 0 && currentIndex < slides.length - 1) {
        nextQuestion();
      }
    }
    
    setIsDragging(false);
    setDragOffset(0);
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      prevQuestion();
    } else if (e.key === 'ArrowRight') {
      nextQuestion();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentIndex]);

  // Filter and order slides based on categories and mode
  useEffect(() => {
    // Filter by categories
    let filteredQuestions = allQuestions.filter(q => 
      selectedCategories.includes(q.category)
    );
    
    // Filter by type based on toggle - when toggle is off (isMixedMode=false), show only "Frage" content
    if (!isMixedMode) {
      filteredQuestions = filteredQuestions.filter(q => q.type === 'Frage');
    }
    
    setQuestions(filteredQuestions);
    
    const slides: SlideItem[] = [];
    
    let orderedQuestions: Question[];
    
    if (isMixedMode && hasToggleBeenChanged) {
      // Only prioritize "Aktion" questions when user actively switched to action mode
      const aktionQuestions = filteredQuestions.filter(q => q.type === 'Aktion');
      const frageQuestions = filteredQuestions.filter(q => q.type === 'Frage');
      
      // Shuffle each type separately
      const shuffledAktionQuestions = smartShuffle([...aktionQuestions]);
      const shuffledFrageQuestions = smartShuffle([...frageQuestions]);
      
      // Combine with "Aktion" questions first
      orderedQuestions = [...shuffledAktionQuestions, ...shuffledFrageQuestions];
    } else {
      // For initial load or question mode, just shuffle normally
      orderedQuestions = smartShuffle([...filteredQuestions]);
    }
    
    // Add question slides
    orderedQuestions.forEach(q => {
      slides.push({ type: 'question', question: q });
    });
    
    setSlides(slides);
    setCurrentIndex(0); // Reset to first slide when filtering/mode changes
  }, [selectedCategories, allQuestions, availableCategories.length, isMixedMode, hasToggleBeenChanged]);

  // Clamp current index whenever slides length changes to prevent out-of-bounds access
  useEffect(() => {
    setCurrentIndex((i) => (slides.length ? Math.min(i, slides.length - 1) : 0));
  }, [slides.length]);

  const handleCategoriesChange = (categories: string[]) => {
    setSelectedCategories(categories);
  };

  const handleLogoClick = () => {
    if (logoAnimating) return;
    
    setLogoAnimating(true);
    setAnimatingLetterIndex(0);
    setShowBandaid(true);
    
    // Hide bandaid after animation
    setTimeout(() => {
      setShowBandaid(false);
    }, 800);
    
    // Start smiley rotation after 2/3 of animation
    setTimeout(() => {
      setLogoSmileyRotating(true);
      setTimeout(() => {
        setLogoSmileyRotating(false);
      }, 400);
    }, 400);
    
    // Animate each letter sequentially (7 letters for "Resolve")
    for (let i = 0; i < 7; i++) {
      setTimeout(() => {
        setAnimatingLetterIndex(i);
        // Reset animation state after the last letter
        if (i === 6) {
          setTimeout(() => {
            setLogoAnimating(false);
            setAnimatingLetterIndex(-1);
          }, 300);
        }
      }, i * 75);
    }
  };

  const handleToggleChange = (checked: boolean) => {
    // Only animate if the state is actually changing
    if (checked !== isMixedMode) {
      setToggleAnimating(true);
      setIsMixedMode(checked);
      setHasToggleBeenChanged(true);
      
      // Reset animation after toggle completes
      setTimeout(() => {
        setToggleAnimating(false);
      }, 300);
    }
  };

  const handleToggleClick = (mode: boolean) => {
    // Only animate if the state is actually changing
    if (mode !== isMixedMode) {
      setToggleAnimating(true);
      setIsMixedMode(mode);
      setHasToggleBeenChanged(true);
      
      // Reset animation after toggle completes
      setTimeout(() => {
        setToggleAnimating(false);
      }, 300);
    }
  };

  const hasSlides = slides.length > 0;
  const safeIndex = hasSlides ? Math.min(currentIndex, slides.length - 1) : 0;
  const safeSlide = hasSlides ? slides[safeIndex] : undefined;

  return (
    <div className="min-h-[100svh] h-[100svh] bg-background overflow-hidden flex flex-col" style={{ height: '100svh' }}>
      {/* App Header with controls - Always visible */}
      <div className="bg-black mt-4 flex items-baseline justify-between w-full px-4" style={{ paddingTop: 'env(safe-area-inset-top, 0)' }}>
        <div 
          className="text-white cursor-pointer relative flex items-center" 
          style={{ fontFamily: 'Arial Heavy, Arial, sans-serif', fontSize: '20px', fontWeight: '950' }}
          onClick={handleLogoClick}
        >
          <div 
            style={{
              marginRight: '8px',
              display: 'inline-block',
              transform: 'rotate(-45deg) scale(1.2)',
              perspective: '1000px',
              transformStyle: 'preserve-3d',
              animation: showBandaid ? 'applyBandaid 0.45s cubic-bezier(0.68, -0.55, 0.27, 1.55)' : 'none',
              filter: showBandaid ? 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))' : 'drop-shadow(1px 1px 2px rgba(0,0,0,0.2))',
              transition: 'filter 0.3s ease'
            }}
          >
            <svg width="20" height="20" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Main bandaid body with gradient */}
              <defs>
                <linearGradient id="bandaidGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#d9b38c', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#d4a574', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#c9986a', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <rect x="1" y="4" width="30" height="16" rx="5" fill="url(#bandaidGradient)" stroke="#b8946a" strokeWidth="0.5"/>
              
              {/* Center pad (lighter area) */}
              <rect x="11" y="6" width="10" height="12" rx="2" fill="#e5d4b8" opacity="0.9"/>
              
              {/* Holes pattern - white dots */}
              <circle cx="5" cy="8" r="0.8" fill="white" opacity="0.9"/>
              <circle cx="8" cy="8" r="0.8" fill="white" opacity="0.9"/>
              <circle cx="5" cy="12" r="0.8" fill="white" opacity="0.9"/>
              <circle cx="8" cy="12" r="0.8" fill="white" opacity="0.9"/>
              <circle cx="5" cy="16" r="0.8" fill="white" opacity="0.9"/>
              <circle cx="8" cy="16" r="0.8" fill="white" opacity="0.9"/>
              
              <circle cx="24" cy="8" r="0.8" fill="white" opacity="0.9"/>
              <circle cx="27" cy="8" r="0.8" fill="white" opacity="0.9"/>
              <circle cx="24" cy="12" r="0.8" fill="white" opacity="0.9"/>
              <circle cx="27" cy="12" r="0.8" fill="white" opacity="0.9"/>
              <circle cx="24" cy="16" r="0.8" fill="white" opacity="0.9"/>
              <circle cx="27" cy="16" r="0.8" fill="white" opacity="0.9"/>
              
              {/* Center pad holes (smaller, less visible) */}
              <circle cx="13" cy="10" r="0.5" fill="#c9a680" opacity="0.4"/>
              <circle cx="16" cy="10" r="0.5" fill="#c9a680" opacity="0.4"/>
              <circle cx="19" cy="10" r="0.5" fill="#c9a680" opacity="0.4"/>
              <circle cx="13" cy="14" r="0.5" fill="#c9a680" opacity="0.4"/>
              <circle cx="16" cy="14" r="0.5" fill="#c9a680" opacity="0.4"/>
              <circle cx="19" cy="14" r="0.5" fill="#c9a680" opacity="0.4"/>
            </svg>
          </div>
          <span>
            {"Resolve".split('').map((char, index) => {
              const rotations = [3, -2, 4, -3, 2, -4, 3];
              const isAnimating = animatingLetterIndex === index;
              const isEven = index % 2 === 0;
              const translateY = isAnimating ? (isEven ? '-3px' : '3px') : '0px';
              return (
                <span 
                  key={index} 
                  style={{ 
                    display: 'inline-block',
                    transform: `rotate(${rotations[index]}deg) translateY(${translateY})`,
                    transition: 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                  }}
                >
                  {char}
                </span>
              );
            })}
          </span>
        </div>
        <style>{`
          @keyframes applyBandaid {
            0% {
              transform: rotate(-45deg) scaleX(1) rotateZ(0deg) translateY(0px);
              opacity: 1;
              filter: drop-shadow(1px 1px 2px rgba(0,0,0,0.2));
            }
            /* Snappy Ease Out beim Lösen */
            30% {
              transform: rotate(-45deg) scaleX(1.33) rotateZ(-14deg) translateY(-4px);
              animation-timing-function: cubic-bezier(0.68, -0.55, 0.27, 1.55);
              filter: drop-shadow(4px 6px 8px rgba(0,0,0,0.4));
            }
            /* Snappy Ease In beim Andrücken */
            70% {
              transform: rotate(-45deg) scaleX(1.08) rotateZ(-3deg) translateY(-0.5px);
              animation-timing-function: cubic-bezier(0.68, -0.55, 0.27, 1.55);
              filter: drop-shadow(2px 3px 4px rgba(0,0,0,0.3));
            }
            100% {
              transform: rotate(-45deg) scaleX(1) rotateZ(0deg) translateY(0px);
              opacity: 1;
              filter: drop-shadow(1px 1px 2px rgba(0,0,0,0.2));
            }
          }
        `}</style>
        <button 
          onClick={() => setCategorySelectorOpen(true)}
          className="text-white font-normal flex items-center"
          style={{ fontSize: '14px' }}
        >
          Kategorien wählen
        </button>
      </div>

      {/* Main Quiz Container with multi-slide carousel */}
      <div className="flex-1 flex flex-col px-4 pb-4 overflow-hidden mt-4" style={{ minHeight: 0 }}>
        <div className="flex-1 flex items-stretch justify-center min-h-0 relative">
          {loading ? (
            <div className="flex items-center justify-center h-full text-white text-xl">Lade Fragen...</div>
          ) : hasSlides ? (
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Render current slide and adjacent slides for transitions */}
              {slides.map((slide, index) => {
                const isActive = index === safeIndex;
                const isPrev = index === safeIndex - 1;
                const isNext = index === safeIndex + 1;
                
                if (!isActive && !isPrev && !isNext) return null;
                
                let transform = '';
                let zIndex = 1;
                
                if (isActive) {
                  // Current slide positioning
                  if (isDragging) {
                    // Calculate drag progress for scaling and rotation
                    const dragProgress = Math.abs(dragOffset) / 300; // Normalize to 0-1
                    const scale = Math.max(0.8, 1 - dragProgress * 0.2); // Scale from 1 to 0.8
                    const rotation = dragOffset > 0 ? dragProgress * 5 : -dragProgress * 5; // Rotate up to 5 degrees
                    transform = `translateX(${dragOffset}px) scale(${scale}) rotate(${rotation}deg)`;
                  } else if (isTransitioning && transitionDirection === 'left') {
                    transform = 'translateX(calc(-100% - 16px)) scale(0.8) rotate(-5deg)';
                  } else if (isTransitioning && transitionDirection === 'right') {
                    transform = 'translateX(calc(100% + 16px)) scale(0.8) rotate(5deg)';
                  } else {
                    transform = 'translateX(0) scale(1) rotate(0deg)';
                  }
                  zIndex = 2;
                } else if (isPrev) {
                  // Previous slide positioning
                  if (isDragging) {
                    // Calculate scale for incoming slide based on drag progress
                    const dragProgress = Math.abs(dragOffset) / 300;
                    const scale = Math.min(1, 0.8 + dragProgress * 0.2); // Scale from 0.8 to 1
                    transform = `translateX(calc(-100% - 16px + ${dragOffset}px)) scale(${scale}) rotate(0deg)`;
                  } else if (isTransitioning && transitionDirection === 'right') {
                    transform = 'translateX(0) scale(1) rotate(0deg)';
                  } else {
                    transform = 'translateX(calc(-100% - 16px)) scale(0.8) rotate(0deg)';
                  }
                } else if (isNext) {
                  // Next slide positioning
                  if (isDragging) {
                    // Calculate scale for incoming slide based on drag progress
                    const dragProgress = Math.abs(dragOffset) / 300;
                    const scale = Math.min(1, 0.8 + dragProgress * 0.2); // Scale from 0.8 to 1
                    transform = `translateX(calc(100% + 16px + ${dragOffset}px)) scale(${scale}) rotate(0deg)`;
                  } else if (isTransitioning && transitionDirection === 'left') {
                    transform = 'translateX(0) scale(1) rotate(0deg)';
                  } else {
                    transform = 'translateX(calc(100% + 16px)) scale(0.8) rotate(0deg)';
                  }
                }
                
                return (
                  <div
                    key={`slide-${index}`}
                    className="absolute inset-0 w-full h-full"
                    style={{
                      transform,
                      zIndex,
                      transition: isDragging ? 'none' : 'transform 0.3s ease-in-out'
                    }}
                  >
                    <QuizCard
                      question={slide.question!}
                      onSwipeLeft={nextQuestion}
                      onSwipeRight={prevQuestion}
                      categoryIndex={categoryColorMap[slide.question!.category] || 0}
                      onDragStart={handleDragStart}
                      onDragMove={handleDragMove}
                      onDragEnd={handleDragEnd}
                      dragOffset={isDragging ? dragOffset : 0}
                      isDragging={isDragging}
                    />
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="flex items-center justify-center h-full text-white text-xl">Keine Fragen verfügbar</div>
          )}
        </div>
      </div>
      
      <CategorySelector
        open={categorySelectorOpen}
        onOpenChange={setCategorySelectorOpen}
        categories={availableCategories}
        selectedCategories={selectedCategories}
        onCategoriesChange={handleCategoriesChange}
      />
    </div>
  );
}