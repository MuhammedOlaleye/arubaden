import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Breadcrumbs from '@/components/breadcrumbs'

export const metadata: Metadata = {
  title: 'Terms & Conditions — Arubaden',
  description:
    'The tour booking terms and conditions that govern all bookings made with Arubaden.',
}

const sections: { title: string; body: (string | string[])[] }[] = [
  {
    title: '1. Booking Confirmation',
    body: [
      'A booking is confirmed only after:',
      [
        'A completed booking form has been submitted.',
        'The required registration deposit has been paid.',
        'ARUBADEN has issued a booking confirmation.',
      ],
      'ARUBADEN reserves the right to decline or cancel any booking before departure for legitimate operational, safety, legal, or compliance reasons. If ARUBADEN cancels before services are provided for reasons unrelated to the Client, the Client will receive any refund due under these Terms and Conditions.',
    ],
  },
  {
    title: '2. Deposit and Payment',
    body: [
      'The registration deposit secures the Client\u2019s space but does not guarantee flights, hotel reservations, visas, or other travel services until ARUBADEN has confirmed those arrangements.',
      'All outstanding balances must be paid by the payment deadline communicated to the Client.',
      'Failure to complete payment by the stated deadline may result in cancellation of the booking and forfeiture of amounts that are non-refundable because they have already been committed to airlines, hotels, tour operators, visa providers, or other suppliers.',
    ],
  },
  {
    title: '3. Cancellation by the Client',
    body: [
      'Cancellation requests must be submitted to ARUBADEN in writing.',
      'Where refundable amounts remain after deducting non-refundable costs already paid or committed to airlines, hotels, visa providers, insurance companies, tour operators, payment processors, and applicable administrative charges, the remaining eligible balance may be refunded.',
      'If flights, hotels, visas, insurance, tours, transfers, or other services are expressly non-refundable under the applicable supplier\u2019s terms, those amounts will not be refundable.',
    ],
  },
  {
    title: '4. Cancellation or Postponement by ARUBADEN',
    body: [
      'ARUBADEN may cancel or postpone a tour because of circumstances including, but not limited to:',
      [
        'Insufficient number of participants.',
        'Government restrictions or regulations.',
        'Natural disasters.',
        'Civil unrest.',
        'Epidemics or pandemics.',
        'Airline disruptions.',
        'Security concerns.',
        'Border restrictions or closures.',
        'Events beyond ARUBADEN\u2019s reasonable control.',
      ],
      'Where reasonably possible, ARUBADEN may offer:',
      [
        'An alternative departure date;',
        'A travel credit; or',
        'Any refund due after deducting non-recoverable supplier costs, where permitted by applicable law and supplier contracts.',
      ],
    ],
  },
  {
    title: '5. Visa Applications',
    body: [
      'Visa approval is solely the decision of the relevant embassy, consulate, immigration authority, or other competent government authority.',
      'ARUBADEN does not guarantee visa approval.',
      'Visa fees, embassy or consular fees, document preparation costs, appointment fees, processing fees, and other related expenses may be non-refundable once incurred.',
      'A Client\u2019s inability to obtain a visa does not automatically entitle the Client to a full refund where non-refundable travel or supplier costs have already been incurred.',
    ],
  },
  {
    title: '6. Flight Changes and Airline Operations',
    body: [
      'Airlines may independently change:',
      [
        'Flight times;',
        'Flight routes;',
        'Aircraft;',
        'Seat assignments;',
        'Baggage allowances;',
        'Flight schedules; or',
        'Other operational arrangements.',
      ],
      'ARUBADEN is not responsible for operational decisions made by airlines or other independent transportation providers.',
      'Where appropriate, ARUBADEN will communicate material changes to the Client and provide reasonable assistance within the scope of the services purchased.',
    ],
  },
  {
    title: '7. Passport and Travel Document Requirements',
    body: [
      'Clients are responsible for possessing a valid passport and all documents required for their destination, including visas, permits, vaccination certificates, entry authorizations, and other applicable travel documents.',
      'Clients must independently ensure that their passport meets the validity requirements of the destination and transit countries.',
      'ARUBADEN is not responsible for a Client being denied boarding, transit, or entry because of missing, expired, inaccurate, or invalid documentation.',
    ],
  },
  {
    title: '8. Health and Medical Fitness',
    body: [
      'Clients are responsible for ensuring that they are medically fit to participate in the tour and for obtaining any medical advice, vaccinations, medications, or documentation required for travel.',
      'Clients should notify ARUBADEN in advance of any condition that may reasonably require special travel arrangements or assistance.',
      'ARUBADEN is not responsible for medical expenses incurred by a Client during the trip unless otherwise required by applicable law or expressly included in the purchased package.',
    ],
  },
  {
    title: '9. Travel Insurance',
    body: [
      'Travel insurance is strongly recommended and may be mandatory for certain destinations or travel arrangements.',
      'Where travel insurance is included in a package, coverage is subject to the terms, conditions, exclusions, and limits of the applicable insurance policy.',
      'Clients are responsible for reviewing their insurance coverage and ensuring that it adequately meets their individual needs.',
    ],
  },
  {
    title: '10. Client Conduct',
    body: [
      'All Clients are expected to behave respectfully and responsibly throughout the tour.',
      'ARUBADEN may remove a Client from a tour, without refund for unused services, where the Client engages in conduct that seriously disrupts the trip or threatens the safety, enjoyment, dignity, or rights of other travelers, staff, suppliers, or members of the public.',
      'Examples of unacceptable conduct include:',
      [
        'Violence or physical aggression;',
        'Threats or intimidation;',
        'Harassment;',
        'Persistent abusive or offensive language;',
        'Excessive intoxication;',
        'Illegal drug use;',
        'Criminal conduct;',
        'Intentional damage to property;',
        'Sexual harassment or inappropriate conduct;',
        'Conduct that places another person at unreasonable risk.',
      ],
      'Any additional costs resulting from such conduct may be charged to the Client where permitted by law.',
    ],
  },
  {
    title: '11. Social Media and Public Statements',
    body: [
      'Clients are welcome to share their genuine experiences and opinions about ARUBADEN.',
      'However, Clients agree not to knowingly publish false, misleading, fraudulent, or defamatory statements about ARUBADEN, its staff, representatives, or partners.',
      'Nothing in this clause prevents a Client from:',
      [
        'Making a truthful complaint;',
        'Giving an honest review;',
        'Reporting legitimate concerns to a regulator or competent authority; or',
        'Exercising any legal rights available to them.',
      ],
    ],
  },
  {
    title: '12. Photography and Media',
    body: [
      'ARUBADEN may photograph, film, or otherwise record group activities for legitimate promotional, marketing, documentation, or social-media purposes.',
      'Clients who do not wish to appear in promotional photography or video should notify ARUBADEN in writing before departure.',
      'ARUBADEN will make reasonable efforts to respect such requests.',
    ],
  },
  {
    title: '13. Force Majeure',
    body: [
      'ARUBADEN shall not be liable for delays, changes, interruptions, or cancellations resulting from circumstances beyond its reasonable control, including but not limited to:',
      [
        'War or threat of war;',
        'Terrorism or security incidents;',
        'Government actions or restrictions;',
        'Border closures;',
        'Severe weather;',
        'Natural disasters;',
        'Airline strikes or industrial action;',
        'Public health emergencies;',
        'Political unrest;',
        'Changes in immigration or travel regulations; or',
        'Other events beyond ARUBADEN\u2019s reasonable control.',
      ],
    ],
  },
  {
    title: '14. Limitation of Responsibility',
    body: [
      'ARUBADEN may act as a tour organizer, travel coordinator, booking agent, or intermediary for services provided by airlines, hotels, transportation companies, tour operators, excursion providers, insurance companies, visa providers, and other independent suppliers.',
      'ARUBADEN is not responsible for losses, delays, injuries, cancellations, damages, or failures arising from the acts or omissions of independent suppliers, except to the extent that liability cannot legally be excluded or limited.',
      'Nothing in these Terms and Conditions excludes or limits any liability that cannot legally be excluded under applicable law.',
    ],
  },
  {
    title: '15. Baggage and Personal Property',
    body: [
      'Clients are responsible for their own luggage, valuables, travel documents, electronic devices, money, passports, and personal belongings throughout the trip.',
      'ARUBADEN is not responsible for lost, stolen, misplaced, or damaged personal property except where liability is imposed by applicable law.',
      'Clients should take reasonable precautions to protect their belongings and should comply with airline and hotel baggage requirements.',
    ],
  },
  {
    title: '16. Refund Processing',
    body: [
      'Where a refund is approved, ARUBADEN will process the refundable amount within a reasonable period after receiving the applicable refundable funds from the relevant supplier, where such supplier recovery is required.',
      'The timing of a refund may therefore depend on airlines, hotels, tour operators, payment processors, insurance providers, or other third-party suppliers.',
    ],
  },
  {
    title: '17. Complaints',
    body: [
      'Clients should report any problem or complaint to ARUBADEN or its designated representative as soon as reasonably possible during the trip.',
      'Clients are expected to give ARUBADEN a reasonable opportunity to investigate and, where possible, resolve the issue while the tour is ongoing.',
      'Complaints made after the tour should be submitted in writing within a reasonable period after the Client\u2019s return.',
    ],
  },
  {
    title: '18. Privacy and Personal Information',
    body: [
      'ARUBADEN may collect, store, process, and use Client information for purposes including:',
      [
        'Booking and reservation management;',
        'Flight and hotel arrangements;',
        'Visa and travel documentation;',
        'Tour administration;',
        'Emergency communication;',
        'Payment processing;',
        'Legal and regulatory compliance; and',
        'Other legitimate travel-related purposes.',
      ],
      'ARUBADEN will handle personal information in accordance with applicable privacy and data-protection laws.',
    ],
  },
  {
    title: '19. Governing Law',
    body: [
      'These Terms and Conditions shall be governed by and interpreted in accordance with the laws of the Federal Republic of Nigeria, unless another law is required to apply by mandatory legal provisions.',
    ],
  },
  {
    title: '20. Dispute Resolution',
    body: [
      'Before commencing court proceedings, both parties agree to make a genuine and reasonable effort to resolve any dispute through good-faith communication and negotiation.',
      'Where appropriate, the parties may refer the dispute to mediation before pursuing further legal remedies, unless urgent court action is legally necessary or otherwise permitted.',
      'Nothing in this clause prevents either party from exercising any legal right or remedy available under applicable law.',
    ],
  },
  {
    title: '21. Acceptance of Terms',
    body: [
      'By signing the booking form, making a payment, or participating in a tour organized by ARUBADEN, the Client confirms that they have read, understood, and accepted these Terms and Conditions.',
    ],
  },
]

