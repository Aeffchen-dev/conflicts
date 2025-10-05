interface IntroCardProps {
  slideIndex: number;
}

export function IntroCard({ slideIndex }: IntroCardProps) {
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
      className={`relative w-full max-w-[500px] mx-auto rounded-[2rem] shadow-card overflow-hidden select-none h-full flex flex-col justify-center items-center p-8 ${content.animationClass}`}
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
          0%, 100% {
            transform: translateX(0) scale(1);
          }
          25% {
            transform: translateX(-15px) scale(0.98);
          }
          75% {
            transform: translateX(15px) scale(0.98);
          }
        }
        
        @keyframes slide-vertical {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          25% {
            transform: translateY(-15px) scale(0.98);
          }
          75% {
            transform: translateY(15px) scale(0.98);
          }
        }
        
        .animate-slide-horizontal {
          animation: slide-horizontal 2.5s ease-in-out infinite;
        }
        
        .animate-slide-vertical {
          animation: slide-vertical 2.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}