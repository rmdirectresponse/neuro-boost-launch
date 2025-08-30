import { useEffect, useState } from "react";
import drJoseImage from "@/assets/dr-jose.jpg";

interface VSLSectionProps {
  onVideoComplete: () => void;
}

const VSLSection = ({ onVideoComplete }: VSLSectionProps) => {
  const [videoTime, setVideoTime] = useState(0);

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
          <span className="text-neuro-blue">Diagnóstico</span>
        </h2>
        
        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 px-2" style={{lineHeight: '1.1'}}>
          ¡Haz clic en el video de abajo!
        </p>
        
        {/* Video Container */}
        <div className="relative max-w-3xl mx-auto px-2 sm:px-0">
          <div dangerouslySetInnerHTML={{
            __html: `
              <vturb-smartplayer id="vid-68b2581b2a3de119c45c2154" style="display: block; margin: 0 auto; width: 100%;"></vturb-smartplayer>
              <script type="text/javascript">
                var s=document.createElement("script"); 
                s.src="https://scripts.converteai.net/1a6f3b4b-51fd-49a8-b4bb-593f4d735ddc/players/68b2581b2a3de119c45c2154/v4/player.js"; 
                s.async=true;
                document.head.appendChild(s);
              </script>
            `
          }} />
        </div>
        
        {/* Call to Action Button */}
        <div className="mt-8">
          <button className="w-full sm:w-auto bg-neuro-green hover:bg-neuro-green-dark text-white font-bold py-4 px-8 sm:px-12 rounded-full text-lg sm:text-xl transform transition-all duration-300 hover:scale-105 shadow-lg">
            Acceder al Programa Completo
          </button>
          <p className="text-sm text-muted-foreground mt-3" style={{lineHeight: '1.1'}}>
            Acceso inmediato • Resultados personalizados
          </p>
        </div>
      </div>
    </section>
  );
};

export default VSLSection;