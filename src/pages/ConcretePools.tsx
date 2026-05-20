"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import concretePoolImg from "@/assets/concrete-pool.jpg";

const ConcretePools = () => {
  const benefits = [
    "Limitless customization in size, shape, and depth",
    "Maximum durability and structural longevity",
    "Premium finishes (plaster, pebble, tile, stone)",
    "Integrate advanced water features and spas easily",
    "Ideal for complex landscaping and luxury designs",
    "Increases home value significantly"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-32 pb-20 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Luxury <span className="text-blue-600">Concrete</span> Pools
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              When you want complete freedom of design, a custom concrete (gunite or shotcrete) pool is the answer. Create a true architectural masterpiece in your Houston, Dallas, or San Antonio home.
            </p>
            <div className="flex gap-4 pt-4">
              <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6">
                <Link to="/contact">Get a Free Estimate</Link>
              </Button>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
            <img 
              src={concretePoolImg} 
              alt="Custom Concrete Pool" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Why Concrete?</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">The Ultimate in Luxury and Design</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-3xl overflow-hidden shadow-lg h-full">
               <img 
                src="https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&q=80&w=800" 
                alt="Luxury Concrete Pool Details" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-6">
              <p className="text-slate-600 leading-relaxed text-lg">
                Concrete pools are built on-site, starting with a robust steel framework. This allows our design team to create any shape, add zero-entry beaches, infinity edges, built-in bars, and custom spas. Finished with premium pebble or tile, a concrete pool is a permanent, high-end upgrade to your property.
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
          </div>
        </div>
      </section>

      <section className="py-24 bg-blue-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center gap-8">
          <h2 className="text-4xl font-bold">Build Your Masterpiece</h2>
          <p className="text-blue-100 text-lg">
            Speak with our custom concrete pool designers to start planning your perfect outdoor sanctuary.
          </p>
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-slate-100 rounded-full px-10 py-8 text-xl">
            <a href="tel:6479655067" className="flex items-center gap-3">
              <Phone className="h-6 w-6" />
              Call (647) 965-5067
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ConcretePools;