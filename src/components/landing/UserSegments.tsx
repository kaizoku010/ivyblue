
import { GraduationCap, School, Users2 } from "lucide-react";

const segments = [
  {
    icon: School,
    title: "Totam rem aperiam",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem ",
  },
  {
    icon: GraduationCap,
    title: "Totam rem aperiam",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem ",
  },
  {
    icon: Users2,
    title: "Totam rem aperiam",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem ",
  },
];

export const UserSegments = () => {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 heading-gradient">
          Tailored for Everyone
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {segments.map((segment, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl border border-primary/10 hover:border-primary/30 transition-colors"
            >
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary-light mb-6">
                <segment.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{segment.title}</h3>
              <p className="text-secondary-foreground">{segment.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
