interface IntroCardProps {
  slideIndex: number;
  isActive?: boolean;
}

export function IntroCard({ slideIndex, isActive = false }: IntroCardProps) {
  const getContent = () => {
    switch (slideIndex) {
      case 0:
        return {
          text: 'Dieses Frage-Spiel hilft euch in einer akuten Konflikt-Situation dabei, euren Konflikt erfolgreich zu navigieren und zu lösen.',
          animationClass: ''
        };
      case 1:
        return {
          text: 'Swipe left and right to change the category',
          animationClass: 'animate-slide-horizontal'
        };
      case 2:
        return {
          text: 'Swipe up or down to change the question',
          animationClass: 'animate-slide-vertical'
        };
      default:
        return { text: '', animationClass: '' };
    }
  };

  const content = getContent();

  return (
    <div 
      className={`relative w-full max-w-[500px] mx-auto rounded-[2rem] shadow-card overflow-hidden select-none h-full flex flex-col justify-center items-center p-8 ${isActive ? content.animationClass : ''}`}
      style={{
        backgroundColor: 'hsl(0, 0%, 40%)',
        color: 'white'
      }}
    >
      <div className="flex flex-col items-center justify-center text-center">
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
      
      <style>{`
        @keyframes slide-horizontal {
          0% {
            transform: translateX(0) scale(1);
          }
          50% {
            transform: translateX(-40%) scale(0.9);
          }
          100% {
            transform: translateX(0) scale(1);
          }
        }
        
        @keyframes slide-vertical {
          0% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-40%) scale(0.9);
          }
          100% {
            transform: translateY(0) scale(1);
          }
        }
        
        .animate-slide-horizontal {
          animation: slide-horizontal 0.8s ease-in-out 0.5s 1;
        }
        
        .animate-slide-vertical {
          animation: slide-vertical 0.8s ease-in-out 0.5s 1;
        }
      `}</style>
    </div>
  );
}