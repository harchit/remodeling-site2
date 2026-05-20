import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });
    }, 1500);
  };

  const contactInfo = [
    {
      title: "Service Areas",
      content: "Houston, Dallas, San Antonio (Texas)",
      icon: <MapPin className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Phone Number",
      content: "(647) 965-5067",
      link: "tel:6479655067",
      icon: <Phone className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Email Address",
      content: "info@bluestonepoolconstruction.com",
      link: "mailto:info@bluestonepoolconstruction.com",
      icon: <Mail className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Business Hours",
      content: "Mon - Fri: 8:00 AM - 6:00 PM",
      icon: <Clock className="h-6 w-6 text-blue-600" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Header Section */}
      <section className="pt-32 pb-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/10" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-extrabold mb-6">Contact <span className="text-blue-400">Bluestone</span></h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Ready to build your dream pool? Reach out to our design and construction experts to schedule your consultation in Houston, Dallas, or San Antonio.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-6">
              <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm">Get In Touch</h2>
              <h3 className="text-4xl font-bold text-slate-900">Start Your Backyard Transformation</h3>
              <p className="text-slate-600 leading-relaxed">
                Whether you're interested in a custom vinyl, fiberglass, or concrete pool, our team is ready to answer your questions and provide a detailed estimate.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex flex-col gap-4 p-6 bg-blue-50 rounded-3xl border border-blue-100">
                  <div className="p-3 bg-white rounded-2xl w-fit shadow-sm">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{info.title}</h4>
                    {info.link ? (
                      <a href={info.link} className="text-slate-600 hover:text-blue-600 transition-colors">
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-slate-600">{info.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 mt-auto">
                <h4 className="font-bold text-slate-900 text-lg mb-2">Schedule a Free Consultation</h4>
                <p className="text-slate-600 mb-6">We'll visit your property, discuss your vision, and provide a comprehensive plan for your new pool.</p>
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-6">
                    <a href="tel:6479655067" className="flex items-center justify-center gap-2">
                        <Phone className="h-4 w-4" />
                        Call Now
                    </a>
                </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl border border-slate-100">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center gap-6 py-12">
                <div className="bg-green-100 p-6 rounded-full">
                  <CheckCircle2 className="h-16 w-16 text-green-600" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900">Thank You!</h3>
                <p className="text-slate-600 text-lg max-w-sm">
                  Your inquiry has been sent successfully. One of our pool design specialists will contact you shortly.
                </p>
                <Button 
                  onClick={() => setIsSubmitted(false)}
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-bold text-slate-900">Request a Quote</h3>
                  <p className="text-slate-500">Fill out the form below and we'll be in touch to discuss your project.</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" placeholder="John" required className="rounded-xl py-6" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" placeholder="Doe" required className="rounded-xl py-6" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="john@example.com" required className="rounded-xl py-6" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="(647) 965-5067" required className="rounded-xl py-6" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Pool Interest</Label>
                  <select 
                    id="service" 
                    className="w-full h-12 px-4 rounded-xl border border-input bg-background text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    required
                  >
                    <option value="">Select pool type</option>
                    <option value="vinyl">Vinyl Liner Pool</option>
                    <option value="fiberglass">Fiberglass Pool</option>
                    <option value="concrete">Custom Concrete Pool</option>
                    <option value="unsure">Not Sure Yet</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Project Details</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your backyard and what you're looking for..." 
                    required 
                    className="rounded-xl min-h-[150px] p-4"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-8 text-lg font-bold shadow-lg shadow-blue-200 transition-all active:scale-95"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send className="h-5 w-5" />
                      Send Message
                    </div>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;