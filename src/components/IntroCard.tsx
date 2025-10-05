import { useState, useEffect, useRef } from 'react';

interface IntroCardProps {
  slideIndex: number;
  isActive?: boolean;
  isNext?: boolean;
  isPrev?: boolean;
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  isTransitioning?: boolean;
}

export function IntroCard({ slideIndex, isActive = false, isNext = false, isPrev = false, onSwipeLeft, onSwipeRight, isTransitioning = false }: IntroCardProps) {
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
          animationClass: !isTransitioning && (isActive || isNext) ? 'animate-slide-horizontal-active' : ''
        };
      case 2:
        return {
          text: 'Swipe nach oben und unten um zwischen den Fragen einer Kategorie zu wechseln',
          animationClass: !isTransitioning && (isActive || isNext) ? 'animate-slide-vertical-active' : ''
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
      
      <div className="flex-1 flex flex-col items-center justify-center text-center p-8 relative z-10 gap-8">
        {/* Connected horizontal arrows for slide 2 */}
        {slideIndex === 1 && (
          <svg 
            width="120" 
            height="40" 
            viewBox="0 0 120 40" 
            style={{ color: 'hsl(160, 70%, 15%)' }}
          >
            <defs>
              <marker id="arrow-left" markerWidth="10" markerHeight="10" refX="1" refY="5" orient="auto">
                <polygon points="10,5 1,1 1,9" fill="currentColor" />
              </marker>
              <marker id="arrow-right" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
                <polygon points="1,5 10,1 10,9" fill="currentColor" />
              </marker>
            </defs>
            {/* Left arrow */}
            <line x1="25" y1="20" x2="10" y2="20" stroke="currentColor" strokeWidth="3" markerEnd="url(#arrow-left)" />
            {/* Center line */}
            <line x1="25" y1="20" x2="95" y2="20" stroke="currentColor" strokeWidth="3" />
            {/* Right arrow */}
            <line x1="95" y1="20" x2="110" y2="20" stroke="currentColor" strokeWidth="3" markerEnd="url(#arrow-right)" />
          </svg>
        )}
        
        {/* Connected vertical arrows for slide 3 */}
        {slideIndex === 2 && (
          <svg 
            width="40" 
            height="120" 
            viewBox="0 0 40 120" 
            style={{ color: 'hsl(160, 70%, 15%)' }}
          >
            <defs>
              <marker id="arrow-up" markerWidth="10" markerHeight="10" refX="5" refY="1" orient="auto">
                <polygon points="5,10 1,1 9,1" fill="currentColor" />
              </marker>
              <marker id="arrow-down" markerWidth="10" markerHeight="10" refX="5" refY="9" orient="auto">
                <polygon points="5,1 1,10 9,10" fill="currentColor" />
              </marker>
            </defs>
            {/* Up arrow */}
            <line x1="20" y1="25" x2="20" y2="10" stroke="currentColor" strokeWidth="3" markerEnd="url(#arrow-up)" />
            {/* Center line */}
            <line x1="20" y1="25" x2="20" y2="95" stroke="currentColor" strokeWidth="3" />
            {/* Down arrow */}
            <line x1="20" y1="95" x2="20" y2="110" stroke="currentColor" strokeWidth="3" markerEnd="url(#arrow-down)" />
          </svg>
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
          color: 'black'
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
          50% {
            transform: translateX(10%) scale(0.9);
          }
          100% {
            transform: translateX(calc(100% + 16px)) scale(0.8);
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