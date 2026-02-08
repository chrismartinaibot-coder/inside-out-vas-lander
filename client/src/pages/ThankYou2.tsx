import Footer from "@/components/Footer";

export default function ThankYou2() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-4xl w-full">
        {/* Logo */}
        <div className="text-center mb-12">
          <img 
            src="/images/insideout-logo.svg" 
            alt="InsideOut" 
            className="h-12 w-auto mx-auto"
          />
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 text-center mb-8">
            Thanks for your interest!
          </h1>

          <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed">
            <p>
              To clarify, we offer a done-for-you recruitment service where our expert 
              recruiters handle the entire hiring process for you. This is a one-time fee of 
              <span className="font-bold text-gray-900"> $2,995</span>, paid only upon successfully hiring your VA{' '}
              <span className="font-bold underline decoration-2">(not upfront)</span>.
            </p>

            <p className="pt-4 border-t border-gray-200">
              Due to high demand, and based on your answers, unfortunately we believe you're 
              not a fit for our services at this time.
            </p>

            <p className="pt-4">
              If you're okay with our pricing, and feel ready to move forward, we'd love for you to 
              go back and resubmit the form to book a call to discuss how we can help.
            </p>

            <p className="pt-4 pb-2">
              Alternatively, if your needs change in the future, we'd love to revisit this 
              conversation.
            </p>
          </div>

          {/* Optional CTA */}
          <div className="mt-10 text-center">
            <p className="text-gray-600 text-sm">
              Have questions? Feel free to reach out to our team.
            </p>
          </div>
        </div>

      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
