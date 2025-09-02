import { useEffect, useState } from "react";
import { Brain } from "lucide-react";

const TestResultsSection = () => {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    // Trigger animation when component becomes visible
    const timer = setTimeout(() => {
      setVisible(true);
      // Start animating progress to 27%
      setTimeout(() => {
        setProgress(27);
      }, 500);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  // Animate the number incrementally
  useEffect(() => {
    if (progress > 0) {
      const duration = 2000; // 2 seconds
      const steps = progress;
      const stepDuration = duration / steps;
      
      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        setAnimatedProgress(currentStep);
        
        if (currentStep >= progress) {
          clearInterval(interval);
        }
      }, stepDuration);
      
      return () => clearInterval(interval);
    }
  }, [progress]);

  return (
    <section className={`py-8 sm:py-12 px-4 transition-opacity duration-800 ${visible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-8 sm:mb-12">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4 px-2" style={{lineHeight: '1.1'}}>
            Your results are ready! Watch Dr. José's video to receive your Diagnosis
          </h3>
        </div>

        {/* Results Box */}
        <div className="bg-card rounded-lg p-4 sm:p-6 lg:p-8 shadow-lg max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
            
            {/* Left Column - Circular Progress */}
            <div className="text-center">
              <div className="relative w-40 sm:w-48 h-40 sm:h-48 mx-auto mb-4">
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
                    <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">{animatedProgress}%</div>
                    <div className="text-xs sm:text-sm text-muted-foreground font-semibold">YOUR SCORE</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Result Status */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="bg-primary/10 p-3 sm:p-4 rounded-full">
                  <Brain className="w-8 sm:w-12 h-8 sm:h-12 text-primary" />
                </div>
                <div>
                  <p className="text-base sm:text-lg font-semibold text-muted-foreground mb-2">Result:</p>
                  <p className="text-2xl sm:text-3xl font-bold text-destructive">Poor</p>
                </div>
              </div>
              
              <div className="space-y-2 text-muted-foreground text-sm sm:text-base">
                <p style={{lineHeight: '1.1'}}>
                  Your score indicates there are important areas for improvement in your cognitive performance.
                </p>
                <p style={{lineHeight: '1.1'}}>
                  The NeuroActive material is specifically designed to help you improve these results.
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