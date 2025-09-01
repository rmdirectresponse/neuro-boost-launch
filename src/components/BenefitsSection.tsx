import { Check, Brain, TrendingUp, Target, Smartphone, BarChart3, User } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Brain,
      title: "Personalized daily exercises",
      description: "Routines adapted to your current cognitive level for maximum effectiveness"
    },
    {
      icon: TrendingUp,
      title: "Progressive mental training",
      description: "Programs that gradually increase in difficulty to ensure continuous improvement"
    },
    {
      icon: BarChart3,
      title: "Real-time progress tracking",
      description: "Detailed metrics of your evolution with easy-to-understand charts"
    },
    {
      icon: Smartphone,
      title: "Multi-platform access ease",
      description: "Train from any device: mobile, tablet or computer"
    },
    {
      icon: Target,
      title: "Detailed skills assessment",
      description: "Complete analysis of memory, attention, speed and mental flexibility"
    },
    {
      icon: User,
      title: "Personalized cognitive profile",
      description: "Unique plan based on your strengths and specific areas for improvement"
    }
  ];

  return (
    <section className="py-12 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h3 className="neuro-headline text-center mb-4">
          Your plan highlights
        </h3>
        
        <p className="text-center neuro-body text-muted-foreground mb-12">
          Everything included in your personalized NeuroActive program
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="relative group">
              <div className="neuro-card h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                {/* Icon with Check Background */}
                <div className="relative mb-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  {/* Check Icon */}
                  <div className="absolute -top-2 -right-2 bg-secondary w-8 h-8 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-secondary-foreground" />
                  </div>
                </div>
                
                <h4 className="text-lg font-bold mb-3 text-foreground">
                  {benefit.title}
                </h4>
                
                <p className="neuro-body text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-block neuro-card bg-gradient-to-r from-primary/5 to-secondary/5">
            <p className="neuro-body font-semibold text-primary mb-2">
              + Lifetime access
            </p>
            <p className="text-sm text-muted-foreground">
              One purchase, permanent benefits
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;