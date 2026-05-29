"use client";

import { Button } from "@/components/ui/button";
import { Phone, MapPin, ArrowRight, Star, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import heroKitchen from "@/assets/hero-kitchen.jpg";
import cabinetryImg from "@/assets/cabinetry.jpg";
import countertopsImg from "@/assets/countertops.jpg";

const Index = () => {
  const services = [
    {
      title: "Custom Cabinetry",
      description: "Highly customizable, premium wood, soft-close hinges, and beautiful finishes to maximize your kitchen storage and style.",
      image: cabinetryImg,
      link: "/cabinetry"
    },
    {
      title: "Premium Countertops",
      description: "Durable, elegant, and easy to clean. Choose from quartz, granite, marble, and quartzite to elevate your kitchen's aesthetic.",
      image: countertopsImg,
      link: "/countertops"
    },
    {
      title: "Full Kitchen Remodels",
      description: "The ultimate culinary transformation. Complete layout redesigns, custom islands, professional lighting, and luxury appliances.",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800",
      link: "/full-remodels"
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      text: "Asha Interiors transformed our kitchen! Their team was professional, and our new custom cabinets are absolutely gorgeous. Highly recommended in Houston.",
      rating: 5,
    },
    {
      name: "David T.",
      text: "The full kitchen remodel they did for us in Dallas exceeded all our expectations. The custom island and quartz countertops are stunning.",
      rating: 5,
    },
    {
      name: "Jessica R.",
      text: "Great experience from start to finish. They helped us design the perfect kitchen layout for our family in San Antonio. Excellent communication and quality work.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex items-center min-h-[85vh]">
        {/* Background Image & Dark Overlay */}
        <div className="absolute inset-0 z-0 bg-slate-900">
          <img 
            src={heroKitchen} 
            alt="Luxury Custom Kitchen Remodeling Background" 
            className="w-full h-full object-cover opacity-80"
          />
          {/* Gradient that is darker on the left to make text legible, but overall more transparent */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="flex flex-col gap-6 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider w-fit">
              <MapPin className="h-4 w-4 text-blue-400" />
              Serving Houston, Dallas & San Antonio
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-[1.1]">
              Design Your Dream <span className="text-blue-400">Kitchen Oasis</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-slate-200 max-w-xl leading-relaxed mt-2">
              Asha Interiors specializes in custom cabinetry, premium countertops, and full kitchen remodels. Transform your culinary space with Texas's premier kitchen renovators.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6 text-lg shadow-lg shadow-blue-900/20">
                <a href="tel:2819326994" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call (281) 932-6994
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 py-6 text-lg border-2 border-white text-white hover:bg-white hover:text-slate-900 transition-colors bg-transparent">
                <a href="#services" className="flex items-center gap-2">
                  View Services
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
            </div>
            
            <div className="flex items-center gap-4 pt-8">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-200 flex items-center justify-center overflow-hidden shadow-sm">
                    <img src={`https://i.pravatar.cc/150?img=${i + 10}`} alt="Happy Customer" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span className="text-sm font-bold text-white">Hundreds of Happy Texas Families</span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Badge */}
        <div className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-2xl z-20 hidden lg:block border border-white/20">
          <div className="flex items-center gap-4">
            <div className="bg-blue-500/20 p-3 rounded-full">
              <ShieldCheck className="h-6 w-6 text-blue-400" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">Licensed & Insured</p>
              <p className="text-xs text-slate-300">Expert Kitchen Remodelers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="pt-12 pb-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-3">Our Expertise</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Choose Your Perfect Remodel</h3>
            <p className="text-slate-600">We offer premium kitchen remodeling services to fit any home layout, budget, and style preference.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link 
                key={index} 
                to={service.link} 
                className="group relative h-[450px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-end"
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/50 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
                
                {/* Content */}
                <div className="relative z-10 p-8 flex flex-col gap-3 transform transition-transform duration-300 group-hover:-translate-y-2">
                  <h4 className="text-2xl font-bold text-white">{service.title}</h4>
                  <p className="text-slate-300 leading-relaxed text-sm">{service.description}</p>
                  <div className="text-blue-400 font-bold flex items-center gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:gap-3">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=800" alt="Beautiful Texas Kitchen" className="rounded-2xl shadow-lg w-full aspect-square object-cover" />
                <div className="bg-blue-600 p-8 rounded-2xl text-white shadow-lg">
                  <p className="text-4xl font-bold mb-2">100%</p>
                  <p className="text-sm font-medium opacity-80 uppercase tracking-wider">Custom Designs</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-slate-900 p-8 rounded-2xl text-white shadow-lg">
                  <p className="text-4xl font-bold mb-2">3</p>
                  <p className="text-sm font-medium opacity-80 uppercase tracking-wider">Major Texas Cities</p>
                </div>
                <img src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=500" alt="Kitchen Remodeling Process" className="rounded-2xl shadow-lg aspect-square object-cover" />
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex flex-col gap-8">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm">Why Choose Asha Interiors</h2>
            <h3 className="text-4xl font-bold text-slate-900">Texas's Premier Kitchen Remodeling Experts</h3>
            <p className="text-slate-600 leading-relaxed">
              Remodeling your kitchen is a significant investment in your home. At Asha Interiors, we guide you through every step of the process—from initial 3D design to the final cabinet installation. Serving Houston, Dallas, and San Antonio, our commitment to quality craftsmanship ensures a stunning result.
            </p>
            <ul className="space-y-4">
              {[
                "Custom 3D kitchen design and consultation",
                "High-quality materials and premium hardware",
                "Dedicated project managers for your remodel",
                "Transparent pricing and timelines",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="bg-blue-100 p-1 rounded-full mt-1">
                    <ShieldCheck className="h-4 w-4 text-blue-600" />
                  </div>
                  <span className="font-medium text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white rounded-full w-fit px-8 py-6">
              <Link to="/about">About Our Company</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full -mr-32 -mt-32 blur-[100px] opacity-40" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-800 rounded-full -ml-32 -mb-32 blur-[100px] opacity-40" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-4">Testimonials</h2>
            <h3 className="text-3xl md:text-5xl font-bold">What Our Clients Say</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 flex flex-col gap-6 hover:bg-white/10 transition-colors">
                <div className="flex text-yellow-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-slate-300 leading-relaxed text-lg">"{t.text}"</p>
                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/10">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center font-bold text-xl text-white">
                    {t.name[0]}
                  </div>
                  <span className="font-bold text-white">{t.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-blue-50 rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden border border-blue-100">
            <div className="relative z-10 flex flex-col items-center gap-8">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Ready to Transform Your Kitchen?</h2>
              <p className="text-slate-600 text-lg max-w-2xl">
                Contact Asha Interiors today to schedule your free kitchen consultation and start designing the culinary space of your dreams.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-10 py-8 text-xl shadow-xl shadow-blue-900/20">
                  <a href="tel:2819326994" className="flex items-center gap-3">
                    <Phone className="h-6 w-6" />
                    (281) 932-6994
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-10 py-8 text-xl border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white transition-all bg-transparent">
                  <Link to="/contact">Get a Free Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;