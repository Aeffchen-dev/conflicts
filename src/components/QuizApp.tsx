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
  const [showBandaid, setShowBandaid] = useState(true);

  useEffect(() => {
    fetchQuestions();
    
    // Trigger full logo animation on initial load (same as tap)
    setLogoAnimating(true);
    setAnimatingLetterIndex(0);
    
    // Reset band-aid state to allow animation
    setShowBandaid(false);
    
    // Band-aid starts AFTER text completes at 1.1s
    setTimeout(() => {
      setShowBandaid(true);
    }, 1100);
    
    // End text animation
    setTimeout(() => {
      setLogoAnimating(false);
      setAnimatingLetterIndex(-1);
    }, 1100);
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

  // Category navigation state
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [currentQuestionIndexInCategory, setCurrentQuestionIndexInCategory] = useState(0);
  const [categorizedQuestions, setCategorizedQuestions] = useState<{ [category: string]: Question[] }>({});

  const nextCategory = () => {
    const categories = Object.keys(categorizedQuestions);
    setCurrentCategoryIndex((prev) => (prev + 1) % categories.length);
    setCurrentQuestionIndexInCategory(0);
  };

  const prevCategory = () => {
    const categories = Object.keys(categorizedQuestions);
    setCurrentCategoryIndex((prev) => (prev - 1 + categories.length) % categories.length);
    setCurrentQuestionIndexInCategory(0);
  };

  const nextQuestion = () => {
    const currentCategory = Object.keys(categorizedQuestions)[currentCategoryIndex];
    const questionsInCategory = categorizedQuestions[currentCategory] || [];
    setCurrentQuestionIndexInCategory((prev) => (prev + 1) % questionsInCategory.length);
  };

  const prevQuestion = () => {
    const currentCategory = Object.keys(categorizedQuestions)[currentCategoryIndex];
    const questionsInCategory = categorizedQuestions[currentCategory] || [];
    setCurrentQuestionIndexInCategory((prev) => (prev - 1 + questionsInCategory.length) % questionsInCategory.length);
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      prevCategory();
    } else if (e.key === 'ArrowRight') {
      nextCategory();
    } else if (e.key === 'ArrowUp') {
      prevQuestion();
    } else if (e.key === 'ArrowDown') {
      nextQuestion();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentCategoryIndex, categorizedQuestions]);

  // Organize questions by category
  useEffect(() => {
    let filteredQuestions = allQuestions.filter(q => 
      selectedCategories.includes(q.category)
    );
    
    if (!isMixedMode) {
      filteredQuestions = filteredQuestions.filter(q => q.type === 'Frage');
    }
    
    const organized: { [category: string]: Question[] } = {};
    
    filteredQuestions.forEach(q => {
      if (!organized[q.category]) {
        organized[q.category] = [];
      }
      organized[q.category].push(q);
    });
    
    // Shuffle questions within each category
    Object.keys(organized).forEach(category => {
      organized[category] = smartShuffle(organized[category]);
    });
    
    setCategorizedQuestions(organized);
    setCurrentCategoryIndex(0);
    setCurrentQuestionIndexInCategory(0);
  }, [selectedCategories, allQuestions, isMixedMode, hasToggleBeenChanged]);

  const handleCategoriesChange = (categories: string[]) => {
    setSelectedCategories(categories);
  };

  const handleLogoClick = () => {
    if (logoAnimating) return;
    
    setLogoAnimating(true);
    setAnimatingLetterIndex(0);
    
    // Reset band-aid state to allow re-animation
    setShowBandaid(false);
    
    // Text animation duration: 0.5s + (6 letters * 0.1s delay) = 1.1s
    // Band-aid starts AFTER text completes at 1.1s
    setTimeout(() => {
      setShowBandaid(true);
    }, 1100);
    
    // End text animation
    setTimeout(() => {
      setLogoAnimating(false);
      setAnimatingLetterIndex(-1);
    }, 1100);
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

  const categories = Object.keys(categorizedQuestions);
  const hasCategories = categories.length > 0;
  const currentCategory = hasCategories ? categories[currentCategoryIndex] : '';
  const questionsInCategory = categorizedQuestions[currentCategory] || [];
  const hasQuestions = questionsInCategory.length > 0;
  const currentQuestion = hasQuestions ? questionsInCategory[currentQuestionIndexInCategory] : undefined;

  // Touch handlers for horizontal swipe
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchStartY, setTouchStartY] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
    setTouchStartY(e.touches[0].clientY);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const deltaX = e.changedTouches[0].clientX - touchStartX;
    const deltaY = e.changedTouches[0].clientY - touchStartY;
    
    // Horizontal swipe (category change)
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
      if (deltaX > 0) {
        prevCategory();
      } else {
        nextCategory();
      }
    }
    // Vertical swipe (question change)
    else if (Math.abs(deltaY) > 50) {
      if (deltaY > 0) {
        prevQuestion();
      } else {
        nextQuestion();
      }
    }
  };

  return (
    <div className="min-h-[100svh] h-[100svh] bg-background overflow-hidden flex flex-col" style={{ height: '100svh' }}>
      {/* App Header with controls - Always visible */}
      <div className="bg-black mt-4 flex items-center justify-between w-full px-4" style={{ paddingTop: 'env(safe-area-inset-top, 0)' }}>
        <div 
          className="text-white cursor-pointer relative flex items-center" 
          style={{ fontFamily: 'Kokoro, serif', fontSize: '20px', fontWeight: 'bold', fontStyle: 'italic' }}
          onClick={handleLogoClick}
        >
          {'Resolve'.split('').map((letter, index) => (
            <span
              key={index}
              style={{
                display: 'inline-block',
                opacity: logoAnimating ? 0 : 1,
                animation: logoAnimating ? `letterReveal${index} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 0.1}s forwards` : 'none'
              }}
            >
              {letter}
            </span>
          ))}
          <div 
            style={{
              marginLeft: '8px',
              display: 'inline-block',
              transform: 'rotate(-45deg) scale(1.28)',
              perspective: '1000px',
              transformStyle: 'preserve-3d',
              opacity: showBandaid ? 1 : 0,
              animation: showBandaid ? 'applyBandaid 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none',
              filter: showBandaid ? 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))' : 'drop-shadow(1px 1px 2px rgba(0,0,0,0.2))',
              transition: showBandaid ? 'none' : 'opacity 0.1s ease'
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
        </div>
        <style>{`
          @keyframes letterReveal0 {
            0% {
              opacity: 0;
              filter: blur(8px);
              transform: translateX(-10px);
            }
            100% {
              opacity: 1;
              filter: blur(0px);
              transform: translateX(0);
            }
          }
          
          @keyframes letterReveal1 {
            0% {
              opacity: 0;
              filter: blur(6px);
              transform: translateX(-8px);
            }
            100% {
              opacity: 1;
              filter: blur(0px);
              transform: translateX(0);
            }
          }
          
          @keyframes letterReveal2 {
            0% {
              opacity: 0;
              filter: blur(10px);
              transform: translateX(-12px);
            }
            100% {
              opacity: 1;
              filter: blur(0px);
              transform: translateX(0);
            }
          }
          
          @keyframes letterReveal3 {
            0% {
              opacity: 0;
              filter: blur(7px);
              transform: translateX(-9px);
            }
            100% {
              opacity: 1;
              filter: blur(0px);
              transform: translateX(0);
            }
          }
          
          @keyframes letterReveal4 {
            0% {
              opacity: 0;
              filter: blur(9px);
              transform: translateX(-11px);
            }
            100% {
              opacity: 1;
              filter: blur(0px);
              transform: translateX(0);
            }
          }
          
          @keyframes letterReveal5 {
            0% {
              opacity: 0;
              filter: blur(5px);
              transform: translateX(-7px);
            }
            100% {
              opacity: 1;
              filter: blur(0px);
              transform: translateX(0);
            }
          }
          
          @keyframes letterReveal6 {
            0% {
              opacity: 0;
              filter: blur(11px);
              transform: translateX(-13px);
            }
            100% {
              opacity: 1;
              filter: blur(0px);
              transform: translateX(0);
            }
          }
          
          @keyframes applyBandaid {
            0% {
              transform: rotate(-45deg) scale(1.28, 1.28) rotateZ(0deg) translateY(0px);
              opacity: 0;
              filter: drop-shadow(1px 1px 2px rgba(0,0,0,0.2));
            }
            30% {
              transform: rotate(-45deg) scale(2.2, 1.7) rotateZ(-14deg) translateY(-4px);
              opacity: 1;
              filter: drop-shadow(4px 6px 8px rgba(0,0,0,0.4));
            }
            80% {
              transform: rotate(-45deg) scale(1.3, 1.29) rotateZ(-0.3deg) translateY(-0.05px);
              opacity: 1;
              filter: drop-shadow(1.5px 1.5px 2.5px rgba(0,0,0,0.22));
            }
            100% {
              transform: rotate(-45deg) scale(1.28, 1.28) rotateZ(0deg) translateY(0px);
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

      {/* Main Quiz Container */}
      <div 
        className="flex-1 flex flex-col px-4 pb-4 overflow-hidden mt-4" 
        style={{ minHeight: 0 }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="flex-1 flex items-stretch justify-center min-h-0 relative">
          {loading ? (
            <div className="flex items-center justify-center h-full text-white text-xl">Lade Fragen...</div>
          ) : hasCategories && currentQuestion ? (
            <div className="w-full h-full flex items-center justify-center">
              <QuizCard
                question={currentQuestion}
                onSwipeLeft={nextCategory}
                onSwipeRight={prevCategory}
                categoryIndex={categoryColorMap[currentQuestion.category] || 0}
              />
            </div>
          ) : (
            <div className="flex items-center justify-center h-full text-white text-xl">Keine Fragen verfügbar</div>
          )}
        </div>
        
        {/* Navigation indicators */}
        {hasCategories && (
          <div className="flex flex-col items-center mt-4 gap-2">
            <div className="flex gap-2">
              {categories.map((cat, idx) => (
                <div 
                  key={cat}
                  className="w-2 h-2 rounded-full transition-all"
                  style={{ 
                    backgroundColor: idx === currentCategoryIndex ? 'white' : 'rgba(255,255,255,0.3)'
                  }}
                />
              ))}
            </div>
            <div className="text-white text-xs opacity-60">
              {currentCategory} ({currentQuestionIndexInCategory + 1}/{questionsInCategory.length})
            </div>
          </div>
        )}
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