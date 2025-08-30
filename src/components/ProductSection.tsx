import productMockup from "@/assets/product-mockup.jpg";

const ProductSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-muted/30 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Product Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img
                src={productMockup}
                alt="Programa de Ejercicios Mentales NeuroActivo"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              
              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-full font-bold shadow-lg animate-pulse-glow">
                ¡NUEVO!
              </div>
            </div>
          </div>
          
          {/* Right Column - Product Details */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <div className="mb-8">
              <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full font-semibold mb-4">
                Método Científicamente Comprobado
              </span>
              
              <h3 className="neuro-headline mb-6">
                <span className="text-gradient-neuro">PROGRAMA DE</span><br />
                <span className="text-foreground">EJERCICIOS MENTALES</span>
              </h3>
              
              <p className="neuro-body text-muted-foreground mb-8 leading-relaxed">
                Método revolucionario desarrollado por neurocientíficos para optimizar 
                tu rendimiento cognitivo en solo 21 días. Ejercicios específicos que 
                fortalecen la memoria, concentración y agilidad mental.
              </p>
            </div>
            
            {/* Key Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="neuro-body font-semibold">+100 ejercicios interactivos</span>
              </div>
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span className="neuro-body font-semibold">Seguimiento de progreso en tiempo real</span>
              </div>
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="neuro-body font-semibold">Resultados visibles en 7 días</span>
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="text-center lg:text-left">
              <button className="neuro-cta-primary text-xl px-12 py-4 mb-4">
                Acceder al Programa Completo
              </button>
              <p className="text-sm text-muted-foreground">
                Pago único • Sin mensualidades • Acceso inmediato
              </p>
            </div>
          </div>
        </div>
        
        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">10K+</div>
            <div className="text-sm text-muted-foreground">Usuarios Activos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary mb-2">97%</div>
            <div className="text-sm text-muted-foreground">Satisfacción</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">21</div>
            <div className="text-sm text-muted-foreground">Días de Programa</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">7</div>
            <div className="text-sm text-muted-foreground">Días Garantía</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;