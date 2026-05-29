import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import countertopsImg from "@/assets/countertops.jpg";

const Countertops = () => {
  const benefits = [
    "Stunning selection of quartz, granite, marble, and quartzite",
    "Extremely durable, scratch-resistant, and heat-resistant surfaces",
    "Non-porous options that resist stains and bacteria",
    "Custom edge profiles to match your kitchen's style",
    "Professional laser-template measurement and seamless installation",
    "Easy to clean and maintain for decades"
  ];

  const questions = [
    "Will it stain easily with coffee or oil?",
    "How much heat resistance do I actually need?",
    "Do I want zero maintenance or am I okay sealing it regularly?",
    "How will it age after 5–10 years?"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-32 pb-20 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Premium <span className="text-blue-600">Kitchen Countertops</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Experience the ultimate blend of beauty and durability. Our premium countertops offer incredible resilience, a smooth finish, and a luxurious feel for your Texas kitchen.
            </p>
            <div className="flex gap-4 pt-4">
              <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6">
                <Link to="/contact">Get a Free Estimate</Link>
              </Button>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
            <img 
              src={countertopsImg} 
              alt="Premium Kitchen Countertops" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-24 flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Why Premium Countertops?</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">The Smart Choice for Texas Kitchens</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center justify-center">
            <div className="flex flex-col gap-6 justify-center order-2 md:order-1">
              <p className="text-slate-600 leading-relaxed text-lg">
                Because countertops are the workhorse of the kitchen, choosing the right material is essential. Our premium quartz and granite options provide a non-porous, highly durable surface that resists stains, heat, and scratches while looking absolutely stunning.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-green-500 shrink-0" />
                    <span className="text-slate-700 font-medium text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-lg aspect-[4/3] w-full order-1 md:order-2">
               <img 
                src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800" 
                alt="Countertop Installation Details" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Material Selection Guidance Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4 text-center">Choosing the Right Material</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">Performance Over Appearances</h3>
            
            <div className="bg-white rounded-3xl shadow-lg p-10 md:p-14 flex flex-col gap-6">
              <p className="text-slate-700 text-lg leading-relaxed">
                Quartz, granite, marble, butcher block—most homeowners choose based on appearance.<br />
                But <span className="font-bold text-slate-900">performance matters more</span>.
              </p>
              
              <p className="text-slate-700 text-lg leading-relaxed">
                Ask these questions before choosing:
              </p>
              
              <ul className="space-y-3 pl-2">
                {questions.map((q, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-700 text-lg">
                    <span className="text-blue-600 font-bold mt-0.5">•</span>
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
              
              <p className="text-slate-700 text-lg leading-relaxed mt-4">
                For most busy households, engineered quartz offers the best balance of durability and maintenance—but the right choice depends on lifestyle, not trends.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center gap-8">
          <h2 className="text-4xl font-bold">Ready for a Premium Countertop Upgrade?</h2>
          <p className="text-slate-300 text-lg">
            Let Asha Interiors install a beautiful, durable countertop in your Houston, Dallas, or San Antonio kitchen.
          </p>
          <Button asChild size="lg" className="bg-blue-600 text-white hover:bg-blue-700 rounded-full px-10 py-8 text-xl">
            <a href="tel:2819326994" className="flex items-center gap-3">
              <Phone className="h-6 w-6" />
              Call (281) 932-6994
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Countertops;