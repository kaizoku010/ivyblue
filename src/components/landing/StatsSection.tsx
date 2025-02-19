
export const StatsSection = () => {
  return (
    <section className="section-padding bg-primary text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          <div className="space-y-2">
            <h3 className="text-4xl font-bold">98%</h3>
            <p className="text-white/80">User Satisfaction </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-4xl font-bold">500+</h3>
            <p className="text-white/80">Schools Using Platform</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-4xl font-bold">1M+</h3>
            <p className="text-white/80">Students Managed</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-4xl font-bold">24/7</h3>
            <p className="text-white/80">AI Support</p>
          </div>
        </div>
      </div>
    </section>
  );
};
