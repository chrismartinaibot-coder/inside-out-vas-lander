/* 
 * Blue Professional Design - VaDrop Services Landing Page
 * Design Philosophy: Modern, professional, high-contrast
 * Color Palette: Rich blue, bright blue accents, white/light backgrounds
 * Typography: Playfair Display (display) + Manrope (body)
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { useEffect } from "react";

export default function Home() {
  // Load Typeform embed script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//embed.typeform.com/next/embed.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const whyNowItems = [
    {
      number: "01",
      title: "The \"Fractional\" Revolution",
      description: "Businesses are moving away from expensive full-time employees. They want flexible, \"fractional\" support to cut costs, making VAs the perfect solution."
    },
    {
      number: "02",
      title: "The Solopreneur Boom",
      description: "Record numbers of creators and coaches are launching solo businesses. They all hit a ceiling and need a VA to scale, creating a massive, hungry market."
    },
    {
      number: "03",
      title: "AI-Enhanced Productivity",
      description: "AI isn't replacing VAs; it's making them superhumans. Offer \"AI-Powered VAs\" who do the work of 3 people and charge premium rates."
    },
    {
      number: "04",
      title: "Global Talent Arbitrage",
      description: "The gap between what clients pay and what high-quality global talent costs is your profit margin—and it's wider than ever before."
    },
    {
      number: "05",
      title: "Remote Trust is Established",
      description: "The stigma of \"remote\" is gone. CEOs are now comfortable hiring key team members they've never met, removing the biggest barrier to entry."
    },
    {
      number: "06",
      title: "Speed to Cash Flow",
      description: "Unlike SaaS or e-commerce, a service business can generate cash in days. You can land your first client before you even hire your first VA."
    }
  ];

  const courseItems = [
    "Business Foundation",
    "The Complete Hiring System",
    "Team Management & KPIs",
    "Scaling & Automation",
    "Legal Contracts & Templates"
  ];

  const coachingItems = [
    "Weekly live Q&A calls with 8-figure founder Chris Martin",
    "Direct Feedback on Your Offers & Pricing",
    "Private Community Access",
    "Accountability Pods to Keep You on Track",
    "Role-Play Sales Scenarios"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Typeform */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background with team photo - lighter overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/60 via-primary/50 to-primary/55 z-10" />
          <img 
            src="/images/team-photo.jpg" 
            alt="VaDrop team" 
            className="w-full h-full object-cover opacity-70"
          />
        </div>

        {/* Hero Content */}
        <div className="container relative z-20 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left side - Headline and subheadline */}
            <div>
              <div className="inline-flex items-center gap-3 mb-8 px-6 py-4 bg-accent backdrop-blur-sm rounded-full border-2 border-accent-foreground/20 shadow-xl animate-pulse-slow">
                <div className="w-3 h-3 bg-accent-foreground rounded-full animate-ping absolute" />
                <div className="w-3 h-3 bg-accent-foreground rounded-full relative" />
                <p className="text-base font-bold text-accent-foreground tracking-wide">
                  NOW ACCEPTING NEW STUDENTS FOR Q1 2026
                </p>
              </div>
              
              <h1 className="font-display text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground mb-8 leading-tight">
                Build a 6-Figure Virtual Assistant AI Agency in 12 Weeks
              </h1>
              
              <p className="text-xl lg:text-2xl text-primary-foreground/95 mb-8 leading-relaxed">
                Escape the grind with a 100% work-from-home "drop-service" business model—even if you have no experience.
              </p>
            </div>

            {/* Right side - Typeform embed */}
            <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-2xl p-2 lg:p-4">
              <div data-tf-live="01KG004HD1E3ENXHJAYQTYAQHM" style={{ minHeight: '500px' }}></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Why Now Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-display text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Why the Opportunity is NOW
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The market is shifting perfectly for this business model. Here are six reasons why there has never been a better time to start.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {whyNowItems.map((item, index) => (
              <Card 
                key={index}
                className="p-8 bg-card hover:shadow-xl transition-all duration-500 border-border group hover:-translate-y-1"
              >
                <div className="text-5xl font-display font-bold text-accent/30 mb-4 group-hover:text-accent/50 transition-colors duration-300">
                  {item.number}
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Diagonal Divider */}
      <div className="relative h-24 bg-background">
        <svg 
          className="absolute bottom-0 w-full h-24" 
          viewBox="0 0 1200 100" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,0 L1200,20 L1200,100 L0,100 Z" 
            fill="oklch(0.95 0.01 250)"
          />
        </svg>
      </div>

      {/* What You Get Section */}
      <section className="py-24 lg:py-32 bg-secondary">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-display text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Everything You Need to Succeed
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We don't just give you a course. We give you a complete business-in-a-box ecosystem designed for speed and results.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="p-10 bg-card border-border hover:shadow-xl transition-all duration-500">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <CheckCircle2 className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="font-display text-3xl font-semibold text-foreground mb-4">
                The Comprehensive Course
              </h3>
              
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Hours of detailed video lessons covering every aspect of building your VA business, from Business Planning to Advanced Scaling Strategies.
              </p>

              <ul className="space-y-4">
                {courseItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-10 bg-primary text-primary-foreground border-primary hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full -translate-y-32 translate-x-32" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8 text-accent-foreground" />
                </div>
                
                <h3 className="font-display text-3xl font-semibold mb-4">
                  12-Week Coaching Program
                </h3>
                
                <p className="text-primary-foreground/90 mb-8 leading-relaxed">
                  Don't do it alone. Get direct access to expert guidance, accountability, and a community of like-minded entrepreneurs.
                </p>

                <ul className="space-y-4">
                  {coachingItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent-foreground mt-0.5 flex-shrink-0" />
                      <span className="text-primary-foreground/95">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-primary text-primary-foreground">
        <div className="container text-center">
          <p className="text-sm text-primary-foreground/70">
            © 2026 Virtual Assistant Business Coaching. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
