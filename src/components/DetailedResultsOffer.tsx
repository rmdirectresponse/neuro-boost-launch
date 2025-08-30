import { Lock, Clock } from "lucide-react";

const DetailedResultsOffer = () => {
  return (
    <section className="py-8 sm:py-12 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 px-2" style={{lineHeight: '1.1'}}>
          Sus resultados de memoria y concentración
        </h3>
        
        {/* Blurred Results Preview */}
        <div className="relative mb-6 sm:mb-8 px-2 sm:px-0">
          <div className="bg-card rounded-lg p-4 sm:p-6 lg:p-8 shadow-lg">
            <div className="relative">
              {/* Simulated blurred chart */}
              <div className="h-48 sm:h-64 bg-gradient-to-br from-muted to-muted/50 rounded-lg flex items-center justify-center blur-sm">
                <div className="space-y-3 sm:space-y-4 w-full max-w-md px-4">
                  <div className="h-3 sm:h-4 bg-primary/30 rounded w-3/4"></div>
                  <div className="h-3 sm:h-4 bg-secondary/30 rounded w-full"></div>
                  <div className="h-3 sm:h-4 bg-accent/30 rounded w-1/2"></div>
                  <div className="h-6 sm:h-8 bg-primary/20 rounded w-2/3"></div>
                </div>
              </div>
              
              {/* Lock Overlay */}
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center rounded-lg p-4">
                <div className="text-center bg-white/95 p-4 sm:p-6 rounded-xl shadow-lg max-w-sm">
                  <Lock className="w-8 sm:w-12 h-8 sm:h-12 text-primary mx-auto mb-2 sm:mb-3" />
                  <h4 className="text-lg sm:text-xl font-bold mb-2">Resultados Detallados</h4>
                  <p className="text-muted-foreground text-sm sm:text-base">Desbloqueados con el material completo</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mb-6 sm:mb-8 px-2">
          <p className="text-lg sm:text-xl mb-4" style={{lineHeight: '1.1'}}>
            Obtenga aquí su material y el resultado detallado de la prueba.
          </p>
          <p className="text-primary font-bold text-base sm:text-lg mb-4 sm:mb-6" style={{lineHeight: '1.1'}}>
            ¡Oferta por tiempo limitado!
          </p>
        </div>

        {/* Offer Box */}
        <div className="bg-card rounded-lg p-4 sm:p-6 lg:p-8 shadow-lg bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20 mx-2 sm:mx-0">
          <div className="text-center">
            {/* Opportunity Badge */}
            <div className="inline-block bg-primary text-primary-foreground px-4 sm:px-6 py-2 rounded-full font-bold text-base sm:text-lg mb-4 sm:mb-6">
              ¡Oportunidad Única!
            </div>
            
            <h4 className="text-xl sm:text-2xl font-bold mb-4 px-2" style={{lineHeight: '1.1'}}>
              Prueba completa con análisis + Material de ejercicios
            </h4>
            
            {/* Price */}
            <div className="mb-4 sm:mb-6">
              <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2 flex-wrap">
                <span className="text-2xl sm:text-3xl font-bold text-secondary">$10,00</span>
                <span className="bg-destructive text-destructive-foreground px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold">
                  36% OFF
                </span>
              </div>
              <p className="text-muted-foreground line-through text-sm sm:text-base">Precio regular: $27,50</p>
            </div>
            
            {/* Urgency Timer */}
            <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6 text-destructive">
              <Clock className="w-4 sm:w-5 h-4 sm:h-5" />
              <span className="font-semibold text-sm sm:text-base">Esta oferta expira pronto</span>
            </div>
            
            {/* CTA Button */}
            <button className="w-full sm:w-auto bg-neuro-green hover:bg-neuro-green-dark text-white font-bold py-4 px-8 sm:px-12 rounded-full text-lg sm:text-xl transform transition-all duration-300 hover:scale-105 shadow-lg animate-pulse-glow mb-4">
              ¡Adquirir ahora!
            </button>
            
            <p className="text-xs sm:text-sm text-muted-foreground px-2" style={{lineHeight: '1.1'}}>
              Acceso inmediato • Garantía de 7 días • Sin suscripciones
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailedResultsOffer;