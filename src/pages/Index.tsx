import { useState } from "react";
import NeuroHeader from "@/components/NeuroHeader";
import VSLSection from "@/components/VSLSection";
import TestResultsSection from "@/components/TestResultsSection";
import PerformanceScale from "@/components/PerformanceScale";
import ImprovementProjection from "@/components/ImprovementProjection";
import DetailedResultsOffer from "@/components/DetailedResultsOffer";
import TestimonialsSection from "@/components/TestimonialsSection";
import BenefitsSection from "@/components/BenefitsSection";
import ProductSection from "@/components/ProductSection";
import GuaranteeSection from "@/components/GuaranteeSection";

const Index = () => {
  const [showAdditionalContent, setShowAdditionalContent] = useState(true);

  const handleVideoComplete = () => {
    setShowAdditionalContent(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header - Always Visible */}
      <NeuroHeader />
      
      {/* VSL Section - Always Visible */}
      <VSLSection onVideoComplete={handleVideoComplete} />
      
      {/* Additional Content - Hidden until 1min11s */}
      <div className={`transition-all duration-1000 ${showAdditionalContent ? 'opacity-100' : 'neuro-hidden'}`}>
        
        {/* Test Results Section */}
        <TestResultsSection />
        
        {/* Performance Scale */}
        <PerformanceScale />
        
        {/* Improvement Projection */}
        <ImprovementProjection />
        
        {/* Detailed Results Offer */}
        <DetailedResultsOffer />
        
        {/* Testimonials */}
        <TestimonialsSection />
        
        {/* Benefits */}
        <BenefitsSection />
        
        {/* Product Section */}
        <ProductSection />
        
        {/* Guarantee */}
        <GuaranteeSection />
        
        {/* Final CTA Footer */}
        <footer className="py-12 px-4 bg-foreground text-background">
          <div className="max-w-4xl mx-auto text-center">
            <h4 className="text-2xl font-bold mb-4">
              ¿Listo para transformar tu mente?
            </h4>
            <p className="text-lg mb-8 opacity-80">
              Únete a miles de personas que ya mejoraron su rendimiento mental
            </p>
            <button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold py-4 px-12 rounded-full text-xl transform transition-all duration-300 hover:scale-105">
              Comenzar Ahora - $10.00
            </button>
            <p className="text-sm mt-4 opacity-60">
              Garantía de 7 días • Pago único • Acceso inmediato
            </p>
          </div>
        </footer>

        {/* Disclaimer / Compliance */}
        <div className="py-8 px-4 bg-muted/30 border-t border-border">
          <div className="max-w-6xl mx-auto text-center">
            <div className="text-xs text-muted-foreground space-y-2 leading-relaxed">
              <p className="font-semibold mb-4">AVISO IMPORTANTE - DISCLAIMER</p>
              
              <p>
                <strong>Finalidad Comercial y Publicitaria:</strong> Este sitio web tiene fines comerciales y publicitarios. 
                El contenido presentado está diseñado para promocionar el programa NeuroActivo y generar ventas del producto.
              </p>
              
              <p>
                <strong>Aviso Médico:</strong> La información, técnicas y ejercicios presentados en este sitio web y en el 
                programa NeuroActivo NO sustituyen el consejo, diagnóstico o tratamiento médico profesional. 
                No constituyen atención médica ni reemplazan la consulta con un profesional de la salud calificado.
              </p>
              
              <p>
                Si tienes alguna condición médica, neurológica o psicológica preexistente, o si estás bajo tratamiento médico, 
                consulta con tu médico antes de participar en cualquier programa de entrenamiento cognitivo. 
                En caso de emergencia médica, busca atención médica inmediata.
              </p>
              
              <p>
                Los resultados pueden variar entre individuos. Los testimonios y resultados mostrados no garantizan 
                que obtendrás los mismos resultados. El uso de este programa es bajo tu propia responsabilidad.
              </p>
              
              <p className="text-xs opacity-70 mt-4">
                © 2024 NeuroActivo. Todos los derechos reservados. Este sitio web y su contenido están protegidos por derechos de autor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;