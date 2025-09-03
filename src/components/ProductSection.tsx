const ProductSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-muted/30 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Product Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img
                src="/lovable-uploads/4914a83b-1e4b-4663-ba59-62d422b77dc1.png"
                alt="NeuroActive Mental Exercise Program"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              
              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-full font-bold shadow-lg animate-pulse-glow">
                NEW!
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
            
            {/* Offer Section */}
            <div className="text-center lg:text-left">
              <div className="bg-card rounded-lg p-6 lg:p-8 shadow-lg bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20">
                <div className="text-center">
                  {/* Opportunity Badge */}
                  <div className="inline-block bg-primary text-primary-foreground px-4 sm:px-6 py-2 rounded-full font-bold text-base sm:text-lg mb-4 sm:mb-6">
                    ¡Oportunidad Única!
                  </div>
                  
                  <h4 className="text-xl sm:text-2xl font-bold mb-4" style={{lineHeight: '1.1'}}>
                    Test completo con análisis + Material de ejercicios
                  </h4>
                  
                  {/* Price */}
                  <div className="mb-4 sm:mb-6">
                    <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2 flex-wrap">
                      <span className="text-2xl sm:text-3xl font-bold text-secondary">$10.00</span>
                      <span className="bg-destructive text-destructive-foreground px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold">
                        73% OFF
                      </span>
                    </div>
                    <p className="text-muted-foreground line-through text-sm sm:text-base">Precio regular: $37.50</p>
                  </div>
                  
                  {/* Urgency Message */}
                  <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6 text-destructive">
                    <span className="font-semibold text-sm sm:text-base">Esta oferta expira pronto</span>
                  </div>
                  
                  {/* CTA Button */}
                  <a 
                    href="https://pay.kiwify.com/O6nCmTA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full sm:w-auto bg-neuro-green hover:bg-neuro-green-dark text-white font-bold py-4 px-8 sm:px-12 rounded-full text-lg sm:text-xl transform transition-all duration-300 hover:scale-105 shadow-lg animate-pulse-glow mb-4 text-center no-underline"
                  >
                    ¡Ver Oportunidad Única!
                  </a>
                  
                  <p className="text-xs sm:text-sm text-muted-foreground" style={{lineHeight: '1.1'}}>
                    Acceso instantáneo • Garantía de 7 días • Sin suscripciones
                  </p>
                </div>
              </div>
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
            <div className="text-sm text-muted-foreground">Días del Programa</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">7</div>
            <div className="text-sm text-muted-foreground">Días de Garantía</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;