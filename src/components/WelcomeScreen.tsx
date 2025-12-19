import { useEffect, useState } from 'react';
import Lanyard from './Lanyard/Lanyard';

interface WelcomeScreenProps {
  onComplete: () => void;
  onProgress?: () => void;
}

export default function WelcomeScreen({ onComplete, onProgress }: WelcomeScreenProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const scrollThreshold = 300;

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleButtonClick = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    if (onProgress) onProgress();

    const duration = 1000;
    const startTime = Date.now();
    const startProgress = scrollProgress;

    const animate = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const newProgress = startProgress + (scrollThreshold - startProgress) * easeProgress;

      setScrollProgress(newProgress);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setScrollProgress(scrollThreshold);
        setTimeout(() => {
          onComplete();
        }, 100);
      }
    };

    requestAnimationFrame(animate);
  };

  useEffect(() => {
    let progress = 0;

    const handleScroll = (e: WheelEvent) => {
      if (isAnimating) return;
      e.preventDefault();

      if (onProgress) onProgress();
      progress += e.deltaY * 0.6; // Más rápido para mejor respuesta
      progress = Math.max(0, Math.min(scrollThreshold, progress));
      
      // Usar requestAnimationFrame para sincronizar con el repaint
      requestAnimationFrame(() => {
        setScrollProgress(progress);
      });

      if (progress >= scrollThreshold) {
        setTimeout(() => {
          onComplete();
        }, 200); // Aumentado de 100 a 200ms
      }
    };

    const handleTouch = (e: TouchEvent) => {
      if (isAnimating) return;
      const touch = e.touches[0];
      const prevTouch = (e.target as any).prevTouch || touch.clientY;
      const delta = prevTouch - touch.clientY;
      (e.target as any).prevTouch = touch.clientY;

      if (onProgress) onProgress();
      progress += delta * 0.5;
      progress = Math.max(0, Math.min(scrollThreshold, progress));
      setScrollProgress(progress);

      if (progress >= scrollThreshold) {
        setTimeout(() => {
          onComplete();
        }, 100);
      }
    };

    window.addEventListener('wheel', handleScroll, { passive: false });
    window.addEventListener('touchmove', handleTouch, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('touchmove', handleTouch);
    };
  }, [onComplete, onProgress, isAnimating]);

  const progress = scrollProgress / scrollThreshold;
  // Animación slide optimizada
  const translateX = -progress * 100;
  const opacity = 1 - progress;
  const scale = 1 - progress * 0.2;

  if (progress >= 1) {
    return null;
  }

  return (
    <>
      <div
        className="welcome-screen"
        style={{
          transform: `translate3d(${translateX}%, 0, 0) scale(${scale})`,
          opacity: opacity
        }}
      >
        {/* Contenido de texto */}
        <div className="welcome-content">

          <p className="welcome-text-en">Welcome to my portfolio</p>
          <h1 className="welcome-name">Angel Vergara</h1>
          <p className="welcome-role">Web Developer & Designer</p>
          <button className="welcome-btn" onClick={handleButtonClick}>
            View My Work
          </button>
        </div>

        {/* Lanyard 3D a la derecha - solo desktop */}
        {!isMobile && (
          <div style={{
            position: 'absolute',
            right: '-10vw',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '70vw',
            height: '100vh',
            zIndex: 1002,
            overflow: 'visible',
            pointerEvents: 'none', // Dejar pasar eventos al fondo
            opacity: progress < 0.7 ? 1 : 1 - ((progress - 0.7) / 0.3),
            transition: 'opacity 0.2s ease-out'
          }}>
            <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} fov={25} />
          </div>
        )}
      </div>
    </>
  );
}
