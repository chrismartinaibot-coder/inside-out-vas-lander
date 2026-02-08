import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-8">
        <div className="container">
          <div className="flex items-center justify-between">
            <img 
              src="/images/insideout-logo-white.svg" 
              alt="InsideOut" 
              className="h-10 w-auto"
            />
            <a 
              href="/" 
              className="text-white hover:text-blue-200 transition-colors text-sm font-medium"
            >
              ← Back to Home
            </a>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="container py-12 md:py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Privacy Policy
          </h1>

          <div className="prose prose-lg max-w-none space-y-8">
            {/* Introduction */}
            <section>
              <p className="text-gray-700 leading-relaxed">
                At Inside Out Virtual Assistants ("Inside Out," "we," "us," or "our"), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                Information We Collect
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">
                <li>Fill out forms on our website</li>
                <li>Schedule a consultation or strategy call</li>
                <li>Subscribe to our newsletter or communications</li>
                <li>Contact us via email, phone, or chat</li>
                <li>Engage with our services</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                This information may include your name, email address, phone number, company name, job title, and any other information you choose to provide.
              </p>
            </section>

            {/* How We Use Your Information */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                How We Use Your Information
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">
                <li>Provide, operate, and maintain our services</li>
                <li>Process your requests and transactions</li>
                <li>Communicate with you about our services, updates, and promotional offers</li>
                <li>Improve our website and services</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Analyze usage patterns and trends</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            {/* Information Sharing */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                Information Sharing and Disclosure
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may share your information with:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">
                <li><strong>Service Providers:</strong> Third-party vendors who assist us in operating our website and providing services (e.g., payment processors, email service providers, analytics tools)</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or governmental authority</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              </ul>
            </section>

            {/* Cookies and Tracking */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                Cookies and Tracking Technologies
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We use cookies and similar tracking technologies to track activity on our website and store certain information. Cookies help us improve your experience by remembering your preferences and analyzing site traffic. You can control cookie settings through your browser preferences.
              </p>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                Data Security
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                Your Privacy Rights
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">
                <li>The right to access and receive a copy of your personal information</li>
                <li>The right to correct inaccurate or incomplete information</li>
                <li>The right to request deletion of your personal information</li>
                <li>The right to opt-out of marketing communications</li>
                <li>The right to withdraw consent where processing is based on consent</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                To exercise these rights, please contact us using the information provided below.
              </p>
            </section>

            {/* Third-Party Links */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                Third-Party Links
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                Children's Privacy
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child without parental consent, we will take steps to delete such information.
              </p>
            </section>

            {/* Changes to Policy */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                Changes to This Privacy Policy
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last Updated" date. We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                Contact Us
              </h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="mt-4 p-6 bg-blue-50 rounded-lg">
                <p className="text-gray-900 font-semibold">Inside Out Virtual Assistants</p>
                <p className="text-gray-700 mt-2">Email: support@insideoutvas.com</p>
              </div>
            </section>
          </div>

          {/* Footer */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600 text-center">
              Last updated: February 8, 2026
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
