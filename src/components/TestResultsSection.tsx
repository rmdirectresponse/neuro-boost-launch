import { useEffect, useState } from "react";
import { Brain } from "lucide-react";

const TestResultsSection = () => {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Trigger animation when component becomes visible
    const timer = setTimeout(() => {
      setVisible(true);
      // Animate progress to 27%
      setTimeout(() => {
        setProgress(27);
      }, 500);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`py-12 px-4 transition-opacity duration-800 ${visible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h3 className="neuro-headline text-center mb-4">
            Recibe hoy tu resultado y el material exclusivo con técnicas y ejercicios mentales
          </h3>
        </div>

        {/* Results Box */}
        <div className="neuro-card max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            
            {/* Left Column - Circular Progress */}
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4">
                {/* Background Circle */}
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="hsl(var(--muted))"
                    strokeWidth="8"
                    fill="none"
                  />
                  {/* Progress Circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="hsl(var(--primary))"
                    strokeWidth="8"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={`${progress * 2.51} 251.2`}
                    className="transition-all duration-2000 ease-out"
                  />
                </svg>
                
                {/* Center Text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-1">{progress}%</div>
                    <div className="text-sm text-muted-foreground font-semibold">TU PUNTUACIÓN</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Result Status */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Brain className="w-12 h-12 text-primary" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-muted-foreground mb-2">Resultado:</p>
                  <p className="text-3xl font-bold text-destructive">Malo</p>
                </div>
              </div>
              
              <div className="space-y-3 text-muted-foreground">
                <p className="neuro-body">
                  Tu puntuación indica que hay áreas importantes de mejora en tu rendimiento cognitivo.
                </p>
                <p className="neuro-body">
                  El material NeuroActivo está específicamente diseñado para ayudarte a mejorar estos resultados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestResultsSection;