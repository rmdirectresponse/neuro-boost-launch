import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Lucía Martínez",
      image: "/lovable-uploads/b9262d67-fbd7-4c14-acd6-6051935aa03c.png",
      text: "After using NeuroActive for 3 weeks, I've noticed an incredible improvement in my concentration. Now I can work for hours without getting distracted. I totally recommend it!",
      rating: 5
    },
    {
      name: "Emily Johnson",
      image: "/lovable-uploads/3f012877-9159-4152-a531-0c78e32bedd3.png",
      text: "The mental exercises are very easy to follow and they really work. My memory has improved noticeably and I feel more alert throughout the day. Excellent program.",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating 
            ? 'text-yellow-400 fill-yellow-400' 
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h3 className="neuro-headline text-center mb-12">
          What our users say
        </h3>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="neuro-testimonial-card">
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                />
                <div className="flex-1">
                  <h4 className="font-bold text-lg mb-1">{testimonial.name}</h4>
                  <div className="flex gap-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>
              
              <p className="neuro-body text-muted-foreground leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="mt-4 pt-4 border-t border-border">
                <span className="text-sm text-secondary font-semibold">
                  ✓ Verified User
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-secondary/10 px-6 py-3 rounded-full">
            <div className="flex">
              {renderStars(5)}
            </div>
            <span className="font-semibold text-secondary ml-2">
              4.9/5 based on +1,200 reviews
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;