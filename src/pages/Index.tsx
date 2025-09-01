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
  const [showAdditionalContent, setShowAdditionalContent] = useState(false);

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
      <div className={`transition-all duration-1000 ${showAdditionalContent ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
        
        {/* Offer Section */}
        <div className="-mt-44 sm:mt-8 relative z-10 max-w-2xl mx-auto px-4">
          <div className="bg-card rounded-lg p-6 lg:p-8 shadow-lg bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20">
            <div className="text-center">
              {/* Opportunity Badge */}
              <div className="inline-block bg-primary text-primary-foreground px-4 sm:px-6 py-2 rounded-full font-bold text-base sm:text-lg mb-4 sm:mb-6">
                Unique Opportunity!
              </div>
              
              <h4 className="text-xl sm:text-2xl font-bold mb-4" style={{lineHeight: '1.1'}}>
                Complete test with analysis + Exercise material
              </h4>
              
              {/* Price */}
              <div className="mb-4 sm:mb-6">
                <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2 flex-wrap">
                  <span className="text-2xl sm:text-3xl font-bold text-secondary">$10.00</span>
                  <span className="bg-destructive text-destructive-foreground px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold">
                    36% OFF
                  </span>
                </div>
                <p className="text-muted-foreground line-through text-sm sm:text-base">Regular price: $27.50</p>
              </div>
              
              {/* Urgency Message */}
              <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6 text-destructive">
                <span className="font-semibold text-sm sm:text-base">This offer expires soon</span>
              </div>
              
              {/* CTA Button - Now redirects to Kiwify */}
              <a 
                href="https://pay.kiwify.com/O6nCmTA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full sm:w-auto bg-neuro-green hover:bg-neuro-green-dark text-white font-bold py-4 px-8 sm:px-12 rounded-full text-lg sm:text-xl transform transition-all duration-300 hover:scale-105 shadow-lg animate-pulse-glow mb-4 text-center no-underline"
              >
                See Unique Opportunity!
              </a>
              
              <p className="text-xs sm:text-sm text-muted-foreground" style={{lineHeight: '1.1'}}>
                Instant access • 7-day guarantee • No subscriptions
              </p>
            </div>
          </div>
        </div>
        
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
              Ready to transform your mind?
            </h4>
            <p className="text-lg mb-8 opacity-80">
              Join thousands of people who have already improved their mental performance
            </p>
            <a 
              href="https://pay.kiwify.com/O6nCmTA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold py-4 px-12 rounded-full text-xl transform transition-all duration-300 hover:scale-105 no-underline"
            >
              Start Now - $10.00
            </a>
            <p className="text-sm mt-4 opacity-60">
              7-day guarantee • One-time payment • Instant access
            </p>
          </div>
        </footer>

        {/* Disclaimer / Compliance */}
        <div className="py-4 px-4 bg-muted/20 border-t border-border/50">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-xs text-muted-foreground/80 space-y-1 leading-tight">
              <p className="font-medium text-xs mb-2">IMPORTANT NOTICE</p>
              
              <p>
                <span className="font-medium">Commercial Purpose:</span> This site has commercial and advertising purposes to promote NeuroActive. 
                <span className="font-medium ml-2">Variable Results:</span> Results may vary from person to person and the same results shown are not guaranteed.
              </p>
              
              <p>
                The testimonials, videos and content presented may be fictitious, dramatizations or generated by artificial intelligence for illustrative and commercial purposes. 
                Use of this program is at your own responsibility.
              </p>
              
              <p className="text-xs opacity-60 mt-2">
                © 2024 NeuroActive. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;