import { Shield, CheckCircle, RefreshCw } from "lucide-react";

const GuaranteeSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-secondary/5 to-primary/5">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Main Guarantee Badge */}
        <div className="inline-block mb-8">
          <div className="bg-white rounded-full p-6 shadow-xl border-4 border-secondary/20">
            <Shield className="w-16 h-16 text-secondary mx-auto mb-2" />
          </div>
        </div>
        
        <h3 className="neuro-headline mb-6">
          <span className="text-secondary">7-Day</span> Guarantee
        </h3>
        
        <p className="neuro-subheadline text-muted-foreground mb-8">
          Visible results in 4 weeks or money back
        </p>
        
        {/* Guarantee Details */}
        <div className="neuro-card bg-white shadow-xl max-w-2xl mx-auto">
          <div className="space-y-6">
            
            {/* Promise */}
            <div className="flex items-start gap-4">
              <CheckCircle className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
              <div className="text-left">
                <h4 className="font-bold text-lg mb-2">Our Promise</h4>
                <p className="neuro-body text-muted-foreground">
                  If you don't see significant improvements in your memory and concentration 
                  after 4 weeks of consistent use, we'll refund 100% of your money.
                </p>
              </div>
            </div>
            
            {/* Process */}
            <div className="flex items-start gap-4">
              <RefreshCw className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div className="text-left">
                <h4 className="font-bold text-lg mb-2">Simple Process</h4>
                <p className="neuro-body text-muted-foreground">
                  Send an email explaining your experience and we'll process 
                  your full refund in 2-3 business days. No complicated questions.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Risk-Free Message */}
        <div className="mt-12">
          <div className="inline-block bg-secondary/10 px-8 py-4 rounded-full">
            <p className="font-bold text-secondary text-lg">
              💡 Try NeuroActive completely risk-free
            </p>
          </div>
          
          <div className="mt-6">
            <a 
              href="https://pay.kiwify.com/O6nCmTA"
              target="_blank"
              rel="noopener noreferrer"
              className="neuro-cta-primary text-xl px-12 py-4 inline-block"
            >
              Start My Mental Transformation
            </a>
            <p className="text-sm text-muted-foreground mt-3">
              Backed by our unconditional 7-day guarantee
            </p>
          </div>
        </div>
        
        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 pt-8 border-t border-border/50">
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <p className="font-semibold">Secure Payment</p>
            <p className="text-sm text-muted-foreground">SSL 256-bit</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <CheckCircle className="w-6 h-6 text-secondary" />
            </div>
            <p className="font-semibold">No Renewal</p>
            <p className="text-sm text-muted-foreground">One-time payment</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <RefreshCw className="w-6 h-6 text-accent" />
            </div>
            <p className="font-semibold">24/7 Support</p>
            <p className="text-sm text-muted-foreground">Immediate help</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;