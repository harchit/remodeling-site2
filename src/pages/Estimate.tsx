"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { showSuccess, showError } from "@/utils/toast";
import { CheckCircle2, ChevronRight, ChevronLeft, AlertCircle, ArrowLeft, ShieldCheck, DollarSign, Zap, FileText } from "lucide-react";
import logoImg from "@/assets/logo.jpg";

function Estimate() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;

  const [homeType, setHomeType] = useState("");
  const [timeline, setTimeline] = useState("");
  const [withinRadius, setWithinRadius] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [firstName, setFirstName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Phone auto-formatter (xxx) xxx-xxxx
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.replace(/\D/g, ""); // Keep digits only
    let formatted = input;
    
    if (input.length > 0) {
      if (input.length <= 3) {
        formatted = `(${input}`;
      } else if (input.length <= 6) {
        formatted = `(${input.slice(0, 3)}) ${input.slice(3)}`;
      } else {
        formatted = `(${input.slice(0, 3)}) ${input.slice(3, 6)}-${input.slice(6, 10)}`;
      }
    }
    setPhone(formatted);
  };

  // Zip validation (only digits, max 5 characters)
  const handleZipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, "").slice(0, 5);
    setZipCode(val);
  };

  const isStepValid = (step: number) => {
    switch (step) {
      case 1:
        return homeType !== "";
      case 2:
        return timeline !== "";
      case 3:
        return withinRadius === "yes";
      case 4:
        return streetAddress.trim() !== "" && city.trim() !== "" && /^\d{5}$/.test(zipCode);
      case 5:
        const isPhoneValid = /^\(\d{3}\)\s\d{3}-\d{4}$/.test(phone);
        const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        return firstName.trim() !== "" && isPhoneValid && isEmailValid;
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (currentStep === 3 && withinRadius === "no") {
      showError("Kindly exit the page. We currently only service within 40 miles of Phoenix, AZ.");
      return;
    }
    if (isStepValid(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
    } else {
      showError("Please complete the current question to proceed.");
    }
  };

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (withinRadius === "no") {
      showError("Kindly exit the page. We currently only service within 40 miles of Phoenix, AZ.");
      return;
    }

    if (!isStepValid(5)) {
      showError("Please fill out all fields with valid information before submitting.");
      return;
    }

    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("_captcha", "false");
    formData.append("_subject", "New Lead - FB Ads Kitchen Estimate Request");
    formData.append("Home Type", homeType);
    formData.append("Completion Target", timeline);
    formData.append("Within Radius of Phoenix", withinRadius);
    formData.append("Street Address", streetAddress);
    formData.append("City", city);
    formData.append("Zip Code", zipCode);
    formData.append("First Name", firstName);
    formData.append("Phone Number", phone);
    formData.append("Email Address", email);

    try {
      const response = await fetch("https://formsubmit.co/ajax/harchit23@gmail.com", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        showSuccess("Estimate request sent successfully!");
        
        // Fire Facebook Lead event with valuable tracking parameters
        if (typeof window.fbq === "function") {
          console.log("Fired Meta Pixel 'Lead' event for FB Ads lead form with parameters.");
          window.fbq("track", "Lead", {
            content_category: "Kitchen Remodeling Estimate",
            content_name: `${homeType} - ${timeline}`,
            status: "New Lead Submission"
          });
        }

        setIsSubmitted(true);
      } else {
        showError("Something went wrong. Please try again or call us directly.");
      }
    } catch (err) {
      showError("Network error. Please try again or check your internet connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between font-sans">
      
      {/* Header section with Centered non-redirect logo and trust banners */}
      <header className="bg-white border-b border-slate-100 py-6 px-4 shadow-sm">
        <div className="max-w-xl mx-auto flex flex-col items-center text-center">
          <div className="h-16 w-16 rounded-full bg-white flex items-center justify-center border-2 border-blue-100 overflow-hidden mb-3 pointer-events-none select-none">
            <img 
              src={logoImg} 
              alt="Asha Interiors Logo" 
              className="w-full h-full object-cover scale-110"
            />
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
            Get a <span className="text-blue-600">FREE Kitchen Remodel Estimate</span> For Your Property
          </h1>
          
          {/* Trust Badges Row */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-4 max-w-lg">
            <span className="inline-flex items-center gap-1 bg-green-50 text-green-700 text-xs px-2.5 py-1 rounded-full font-semibold border border-green-100">
              <ShieldCheck className="h-3.5 w-3.5 text-green-600" />
              Quality guarantee
            </span>
            <span className="inline-flex items-center gap-1 bg-green-50 text-green-700 text-xs px-2.5 py-1 rounded-full font-semibold border border-green-100">
              <DollarSign className="h-3.5 w-3.5 text-green-600" />
              No hidden fees
            </span>
            <span className="inline-flex items-center gap-1 bg-green-50 text-green-700 text-xs px-2.5 py-1 rounded-full font-semibold border border-green-100">
              <Zap className="h-3.5 w-3.5 text-green-600" />
              Fast quotes
            </span>
            <span className="inline-flex items-center gap-1 bg-green-50 text-green-700 text-xs px-2.5 py-1 rounded-full font-semibold border border-green-100">
              <FileText className="h-3.5 w-3.5 text-green-600" />
              Licensed and insured
            </span>
          </div>

          <p className="text-slate-500 font-medium text-sm sm:text-base mt-3.5 flex items-center gap-1.5 justify-center">
            Only takes 10 seconds 👇
          </p>
        </div>
      </header>

      {/* Main Form Area */}
      <main className="flex-grow py-8 px-4 max-w-xl w-full mx-auto flex flex-col justify-center">
        {isSubmitted ? (
          <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-xl text-center space-y-6 animate-in fade-in zoom-in-95 duration-500">
            <div className="bg-green-100 p-4 rounded-full w-fit mx-auto">
              <CheckCircle2 className="h-12 w-12 text-green-600" />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-slate-900">Request Confirmed!</h2>
              <p className="text-slate-600 leading-relaxed text-base">
                Thanks, <span className="font-bold text-slate-900">{firstName}</span>. Your details have been delivered to our kitchen estimating specialists.
              </p>
              <p className="text-slate-500 text-sm">
                We'll reach out to schedule your free design session and formal price assessment shortly.
              </p>
            </div>
            <Button 
              variant="link" 
              onClick={() => {
                setIsSubmitted(false);
                setCurrentStep(1);
                setHomeType("");
                setTimeline("");
                setWithinRadius("");
                setStreetAddress("");
                setCity("");
                setZipCode("");
                setFirstName("");
                setPhone("");
                setEmail("");
              }}
              className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2 mx-auto"
            >
              <ArrowLeft className="h-4 w-4" /> Start Over
            </Button>
          </div>
        ) : (
          <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
            
            {/* Step Progress Indicator */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-slate-400">
                <span>Progress</span>
                <span>Question {currentStep} of {totalSteps}</span>
              </div>
              
              {/* Reliable Custom Progress Bar */}
              <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                <div 
                  className="bg-blue-600 h-full rounded-full transition-all duration-300 ease-out"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              
              {/* STEP 1: Home Type */}
              {currentStep === 1 && (
                <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                  <Label className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                    <span className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-600 text-xs font-bold">1</span>
                    Which best describes your home?
                  </Label>
                  <RadioGroup
                    value={homeType}
                    onValueChange={setHomeType}
                    className="grid grid-cols-1 gap-2.5"
                  >
                    {[
                      { value: "single-family", label: "Single family home" },
                      { value: "townhouse-duplex", label: "Townhouse or duplex" },
                      { value: "mobile-other", label: "Mobile home or other" },
                      { value: "commercial", label: "Commercial building" }
                    ].map((item) => (
                      <label
                        key={item.value}
                        htmlFor={`home-${item.value}`}
                        className={`flex items-center space-x-3 border rounded-xl p-4 cursor-pointer transition-all ${
                          homeType === item.value 
                            ? "border-blue-600 bg-blue-50/50 ring-2 ring-blue-100" 
                            : "border-slate-200 hover:bg-slate-50"
                        }`}
                      >
                        <RadioGroupItem value={item.value} id={`home-${item.value}`} />
                        <span className="font-medium text-slate-700 text-sm sm:text-base">{item.label}</span>
                      </label>
                    ))}
                  </RadioGroup>
                </div>
              )}

              {/* STEP 2: Timeline */}
              {currentStep === 2 && (
                <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                  <Label className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                    <span className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-600 text-xs font-bold">2</span>
                    When are you hoping to have this project completed?
                  </Label>
                  <RadioGroup
                    value={timeline}
                    onValueChange={setTimeline}
                    className="grid grid-cols-1 gap-2.5"
                  >
                    {[
                      { value: "asap", label: "ASAP" },
                      { value: "this-month", label: "This month" },
                      { value: "next-month", label: "Next month" },
                      { value: "no-preference", label: "No preference" }
                    ].map((item) => (
                      <label
                        key={item.value}
                        htmlFor={`time-${item.value}`}
                        className={`flex items-center space-x-3 border rounded-xl p-4 cursor-pointer transition-all ${
                          timeline === item.value 
                            ? "border-blue-600 bg-blue-50/50 ring-2 ring-blue-100" 
                            : "border-slate-200 hover:bg-slate-50"
                        }`}
                      >
                        <RadioGroupItem value={item.value} id={`time-${item.value}`} />
                        <span className="font-medium text-slate-700 text-sm sm:text-base">{item.label}</span>
                      </label>
                    ))}
                  </RadioGroup>
                </div>
              )}

              {/* STEP 3: Within Radius */}
              {currentStep === 3 && (
                <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                  <Label className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                    <span className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-600 text-xs font-bold">3</span>
                    Are you within a 40-mile distance from Phoenix, AZ?
                  </Label>
                  <RadioGroup
                    value={withinRadius}
                    onValueChange={setWithinRadius}
                    className="grid grid-cols-2 gap-2.5"
                  >
                    {[
                      { value: "yes", label: "Yes" },
                      { value: "no", label: "No" }
                    ].map((item) => (
                      <label
                        key={item.value}
                        htmlFor={`radius-${item.value}`}
                        className={`flex items-center space-x-3 border rounded-xl p-4 cursor-pointer transition-all ${
                          withinRadius === item.value 
                            ? "border-blue-600 bg-blue-50/50 ring-2 ring-blue-100" 
                            : "border-slate-200 hover:bg-slate-50"
                        }`}
                      >
                        <RadioGroupItem value={item.value} id={`radius-${item.value}`} />
                        <span className="font-medium text-slate-700 text-sm sm:text-base">{item.label}</span>
                      </label>
                    ))}
                  </RadioGroup>
                  
                  {withinRadius === "no" && (
                    <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex gap-3 text-red-800 animate-in fade-in slide-in-from-top-2 duration-300">
                      <AlertCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                      <p className="text-sm leading-relaxed">
                        <strong>Kindly exit this page.</strong> We currently only offer professional kitchen remodeling services within 40 miles of Phoenix, AZ. Thank you!
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* STEP 4: Project Address */}
              {currentStep === 4 && (
                <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                  <Label className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                    <span className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-600 text-xs font-bold">4</span>
                    What is the address of this project?
                  </Label>
                  <div className="space-y-3">
                    <div>
                      <Label htmlFor="street" className="text-xs text-slate-500 font-bold uppercase mb-1 block">Street Address</Label>
                      <Input
                        id="street"
                        type="text"
                        placeholder="123 Camelback Rd"
                        value={streetAddress}
                        onChange={(e) => setStreetAddress(e.target.value)}
                        className="rounded-xl py-6 placeholder:italic placeholder:text-slate-400/80"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="city" className="text-xs text-slate-500 font-bold uppercase mb-1 block">City</Label>
                      <Input
                        id="city"
                        type="text"
                        placeholder="Phoenix"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="rounded-xl py-6 placeholder:italic placeholder:text-slate-400/80"
                        required
                      />
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <Label htmlFor="zip" className="text-xs text-slate-500 font-bold uppercase block">Zip Code</Label>
                        {zipCode && zipCode.length < 5 && (
                          <span className="text-xs text-amber-600 font-medium">Must be 5 digits</span>
                        )}
                      </div>
                      <Input
                        id="zip"
                        type="text"
                        placeholder="85001"
                        maxLength={5}
                        value={zipCode}
                        onChange={handleZipChange}
                        className="rounded-xl py-6 placeholder:italic placeholder:text-slate-400/80"
                        required
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 5: Name and Contact */}
              {currentStep === 5 && (
                <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                  <Label className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                    <span className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-600 text-xs font-bold">5</span>
                    What's your name, cell phone, and email address?
                  </Label>
                  <div className="space-y-3">
                    <div>
                      <Label htmlFor="fname" className="text-xs text-slate-500 font-bold uppercase mb-1 block">First Name</Label>
                      <Input
                        id="fname"
                        type="text"
                        placeholder="John"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="rounded-xl py-6 placeholder:italic placeholder:text-slate-400/80"
                        required
                      />
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <Label htmlFor="phoneField" className="text-xs text-slate-500 font-bold uppercase block">Phone Number</Label>
                        {phone && phone.length < 14 && (
                          <span className="text-xs text-amber-600 font-medium">Format: (xxx) xxx-xxxx</span>
                        )}
                      </div>
                      <Input
                        id="phoneField"
                        type="tel"
                        placeholder="(602) 555-0199"
                        value={phone}
                        onChange={handlePhoneChange}
                        className="rounded-xl py-6 placeholder:italic placeholder:text-slate-400/80"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="emailField" className="text-xs text-slate-500 font-bold uppercase mb-1 block">Email Address</Label>
                      <Input
                        id="emailField"
                        type="email"
                        placeholder="john@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="rounded-xl py-6 placeholder:italic placeholder:text-slate-400/80"
                        required
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Multi-step Button Controls */}
              <div className="flex gap-3 pt-4 border-t border-slate-100">
                {currentStep > 1 && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handlePrev}
                    className="flex-1 rounded-xl py-6 border-slate-200 text-slate-600 hover:bg-slate-50 font-semibold gap-2"
                  >
                    <ChevronLeft className="h-5 w-5" />
                    Previous
                  </Button>
                )}
                
                {currentStep < totalSteps ? (
                  <Button
                    type="button"
                    onClick={handleNext}
                    disabled={currentStep === 3 && withinRadius === "no"}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-6 font-bold gap-2 disabled:opacity-50"
                  >
                    Next
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                ) : (
                  <Button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isSubmitting || !isStepValid(5)}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-6 font-extrabold gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Request
                        <CheckCircle2 className="h-5 w-5" />
                      </>
                    )}
                  </Button>
                )}
              </div>

            </form>
          </div>
        )}
      </main>

      {/* Simplified Footer block */}
      <footer className="bg-white border-t border-slate-100 py-6 px-4 text-center">
        <p className="text-slate-400 text-xs font-semibold tracking-wider">
          Copyright 2026, Asha Interiors, All Rights Reserved
        </p>
      </footer>

    </div>
  );
}

export default Estimate;