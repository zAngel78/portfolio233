import { useState, useEffect } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import InfiniteMenu from './components/InfiniteMenu/InfiniteMenu';
import ContactButton from './components/ContactButton';
import ContactModal from './components/ContactModal';
import FaultyTerminal from './components/FaultyTerminal/FaultyTerminal';
import { projects } from './data/projects';
import './style.css';

// Temporal: Preview del ProfileCard
import ProfileCard from './components/ProfileCard/ProfileCard';

export default function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showContactModal, setShowContactModal] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [portfolioReady, setPortfolioReady] = useState(false);
  
  // Check if we're in preview mode
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('preview') === 'card') {
      setIsPreviewMode(true);
    }
  }, []);

  const handleProgress = () => {
    if (!hasInteracted) {
      setHasInteracted(true);
      setPortfolioReady(true); // Empieza a cargar en background
    }
  };
  
  const handleTransitionStart = () => {
    setIsLoading(true);
    // Dar tiempo para que el portfolio se renderice completamente
    setTimeout(() => {
      setIsLoading(false);
      setShowWelcome(false);
    }, 1500); // 1.5 segundos de carga
  };

  // Convertir proyectos al formato que necesita InfiniteMenu
  const menuItems = projects.map(project => ({
    image: project.image,
    link: project.link,
    title: project.name || project.title,
    description: project.description
  }));

  // Preview mode for ProfileCard screenshot
  if (isPreviewMode) {
    return (
      <div style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#000',
        padding: '20px'
      }}>
        <ProfileCard
          name="Angel Vergara"
          title="Web Developer & Designer"
          handle="angelvergara"
          status="Available for work"
          contactText="Contact"
          avatarUrl="https://i.postimg.cc/c4MdjswR/foto34.jpg"
          miniAvatarUrl="https://i.postimg.cc/c4MdjswR/foto34.jpg"
          showUserInfo={true}
          enableTilt={true}
          enableMobileTilt={false}
          behindGlowEnabled={true}
          onContactClick={() => console.log('Contact clicked')}
        />
        <div style={{
          position: 'fixed',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          padding: '15px 30px',
          borderRadius: '10px',
          color: 'white',
          textAlign: 'center',
          zIndex: 10000,
          fontSize: '14px'
        }}>
          <strong style={{ color: '#71C4FF' }}>📸 Modo Preview:</strong> Toma una captura de pantalla de esta tarjeta (solo la tarjeta, sin este mensaje)
        </div>
      </div>
    );
  }

  return (
    <div id="app">
      {/* Background animado FaultyTerminal con efectos blancos */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        zIndex: 0
      }}>
        <FaultyTerminal
          scale={1.5}
          gridMul={[2, 1]}
          digitSize={1.2}
          timeScale={0.5}
          pause={false}
          scanlineIntensity={0.5}
          glitchAmount={0.5}
          flickerAmount={0.3}
          noiseAmp={0.5}
          chromaticAberration={0}
          dither={0}
          curvature={0}
          tint="#ffffff"
          mouseReact={true}
          mouseStrength={0.3}
          pageLoadAnimation={false}
          brightness={0.8}
        />
      </div>

      {/* InfiniteMenu - se carga en background cuando hay interacción */}
      {portfolioReady && (
        <div style={{
          opacity: showWelcome ? 0 : 1,
          transition: 'opacity 0.6s ease-in',
          pointerEvents: showWelcome ? 'none' : 'auto',
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          zIndex: 1,
          transform: 'translateZ(0)'
        }}>
          <InfiniteMenu
            items={menuItems}
            scale={1.0}
            projects={projects}
          />
          <ContactButton onClick={() => setShowContactModal(true)} />
        </div>
      )}

      {/* Loading screen */}
      {isLoading && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          background: '#000',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2000,
          animation: 'fadeIn 0.3s ease-in'
        }}>
          <div style={{
            fontSize: '2rem',
            color: '#fff',
            fontWeight: 600,
            marginBottom: '1rem',
            fontFamily: 'Poppins, sans-serif',
            letterSpacing: '2px'
          }}>
            Preparing Portfolio
          </div>
          <div style={{
            width: '200px',
            height: '3px',
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '10px',
            overflow: 'hidden'
          }}>
            <div style={{
              width: '100%',
              height: '100%',
              background: 'linear-gradient(90deg, #fff 0%, #666 100%)',
              animation: 'loadingBar 1.5s ease-in-out infinite'
            }}></div>
          </div>
        </div>
      )}

      {/* Welcome screen encima */}
      {showWelcome && <WelcomeScreen onComplete={handleTransitionStart} onProgress={handleProgress} />}

      {showContactModal && <ContactModal onClose={() => setShowContactModal(false)} />}
    </div>
  );
}
