
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const CTASection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-secondary to-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 heading-gradient">
          Ready to Transform Your Business
        </h2>
        <p className="text-lg text-secondary-foreground mb-12 max-w-2xl mx-auto">
        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit        </p>
        <Link to="/features">
        <Button size="lg" className="bg-primary hover:bg-primary-dark text-white px-8">
          Get Started Today
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        </Link>
      </div>
    </section>
  );
};
