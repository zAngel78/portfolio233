import { useEffect } from 'react';

interface OnboardingTipProps {
  onClose: () => void;
}

export default function OnboardingTip({ onClose }: OnboardingTipProps) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onClose();
      localStorage.setItem('hasSeenOnboarding', 'true');
    }, 6000);

    return () => clearTimeout(timeout);
  }, [onClose]);

  return (
    <div
      className="project-card highlighted"
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none'
      }}
    >
      <div className="onboarding-tooltip">
        ¿Ya viste este proyecto?
      </div>
    </div>
  );
}
