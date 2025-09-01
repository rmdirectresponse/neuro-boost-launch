import { useEffect, useState } from "react";

const PerformanceScale = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`py-12 px-4 transition-opacity duration-800 ${visible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="max-w-4xl mx-auto">
        <h3 className="neuro-subheadline text-center mb-8">
          Mental Performance Scale
        </h3>
        
        <div className="neuro-card">
          {/* Performance Bar */}
          <div className="relative mb-8">
            <div className="h-8 gradient-performance rounded-full"></div>
            
            {/* Labels */}
            <div className="flex justify-between mt-3 text-sm font-semibold">
              <span className="text-destructive">Low</span>
              <span className="text-yellow-600">Medium</span>
              <span className="text-secondary">High</span>
            </div>
            
            {/* Marker Position */}
            <div className="absolute -top-12 left-12 transform -translate-x-1/2">
              <div className="bg-foreground text-background px-3 py-1 rounded-lg text-sm font-semibold relative">
                You are here
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-foreground"></div>
              </div>
              {/* Stylized Arrow */}
              <div className="flex justify-center mt-1">
                <svg className="w-4 h-8 text-foreground" viewBox="0 0 24 48" fill="currentColor">
                  <path d="M12 2 L12 40 M12 40 L8 36 M12 40 L16 36" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  <circle cx="12" cy="44" r="3" fill="currentColor"/>
                </svg>
              </div>
            </div>
          </div>
          
          <div className="text-center space-y-4">
            <p className="neuro-body text-muted-foreground">
              Your current score places you at the <strong className="text-destructive">Low</strong> level of mental performance.
            </p>
            <p className="neuro-body text-muted-foreground">
              With the NeuroActive program, you can significantly improve your position on this scale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceScale;