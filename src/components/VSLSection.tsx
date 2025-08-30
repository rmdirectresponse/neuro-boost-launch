import { useEffect, useState } from "react";
import drJoseImage from "@/assets/dr-jose.jpg";

interface VSLSectionProps {
  onVideoComplete: () => void;
}

const VSLSection = ({ onVideoComplete }: VSLSectionProps) => {
  const [videoTime, setVideoTime] = useState(0);

  useEffect(() => {
    // Simulate video timer - in real implementation, you'd use actual video events
    const timer = setInterval(() => {
      setVideoTime(prev => {
        const newTime = prev + 1;
        
        // Trigger content reveal at 1min11s (71 seconds)
        if (newTime === 71) {
          onVideoComplete();
        }
        
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [onVideoComplete]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <section className="bg-background py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Headline */}
        <h2 className="neuro-headline mb-6">
          ¡Tus resultados ya están listos! Mira el video del Dr. José para recibir tu{" "}
          <span className="text-neuro-blue">Diagnóstico</span>
        </h2>
        
        {/* Subheadline */}
        <p className="neuro-subheadline text-muted-foreground mb-8">
          ¡Haz clic en el video de abajo!
        </p>
        
        {/* Video Container */}
        <div className="relative max-w-3xl mx-auto">
          <div className="relative bg-black rounded-lg overflow-hidden border-b-4 border-red-500 aspect-video">
            {/* Video Placeholder with Dr. José image */}
            <div className="absolute inset-0 bg-black flex items-center justify-center">
              <img 
                src={drJoseImage} 
                alt="Dr. José" 
                className="w-full h-full object-cover"
              />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <button className="bg-white/90 hover:bg-white rounded-full p-6 transition-all duration-300 hover:scale-110">
                  <div className="w-0 h-0 border-l-[20px] border-l-primary border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
                </button>
              </div>
            </div>
            
            {/* Material Exclusivo Label */}
            <div className="absolute top-4 left-4 bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg font-semibold">
              MATERIAL EXCLUSIVO DE
            </div>
            
            {/* Video Timer (for demo purposes) */}
            <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded text-sm">
              {formatTime(videoTime)} / 5:30
            </div>
          </div>
        </div>
        
        {/* Progress indicator */}
        <div className="mt-6 max-w-3xl mx-auto">
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary transition-all duration-1000 ease-out"
              style={{ width: `${Math.min((videoTime / 330) * 100, 100)}%` }}
            ></div>
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            Las secciones adicionales aparecerán después de 1:11 minutos
          </p>
        </div>
      </div>
    </section>
  );
};

export default VSLSection;