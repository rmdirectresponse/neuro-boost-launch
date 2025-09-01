
import { useEffect, useState, useRef } from "react";
import drJoseImage from "@/assets/dr-jose.jpg";

interface VSLSectionProps {
  onVideoComplete: () => void;
}

const VSLSection = ({ onVideoComplete }: VSLSectionProps) => {
  const [videoTime, setVideoTime] = useState(0);
  const playerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Timer para mostrar conteúdo adicional após 1min10s
    const timer = setTimeout(() => {
      onVideoComplete();
    }, 70000); // 70 segundos = 1min10s

    return () => clearTimeout(timer);
  }, [onVideoComplete]);

  useEffect(() => {
    // Load vturb player script and create player element
    if (playerRef.current && !document.querySelector('#vid-68b2581b2a3de119c45c2154')) {
      // Create vturb-smartplayer element
      const playerElement = document.createElement('vturb-smartplayer');
      playerElement.setAttribute('id', 'vid-68b2581b2a3de119c45c2154');
      playerElement.style.display = 'block';
      playerElement.style.margin = '0 auto';
      playerElement.style.width = '100%';
      
      playerRef.current.appendChild(playerElement);
      
      // Load script if not already loaded
      if (!document.querySelector('script[src*="68b2581b2a3de119c45c2154"]')) {
        const script = document.createElement('script');
        script.src = 'https://scripts.converteai.net/1a6f3b4b-51fd-49a8-b4bb-593f4d735ddc/players/68b2581b2a3de119c45c2154/v4/player.js';
        script.async = true;
        document.head.appendChild(script);
      }
    }
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <section className="bg-background py-4 sm:py-6 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Headline */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 px-2" style={{lineHeight: '1.1'}}>
          ¡Tus resultados ya están listos! Mira el video del Dr. José para recibir tu{" "}
          <span className="text-primary">Diagnóstico</span>
        </h2>
        
        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 px-2" style={{lineHeight: '1.1'}}>
          ¡Haz clic en el video de abajo!
        </p>
        
        {/* Video Container */}
        <div className="relative max-w-3xl mx-auto px-2 sm:px-0">
          <div ref={playerRef} className="w-full"></div>
        </div>
        
      </div>
    </section>
  );
};

export default VSLSection;
