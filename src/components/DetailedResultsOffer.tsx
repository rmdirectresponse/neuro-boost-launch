import { Lock, Clock } from "lucide-react";

const DetailedResultsOffer = () => {
  return (
    <section className="py-12 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h3 className="neuro-headline text-center mb-8">
          Sus resultados de memoria y concentración
        </h3>
        
        {/* Blurred Results Preview */}
        <div className="relative mb-8">
          <div className="neuro-card">
            <div className="relative">
              {/* Simulated blurred chart */}
              <div className="h-64 bg-gradient-to-br from-muted to-muted/50 rounded-lg flex items-center justify-center blur-sm">
                <div className="space-y-4 w-full max-w-md">
                  <div className="h-4 bg-primary/30 rounded w-3/4"></div>
                  <div className="h-4 bg-secondary/30 rounded w-full"></div>
                  <div className="h-4 bg-accent/30 rounded w-1/2"></div>
                  <div className="h-8 bg-primary/20 rounded w-2/3"></div>
                </div>
              </div>
              
              {/* Lock Overlay */}
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center rounded-lg">
                <div className="text-center bg-white/95 p-6 rounded-xl shadow-lg">
                  <Lock className="w-12 h-12 text-primary mx-auto mb-3" />
                  <h4 className="text-xl font-bold mb-2">Resultados Detallados</h4>
                  <p className="text-muted-foreground">Desbloqueados con el material completo</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mb-8">
          <p className="neuro-subheadline mb-4">
            Obtenga aquí su material y el resultado detallado de la prueba.
          </p>
          <p className="text-primary font-bold text-lg mb-6">
            ¡Oferta por tiempo limitado!
          </p>
        </div>

        {/* Offer Box */}
        <div className="neuro-card bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20">
          <div className="text-center">
            {/* Opportunity Badge */}
            <div className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-full font-bold text-lg mb-6">
              ¡Oportunidad Única!
            </div>
            
            <h4 className="text-2xl font-bold mb-4">
              Prueba completa con análisis + Material de ejercicios
            </h4>
            
            {/* Price */}
            <div className="mb-6">
              <div className="flex items-center justify-center gap-3 mb-2">
                <span className="text-3xl font-bold text-secondary">$10,00</span>
                <span className="bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-sm font-bold">
                  20% OFF
                </span>
              </div>
              <p className="text-muted-foreground line-through">Precio regular: $12,50</p>
            </div>
            
            {/* Urgency Timer */}
            <div className="flex items-center justify-center gap-2 mb-6 text-destructive">
              <Clock className="w-5 h-5" />
              <span className="font-semibold">Esta oferta expira pronto</span>
            </div>
            
            {/* CTA Button */}
            <button className="neuro-cta-primary text-xl px-12 py-4 mb-4 animate-pulse-glow">
              ¡Adquirir ahora!
            </button>
            
            <p className="text-sm text-muted-foreground">
              Acceso inmediato • Garantía de 7 días • Sin suscripciones
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailedResultsOffer;