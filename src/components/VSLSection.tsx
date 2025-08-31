
import { useEffect, useState, useRef } from "react";
import drJoseImage from "@/assets/dr-jose.jpg";

interface VSLSectionProps {
  onVideoComplete: () => void;
}

const VSLSection = ({ onVideoComplete }: VSLSectionProps) => {
  const [videoTime, setVideoTime] = useState(0);
  const playerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Timer desabilitado - contenido visible imediatamente
    // const timer = setInterval(() => {
    //   setVideoTime(prev => {
    //     const newTime = prev + 1;
    //     if (newTime === 71) {
    //       onVideoComplete();
    //     }
    //     return newTime;
    //   });
    // }, 1000);

    // return () => clearInterval(timer);
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
        
        {/* Offer Section */}
        <div className="mt-8 max-w-2xl mx-auto">
          <div className="bg-card rounded-lg p-6 lg:p-8 shadow-lg bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20">
            <div className="text-center">
              {/* Opportunity Badge */}
              <div className="inline-block bg-primary text-primary-foreground px-4 sm:px-6 py-2 rounded-full font-bold text-base sm:text-lg mb-4 sm:mb-6">
                ¡Oportunidad Única!
              </div>
              
              <h4 className="text-xl sm:text-2xl font-bold mb-4" style={{lineHeight: '1.1'}}>
                Prueba completa con análisis + Material de ejercicios
              </h4>
              
              {/* Price */}
              <div className="mb-4 sm:mb-6">
                <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2 flex-wrap">
                  <span className="text-2xl sm:text-3xl font-bold text-secondary">$10,00</span>
                  <span className="bg-destructive text-destructive-foreground px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold">
                    36% OFF
                  </span>
                </div>
                <p className="text-muted-foreground line-through text-sm sm:text-base">Precio regular: $27,50</p>
              </div>
              
              {/* Urgency Message */}
              <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6 text-destructive">
                <span className="font-semibold text-sm sm:text-base">Esta oferta expira pronto</span>
              </div>
              
              {/* CTA Button - Now redirects to Kiwify */}
              <a 
                href="https://pay.kiwify.com/O6nCmTA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full sm:w-auto bg-neuro-green hover:bg-neuro-green-dark text-white font-bold py-4 px-8 sm:px-12 rounded-full text-lg sm:text-xl transform transition-all duration-300 hover:scale-105 shadow-lg animate-pulse-glow mb-4 text-center no-underline"
              >
                ¡Ver Oportunidad Única!
              </a>
              
              <p className="text-xs sm:text-sm text-muted-foreground" style={{lineHeight: '1.1'}}>
                Acceso inmediato • Garantía de 7 días • Sin suscripciones
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VSLSection;
