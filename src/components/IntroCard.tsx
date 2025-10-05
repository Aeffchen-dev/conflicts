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
          animationClass: !isTransitioning && isActive ? 'animate-slide-horizontal-active' : !isTransitioning && isNext ? 'animate-slide-horizontal-next' : !isTransitioning && isPrev ? 'animate-slide-horizontal-prev' : ''
        };
      case 2:
        return {
          text: 'Swipe nach oben und unten um zwischen den Fragen einer Kategorie zu wechseln',
          animationClass: !isTransitioning && isActive ? 'animate-slide-vertical-active' : !isTransitioning && isNext ? 'animate-slide-vertical-next' : !isTransitioning && isPrev ? 'animate-slide-vertical-prev' : ''
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
        {/* Custom horizontal double arrow for slide 2 */}
        {slideIndex === 1 && (
          <svg 
            width="80" 
            height="24" 
            viewBox="0 0 80 24" 
            className={!isTransitioning && isActive ? 'animate-wobble-horizontal' : ''}
            style={{ color: 'hsl(160, 70%, 15%)' }}
          >
            <defs>
              <marker id="arrowhead-left" markerWidth="12" markerHeight="12" refX="2" refY="6" orient="auto">
                <polygon points="12,6 2,2 2,10" fill="currentColor" />
              </marker>
              <marker id="arrowhead-right" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto">
                <polygon points="2,6 12,2 12,10" fill="currentColor" />
              </marker>
            </defs>
            <line 
              x1="14" 
              y1="12" 
              x2="66" 
              y2="12" 
              stroke="currentColor" 
              strokeWidth="2" 
              markerStart="url(#arrowhead-left)" 
              markerEnd="url(#arrowhead-right)"
            />
          </svg>
        )}
        
        {/* Custom vertical double arrow for slide 3 */}
        {slideIndex === 2 && (
          <svg 
            width="24" 
            height="80" 
            viewBox="0 0 24 80" 
            className={!isTransitioning && isActive ? 'animate-wobble-vertical' : ''}
            style={{ color: 'hsl(160, 70%, 15%)' }}
          >
            <defs>
              <marker id="arrowhead-up" markerWidth="12" markerHeight="12" refX="6" refY="2" orient="auto">
                <polygon points="6,12 2,2 10,2" fill="currentColor" />
              </marker>
              <marker id="arrowhead-down" markerWidth="12" markerHeight="12" refX="6" refY="10" orient="auto">
                <polygon points="6,2 2,12 10,12" fill="currentColor" />
              </marker>
            </defs>
            <line 
              x1="12" 
              y1="14" 
              x2="12" 
              y2="66" 
              stroke="currentColor" 
              strokeWidth="2" 
              markerStart="url(#arrowhead-up)" 
              markerEnd="url(#arrowhead-down)"
            />
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
        
        @keyframes wobble-horizontal {
          0%, 100% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-8px);
          }
          75% {
            transform: translateX(8px);
          }
        }
        
        @keyframes wobble-vertical {
          0%, 100% {
            transform: translateY(0);
          }
          25% {
            transform: translateY(-8px);
          }
          75% {
            transform: translateY(8px);
          }
        }
        
        .animate-wobble-horizontal {
          animation: wobble-horizontal 0.5s ease-in-out 0.3s 1;
        }
        
        .animate-wobble-vertical {
          animation: wobble-vertical 0.5s ease-in-out 0.3s 1;
        }
        
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