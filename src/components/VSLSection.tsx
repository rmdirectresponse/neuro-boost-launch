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
    <section className="bg-background py-8 sm:py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Headline */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-4 sm:mb-6 px-2">
          ¡Tus resultados ya están listos! Mira el video del Dr. José para recibir tu{" "}
          <span className="text-neuro-blue">Diagnóstico</span>
        </h2>
        
        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 px-2">
          ¡Haz clic en el video de abajo!
        </p>
        
        {/* Video Container */}
        <div className="relative max-w-3xl mx-auto px-2 sm:px-0">
          <div className="relative bg-black rounded-lg overflow-hidden border-b-4 border-red-500 aspect-video shadow-lg">
            {/* Video Placeholder with Dr. José image */}
            <div className="absolute inset-0 bg-black flex items-center justify-center">
              <img 
                src={drJoseImage} 
                alt="Dr. José" 
                className="w-full h-full object-cover"
              />
              
               {/* Play Button Overlay */}
               <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                 <button className="bg-white/90 hover:bg-white rounded-full p-4 sm:p-6 transition-all duration-300 hover:scale-110 shadow-lg">
                   <div className="w-0 h-0 border-l-[16px] sm:border-l-[20px] border-l-primary border-t-[10px] sm:border-t-[12px] border-t-transparent border-b-[10px] sm:border-b-[12px] border-b-transparent ml-1"></div>
                 </button>
               </div>
            </div>
            
            {/* Material Exclusivo Label */}
            <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-primary/90 text-primary-foreground px-2 sm:px-4 py-1 sm:py-2 rounded-lg font-semibold text-xs sm:text-sm">
              MATERIAL EXCLUSIVO DE
            </div>
            
            {/* Video Timer (for demo purposes) */}
            <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded text-sm">
              {formatTime(videoTime)} / 5:30
            </div>
          </div>
        </div>
        
        {/* Call to Action Button */}
        <div className="mt-8">
          <button className="w-full sm:w-auto bg-neuro-green hover:bg-neuro-green-dark text-white font-bold py-4 px-8 sm:px-12 rounded-full text-lg sm:text-xl transform transition-all duration-300 hover:scale-105 shadow-lg">
            ¡Ver Mi Diagnóstico Completo!
          </button>
          <p className="text-sm text-muted-foreground mt-3">
            Acceso inmediato • Resultados personalizados
          </p>
        </div>
      </div>
    </section>
  );
};

export default VSLSection;