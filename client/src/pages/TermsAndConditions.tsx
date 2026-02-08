export default function TermsAndConditions() {
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
            Terms and Conditions
          </h1>

          <div className="prose prose-lg max-w-none space-y-8">
            {/* Scope of Services */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                Scope of Services
              </h2>
              <p className="text-gray-700 leading-relaxed">
                The Client engages Inside Out, and Inside Out accepts this engagement as an independent contractor to provide specific services to the Client under the terms described in this document (collectively, "Terms and Conditions"). Inside Out will offer services related to sourcing, recruiting, reviewing, and presenting candidates for potential employment or contracting with the Client for the requested roles ("Services"). Using the position criteria provided by the Client, Inside Out will seek to introduce individuals to the Client for potential employment or contracting (each an "Introduced Party," and the selected individual being the "Candidate"). The Client represents and warrants that the requested roles are lawful in their jurisdictions and will not violate the privacy, contractual, statutory, or common law rights of third parties.
              </p>
            </section>

            {/* Project Deposit */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                Project Deposit
              </h2>
              <p className="text-gray-700 leading-relaxed">
                The Client must remit a non-refundable deposit ("Project Deposit") to Inside Out upon accepting the Terms and Conditions. Inside Out is not obligated to provide any Services until the Project Deposit is received. The Project Deposit will be applied toward Inside Out's One-Time Headhunter Fee.
              </p>
            </section>

            {/* Inside Out Headhunting Fees */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                Inside Out Headhunting Fees
              </h2>
              <p className="text-gray-700 leading-relaxed">
                In certain circumstances, Inside Out may request an advance deposit from the Client, which, if required, shall be considered as an advance payment. The Client shall remit a Project Deposit in consideration for Inside Out Fees (as defined below). The Project Deposit and Inside Out Fees shall be transmitted via (ACH) transfer. If the Client opts to have payments transmitted via credit card, an additional fee ("Convenience Fee") equal to 3% of the total payment will apply, as specified in the Service Order. In the event that a Candidate declines a Client's offer, Inside Out shall hold Inside Out Fees until the earlier of: (a) Client extends an offer to another Candidate, at which time Inside Out Fees shall be deemed to have been fully earned or (b) Client does not extend an offer to another Candidate and instructs Inside Out to return Inside Out Fees, excluding the value of the Project Deposit. Upon Candidate's acceptance of an offer of employment/engagement from Client (a "Successful Hire"), Inside Out Fees shall be deemed fully earned and neither Inside Out Fees, nor the Project Deposit shall be refundable for any reason.
              </p>
            </section>

            {/* Client Notification */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                Client Notification
              </h2>
              <p className="text-gray-700 leading-relaxed">
                The Client agrees to notify Inside Out immediately upon accepting a Candidate.
              </p>
            </section>

            {/* Payments and Invoicing */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                Payments and Invoicing
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Successful Hiring is defined as the earlier of (1) when a Candidate accepts a job offer with the Client or its affiliate, or (2) the Candidate's first day of employment or work with the Client or its affiliate. Inside Out will issue Client an invoice within 3 business days following confirmation that the Candidate has accepted the Client's job offer. The Client agrees to pay Inside Out Fees within 3 business days of Successful Hiring. When Client fails to meet the payment deadline, Client hereby expressly authorizes Inside Out to charge Inside Out Fees to the credit card registered for payments in Inside Out's database. When payment is transmitted via credit card, the Client agrees to an additional charge equal to 3% of the total payment. The Client acknowledges that Inside Out Fees and Project Deposit are in addition to any sums due to the Candidate for the Services.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                If the credit or debit card is declined, Inside Out will attempt to charge the card the following business day. If the card is declined a second time, Inside Out will contact the Client to pay the invoice manually with a new card. Client agrees to pay interest of the lesser of eighteen percent (18%) per annum or the maximum legal interest rate on all delinquent payments. Additionally, Client agrees to pay all fees associated with Inside Out's collection expenses, including reasonable attorney's fees.
              </p>
            </section>

            {/* Role Changes */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                Role Changes
              </h2>
              <p className="text-gray-700 leading-relaxed">
                A role change is defined as any significant alteration to the original job position requested by the client. This can occur in the following scenarios:
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                <strong>Total Role Change:</strong> When the job position changes completely from one role to an entirely different role. For example, if the client initially wanted to hire an Executive Assistant (EA) but then decides to look for a Marketing Analyst, these are two completely different roles and constitute a total role change.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                <strong>Change in Role Characteristics:</strong> When the core characteristics of the role evolve, resulting in a fundamentally different position. For instance, if the client initially seeks a Back End Developer but later requires the candidate to also possess Front End development skills, the role changes to a Full Stack Developer. Similarly, if there are changes to critical aspects of the job, such as the industry focus, required tools, or even the search area, it will be considered a new search, starting the process from scratch.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                The Client may request a change of the contracted role from Inside Out on a one-time basis only. To initiate a role change, the Client must complete the Role Change Order form and contact the sales team to submit the Role Change Order. Upon formal notification of the role change order by the Client, the agreed-upon timelines for filling the position will be reset.
              </p>
            </section>

            {/* Candidate Suitability Verification */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                Candidate Suitability Verification
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Though Inside Out conducts a reference validation, it is Client's ultimate responsibility to verify each Candidate's suitability for a position. Candidates are not employees, partners, representatives, agents, joint venturers, or independent contractors of Inside Out. Inside Out will not supervise, scope, direct, control, or monitor the work performed by a Candidate and cannot and shall not accept any responsibility and/or liability of any kind for such work or the quality or absence thereof. Likewise, Inside Out shall not be responsible for any action or inaction on the part of a Candidate, whether in the interview stage or after Successful Hire. To the extent permitted by law, Client hereby releases Inside Out for and from any and all liability, claims, demands, and/or damages of any and every kind and/or nature, known or unknown, suspected or unsuspected arising out of the action and/or inaction of any and all Candidate(s).
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Inside Out reserves the right to conduct global background checks on behalf of the client. An additional fee will apply for this service, which will be the responsibility of the client.
              </p>
            </section>

            {/* Service Guarantee */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                Service Guarantee
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Subject to the terms and conditions outlined herein, Inside Out provides a Guarantee Period of 180 days. Such Guarantee Period begins on the date of Successful Hire. Inside Out pledges to undertake one (1) additional search at no additional cost to the Client when a Candidate exits the Client's service during the Guarantee Period. Inside Out reserves the right to void the Service Guarantee when the Candidate exits the Client's service for any of the following reasons:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">
                <li>Client lays off Candidate without valid cause;</li>
                <li>Client's breach of employment/independent contractor agreement with Candidate;</li>
                <li>Client's violation of applicable law, including jurisdictional employment laws;</li>
                <li>Client's reduction in workforce or change in corporate ownership; and</li>
                <li>Client's alteration of Candidate's job classification, location, terms, and/or duties.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                The Guarantee Period does not renew or extend for subsequent replacement Candidates. Inside Out's obligation to provide services under this section terminates upon the expiration of the Guarantee Period, regardless of whether the Client submits any requests during this period or if a replacement Candidate has been secured. It is understood that the guarantee does not cover situations where the Client has provided inaccurate or deceptive information regarding the position, Inside Out, or its hiring requirements, which may have influenced the selection of the Candidate. Furthermore, Inside Out shall not be held responsible for the Client's final hiring decisions or any issues arising due to changes in Inside Out's circumstances or the labor market.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Inside Out reserves the right to investigate the reasons for the Candidate's termination, as well as any requests from the Client under this section. It is further clarified that the Service Guarantee shall only be recognized once during the term of this Agreement. To activate the Service Guarantee, Client is required to provide written notice to Inside Out's Point of Contact.
              </p>
            </section>

            {/* Fee Policy */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                Fee Policy
              </h2>
              <p className="text-gray-700 leading-relaxed">
                When an Introduced Party is a) hired by Client or an affiliate of Client or otherwise engaged by Client or an affiliate of Client and b) such hiring or engagement occurs within 12 months of the Introduced Party being introduced to Client by Inside Out, the Headhunter's Fees shall be deemed fully earned, regardless of whether this Agreement has been terminated. In the event that the Headhunter's Fee has been returned to Client prior to engagement of an Introduced Party during the time frame set forth herein, Client agrees to pay the Headhunter's Fee to Inside Out within 10 days of written request by Inside Out along with any reasonable costs of collection, including attorney's fees, assessed for non-payment.
              </p>
            </section>

            {/* Compensation Responsibility */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                Compensation Responsibility
              </h2>
              <p className="text-gray-700 leading-relaxed">
                It is expressly agreed that Inside Out's role is limited to sourcing, recruiting, and introducing candidates for the Client's consideration, and does not extend to the employment or compensation of any virtual assistant. The Client acknowledges and accepts sole responsibility for establishing and disbursing the virtual assistant's salary, wages, benefits, and any other forms of compensation. Inside Out shall have no liability or obligation regarding the payment or management of the virtual assistant's compensation, which remains exclusively the responsibility of the Client.
              </p>
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
    </div>
  );
}
