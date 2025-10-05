import { useState, useEffect, useRef } from 'react';
import { ArrowLeftRight, ArrowUpDown } from 'lucide-react';

interface IntroCardProps {
  slideIndex: number;
  isActive?: boolean;
  isNext?: boolean;
  isPrev?: boolean;
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  isTransitioning?: boolean;
  nextDirection?: 'horizontal' | 'vertical';
}

export function IntroCard({ slideIndex, isActive = false, isNext = false, isPrev = false, onSwipeLeft, onSwipeRight, isTransitioning = false, nextDirection }: IntroCardProps) {
  const getContent = () => {
    switch (slideIndex) {
      case 0:
        return {
          text: 'Fragen um akute Konflikte gut zu navigieren und zufriedenstellend lösen zu können',
          animationClass: ''
        };
      case 1:
        return {
          text: 'Swipe nach rechts und links um zwischen den Kategorien zu wechseln',
          animationClass: !isTransitioning && isActive ? 'animate-slide-horizontal-active' : !isTransitioning && isNext ? 'animate-slide-horizontal-next' : !isTransitioning && isPrev ? 'animate-slide-horizontal-prev' : ''
        };
      case 2:
        return {
          text: 'Swipe nach oben und unten um zwischen den Fragen einer Kategorie zu wechseln',
          animationClass: !isTransitioning && isActive
            ? 'animate-slide-vertical-active'
            : !isTransitioning && isNext
              ? (nextDirection === 'horizontal' ? 'animate-slide-horizontal-next' : 'animate-slide-vertical-next')
              : !isTransitioning && isPrev
                ? 'animate-slide-vertical-prev'
                : ''
        };
      default:
        return { text: '', animationClass: '' };
    }
  };

  const content = getContent();
  console.info('IntroCard: smallTextWave', { slideIndex, waveActive: slideIndex === 0 });

  return (
    <div 
      className={`relative w-full max-w-[500px] mx-auto rounded-[2rem] shadow-card overflow-hidden select-none flex flex-col justify-between items-center ${content.animationClass}`}
      style={{
        height: '100%',
        backgroundColor: 'hsl(160, 55%, 75%)',
        color: 'hsl(160, 70%, 15%)'
      }}
    >
      {/* Tap zones */}
      <div className="absolute left-0 top-0 w-20 h-full z-20 cursor-pointer" onClick={onSwipeRight} />
      <div className="absolute right-0 top-0 w-20 h-full z-20 cursor-pointer" onClick={onSwipeLeft} />
      
      <div className="flex-1 flex flex-col items-center justify-center text-center p-8 relative z-10 gap-6">
        {/* Double-headed arrow for slide 2 (horizontal) */}
        {slideIndex === 1 && (
          <ArrowLeftRight 
            size={48} 
            strokeWidth={2}
            style={{ color: 'hsl(160, 70%, 15%)' }}
          />
        )}
        
        {/* Double-headed arrow for slide 3 (vertical) */}
        {slideIndex === 2 && (
          <ArrowUpDown 
            size={48} 
            strokeWidth={2}
            style={{ color: 'hsl(160, 70%, 15%)' }}
          />
        )}
        
        <h1 
          style={{ 
            fontFamily: 'Kokoro, serif',
            fontWeight: 'bold',
            fontStyle: 'italic',
            hyphens: 'none',
            overflowWrap: 'break-word',
            wordBreak: 'normal',
            fontSize: 'clamp(1.875rem, 5vw, 3rem)',
            lineHeight: '1.09',
            color: 'hsl(160, 70%, 15%)'
          }}
        >
          {content.text}
        </h1>
      </div>
      
      <p 
        className="text-center p-8 relative z-10 inline-block mx-auto"
        style={{ 
          fontFamily: 'Arial, sans-serif',
          fontSize: '14px',
          color: 'hsl(160, 70%, 15%)'
        }}
      >
        Swipe nach rechts um weiter zu navigieren
      </p>
      
      <style>{`
        @keyframes slide-horizontal-active {
          0% {
            transform: translateX(0) scale(1);
          }
          50% {
            transform: translateX(-20%) scale(0.95);
          }
          100% {
            transform: translateX(0) scale(1);
          }
        }
        
        @keyframes slide-horizontal-next {
          0% {
            transform: translateX(calc(100% + 16px)) scale(0.8);
          }
          100% {
            transform: translateX(20%) scale(0.9);
          }
        }
        
        @keyframes slide-vertical-active {
          0% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-20%) scale(0.95);
          }
          100% {
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes slide-vertical-next {
          0% {
            transform: translateY(calc(100% + 16px)) scale(0.85);
          }
          50% {
            transform: translateY(10%) scale(0.92);
          }
          100% {
            transform: translateY(calc(100% + 16px)) scale(0.85);
          }
        }
        
        .animate-slide-horizontal-active {
          animation: slide-horizontal-active 0.5s ease-in-out 0.3s 1;
        }
        
        .animate-slide-horizontal-next {
          animation: slide-horizontal-next 0.5s ease-in-out 0.3s 1;
        }
        
        .animate-slide-vertical-active {
          animation: slide-vertical-active 0.5s ease-in-out 0.3s 1;
        }
        
        .animate-slide-vertical-next {
          animation: slide-vertical-next 0.5s ease-in-out 0.3s 1;
        }
      `}</style>
    </div>
  );
}