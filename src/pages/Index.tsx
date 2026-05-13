import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MiniCalendar from "@/components/MiniCalendar";
import Categories from "@/components/Categories";
import EventWidgets from "@/components/EventWidgets";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-golos">
      <Header />

      {/* Hero + Calendar row */}
      <div className="relative">
        <Hero />
        {/* Floating calendar — right side, desktop only */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:block z-20">
          <MiniCalendar />
        </div>
      </div>

      {/* Mobile calendar */}
      <div className="xl:hidden bg-gray-50 border-b border-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-4 flex justify-center">
          <MiniCalendar />
        </div>
      </div>

      <Categories />
      <EventWidgets />
      <Services />
      <Footer />
    </div>
  );
};

export default Index;
