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
}

export function IntroCard({ slideIndex, isActive = false, isNext = false, isPrev = false, onSwipeLeft, onSwipeRight, isTransitioning = false }: IntroCardProps) {
  const getContent = () => {
    switch (slideIndex) {
      case 0:
        return { text: 'Fragen um akute Konflikte gut zu navigieren und zufriedenstellend lösen zu können' };
      case 1:
        return { text: 'Swipe nach rechts und links um zwischen den Kategorien zu wechseln' };
      case 2:
        return { text: 'Swipe nach oben und unten um zwischen den Fragen einer Kategorie zu wechseln' };
      default:
        return { text: '' };
    }
  };

  const content = getContent();
  console.info('IntroCard: smallTextWave', { slideIndex, waveActive: slideIndex === 0 });

  return (
    <div 
      className="relative w-full max-w-[500px] mx-auto rounded-[2rem] shadow-card overflow-hidden select-none flex flex-col justify-between items-center"
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
    </div>
  );
}