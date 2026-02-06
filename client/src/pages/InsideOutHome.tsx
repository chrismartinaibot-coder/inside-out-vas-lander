/**
 * InsideOutVAs Premium Landing Page
 * Design Philosophy: Modern Luxury Professional
 * - Deep forest green/teal color palette with gold accents
 * - Playfair Display serif headlines for elegance
 * - Generous whitespace and sophisticated layout
 * - Custom graphics and premium feel
 */

import { useEffect } from "react";
import { Check, Play, Star, Users, Award, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function InsideOutHome() {
  // Load Typeform script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  // Load Wistia player script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://fast.wistia.com/player.js";
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const videoTestimonials = [
    { name: "Weilynn", mediaId: "k6hpbydwi1" },
    { name: "Anthony", mediaId: "j97tjir20s" },
    { name: "Dayne", mediaId: "gt8twx9i89" },
    { name: "Marc Sieber", mediaId: "0bqco9u2rq" },
    { name: "Fady", mediaId: "munyre4w59" },
    { name: "Brandon Gaty", mediaId: "ojr6x18878" },
    { name: "Mohammad", mediaId: "e3wrmp5fnn" },
    { name: "Ryan Gavin", mediaId: "lrbzjkj1a6" },
    { name: "Nick Wingo", mediaId: "s25bg924zq" },
    { name: "Tracy", mediaId: "f7b1j80laz" },
    { name: "Aiden", mediaId: "fzm8fc424t" }
  ];

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center"
        style={{
          backgroundImage: 'url(/images/insideout-hero-abstract.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-forest-green/95 via-teal/90 to-forest-green/95" />
        
        <div className="container relative z-10" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="text-white space-y-8">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center">
                  <Users className="w-6 h-6 text-forest-green" />
                </div>
                <span className="text-2xl font-serif font-bold">InsideOut</span>
              </div>

              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Hire Global Talent at 90% Lower Cost
              </h1>
              
              <p className="text-xl md:text-2xl text-cream/90 leading-relaxed">
                Go from Overwhelmed Solopreneur to Confident CEO. Elite $4-8/hr VAs handle the busywork, so you scale faster.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 py-8">
                <div>
                  <div className="text-4xl font-bold text-gold">1,500+</div>
                  <div className="text-sm text-cream/80 mt-1">Clients Served</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-gold">8,000+</div>
                  <div className="text-sm text-cream/80 mt-1">VAs Hired</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-gold">$100M+</div>
                  <div className="text-sm text-cream/80 mt-1">Payroll Savings</div>
                </div>
              </div>
            </div>

            {/* Right: Typeform */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12">
              <div className="text-center mb-6">
                <h3 className="font-serif text-3xl font-bold text-forest-green mb-2">
                  See If You Qualify
                </h3>
                <p className="text-charcoal/70">Takes 1 minute ✓</p>
              </div>
              
              {/* Typeform Embed */}
              <div data-tf-live="01JSJDSKMS5ZETT7ECR59YFC13" style={{ minHeight: "400px" }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* VSL Section */}
      <section className="py-24 bg-white">
        <div className="container" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-forest-green mb-4">
                Watch: How We Help Business Owners Scale
              </h2>
              <p className="text-xl text-charcoal/70">
                See how our proven process delivers elite VAs who transform your business
              </p>
            </div>
            
            {/* VSL Video */}
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <div 
                dangerouslySetInnerHTML={{
                  __html: `
                    <script src="https://fast.wistia.com/embed/7pdcefp4vc.js" async type="module"></script>
                    <style>wistia-player[media-id='7pdcefp4vc']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/7pdcefp4vc/swatch'); display: block; filter: blur(5px); padding-top:56.25%; }</style>
                    <wistia-player media-id="7pdcefp4vc" aspect="1.7777777777777777"></wistia-player>
                  `
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-24 bg-cream/50">
        <div className="container" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-forest-green mb-4">
              Why Choose InsideOut
            </h2>
            <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
              Our proven headhunting process doesn't just fill positions—we place the elite VAs who grow your business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Check className="w-8 h-8" />,
                title: "Pay Only When You Hire",
                description: "Once you've found your perfect VA, one simple fee covers everything. No monthly subscriptions, no hidden costs, no surprises."
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Done-For-You VA Hiring",
                description: "Our proven recruitment team finds, screens, and delivers pre-vetted A-players while you focus on what matters most—scaling your business."
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "6-Month Perfect Hire Guarantee",
                description: "If they don't exceed expectations, we'll replace them at no cost. Your success is our guarantee."
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 rounded-full bg-teal/10 flex items-center justify-center text-teal mb-6">
                  {item.icon}
                </div>
                <h3 className="font-serif text-2xl font-bold text-forest-green mb-4">
                  {item.title}
                </h3>
                <p className="text-charcoal/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section 
        className="py-24 relative bg-white"
      >
        <div className="container" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-forest-green mb-4">
              Our Proven System for Finding A-Players
            </h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              Our systematic process screens 50,000+ candidates every month—so you only meet the top 1%
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                number: "01",
                title: "Book Your Strategy Call",
                description: "Schedule a call with our senior placement advisors to discuss your business needs and the specific role you're looking to fill."
              },
              {
                number: "02",
                title: "Launch Your Candidate Search",
                description: "Our recruitment team begins sourcing top talent from competitive pay rates, the best regions to source talent, and proven strategies for hiring and managing remote staff."
              },
              {
                number: "03",
                title: "Receive Your Curated Shortlist",
                description: "Within 5-7 business days, we deliver 3-5 pre-vetted candidates who match your exact requirements."
              },
              {
                number: "04",
                title: "Interview Shortlisted Candidates",
                description: "Conduct interviews with your top picks. We provide interview guides and support throughout the process."
              },
              {
                number: "05",
                title: "Make an Offer",
                description: "Found your perfect match? We'll handle the offer negotiation and onboarding logistics."
              },
              {
                number: "06",
                title: "Beyond the Hire - Ongoing Support",
                description: "We provide continued support to ensure your VA's success and your satisfaction with our 6-month guarantee."
              }
            ].map((step, index) => (
              <div 
                key={index}
                className="bg-cream/50 rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal to-forest-green flex items-center justify-center text-white font-bold text-xl">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-2xl font-bold text-forest-green mb-3">
                      {step.title}
                    </h3>
                    <p className="text-charcoal/70 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roles Section */}
      <section className="py-24 bg-cream/50">
        <div className="container" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-forest-green mb-4">
              Roles We Fill with Amazing People
            </h2>
            <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
              From assistants to specialists, we source top-tier talent across all business functions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                category: "Assistants",
                roles: ["General VA", "Executive Assistant", "Paralegals", "Administrative Assistant"]
              },
              {
                category: "Sales",
                roles: ["Cold Caller", "Appointment Setter", "Sales Professional", "Sales Manager"]
              },
              {
                category: "Operations & HR",
                roles: ["Operations Manager", "Recruiter", "Human Resources", "Team Leaders"]
              },
              {
                category: "Marketing & Creative",
                roles: ["Social Media Manager", "Video Editor", "Graphic Designer", "Digital Marketer"]
              }
            ].map((group, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="font-serif text-xl font-bold text-teal mb-4">
                  {group.category}
                </h3>
                <ul className="space-y-2">
                  {group.roles.map((role, roleIndex) => (
                    <li key={roleIndex} className="flex items-start gap-2 text-charcoal/70">
                      <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span>{role}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="container" style={{ paddingTop: "80px", paddingBottom: "120px" }}>
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-forest-green mb-4">
              Trusted by 1,500+ Business Owners
            </h2>
            <p className="text-xl text-charcoal/70">
              Real stories from leaders who found their ideal team through InsideOut
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videoTestimonials.slice(0, 6).map((testimonial, index) => (
              <div 
                key={index}
                className="bg-cream/30 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div 
                  dangerouslySetInnerHTML={{
                    __html: `
                      <script src="https://fast.wistia.com/embed/${testimonial.mediaId}.js" async type="module"></script>
                      <wistia-player media-id="${testimonial.mediaId}" aspect="0.5625"></wistia-player>
                    `
                  }}
                />
                <div className="p-4 text-center">
                  <div className="font-bold text-forest-green">{testimonial.name}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg"
              className="bg-teal hover:bg-teal/90 text-white font-semibold px-8"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch More Success Stories
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-24 relative"
        style={{
          backgroundImage: 'url(/images/insideout-trust-visual.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-forest-green/95 to-teal/95" />
        
        <div className="container relative z-10 text-center text-white">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Ready to Build Your Dream Team?
          </h2>
          <p className="text-xl text-cream/90 mb-8 max-w-2xl mx-auto">
            Join 1,500+ business owners who've scaled faster with elite global talent
          </p>
          <Button 
            size="lg"
            className="bg-gold hover:bg-gold/90 text-forest-green font-bold px-12 py-6 text-lg"
          >
            Start Your Search Today
          </Button>
          <p className="text-cream/70 mt-4">
            6-Month Perfect Hire Guarantee • Pay Only When You Hire
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-forest-green text-white py-12">
        <div className="container text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center">
              <Users className="w-5 h-5 text-forest-green" />
            </div>
            <span className="text-xl font-serif font-bold">InsideOut</span>
          </div>
          <p className="text-cream/70">
            © 2026 InsideOut Virtual Assistants. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
