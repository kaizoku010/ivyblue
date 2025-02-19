
import { Bot, Brain, LineChart, Shield } from "lucide-react";

export const AICapabilities = () => {
  return (
    <section className="section-padding bg-primary-light/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 heading-gradient">
          AI-Powered Capabilities
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex gap-4">
              <Brain className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Predictive Analytics</h3>
                <p className="text-secondary-foreground">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <LineChart className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Performance Tracking</h3>
                <p className="text-secondary-foreground">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <Bot className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Automated Assistance</h3>
                <p className="text-secondary-foreground">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <Shield className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Smart Security</h3>
                <p className="text-secondary-foreground">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem                </p>
              </div>
            </div>
          </div>
          
          <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-primary opacity-10" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="glass-card p-8 rounded-xl max-w-sm">
                <h4 className="text-lg font-semibold mb-4">AI Performance Prediction</h4>
                <div className="space-y-4">
                  <div className="h-2 bg-primary/20 rounded-full">
                    <div className="h-2 bg-primary rounded-full w-3/4" />
                  </div>
                  <div className="h-2 bg-primary/20 rounded-full">
                    <div className="h-2 bg-primary rounded-full w-1/2" />
                  </div>
                  <div className="h-2 bg-primary/20 rounded-full">
                    <div className="h-2 bg-primary rounded-full w-5/6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
