import { ArrowLeftRight, ArrowUpDown } from 'lucide-react';

interface IntroCardProps {
  slideIndex: number;
}

export function IntroCard({ slideIndex }: IntroCardProps) {
  const getContent = () => {
    switch (slideIndex) {
      case 0:
        return {
          text: 'Dieses Frage-Spiel hilft euch in einer akuten Konflikt-Situation diesen möglichst gut zu lösen.',
          showPill: false,
          icon: null
        };
      case 1:
        return {
          text: 'Swipe left and right to change the category',
          showPill: false,
          icon: <ArrowLeftRight className="w-12 h-12 animate-swipe-horizontal" />
        };
      case 2:
        return {
          text: 'Swipe up or down to change the question',
          showPill: false,
          icon: <ArrowUpDown className="w-12 h-12 animate-swipe-vertical" />
        };
      default:
        return { text: '', showPill: false, icon: null };
    }
  };

  const content = getContent();

  return (
    <div 
      className="relative w-full max-w-[500px] mx-auto rounded-[2rem] shadow-card overflow-hidden select-none h-full flex flex-col justify-center items-center p-8"
      style={{
        backgroundColor: 'hsl(0, 0%, 40%)',
        color: 'white'
      }}
    >
      <div className="flex flex-col items-center justify-center gap-6 text-center">
        <p 
          className="text-lg md:text-xl lg:text-2xl max-w-md"
          style={{ 
            fontFamily: 'Arial, sans-serif',
            lineHeight: '1.5'
          }}
        >
          {content.text}
        </p>
        {content.icon && (
          <div className="mt-4">
            {content.icon}
          </div>
        )}
      </div>
      
      <style>{`
        @keyframes swipe-horizontal {
          0%, 100% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-10px);
          }
          75% {
            transform: translateX(10px);
          }
        }
        
        @keyframes swipe-vertical {
          0%, 100% {
            transform: translateY(0);
          }
          25% {
            transform: translateY(-10px);
          }
          75% {
            transform: translateY(10px);
          }
        }
        
        .animate-swipe-horizontal {
          animation: swipe-horizontal 2s ease-in-out infinite;
        }
        
        .animate-swipe-vertical {
          animation: swipe-vertical 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}