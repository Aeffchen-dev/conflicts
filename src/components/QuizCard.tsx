import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Question {
  question: string;
  category: string;
  depth?: 'light' | 'deep';
}

interface QuizCardProps {
  question: Question;
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
  onSwipeUp?: () => void;
  onSwipeDown?: () => void;
  animationClass?: string;
  categoryIndex?: number;
  onDragStart?: (clientX: number) => void;
  onDragMove?: (clientX: number) => void;
  onDragEnd?: () => void;
  dragOffset?: number;
  isDragging?: boolean;
  isTransitioning?: boolean;
}

export function QuizCard({ 
  question, 
  onSwipeLeft, 
  onSwipeRight,
  onSwipeUp,
  onSwipeDown,
  animationClass = '', 
  categoryIndex = 0,
  onDragStart,
  onDragMove,
  onDragEnd,
  dragOffset = 0,
  isDragging = false,
  isTransitioning = false
}: QuizCardProps) {
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [mouseStart, setMouseStart] = useState<number | null>(null);
  const [mouseEnd, setMouseEnd] = useState<number | null>(null);
  const [isLocalDragging, setIsLocalDragging] = useState(false);
  const [processedText, setProcessedText] = useState<JSX.Element[]>([]);
  
  // Generate random animation for more variety within categories
  const randomAnimation = (() => {
    const animations = [
      'animate-wave-border-1', 'animate-wave-border-2', 'animate-wave-border-3', 'animate-wave-border-4',
      'animate-wave-border-5', 'animate-wave-border-6', 'animate-wave-border-7', 'animate-wave-border-8',
      'animate-wave-border-9', 'animate-wave-border-10', 'animate-wave-border-11', 'animate-wave-border-12',
      'animate-wave-border-13', 'animate-wave-border-14', 'animate-wave-border-15', 'animate-wave-border-16'
    ];
    // Create more randomness by combining hash with timestamp and random factor
    const hash = question.question.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const randomFactor = Math.floor(Math.random() * animations.length);
    return animations[(hash + randomFactor) % animations.length];
  })();
  
  const textRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const minSwipeDistance = 50;

  // Process text to clean line breaks
  useEffect(() => {
    const processText = () => {
      // Remove all line breaks and let text flow naturally
      console.log('Original question text:', JSON.stringify(question.question));
      const cleanedText = question.question.replace(/[\r\n]+/g, ' ').replace(/\s+/g, ' ').trim();
      console.log('Cleaned text:', JSON.stringify(cleanedText));
      
      setProcessedText([<span key="single-line">{cleanedText}</span>]);
    };

    processText();
  }, [question.question]);

  // Get category-specific colors using specific category mapping
  const getCategoryColors = (categoryIndex: number) => {
    // Use specific color mapping for each category based on the actual category name
    let colorIndex;
    switch(question.category) {
      case 'Körperliche Intimität':
        colorIndex = 1; // Cyan
        break;
      case 'Emotionale Intimität':
        colorIndex = 2; // Teal
        break;
      case 'Geistige Intimität':
        colorIndex = 4; // Golden
        break;
      case 'Kreative Intimität':
        colorIndex = 3; // Pink
        break;
      case 'Spielerische Intimität':
        colorIndex = 6; // Yellow
        break;
      case 'Spirituelle Intimität':
        colorIndex = 7; // Mint
        break;
      case 'Alltagsintimität':
        colorIndex = 5; // Purple
        break;
      case 'Gemeinsame Abenteuer':
        colorIndex = 8; // Blue
        break;
      default:
        colorIndex = (categoryIndex % 8) + 1;
    }
    
    // CSS custom properties for the colors with proper contrast ratios
    const colorVars = {
      1: { bg: 'hsl(var(--quiz-category1-bg))', text: 'hsl(var(--quiz-category1-text))', pillBg: 'hsl(311 75% 68%)' }, // Pink Lavender pill
      2: { bg: 'hsl(var(--quiz-category2-bg))', text: 'hsl(var(--quiz-category2-text))', pillBg: 'hsl(263 75% 68%)' }, // Lavender Blue pill
      3: { bg: 'hsl(var(--quiz-category3-bg))', text: 'hsl(var(--quiz-category3-text))', pillBg: 'hsl(217 100% 65%)' }, // Light Blue pill - neon
      4: { bg: 'hsl(var(--quiz-category4-bg))', text: 'hsl(var(--quiz-category4-text))', pillBg: 'hsl(195 100% 55%)' }, // Sky Blue pill - neon
      5: { bg: 'hsl(var(--quiz-category5-bg))', text: 'hsl(var(--quiz-category5-text))', pillBg: 'hsl(167 100% 42%)' }, // Magic Mint pill - neon
      6: { bg: 'hsl(var(--quiz-category6-bg))', text: 'hsl(var(--quiz-category6-text))', pillBg: 'hsl(56 90% 58%)' }, // Lemon Chiffon pill
      7: { bg: 'hsl(var(--quiz-category7-bg))', text: 'hsl(var(--quiz-category7-text))', pillBg: 'hsl(167 100% 44%)' }, // Magic Mint pill
      8: { bg: 'hsl(var(--quiz-category8-bg))', text: 'hsl(var(--quiz-category8-text))', pillBg: 'hsl(200 100% 58%)' }, // Baby Blue Eyes pill
    };
    
    return colorVars[colorIndex as keyof typeof colorVars] || colorVars[1];
  };

  const categoryColors = getCategoryColors(categoryIndex);

  const onTouchStart = (e: React.TouchEvent) => {
    if (onDragStart) {
      onDragStart(e.touches[0].clientX);
    } else {
      setTouchEnd(null);
      setTouchStart(e.targetTouches[0].clientX);
    }
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (onDragMove) {
      onDragMove(e.touches[0].clientX);
    } else {
      setTouchEnd(e.targetTouches[0].clientX);
    }
  };

  const onTouchEnd = () => {
    if (onDragEnd) {
      onDragEnd();
    } else {
      if (!touchStart || !touchEnd) return;
      
      const distance = touchStart - touchEnd;
      const isLeftSwipe = distance > minSwipeDistance;
      const isRightSwipe = distance < -minSwipeDistance;

      if (isLeftSwipe) {
        onSwipeLeft();
      } else if (isRightSwipe) {
        onSwipeRight();
      }
    }
  };

  // Mouse drag handlers for desktop
  const onMouseDown = (e: React.MouseEvent) => {
    if (onDragStart) {
      onDragStart(e.clientX);
    } else {
      setMouseEnd(null);
      setMouseStart(e.clientX);
      setIsLocalDragging(true);
    }
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (onDragMove) {
      onDragMove(e.clientX);
    } else {
      if (!isLocalDragging) return;
      setMouseEnd(e.clientX);
    }
  };

  const onMouseUp = () => {
    if (onDragEnd) {
      onDragEnd();
    } else {
      if (!isLocalDragging || !mouseStart || !mouseEnd) {
        setIsLocalDragging(false);
        return;
      }
      
      const distance = mouseStart - mouseEnd;
      const isLeftDrag = distance > minSwipeDistance;
      const isRightDrag = distance < -minSwipeDistance;

      if (isLeftDrag) {
        onSwipeLeft();
      } else if (isRightDrag) {
        onSwipeRight();
      }
      
      setIsLocalDragging(false);
    }
  };

  const onMouseLeave = () => {
    if (onDragEnd && isDragging) {
      onDragEnd();
    } else {
      setIsLocalDragging(false);
    }
  };

  return (
    <div 
      className={`relative w-full max-w-[500px] mx-auto rounded-[2rem] shadow-card overflow-hidden select-none`}
      style={{
        height: '100%',
        maxHeight: '100%',
        backgroundColor: question.category.toLowerCase() !== 'intro' ? categoryColors.bg : 'hsl(var(--card-background))',
        color: question.category.toLowerCase() !== 'intro' ? categoryColors.text : 'hsl(var(--foreground))'
      }}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseLeave}
    >
      {/* Main Content */}
      <div className={`h-full flex flex-col justify-start ${question.category.toLowerCase() === 'intro' ? 'p-8' : 'p-8 lg:p-10'} relative`}>
        
        {/* Top Click Area - Swipe Up */}
        <div 
          className="absolute top-0 left-0 right-0 h-20 z-20 cursor-pointer"
          onClick={onSwipeUp}
        />

        {/* Bottom Click Area - Swipe Down */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-20 z-20 cursor-pointer"
          onClick={onSwipeDown}
        />

        {/* Left Click Area - Swipe Right */}
        <div 
          className="absolute left-0 top-0 w-20 h-full z-20 cursor-pointer"
          onClick={onSwipeRight}
        />

        {/* Right Click Area - Swipe Left */}
        <div 
          className="absolute right-0 top-0 w-20 h-full z-20 cursor-pointer"
          onClick={onSwipeLeft}
        />
        
        {/* Category Pill - Only for non-intro slides */}
        {question.category.toLowerCase() !== 'intro' && (
          <div className="mb-4">
            <div 
              className={`px-4 py-2 font-medium inline-block ${randomAnimation}`}
              style={{
                backgroundColor: categoryColors.pillBg,
                color: categoryColors.text,
                fontSize: '12px',
                animationPlayState: isTransitioning ? 'paused' : 'running'
              }}
            >
              {question.category}
            </div>
          </div>
        )}

        <div ref={containerRef} className={`flex-1 flex w-full ${question.category.toLowerCase() === 'intro' ? 'items-center justify-start text-left' : 'items-start justify-start text-left'}`}>
          <h1 
            ref={textRef}
            className={`font-normal leading-tight lg:leading-[1.09] w-full ${question.category.toLowerCase() === 'intro' ? 'text-base md:text-lg lg:text-xl max-w-md' : 'text-3xl md:text-4xl lg:text-5xl max-w-full'}`}
            style={{ 
              fontFamily: 'Kokoro, serif',
              fontWeight: 'bold',
              fontStyle: 'italic',
              color: question.category.toLowerCase() !== 'intro' ? categoryColors.text : 'hsl(var(--foreground))',
              hyphens: 'none',
              overflowWrap: 'break-word',
              wordBreak: 'normal'
            }}
          >
            {processedText.length > 0 ? processedText : question.question}
          </h1>
        </div>

        {/* Navigation hint at bottom - only for intro slides */}
        {question.category.toLowerCase() === 'intro' && (
          <div className="text-center">
            <p className="text-xs opacity-60">
              Swipe um weiter zu navigieren
            </p>
          </div>
        )}

      </div>

    </div>
  );
}