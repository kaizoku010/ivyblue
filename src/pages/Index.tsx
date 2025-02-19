
import { Layout } from 'antd';
import { Header } from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { UserSegments } from "@/components/landing/UserSegments";
import { AICapabilities } from "@/components/landing/AICapabilities";
import { StatsSection } from "@/components/landing/StatsSection";
import { CTASection } from "@/components/landing/CTASection";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <Layout>
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <FeaturesSection />
        <UserSegments />
        <AICapabilities />
        <StatsSection />
        <CTASection />
        <Footer />
      </main>
    </Layout>
  );
};

export default Index;
