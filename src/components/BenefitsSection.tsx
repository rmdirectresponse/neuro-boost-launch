import { Check, Brain, TrendingUp, Target, Smartphone, BarChart3, User } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Brain,
      title: "Ejercicios diarios personalizados",
      description: "Rutinas adaptadas a tu nivel cognitivo actual para máxima efectividad"
    },
    {
      icon: TrendingUp,
      title: "Entrenamiento mental progresivo",
      description: "Programas que aumentan gradualmente en dificultad para garantizar mejora continua"
    },
    {
      icon: BarChart3,
      title: "Seguimiento del progreso en tiempo real",
      description: "Métricas detalladas de tu evolución con gráficos fáciles de entender"
    },
    {
      icon: Smartphone,
      title: "Facilidad de acceso multiplataforma",
      description: "Entrena desde cualquier dispositivo: móvil, tablet o computadora"
    },
    {
      icon: Target,
      title: "Evaluación detallada de habilidades",
      description: "Análisis completo de memoria, atención, velocidad y flexibilidad mental"
    },
    {
      icon: User,
      title: "Perfil cognitivo personalizado",
      description: "Plan único basado en tus fortalezas y áreas de mejora específicas"
    }
  ];

  return (
    <section className="py-12 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h3 className="neuro-headline text-center mb-4">
          Destacados de su plan
        </h3>
        
        <p className="text-center neuro-body text-muted-foreground mb-12">
          Todo lo que incluye tu programa NeuroActivo personalizado
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
              + Acceso de por vida
            </p>
            <p className="text-sm text-muted-foreground">
              Una sola compra, beneficios permanentes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;