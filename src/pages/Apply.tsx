"use client";

import { useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { showSuccess, showError } from "@/utils/toast";
import { Phone, Send } from "lucide-react";

const Apply = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [projectValue, setProjectValue] = useState<string>("");
  const [teamType, setTeamType] = useState<string>("");
  const [teamSize, setTeamSize] = useState<string>("");
  const [experienceYears, setExperienceYears] = useState<string>("");
  const [costEstimate, setCostEstimate] = useState<string>("");
  const [blueprintDesign, setBlueprintDesign] = useState<string>("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Client-side validation
    if (!fullName.trim()) {
      showError("Please enter your full name.");
      return;
    }
    if (!email.trim()) {
      showError("Please enter your email address.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      showError("Please enter a valid email address.");
      return;
    }
    if (!phone.trim()) {
      showError("Please enter your phone number.");
      return;
    }
    if (!projectValue) {
      showError("Please select your average project value.");
      return;
    }
    if (!teamType) {
      showError("Please answer if you are solo or have a team.");
      return;
    }
    if (teamType === "team" && !teamSize) {
      showError("Please enter your team size.");
      return;
    }
    if (!experienceYears || !costEstimate || !blueprintDesign) {
      showError("Please answer all questions.");
      return;
    }
    if (!agreeToTerms) {
      showError("Please agree to the terms before submitting.");
      return;
    }

    setIsSubmitting(true);

    // Build FormData
    const formData = new FormData();
    formData.append("_captcha", "false");
    formData.append("_subject", "New Kitchen Remodeler Application - Asha Interiors");
    formData.append("fullName", fullName.trim());
    formData.append("email", email.trim());
    formData.append("phone", phone.trim());
    formData.append("projectValue", projectValue);
    formData.append("teamType", teamType);
    if (teamType === "team" && teamSize) {
      formData.append("teamSize", teamSize);
    }
    formData.append("experienceYears", experienceYears);
    formData.append("costEstimate", costEstimate);
    formData.append("blueprintDesign", blueprintDesign);
    formData.append("agreeToTerms", agreeToTerms ? "Yes" : "No");

    try {
      const response = await fetch("https://formsubmit.co/ajax/harchit23@gmail.com", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        showSuccess("Application submitted! We'll be in touch shortly.");
        formRef.current?.reset();
        setFullName("");
        setEmail("");
        setPhone("");
        setProjectValue("");
        setTeamType("");
        setTeamSize("");
        setExperienceYears("");
        setCostEstimate("");
        setBlueprintDesign("");
        setAgreeToTerms(false);
      } else {
        showError("Something went wrong. Please try again or call us directly.");
      }
    } catch {
      showError("Network error. Please check your connection or call us.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Header */}
      <section className="pt-24 pb-12 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/10" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold mb-4">
              Join the <span className="text-blue-400">Asha Interiors</span> Team
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              We're hiring experienced kitchen remodelers in Houston, Dallas, and San Antonio. 
              If you take pride in your craft, we want to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-6">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-10">
            {/* Question 1: Average Project Value */}
            <div className="space-y-4">
              <Label className="text-lg font-semibold text-slate-900 block">
                What is your average kitchen remodel project value?
              </Label>
              <RadioGroup
                value={projectValue}
                onValueChange={setProjectValue}
                className="flex flex-col gap-3"
                name="projectValue"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="<20k" id="pvUnder20" />
                  <Label htmlFor="pvUnder20"><$20k</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="20k-50k" id="pv20to50" />
                  <Label htmlFor="pv20to50">$20k–50k</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="50k-100k" id="pv50to100" />
                  <Label htmlFor="pv50to100">$50k–100k</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="100k+" id="pvOver100" />
                  <Label htmlFor="pvOver100">$100k+</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Question 2: Solo / Team */}
            <div className="space-y-4">
              <Label className="text-lg font-semibold text-slate-900 block">
                Are you solo or have a team?
              </Label>
              <RadioGroup
                value={teamType}
                onValueChange={setTeamType}
                className="flex flex-col sm:flex-row gap-4"
                name="teamType"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="solo" id="solo" />
                  <Label htmlFor="solo">Solo contractor</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="team" id="team" />
                  <Label htmlFor="team">I have a team</Label>
                </div>
              </RadioGroup>
              {teamType === "team" && (
                <div className="mt-2">
                  <Label htmlFor="teamSize" className="text-sm text-slate-600">
                    How many men on your team?
                  </Label>
                  <Input
                    id="teamSize"
                    name="teamSize"
                    type="number"
                    placeholder="e.g. 3"
                    value={teamSize}
                    onChange={(e) => setTeamSize(e.target.value)}
                    className="rounded-xl py-6 max-w-xs mt-1"
                  />
                </div>
              )}
            </div>

            {/* Question 3: Experience Years */}
            <div className="space-y-3">
              <Label htmlFor="experienceYears" className="text-lg font-semibold text-slate-900 block">
                How many years of kitchen remodeling experience do you have?
              </Label>
              <Input
                id="experienceYears"
                name="experienceYears"
                type="number"
                placeholder="e.g. 5"
                value={experienceYears}
                onChange={(e) => setExperienceYears(e.target.value)}
                className="rounded-xl py-6 max-w-xs"
              />
            </div>

            {/* Question 4: Cost Estimate */}
            <div className="space-y-3">
              <Label className="text-lg font-semibold text-slate-900 block">
                Scenario: You just finished an estimate with a client who wants a kitchen remodel. Would you be able to accurately calculate material and labor costs that same day?
              </Label>
              <RadioGroup
                value={costEstimate}
                onValueChange={setCostEstimate}
                className="flex flex-col sm:flex-row gap-4"
                name="costEstimate"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="costYes" />
                  <Label htmlFor="costYes">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="costNo" />
                  <Label htmlFor="costNo">No</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="partially" id="costPartial" />
                  <Label htmlFor="costPartial">Partially – within 24 hours</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Question 5: Blueprints */}
            <div className="space-y-3">
              <Label className="text-lg font-semibold text-slate-900 block">
                Are you comfortable designing your own blueprints/designs for clients?
              </Label>
              <RadioGroup
                value={blueprintDesign}
                onValueChange={setBlueprintDesign}
                className="flex flex-col sm:flex-row gap-4"
                name="blueprintDesign"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="blueprintYes" />
                  <Label htmlFor="blueprintYes">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="blueprintNo" />
                  <Label htmlFor="blueprintNo">No</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="withHelp" id="blueprintHelp" />
                  <Label htmlFor="blueprintHelp">With some help</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-slate-900">Your Contact Information</h2>
              <div className="space-y-3">
                <Label htmlFor="fullName" className="text-lg font-semibold text-slate-900 block">
                  Full Name
                </Label>
                <Input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="John Doe"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="rounded-xl py-6 max-w-md"
                />
              </div>
              <div className="space-y-3">
                <Label htmlFor="email" className="text-lg font-semibold text-slate-900 block">
                  Email Address <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="johndoe@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-xl py-6 max-w-md"
                  required
                />
              </div>
              <div className="space-y-3">
                <Label htmlFor="phone" className="text-lg font-semibold text-slate-900 block">
                  Phone Number <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="(555) 123-4567"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="rounded-xl py-6 max-w-md"
                  required
                />
              </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl px-3 py-6 space-y-3">
              <div>
                <h3 className="font-bold text-amber-900 text-lg">READ BEFORE APPLYING:</h3>
                <p className="text-amber-800 text-sm leading-relaxed">
                  This opportunity is best suited for lean teams that are willing to bid aggressively below their competition.
                  We will be providing leads/estimates on a weekly basis at no cost to you. You will be taking home 85-90%
                  of the job size.
                </p>
                <p className="text-amber-800 text-sm leading-relaxed mt-2">
                  You will be representing Asha Interiors and must have excellent sales acumen and present yourself in a
                  professional manner to customers.
                </p>
                <p className="text-amber-800 text-sm leading-relaxed mt-2">
                  We aim to establish a long term business partnership and fill your calendar with consistent kitchen jobs.
                  If these terms align with you and your business, please apply and we will reach out for an over-the-phone
                  screening.
                </p>
              </div>

              {/* Agree checkbox */}
              <div className="flex items-center space-x-2 pt-2">
                <Checkbox
                  id="agreeTerms"
                  name="agreeToTerms"
                  checked={agreeToTerms}
                  onCheckedChange={(checked) => setAgreeToTerms(checked === true)}
                />
                <Label htmlFor="agreeTerms" className="text-sm font-medium text-amber-900 cursor-pointer">
                  I agree to these terms
                </Label>
              </div>
            </div>

            {/* Submit */}
            <Button
              type="submit"
              disabled={isSubmitting || !agreeToTerms}
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-8 text-lg font-bold w-full shadow-lg shadow-blue-200 transition-all active:scale-95"
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Submitting...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Send className="h-5 w-5" />
                  Submit Application
                </div>
              )}
            </Button>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center gap-8">
          <h2 className="text-4xl font-bold">Questions? Call Our Hiring Team</h2>
          <p className="text-slate-300 text-lg">
            Speak directly with Asha Interiors to learn more about this opportunity.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-10 py-8 text-xl"
          >
            <a href="tel:2819326994" className="flex items-center gap-3">
              <Phone className="h-6 w-6" />
              (281) 932-6994
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Apply;