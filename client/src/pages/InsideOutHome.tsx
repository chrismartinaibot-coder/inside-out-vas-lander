import { CheckCircle2, Users, Play, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function InsideOutHome() {
  const scrollToForm = () => {
    const formElement = document.getElementById('typeform-section');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const videoTestimonials = [
    { name: "Weilynn", videoId: "ks9ztv0qd7" },
    { name: "Anthony", videoId: "5xk4zfwxp6" },
    { name: "Dayne", videoId: "rvtc6bw9w1" },
    { name: "Marc Sieber", videoId: "3dn1zqjw9k" },
    { name: "Fady", videoId: "ks9ztv0qd7" },
    { name: "Brandon Gaty", videoId: "5xk4zfwxp6" },
  ];

  const writtenTestimonials = [
    {
      name: "Aiden Clark",
      company: "ArcStone Construction",
      quote: "Inside Out helped me reclaim 30 hours per week. I was swamped and had no time to spend on hiring an assistant."
    },
    {
      name: "Anna Tan",
      company: "Dynamic Marketing",
      quote: "I was hesitant to delegate at first, worried no one could match my standards, but this service proved me wrong. They found me an A-player who I can no longer survive without!"
    },
    {
      name: "Daniel Aroustamian",
      company: "CJC Roofing",
      quote: "I was missing phone calls from prospective customers and get distracted while on job sites. Hiring a VA has allowed me to scale my roofing business. Chris' team saved me dozens of hours of having to interview people myself."
    },
    {
      name: "Anthony Lazarus",
      company: "HappyNuts",
      quote: "Hiring a virtual assistant allowed me to stop spending time on lower value work so I could finally scale my D2C e-commerce brand into physical retailers."
    },
    {
      name: "Shea Trecwicz",
      company: "Stylez Salon",
      quote: "I went from being a 'solopreneur' to an actual CEO by hiring virtual assistants and it was way easier than I thought it would be. I wish I took action a lot earlier!"
    },
    {
      name: "Ryan Garvin",
      company: "TFG Benefits Insurance",
      quote: "I've thought about hiring a VA for years but I had no idea where to find them or what to look for. Chris' team at Inside Out held my hand throughout the recruitment process and found me a rockstar in less than a week."
    },
    {
      name: "Simon Ellery",
      company: "White Rabbit",
      quote: "Working with Inside Out has been such a seamless and efficient experience. The whole process was handled so well – great communication the whole way through, and they made it incredibly easy for me."
    },
    {
      name: "Stephen Ceausu",
      company: "Axe Property Management",
      quote: "We struggled to keep up with high lead volume, tenant communications, and daily admin while scaling. The process has been seamless — clear communication, smooth onboarding, and a responsive, professional team."
    },
    {
      name: "Michael Kozlowski",
      company: "FreeportForRent.com",
      quote: "I have been hiring and building teams for 20 years and I have never ever seen anything like this service. Your company provides excellent service."
    }
  ];

  const roles = [
    {
      category: "Assistants",
      items: ["General VA", "Executive Assistant", "Paralegals", "Administrative Assistant"]
    },
    {
      category: "Sales",
      items: ["Cold Caller", "Appointment Setter", "Sales Professional", "Sales Manager"]
    },
    {
      category: "Operations & HR",
      items: ["Operations Manager", "Recruiter", "Human Resources", "Team Leaders"]
    },
    {
      category: "Marketing & Creative",
      items: ["Social Media Manager", "Video Editor", "Graphic Designer", "Digital Marketer"]
    }
  ];

  const processSteps = [
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
  ];

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section 
        className="relative py-24"
        style={{
          backgroundImage: 'url(/images/insideout-hero-abstract.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-forest-green/90 to-teal/85" />
        
        <div className="container relative z-10" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
          {/* Logo and Headline */}
          <div className="text-center text-white space-y-8 mb-16">
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center">
                <Users className="w-6 h-6 text-forest-green" />
              </div>
              <span className="text-2xl font-serif font-bold">InsideOut</span>
            </div>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-5xl mx-auto">
              Hire Global Talent at 90% Lower Cost
            </h1>
            
            <p className="text-xl md:text-2xl text-cream/90 leading-relaxed max-w-3xl mx-auto">
              Go from Overwhelmed Solopreneur to Confident CEO. Elite $4-8/hr VAs handle the busywork, so you scale faster.
            </p>

            {/* Stats */}
            <div className="flex justify-center gap-12 py-8">
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

          {/* VSL Video */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <div 
                dangerouslySetInnerHTML={{
                  __html: `
                    <script src="https://fast.wistia.com/embed/medias/7pdcefp4vc.jsonp" async></script>
                    <script src="https://fast.wistia.com/assets/external/E-v1.js" async></script>
                    <div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;">
                      <div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;">
                        <div class="wistia_embed wistia_async_7pdcefp4vc seo=true videoFoam=true" style="height:100%;position:relative;width:100%">
                          <div class="wistia_swatch" style="height:100%;left:0;opacity:0;overflow:hidden;position:absolute;top:0;transition:opacity 200ms;width:100%;">
                            <img src="https://fast.wistia.com/embed/medias/7pdcefp4vc/swatch" style="filter:blur(5px);height:100%;object-fit:contain;width:100%;" alt="" aria-hidden="true" onload="this.parentNode.style.opacity=1;" />
                          </div>
                        </div>
                      </div>
                    </div>
                  `
                }}
              />
            </div>
          </div>

          {/* Typeform */}
          <div id="typeform-section" className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12">
              <div className="text-center mb-6">
                <h3 className="font-serif text-3xl font-bold text-forest-green mb-2">
                  See If You Qualify
                </h3>
                <p className="text-charcoal/70">Takes 1 minute ✓</p>
              </div>
              
              {/* Typeform Embed */}
              <div data-tf-live="01JSJDSKMS5ZETT7ECR59YFC13" style={{ minHeight: "400px" }}></div>
              <script src="//embed.typeform.com/next/embed.js"></script>
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
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              Our proven headhunting process doesn't just fill positions—we place the elite VAs who grow your business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mb-6">
                <CheckCircle2 className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-forest-green mb-4">
                Pay Only When You Hire
              </h3>
              <p className="text-charcoal/70 leading-relaxed">
                Once you've found your perfect VA, one simple fee covers everything. No monthly subscriptions, no hidden costs, no surprises.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mb-6">
                <CheckCircle2 className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-forest-green mb-4">
                Done-For-You VA Hiring
              </h3>
              <p className="text-charcoal/70 leading-relaxed">
                Our proven recruitment team finds, screens, and delivers pre-vetted A-players while you focus on what matters most—scaling your business.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mb-6">
                <CheckCircle2 className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-forest-green mb-4">
                6-Month Perfect Hire Guarantee
              </h3>
              <p className="text-charcoal/70 leading-relaxed">
                If they don't exceed expectations, we'll replace them at no cost. Your success is our guarantee.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Button 
              onClick={scrollToForm}
              size="lg"
              className="bg-forest-green hover:bg-forest-green/90 text-white font-semibold px-8 py-6 text-lg"
            >
              Start Your Search Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="container" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-forest-green mb-4">
              Our Proven System for Finding A-Players
            </h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              Our systematic process screens 50,000+ candidates every month—so you only meet the top 1%
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-cream/50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6 text-white font-bold text-2xl"
                  style={{
                    background: `linear-gradient(135deg, rgb(30, 64, 175) 0%, rgb(59, 130, 246) 100%)`
                  }}
                >
                  {step.number}
                </div>
                <h3 className="font-serif text-xl font-bold text-forest-green mb-4">
                  {step.title}
                </h3>
                <p className="text-charcoal/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              onClick={scrollToForm}
              size="lg"
              className="bg-forest-green hover:bg-forest-green/90 text-white font-semibold px-8 py-6 text-lg"
            >
              Get Started Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
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
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              From assistants to specialists, we source top-tier talent across all business functions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {roles.map((role, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="font-serif text-xl font-bold text-forest-green mb-6">
                  {role.category}
                </h3>
                <ul className="space-y-3">
                  {role.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              onClick={scrollToForm}
              size="lg"
              className="bg-forest-green hover:bg-forest-green/90 text-white font-semibold px-8 py-6 text-lg"
            >
              Find Your Perfect VA
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-24 bg-white">
        <div className="container" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-forest-green mb-4">
              Trusted by 1,500+ Business Owners
            </h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              Real stories from leaders who found their ideal team through InsideOut
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {videoTestimonials.map((testimonial, index) => (
              <div key={index} className="space-y-4">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <div 
                    dangerouslySetInnerHTML={{
                      __html: `
                        <script src="https://fast.wistia.com/embed/medias/${testimonial.videoId}.jsonp" async></script>
                        <script src="https://fast.wistia.com/assets/external/E-v1.js" async></script>
                        <div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;">
                          <div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;">
                            <div class="wistia_embed wistia_async_${testimonial.videoId} seo=true videoFoam=true" style="height:100%;position:relative;width:100%">
                              <div class="wistia_swatch" style="height:100%;left:0;opacity:0;overflow:hidden;position:absolute;top:0;transition:opacity 200ms;width:100%;">
                                <img src="https://fast.wistia.com/embed/medias/${testimonial.videoId}/swatch" style="filter:blur(5px);height:100%;object-fit:contain;width:100%;" alt="" aria-hidden="true" onload="this.parentNode.style.opacity=1;" />
                              </div>
                            </div>
                          </div>
                        </div>
                      `
                    }}
                  />
                </div>
                <p className="text-center font-semibold text-forest-green">{testimonial.name}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              onClick={scrollToForm}
              size="lg"
              className="bg-forest-green hover:bg-forest-green/90 text-white font-semibold px-8 py-6 text-lg"
            >
              Join Them Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Written Testimonials */}
      <section className="py-24 bg-cream/50">
        <div className="container" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-forest-green mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              Real results from business owners who transformed their operations with elite VAs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {writtenTestimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="mb-6">
                  <div className="text-gold text-4xl mb-4">&ldquo;</div>
                  <p className="text-charcoal/80 leading-relaxed italic mb-6">
                    {testimonial.quote}
                  </p>
                </div>
                <div className="border-t border-cream pt-6">
                  <p className="font-semibold text-forest-green">{testimonial.name}</p>
                  <p className="text-sm text-charcoal/60">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              onClick={scrollToForm}
              size="lg"
              className="bg-forest-green hover:bg-forest-green/90 text-white font-semibold px-8 py-6 text-lg"
            >
              Get Your VA Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section 
        className="relative py-24"
        style={{
          backgroundImage: 'url(/images/insideout-trust-visual.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-forest-green/90 to-teal/85" />
        
        <div className="container relative z-10 text-center" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build Your Dream Team?
          </h2>
          <p className="text-xl text-cream/90 mb-12 max-w-2xl mx-auto">
            Join 1,500+ business owners who've scaled faster with elite global talent
          </p>
          
          <Button 
            onClick={scrollToForm}
            size="lg"
            className="bg-gold hover:bg-gold/90 text-forest-green font-bold px-12 py-8 text-xl"
          >
            Start Your Search Today
            <ArrowRight className="ml-2 w-6 h-6" />
          </Button>

          <p className="text-cream/80 mt-8">
            6-Month Perfect Hire Guarantee • Pay Only When You Hire
          </p>
        </div>
      </section>
    </div>
  );
}
