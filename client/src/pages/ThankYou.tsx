import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useEffect } from 'react';
import { useLocation } from 'wouter';

interface ThankYouProps {
  fireScheduleEvent?: boolean;
}

export default function ThankYou({ fireScheduleEvent = false }: ThankYouProps) {
  const [location] = useLocation();

  // Fire Facebook Schedule event for qualified leads
  useEffect(() => {
    if (fireScheduleEvent && typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Schedule');
    }
  }, [fireScheduleEvent]);

  // Video testimonials data from main page
  const videoTestimonialsSection1 = [
    { name: "Aiden Clark", company: "ArcStone Construction", videoId: "fzm8fc424t", isPortrait: true },
    { name: "Anna Tan", company: "Dynamic Marketing", videoId: "k6hpbydwi1", isPortrait: true },
    { name: "Dayne Kamela", company: "LitWithPrayer", videoId: "gt8twx9i89", isPortrait: true },
    { name: "Nick Wingo", company: "Building Grit", videoId: "s25bg924zq", isPortrait: true },
    { name: "Daniel Aroustamian", company: "CJC Roofing", videoId: "1m8u26ck9m", isPortrait: true },
    { name: "Anthony Lazarus", company: "HappyNuts", videoId: "j97tjir20s", isPortrait: true },
  ];

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

  // FAQ videos with real Wistia IDs
  const faqVideos = [
    { title: "How Do I Know You'll Deliver Top Talent?", videoId: "esm7rrseuk" },
    { title: "How Do You Guarantee Success?", videoId: "58zvsspktz" },
    { title: "What Roles Can I Hire For?", videoId: "xu5fm8brh9" },
    { title: "Can I Trust Someone Outside the U.S.?", videoId: "ugfe2bmev2" },
    { title: "Is This Service Right For My Business?", videoId: "w4vzl9pd9k" },
    { title: "Why Is It Better to Hire Outside the U.S.?", videoId: "bhxrufpb7g" },
    { title: "Why Should I Pay You to Find Top Talent?", videoId: "asna4ywjal" },
    { title: "Why Don't I Just Find a VA Myself?", videoId: "n57ttunjqh" },
    { title: "What If I've Never Hired Before?", videoId: "y3hy7k8mlu" },
    { title: "Why Is It Best to Hire My VA Directly?", videoId: "pi92je92fm" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900">
      {/* Header Section */}
      <section className="py-8 md:py-12 text-center">
        <div className="container">
          <img 
            src="/images/insideout-logo-white.svg" 
            alt="InsideOut" 
            className="h-8 w-auto mx-auto mb-12"
          />
          
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Congrats! Your Call Has Been Booked.
          </h1>
          
          {/* Scroll Down Arrow */}
          <div className="flex flex-col items-center gap-3 mt-4">
            <span className="text-yellow-400 font-bold text-xl">Scroll Down</span>
            <svg className="w-8 h-8 text-yellow-400 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Step 1: Congratulations Video */}
      <section className="py-8 bg-blue-900">
        <div className="container max-w-4xl">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white text-center mb-8">
            <span className="underline decoration-yellow-400">STEP 1:</span> MUST WATCH: How Our Clients Win Big With Us
          </h2>
          
          <div className="aspect-video rounded-lg overflow-hidden shadow-2xl">
            <iframe
              src="https://fast.wistia.net/embed/iframe/3q722ziet1?seo=true&videoFoam=false"
              title="Congratulations Video"
              allow="autoplay; fullscreen"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Step 2: Email Confirmation */}
      <section className="py-16 bg-blue-800">
        <div className="container max-w-4xl">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white text-center mb-4">
            <span className="underline decoration-yellow-400">STEP 2:</span> <span className="text-blue-300">Confirm Your Email Invite</span>
          </h2>
          
          <p className="text-white text-center text-lg mb-8">
            Press "I know the sender" and "Yes" on the emails we just sent you!
          </p>
          
          <div className="bg-yellow-400 text-black p-4 rounded-lg mb-8 text-center font-bold">
            👉 Without this, your calendar won't remind you and you'll likely miss the call.
          </div>

          {/* Email confirmation screenshots */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-4 shadow-xl">
              <img 
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663103922102/CACSTixwZpSsiTaT.png" 
                alt="I know the sender button in calendar invite"
                className="w-full rounded"
              />
            </div>
            <div className="bg-white rounded-lg p-4 shadow-xl">
              <img 
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663103922102/ipLPLgHDKTShqyPN.png" 
                alt="Press Yes on calendar invite"
                className="w-full rounded"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Step 3: FAQ Videos */}
      <section className="py-16 bg-blue-900">
        <div className="container max-w-6xl">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white text-center mb-12">
            <span className="underline decoration-yellow-400">STEP 3:</span> Watch These Short Videos Before Your Call
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {faqVideos.map((video, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-xl">
                <div className="bg-blue-100 p-4 text-center">
                  <h3 className="font-bold text-blue-900">{video.title}</h3>
                </div>
                <div className="aspect-video">
                  <iframe
                    src={`https://fast.wistia.net/embed/iframe/${video.videoId}?seo=true&videoFoam=false`}
                    title={video.title}
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Section 1 */}
      <section className="py-8 md:py-16 bg-white relative overflow-hidden">
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

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {videoTestimonialsSection1.map((testimonial, index) => (
              <div key={index} className="relative group">
                <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 ring-2 ring-gray-100 hover:ring-blue-300">
                  <iframe 
                    src={`https://fast.wistia.net/embed/iframe/${testimonial.videoId}?seo=true&videoFoam=true`}
                    title={`${testimonial.name} testimonial`}
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    loading="lazy"
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
      </section>

      {/* Written Testimonials */}
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
        </div>
      </section>

      {/* Video Testimonials Section 2 */}
      <section className="py-8 md:py-16 bg-white relative overflow-hidden">
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

          <div className="max-w-6xl mx-auto">
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
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-b from-blue-900 to-blue-800">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
              FAQ
            </h2>
            <p className="text-xl text-blue-200">
              Common questions answered
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-left font-bold text-blue-900 hover:text-blue-700">
                How long does it take to find candidates?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                We deliver 3-5 pre-vetted candidates within 5-7 business days. Our extensive network and proven screening process ensures you only meet top-tier talent who match your exact requirements.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-left font-bold text-blue-900 hover:text-blue-700">
                What if I'm not satisfied with my VA?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                We offer a 6-month replacement guarantee. If your VA doesn't work out for any reason within the first 6 months, we'll find you a replacement at no additional cost.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-left font-bold text-blue-900 hover:text-blue-700">
                How much does it cost?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                Our recruitment fee is a one-time payment. We'll discuss pricing details on your strategy call based on the specific role and requirements. VAs typically cost $4-8/hour, saving you 90% compared to US-based hires.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-left font-bold text-blue-900 hover:text-blue-700">
                Do I hire the VA directly or through you?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                You hire the VA directly. We handle the recruitment, screening, and shortlisting, but you make the final hiring decision and employ them directly. This gives you full control and keeps costs low.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-left font-bold text-blue-900 hover:text-blue-700">
                What countries do you source from?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                We source top talent from the Philippines, Latin America, and other strategic regions known for highly educated, English-proficient professionals. We match candidates based on timezone compatibility and cultural fit for your business.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-left font-bold text-blue-900 hover:text-blue-700">
                Can I scale my team over time?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                Absolutely! Many of our clients start with one VA and scale to full remote teams. We support your growth every step of the way with ongoing recruitment and team-building guidance.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
}