export default function TermsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Page hero */}
        <section
          className="pt-40 pb-14 px-5 lg:px-10"
          style={{ backgroundColor: '#073B5C' }}
          aria-labelledby="terms-heading"
        >
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs
              items={[{ label: 'Home', href: '/' }, { label: 'Terms & Conditions' }]}
              light
            />
            <h1
              id="terms-heading"
              className="font-serif text-balance mt-4"
              style={{ color: '#FAFCFB', fontSize: 'clamp(2.2rem, 5vw, 3.25rem)', lineHeight: 1.1 }}
            >
              Tour Booking Terms & Conditions
            </h1>
            <p className="mt-4 text-sm" style={{ color: '#EAF7FA88' }}>
              Effective Date: August 8th, 2026
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="pt-14 pb-4 px-5 lg:px-10">
          <div className="max-w-4xl mx-auto">
            <p className="text-base leading-relaxed" style={{ color: '#4a6478' }}>
              These Terms and Conditions govern all bookings made with ARUBADEN (&ldquo;the
              Company&rdquo;). By paying a deposit, signing the booking form, or participating in
              any tour organized by ARUBADEN, the traveler (&ldquo;Client&rdquo;) confirms that
              they have read, understood, and agreed to these Terms and Conditions.
            </p>
          </div>
        </section>

        {/* Sections */}
        <section className="pb-24 px-5 lg:px-10" aria-label="Terms and conditions sections">
          <div className="max-w-4xl mx-auto flex flex-col gap-10">
            {sections.map((section) => (
              <div
                key={section.title}
                className="pt-10"
                style={{ borderTop: '1px solid #D9E8EA' }}
              >
                <h2
                  className="font-serif text-xl mb-4"
                  style={{ color: '#073B5C' }}
                >
                  {section.title}
                </h2>
                <div className="flex flex-col gap-3">
                  {section.body.map((item, i) =>
                    Array.isArray(item) ? (
                      <ul key={i} className="flex flex-col gap-2 pl-1">
                        {item.map((point, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-2.5 text-sm leading-relaxed"
                            style={{ color: '#4a6478' }}
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2"
                              style={{ backgroundColor: '#3BC7C4' }}
                              aria-hidden="true"
                            />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p
                        key={i}
                        className="text-sm leading-relaxed"
                        style={{ color: '#4a6478' }}
                      >
                        {item}
                      </p>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
