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
      <section className="py-16 text-center">
        <div className="container">
          <img 
            src="/images/insideout-logo-white.svg" 
            alt="InsideOut" 
            className="h-8 w-auto mx-auto mb-12"
          />
          
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
            Congrats! Your Call Has Been Booked.
          </h1>
          
          {/* Scroll Down Arrow */}
          <div className="flex flex-col items-center gap-2 mt-8">
            <span className="text-yellow-400 font-bold text-sm">Scroll Down</span>
            <svg className="w-6 h-6 text-yellow-400 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Step 1: Congratulations Video */}
      <section className="py-16 bg-blue-900">
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

          {/* Email confirmation screenshots - using placeholder images */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-4 shadow-xl">
              <img 
                src="https://via.placeholder.com/600x400/ffffff/000000?text=Email+Confirmation+Step+1" 
                alt="Email confirmation step 1"
                className="w-full rounded"
              />
            </div>
            <div className="bg-white rounded-lg p-4 shadow-xl">
              <img 
                src="https://via.placeholder.com/600x400/ffffff/000000?text=Email+Confirmation+Step+2" 
                alt="Email confirmation step 2"
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

      {/* Testimonials Section */}
      <section className="py-16 bg-black">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-gray-400 uppercase tracking-wider text-sm mb-2">TESTIMONIALS</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">
              Don't Worry, You're In Good Hands
            </h2>
          </div>

          {/* First batch of testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {videoTestimonialsSection1.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-xl">
                <div className="aspect-[9/16] mb-4 rounded-lg overflow-hidden">
                  <iframe
                    src={`https://fast.wistia.net/embed/iframe/${testimonial.videoId}?seo=true&videoFoam=false`}
                    title={`${testimonial.name} testimonial`}
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    loading="lazy"
                    className="w-full h-full"
                  ></iframe>
                </div>
                <h3 className="font-bold text-lg text-blue-900">{testimonial.name} - {testimonial.company}</h3>
              </div>
            ))}
          </div>

          {/* Second batch of testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {videoTestimonialsSection2.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-xl">
                <div className={`${testimonial.isPortrait ? "aspect-[9/16]" : "aspect-video"} mb-4 rounded-lg overflow-hidden`}>
                  <iframe
                    src={`https://fast.wistia.net/embed/iframe/${testimonial.videoId}?seo=true&videoFoam=false`}
                    title={`${testimonial.name} testimonial`}
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    loading="lazy"
                    className="w-full h-full"
                  ></iframe>
                </div>
                <h3 className="font-bold text-sm text-blue-900">{testimonial.name} - {testimonial.company}</h3>
              </div>
            ))}
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
