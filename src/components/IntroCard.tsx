interface IntroCardProps {
  slideIndex: number;
  isActive?: boolean;
  isNext?: boolean;
  isPrev?: boolean;
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
}

export function IntroCard({ slideIndex, isActive = false, isNext = false, isPrev = false, onSwipeLeft, onSwipeRight }: IntroCardProps) {
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
          animationClass: isActive ? 'animate-slide-horizontal-active' : isNext ? 'animate-slide-horizontal-next' : isPrev ? 'animate-slide-horizontal-prev' : ''
        };
      case 2:
        return {
          text: 'Swipe nach oben und unten um zwischen den Fragen einer Kategorie zu wechseln',
          animationClass: isActive ? 'animate-slide-vertical-active' : isNext ? 'animate-slide-vertical-next' : isPrev ? 'animate-slide-vertical-prev' : ''
        };
      default:
        return { text: '', animationClass: '' };
    }
  };

  const content = getContent();
  console.info('IntroCard: smallTextWave', { slideIndex, waveActive: slideIndex === 0 });

  return (
    <div 
      className={`relative w-full max-w-[500px] mx-auto rounded-[2rem] shadow-card overflow-hidden select-none h-full flex flex-col justify-between items-center ${content.animationClass}`}
      style={{
        backgroundColor: 'hsl(160, 55%, 75%)',
        color: 'hsl(160, 70%, 15%)'
      }}
    >
      {/* Tap zones */}
      <div className="absolute left-0 top-0 w-20 h-full z-20 cursor-pointer" onClick={onSwipeRight} />
      <div className="absolute right-0 top-0 w-20 h-full z-20 cursor-pointer" onClick={onSwipeLeft} />
      
      <div className="flex-1 flex flex-col items-center justify-center text-center p-8 relative z-10">
        <h1 
          className="text-3xl md:text-4xl lg:text-5xl max-w-full leading-tight lg:leading-[1.09]"
          style={{ 
            fontFamily: 'Kokoro, serif',
            fontWeight: 'bold',
            fontStyle: 'italic',
            hyphens: 'none',
            overflowWrap: 'break-word',
            wordBreak: 'normal'
          }}
        >
          {content.text}
        </h1>
      </div>
      
      <p 
        className={`text-center p-8 relative z-10 inline-block mx-auto ${slideIndex === 0 ? 'text-color-wave' : ''}`}
        style={{ 
          fontFamily: 'Arial, sans-serif',
          fontSize: '14px',
          ...(slideIndex !== 0 && { color: 'black' })
        }}
      >
        Swipe nach rechts um weiter zu navigieren
      </p>
      
      <style>{`
        @keyframes reveal-wipe {
          0% {
            clip-path: inset(0 100% 0 0);
          }
          28.57% {
            clip-path: inset(0 0 0 0);
          }
          100% {
            clip-path: inset(0 0 0 0);
          }
        }
        
        .text-color-wave {
          color: hsl(160, 70%, 15%);
          animation: reveal-wipe 7s ease-out infinite;
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