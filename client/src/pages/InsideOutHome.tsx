import { CheckCircle2, Users, Play, ArrowRight, ChevronDown, Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useEffect, useState, useRef } from 'react';

export default function InsideOutHome() {
  // State for animated counters
  const [counters, setCounters] = useState({ clients: 0, vas: 0, savings: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  
  // State for mobile menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Animated counter effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          // Animate clients counter to 1500
          let clientsCount = 0;
          const clientsInterval = setInterval(() => {
            clientsCount += 50;
            if (clientsCount >= 1500) {
              setCounters(prev => ({ ...prev, clients: 1500 }));
              clearInterval(clientsInterval);
            } else {
              setCounters(prev => ({ ...prev, clients: clientsCount }));
            }
          }, 20);

          // Animate VAs counter to 8000
          let vasCount = 0;
          const vasInterval = setInterval(() => {
            vasCount += 250;
            if (vasCount >= 8000) {
              setCounters(prev => ({ ...prev, vas: 8000 }));
              clearInterval(vasInterval);
            } else {
              setCounters(prev => ({ ...prev, vas: vasCount }));
            }
          }, 20);

          // Animate savings counter to 100
          let savingsCount = 0;
          const savingsInterval = setInterval(() => {
            savingsCount += 3;
            if (savingsCount >= 100) {
              setCounters(prev => ({ ...prev, savings: 100 }));
              clearInterval(savingsInterval);
            } else {
              setCounters(prev => ({ ...prev, savings: savingsCount }));
            }
          }, 20);
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [hasAnimated]);

  // Scroll-triggered animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe all sections and cards
    const elements = document.querySelectorAll('.fade-in-section, .fade-in-card');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  // Initialize Typeform after component mounts
  useEffect(() => {
    // Add a small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      if (typeof window !== 'undefined' && (window as any).tf) {
        (window as any).tf.load();
      } else if (typeof window !== 'undefined') {
        // If not loaded yet, wait and try again
        const checkTypeform = setInterval(() => {
          if ((window as any).tf) {
            (window as any).tf.load();
            clearInterval(checkTypeform);
          }
        }, 200);
        
        // Clear interval after 10 seconds
        setTimeout(() => clearInterval(checkTypeform), 10000);
      }
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  const scrollToForm = () => {
    const formElement = document.getElementById('typeform-section');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // First batch of video testimonials - 6 portraits as specified by user
  const videoTestimonialsSection1 = [
    { name: "Aiden Clark", company: "ArcStone Construction", videoId: "fzm8fc424t", isPortrait: true },
    { name: "Anna Tan", company: "Dynamic Marketing", videoId: "k6hpbydwi1", isPortrait: true },
    { name: "Dayne Kamela", company: "LitWithPrayer", videoId: "gt8twx9i89", isPortrait: true },
    { name: "Nick Wingo", company: "Building Grit", videoId: "s25bg924zq", isPortrait: true },
    { name: "Daniel Aroustamian", company: "CJC Roofing", videoId: "1m8u26ck9m", isPortrait: true },
    { name: "Anthony Lazarus", company: "HappyNuts", videoId: "j97tjir20s", isPortrait: true },
  ];

  // Second batch of video testimonials - 3 portraits + 2 landscapes
  const videoTestimonialsSection2 = [
    { name: "Cedric Merrills", company: "Wow 1 Day Painting", videoId: "6r24xorc62", isPortrait: true },
    { name: "Shea Trecwicz", company: "Stylez Salon", videoId: "6fsyf5y9ni", isPortrait: true },
    { name: "Tracy Hall", company: "Center Stage Dance", videoId: "f7b1j80laz", isPortrait: true },
    { name: "Mohammad Alwazy", company: "Fitness Influencer", videoId: "e3wrmp5fnn", isPortrait: true },
    { name: "Fady Gamal", company: "G-Mobile Detailing", videoId: "munyre4w59", isPortrait: true },
    { name: "Ryan Garvin", company: "TFG Benefits Insurance", videoId: "lrbzjkj1a6", isPortrait: true },
    { name: "Brandon Gaty", company: "LettrLabs", videoId: "ojr6x18878", isPortrait: false },
    { name: "Marc Sieber", company: "Wow 1 Day Painting", videoId: "0bqco9u2rq", isPortrait: false },
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
      items: ["Operations Manager", "Recruiter", "Human Resources", "Team Leaders", "Project Management"]
    },
    {
      category: "Marketing & Creative",
      items: ["Social Media Manager", "Video Editor", "Graphic Designer", "Digital Marketer"]
    },
    {
      category: "Accounting",
      items: ["Accountants", "Bookkeepers", "Auditors", "Payroll"]
    },
    {
      category: "Finance",
      items: ["Financial Analysts", "Controllers", "Treasurers", "Managers"]
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed nav height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-blue-900/95 backdrop-blur-sm border-b border-blue-800 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/images/insideout-logo-white.svg" 
                alt="InsideOut" 
                className="h-6 w-auto"
              />
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white p-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            
            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('why-choose')}
                className="text-sm font-medium text-white/90 hover:text-white transition-colors"
              >
                Why Choose Us
              </button>
              <button 
                onClick={() => scrollToSection('process')}
                className="text-sm font-medium text-white/90 hover:text-white transition-colors"
              >
                Our Process
              </button>
              <button 
                onClick={() => scrollToSection('global-talent')}
                className="text-sm font-medium text-white/90 hover:text-white transition-colors"
              >
                Global Talent
              </button>
              <button 
                onClick={() => scrollToSection('roles')}
                className="text-sm font-medium text-white/90 hover:text-white transition-colors"
              >
                Roles
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-sm font-medium text-white/90 hover:text-white transition-colors"
              >
                Testimonials
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="text-sm font-medium text-white/90 hover:text-white transition-colors"
              >
                FAQ
              </button>
              <Button 
                onClick={() => scrollToSection('typeform-section')}
                size="sm"
                className="bg-white text-blue-900 hover:bg-gray-100 rounded-full"
              >
                Get Started
              </Button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 pt-2 space-y-2">
              <button 
                onClick={() => { scrollToSection('why-choose'); setMobileMenuOpen(false); }}
                className="block w-full text-left px-4 py-2 text-sm font-medium text-white/90 hover:text-white hover:bg-blue-800 rounded transition-colors"
              >
                Why Choose Us
              </button>
              <button 
                onClick={() => { scrollToSection('process'); setMobileMenuOpen(false); }}
                className="block w-full text-left px-4 py-2 text-sm font-medium text-white/90 hover:text-white hover:bg-blue-800 rounded transition-colors"
              >
                Our Process
              </button>
              <button 
                onClick={() => { scrollToSection('global-talent'); setMobileMenuOpen(false); }}
                className="block w-full text-left px-4 py-2 text-sm font-medium text-white/90 hover:text-white hover:bg-blue-800 rounded transition-colors"
              >
                Global Talent
              </button>
              <button 
                onClick={() => { scrollToSection('roles'); setMobileMenuOpen(false); }}
                className="block w-full text-left px-4 py-2 text-sm font-medium text-white/90 hover:text-white hover:bg-blue-800 rounded transition-colors"
              >
                Roles
              </button>
              <button 
                onClick={() => { scrollToSection('testimonials'); setMobileMenuOpen(false); }}
                className="block w-full text-left px-4 py-2 text-sm font-medium text-white/90 hover:text-white hover:bg-blue-800 rounded transition-colors"
              >
                Testimonials
              </button>
              <button 
                onClick={() => { scrollToSection('faq'); setMobileMenuOpen(false); }}
                className="block w-full text-left px-4 py-2 text-sm font-medium text-white/90 hover:text-white hover:bg-blue-800 rounded transition-colors"
              >
                FAQ
              </button>
              <Button 
                onClick={() => { scrollToSection('typeform-section'); setMobileMenuOpen(false); }}
                size="sm"
                className="w-full bg-white text-blue-900 hover:bg-gray-100 rounded-full mt-2"
              >
                Get Started
              </Button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section with Decorative Dot Pattern Background */}
      <section 
        id="hero" 
        className="relative py-12 md:py-24 overflow-hidden"
        style={{
          backgroundImage: 'url(https://files.manuscdn.com/user_upload_by_module/session_file/310519663103922102/wuwGkeAhPkyEYDWC.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Decorative dot pattern overlay - inspired by Persona */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dot-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="2" fill="currentColor" className="text-white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dot-pattern)" />
          </svg>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-blue-800/90 to-blue-700/85" />
        
        <div className="container relative z-10" style={{ paddingTop: "24px", paddingBottom: "24px" }}>
          {/* Headline */}
          <div className="text-center text-white space-y-4 mb-8">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl mx-auto px-4">
              Hire Global Talent at 90% Lower Cost
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg text-blue-100 leading-relaxed max-w-2xl mx-auto px-4">
              Go from Overwhelmed Solopreneur to Confident CEO. Elite $4-8/hr VAs handle the busywork, so you scale faster.
            </p>
          </div>

          {/* VSL Video */}
          <div className="max-w-3xl mx-auto mb-8">
            <div className="rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white/10">
              <iframe 
                src="https://fast.wistia.net/embed/iframe/7pdcefp4vc?seo=true&videoFoam=true"
                title="VSL Video"
                allow="autoplay; fullscreen"
                allowFullScreen
                className="w-full aspect-video"
              />
            </div>
          </div>

          {/* Stats with decorative elements and animated counters */}
          <div ref={statsRef} className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12 py-6 px-4 mb-8">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-yellow-400/20 blur-xl"></div>
              <div className="relative">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400">
                  {counters.clients.toLocaleString()}+
                </div>
                <div className="text-xs sm:text-sm text-blue-100 mt-1">Clients Served</div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-yellow-400/20 blur-xl"></div>
              <div className="relative">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400">
                  {counters.vas.toLocaleString()}+
                </div>
                <div className="text-xs sm:text-sm text-blue-100 mt-1">VAs Hired</div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-yellow-400/20 blur-xl"></div>
              <div className="relative">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400">
                  ${counters.savings}M+
                </div>
                <div className="text-xs sm:text-sm text-blue-100 mt-1">Payroll Savings</div>
              </div>
            </div>
          </div>

          {/* Typeform */}
          <div id="typeform-section" className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12">
              <div className="text-center mb-6">
                <h3 className="font-serif text-3xl md:text-4xl font-bold text-blue-900 mb-3">
                  Zero Risk. Pay When You Hire.
                </h3>
                <h4 className="font-serif text-2xl font-semibold text-blue-800 mb-2">
                  See If You Qualify
                </h4>
                <p className="text-gray-600">Takes 1 minute ✓</p>
              </div>
              
              {/* Typeform Embed */}
              <div data-tf-live="01JSJDSKMS5ZETT7ECR59YFC13" style={{ minHeight: "500px" }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions - Asymmetric Layout inspired by Persona */}
      <section id="why-choose" className="py-8 md:py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Decorative curved shape */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/3"></div>
        
        <div className="container relative z-10" style={{ paddingTop: "24px", paddingBottom: "24px" }}>
          <div className="text-center mb-16 fade-in-section">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Why Choose InsideOut
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven headhunting process doesn't just fill positions—we place the elite VAs who grow your business.
            </p>
          </div>

          {/* Balanced 3-column grid layout */}
          <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-6xl mx-auto">
            {/* Card 1 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1 fade-in-card">
              <div className="w-16 h-16 rounded-xl bg-blue-100 flex items-center justify-center mb-6">
                <CheckCircle2 className="w-8 h-8 text-blue-900" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-blue-900 mb-4">
                Pay Only When You Hire
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Once you've found your perfect VA, one simple fee covers everything. No monthly subscriptions, no hidden costs, no surprises.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1 fade-in-card">
              <div className="w-16 h-16 rounded-xl bg-blue-100 flex items-center justify-center mb-6">
                <CheckCircle2 className="w-8 h-8 text-blue-900" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-blue-900 mb-4">
                Done-For-You VA Hiring
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our proven recruitment team finds, screens, and delivers pre-vetted A-players while you focus on what matters most—scaling your business.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1 fade-in-card">
              <div className="w-16 h-16 rounded-xl bg-blue-100 flex items-center justify-center mb-6">
                <CheckCircle2 className="w-8 h-8 text-blue-900" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-blue-900 mb-4">
                6-Month Perfect Hire Guarantee
              </h3>
              <p className="text-gray-600 leading-relaxed">
                If they don't exceed expectations, we'll replace them at no cost. Your success is our guarantee.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Button 
              onClick={scrollToForm}
              size="lg"
              className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              Start Your Search Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section - Custom Timeline Visualization inspired by Persona */}
      <section id="process" className="py-8 md:py-16 bg-white relative overflow-hidden">
        {/* Decorative background shapes */}
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20 translate-y-1/2 -translate-x-1/3"></div>
        
        <div className="container relative z-10" style={{ paddingTop: "24px", paddingBottom: "24px" }}>
          <div className="text-center mb-20">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Our Proven System for Finding A-Players
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic process screens 50,000+ candidates every month—so you only meet the top 1%
            </p>
          </div>

          {/* Custom curved timeline */}
          <div className="max-w-5xl mx-auto relative">
            {/* Curved connecting line - SVG path */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block" style={{ zIndex: 0 }}>
              <defs>
                <linearGradient id="timeline-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: '#1e40af', stopOpacity: 0.3 }} />
                  <stop offset="50%" style={{ stopColor: '#3b82f6', stopOpacity: 0.5 }} />
                  <stop offset="100%" style={{ stopColor: '#1e40af', stopOpacity: 0.3 }} />
                </linearGradient>
              </defs>
              <path 
                d="M 100 100 Q 250 50, 400 100 T 700 100 M 100 450 Q 250 400, 400 450 T 700 450" 
                stroke="url(#timeline-gradient)" 
                strokeWidth="3" 
                fill="none"
                strokeDasharray="8,8"
              />
            </svg>

            <div className="grid md:grid-cols-3 gap-8 relative" style={{ zIndex: 1 }}>
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Step card */}
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1">
                    {/* Number badge */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-blue-900 to-blue-700 text-white flex items-center justify-center font-bold text-lg shadow-lg">
                      {step.number}
                    </div>
                    
                    <div className="pt-4">
                      <h3 className="font-serif text-xl font-bold text-blue-900 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-16">
            <Button 
              onClick={scrollToForm}
              size="lg"
              className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>


      {/* Global Talent Regions Section */}
      <section id="global-talent" className="py-8 md:py-16 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
        {/* Dotted world map background */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="map-dots" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
                <circle cx="4" cy="4" r="1.5" fill="#1e40af" />
              </pattern>
            </defs>
            {/* Stylized world map using dots */}
            {/* North America */}
            <ellipse cx="250" cy="180" rx="120" ry="140" fill="url(#map-dots)" />
            {/* South America */}
            <ellipse cx="320" cy="380" rx="70" ry="120" fill="url(#map-dots)" />
            {/* Africa */}
            <ellipse cx="580" cy="350" rx="90" ry="140" fill="url(#map-dots)" />
            {/* Europe */}
            <ellipse cx="580" cy="160" rx="80" ry="60" fill="url(#map-dots)" />
            {/* Asia */}
            <ellipse cx="850" cy="220" rx="180" ry="130" fill="url(#map-dots)" />
            {/* Australia */}
            <ellipse cx="950" cy="450" rx="60" ry="50" fill="url(#map-dots)" />
          </svg>
        </div>

        <div className="container relative z-10" style={{ paddingTop: "24px", paddingBottom: "24px" }}>
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Global Talent, Strategic Sourcing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We source elite VAs from four strategic regions, each offering unique advantages for your business
            </p>
            
            {/* Key Attributes - Compact horizontal layout */}
            <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto mt-8 mb-4">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div className="text-left">
                  <p className="text-sm font-semibold text-gray-900">Fluent English</p>
                  <p className="text-xs text-gray-600">Clear, professional communication</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div className="text-left">
                  <p className="text-sm font-semibold text-gray-900">Neutral Accents</p>
                  <p className="text-xs text-gray-600">Seamless team integration</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div className="text-left">
                  <p className="text-sm font-semibold text-gray-900">College-Educated</p>
                  <p className="text-xs text-gray-600">Skilled professionals</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div className="text-left">
                  <p className="text-sm font-semibold text-gray-900">Proven Experience</p>
                  <p className="text-xs text-gray-600">Trusted by U.S. businesses</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Philippines */}
            <div className="group relative">
              <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:border-blue-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center flex-shrink-0 transition-colors">
                    <span className="text-3xl">🇵🇭</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-blue-900 transition-colors">
                      Philippines
                    </h3>
                    <p className="text-sm text-blue-600 font-medium transition-colors">Most Cost-Effective</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed transition-colors">
                  The world's premier BPO hub. Filipino VAs excel in back-office operations, customer service, and administrative tasks. With exceptional English proficiency, strong work ethic, and the lowest hourly rates ($4-6/hr), they deliver unmatched value for high-volume operational roles.
                </p>
                <div className="mt-6 flex gap-2">
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium transition-colors">Back Office</span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium transition-colors">Customer Service</span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium transition-colors">Operations</span>
                </div>
              </div>
            </div>

            {/* Latin America */}
            <div className="group relative">
              <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:border-blue-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center flex-shrink-0 transition-colors">
                    <span className="text-3xl">🌎</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-blue-900 transition-colors">
                      Latin America
                    </h3>
                    <p className="text-sm text-blue-600 font-medium transition-colors">US Time Zone Aligned</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed transition-colors">
                  Perfect for bilingual roles and real-time collaboration. Latin American VAs offer native Spanish fluency, cultural alignment with US business practices, and overlapping work hours. Ideal for sales, customer-facing roles, and teams requiring synchronous communication ($6-8/hr).
                </p>
                <div className="mt-6 flex gap-2">
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium transition-colors">Spanish Speaking</span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium transition-colors">US Time Zones</span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium transition-colors">Sales & Support</span>
                </div>
              </div>
            </div>

            {/* South Africa */}
            <div className="group relative">
              <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:border-blue-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center flex-shrink-0 transition-colors">
                    <span className="text-3xl">🇿🇦</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-blue-900 transition-colors">
                      South Africa
                    </h3>
                    <p className="text-sm text-blue-600 font-medium transition-colors">Native English Speakers</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed transition-colors">
                  Premium English proficiency meets affordability. South African VAs bring native-level English, sophisticated communication skills, and strong educational backgrounds. Perfect for client-facing roles, content creation, and positions requiring nuanced language mastery ($7-9/hr).
                </p>
                <div className="mt-6 flex gap-2">
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium transition-colors">Native English</span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium transition-colors">Client-Facing</span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium transition-colors">Content Creation</span>
                </div>
              </div>
            </div>

            {/* Egypt */}
            <div className="group relative">
              <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:border-blue-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center flex-shrink-0 transition-colors">
                    <span className="text-3xl">🇪🇬</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-blue-900 transition-colors">
                      Egypt
                    </h3>
                    <p className="text-sm text-blue-600 font-medium transition-colors">Technical & Creative Talent</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed transition-colors">
                  Emerging tech and creative powerhouse. Egyptian VAs excel in digital marketing, graphic design, web development, and technical roles. With strong STEM education, creative talent, and competitive rates ($5-7/hr), they're ideal for specialized and technical positions.
                </p>
                <div className="mt-6 flex gap-2">
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium transition-colors">Tech & IT</span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium transition-colors">Digital Marketing</span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium transition-colors">Creative Design</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Our expert placement advisors match you with talent from the optimal region based on your specific role requirements, budget, and business goals.
            </p>
            <Button 
              onClick={scrollToForm}
              size="lg"
              className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              Find Your Perfect VA
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
      {/* Roles Section - Masonry-style layout inspired by Persona */}
      <section id="roles" className="py-8 md:py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100 rounded-full blur-3xl opacity-20"></div>
        
        <div className="container relative z-10" style={{ paddingTop: "24px", paddingBottom: "24px" }}>
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Roles We Fill with Amazing People
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From assistants to specialists, we source top-tier talent across all business functions
            </p>
          </div>

          {/* Grid layout with equal card heights */}
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {roles.map((role, index) => (
              <div 
                key={index} 
                className={`
                  rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1
                  ${index === 0 ? 'bg-gradient-to-br from-blue-900 to-blue-800 text-white' : 
                    index % 2 === 1 ? 'bg-white border border-gray-100' :
                    'bg-gradient-to-br from-blue-100 to-blue-50 border border-blue-200'}
                `}
              >
                <h3 className={`font-serif text-2xl font-bold mb-6 ${index === 0 ? 'text-white' : 'text-blue-900'}`}>
                  {role.category}
                </h3>
                <ul className="space-y-3">
                  {role.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <CheckCircle2 className={`w-5 h-5 mr-3 flex-shrink-0 mt-0.5 ${index === 0 ? 'text-yellow-400' : 'text-blue-600'}`} />
                      <span className={index === 0 ? 'text-blue-100' : 'text-gray-700'}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button 
              onClick={scrollToForm}
              size="lg"
              className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              Find Your Perfect VA
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Video Testimonials Section 1 - Mix of portrait and landscape */}
      <section id="testimonials" className="py-8 md:py-16 bg-white relative overflow-hidden">
        {/* Decorative dot pattern background */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="testimonial-dots" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <circle cx="40" cy="40" r="3" fill="currentColor" className="text-blue-900" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#testimonial-dots)" />
          </svg>
        </div>

        <div className="container relative z-10" style={{ paddingTop: "24px", paddingBottom: "24px" }}>
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Trusted by 1,500+ Business Owners
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from leaders who found their ideal team through InsideOut
            </p>
          </div>

          {/* Grid layout with proper aspect ratios for portrait and landscape */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {videoTestimonialsSection1.map((testimonial, index) => (
              <div key={index} className="relative group">
                <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 ring-2 ring-gray-100 hover:ring-blue-300">
                  <iframe 
                    src={`https://fast.wistia.net/embed/iframe/${testimonial.videoId}?seo=true&videoFoam=true`}
                    title={`${testimonial.name} testimonial`}
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    className={`w-full ${testimonial.isPortrait ? 'aspect-[9/16]' : 'aspect-video'}`}
                  />
                </div>
                <div className="text-center mt-4">
                  <p className="font-semibold text-blue-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              onClick={scrollToForm}
              size="lg"
              className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              Join Them Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Written Testimonials - Elegant card layout */}
      <section className="py-8 md:py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container" style={{ paddingTop: "24px", paddingBottom: "24px" }}>
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from business owners who transformed their operations with elite VAs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {writtenTestimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="mb-6">
                  <svg className="w-10 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  {testimonial.quote}
                </p>
                <div className="pt-4 border-t border-gray-100">
                  <p className="font-bold text-blue-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button 
              onClick={scrollToForm}
              size="lg"
              className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              Get Your VA Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Video Testimonials Section 2 - All portraits near the end */}
      <section className="py-8 md:py-16 bg-white relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20"></div>

        <div className="container relative z-10" style={{ paddingTop: "24px", paddingBottom: "24px" }}>
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              More Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from more business owners who scaled with InsideOut VAs
            </p>
          </div>

          {/* Grid layout: 3 portraits on top row, 2 landscapes on bottom row */}
          <div className="max-w-6xl mx-auto mb-12">
            {/* Top row - 3 portraits */}
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {videoTestimonialsSection2.slice(0, 3).map((testimonial, index) => (
                <div key={index} className="relative group">
                  <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 ring-2 ring-gray-100 hover:ring-blue-300">
                    <iframe 
                      src={`https://fast.wistia.net/embed/iframe/${testimonial.videoId}?seo=true&videoFoam=true`}
                      title={`${testimonial.name} testimonial`}
                      allow="autoplay; fullscreen"
                      allowFullScreen
                      className={`w-full ${testimonial.isPortrait ? 'aspect-[9/16]' : 'aspect-video'}`}
                    />
                  </div>
                  <div className="text-center mt-4">
                    <p className="font-semibold text-blue-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Middle row - 3 more portraits */}
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {videoTestimonialsSection2.slice(3, 6).map((testimonial, index) => (
                <div key={index} className="relative group">
                  <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 ring-2 ring-gray-100 hover:ring-blue-300">
                    <iframe 
                      src={`https://fast.wistia.net/embed/iframe/${testimonial.videoId}?seo=true&videoFoam=true`}
                      title={`${testimonial.name} testimonial`}
                      allow="autoplay; fullscreen"
                      allowFullScreen
                      className={`w-full ${testimonial.isPortrait ? 'aspect-[9/16]' : 'aspect-video'}`}
                    />
                  </div>
                  <div className="text-center mt-4">
                    <p className="font-semibold text-blue-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Bottom row - 2 landscape videos centered */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {videoTestimonialsSection2.slice(6, 8).map((testimonial, index) => (
                <div key={index} className="relative group">
                  <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 ring-2 ring-gray-100 hover:ring-blue-300">
                    <iframe 
                      src={`https://fast.wistia.net/embed/iframe/${testimonial.videoId}?seo=true&videoFoam=true`}
                      title={`${testimonial.name} testimonial`}
                      allow="autoplay; fullscreen"
                      allowFullScreen
                      className={`w-full ${testimonial.isPortrait ? 'aspect-[9/16]' : 'aspect-video'}`}
                    />
                  </div>
                  <div className="text-center mt-4">
                    <p className="font-semibold text-blue-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Button 
              onClick={scrollToForm}
              size="lg"
              className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              Start Your Search Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-8 md:py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container" style={{ paddingTop: "24px", paddingBottom: "24px" }}>
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              FAQ
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common questions about working with InsideOut VAs
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white rounded-xl shadow-md border border-blue-100 px-6">
                <AccordionTrigger className="text-left text-lg font-semibold text-blue-900 hover:text-blue-700 py-5">
                  Do I need to sign any contracts?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pb-5 leading-relaxed">
                  None whatsoever! There are no contracts with us or your virtual assistant. Everything is negotiable with your virtual assistant(s) and you can stop working with them whenever you want without any liability. Most of our clients will hire their virtual assistant(s) for 45 hours/week to work Mon-Fri, 8am to 5pm.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-md border border-blue-100 px-6">
                <AccordionTrigger className="text-left text-lg font-semibold text-blue-900 hover:text-blue-700 py-5">
                  How do I pay my virtual assistant?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pb-5 leading-relaxed">
                  You can use any payment platform. Some examples include PayPal, Wise or Payoneer.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-md border border-blue-100 px-6">
                <AccordionTrigger className="text-left text-lg font-semibold text-blue-900 hover:text-blue-700 py-5">
                  How do you ensure a virtual employee matches my company's needs?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pb-5 leading-relaxed">
                  We conduct a detailed assessment of your business requirements and match you with assistants who have the skills and experience that align with your specific needs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-md border border-blue-100 px-6">
                <AccordionTrigger className="text-left text-lg font-semibold text-blue-900 hover:text-blue-700 py-5">
                  Can virtual employees handle confidential information?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pb-5 leading-relaxed">
                  Yes, your virtual assistant can sign a confidentiality agreement to ensure your information remains secure and private.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white rounded-xl shadow-md border border-blue-100 px-6">
                <AccordionTrigger className="text-left text-lg font-semibold text-blue-900 hover:text-blue-700 py-5">
                  How are virtual employees kept accountable for their work?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pb-5 leading-relaxed">
                  We use time-tracking software and productivity metrics, along with regular check-ins, to ensure accountability and transparency. For example, you can monitor their screens using a tool like HubStaff.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-white rounded-xl shadow-md border border-blue-100 px-6">
                <AccordionTrigger className="text-left text-lg font-semibold text-blue-900 hover:text-blue-700 py-5">
                  How do you handle time zone differences?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pb-5 leading-relaxed">
                  We select virtual assistants who are flexible and can adjust their working hours to ensure they overlap with your business hours. Don't worry about this at all.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="bg-white rounded-xl shadow-md border border-blue-100 px-6">
                <AccordionTrigger className="text-left text-lg font-semibold text-blue-900 hover:text-blue-700 py-5">
                  What is the process for communicating with my virtual employee?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pb-5 leading-relaxed">
                  Communication is typically conducted through email, instant messaging, video calls, VOIP such as Skype or any preferred project management tool.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="bg-white rounded-xl shadow-md border border-blue-100 px-6">
                <AccordionTrigger className="text-left text-lg font-semibold text-blue-900 hover:text-blue-700 py-5">
                  Can virtual employees handle tasks beyond administrative work?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pb-5 leading-relaxed">
                  Yes, we source virtual assistants with a range of skills from administrative to specialized technical abilities.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9" className="bg-white rounded-xl shadow-md border border-blue-100 px-6">
                <AccordionTrigger className="text-left text-lg font-semibold text-blue-900 hover:text-blue-700 py-5">
                  What's the typical duration for finding a virtual employee?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pb-5 leading-relaxed">
                  You'll start to receive candidates within only a few days! Conservatively, from start to finish, 2-3 weeks is enough time to go through plenty of candidates to make a selection.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10" className="bg-white rounded-xl shadow-md border border-blue-100 px-6">
                <AccordionTrigger className="text-left text-lg font-semibold text-blue-900 hover:text-blue-700 py-5">
                  What if I'm not happy with your service?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pb-5 leading-relaxed">
                  We are so confident that we will find you an amazing hire that we offer a replacement guarantee. If you are dissatisfied with your placement, we will go out and find you a brand new hire.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA Section with organic shapes */}
      <section className="py-32 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
        {/* Decorative organic shapes */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-2xl"></div>
        
        <div className="container relative z-10" style={{ paddingTop: "24px", paddingBottom: "24px" }}>
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6">
              Ready to Build Your Dream Team?
            </h2>
            <p className="text-2xl text-blue-100 mb-12 leading-relaxed">
              Join 1,500+ business owners who've scaled faster with elite global talent
            </p>
            
            <Button 
              onClick={scrollToForm}
              size="lg"
              className="bg-white hover:bg-gray-100 text-blue-900 px-12 py-8 text-xl rounded-full shadow-2xl hover:shadow-3xl transition-all font-semibold"
            >
              Start Your Search Today
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
            
            <div className="mt-8 flex items-center justify-center gap-8 text-blue-200">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-yellow-400" />
                6-Month Perfect Hire Guarantee
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-yellow-400" />
                Pay Only When You Hire
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
