import { useEffect, useState } from "react";

const ImprovementProjection = () => {
  const [visible, setVisible] = useState(false);
  const [animateProgress, setAnimateProgress] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
      setTimeout(() => {
        setAnimateProgress(true);
      }, 600);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  const progressData = [
    { days: 7, label: "Inicio del Protocolo", progress: 25, color: "bg-yellow-500" },
    { days: 14, label: "Continuando", progress: 60, color: "bg-orange-500" },
    { days: 21, label: "Continuando", progress: 90, color: "bg-secondary" }
  ];

  return (
    <section className={`py-12 px-4 transition-opacity duration-800 ${visible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="max-w-6xl mx-auto">
        <h3 className="neuro-headline text-center mb-4">
          Después del material NeuroActive:
        </h3>
        
        <p className="text-center neuro-body text-muted-foreground mb-12">
          Proyección de mejora con el programa de ejercicios mentales
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {progressData.map((item, index) => (
            <div key={index} className="neuro-card text-center">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <span className="text-2xl font-bold text-primary">{item.days}</span>
                </div>
                <h4 className="text-xl font-bold mb-2">{item.days} días</h4>
                <p className="text-muted-foreground">{item.label}</p>
              </div>
              
              {/* Progress Bar */}
              <div className="space-y-3">
                <div className="h-6 bg-muted rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${item.color} transition-all duration-2000 ease-out`}
                    style={{ 
                      width: animateProgress ? `${item.progress}%` : '0%',
                      transitionDelay: `${index * 200}ms`
                    }}
                  ></div>
                </div>
                <p className="text-sm font-semibold text-muted-foreground">
                  {item.progress}% mejora
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-secondary/10 px-6 py-3 rounded-full">
            <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
            <span className="font-semibold text-secondary">
              Resultados basados en estudios clínicos
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImprovementProjection;