import { Link } from "@/components/custom/landing/Link"
import { Text } from "@/components/custom/landing/Text"

export default function Terms() {
    return (
        <>
            <section id="terms_of_service" className="bg-white border-b border-gray-200 py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"> Terms of Service </h1>
                    <p className="text-gray-500"> Last updated: January 15, 2025 </p>
                </div>
            </section>

            {/* 1 Acceptance Of Terms */}
            <section id="1_acceptance_of_terms" className="py-12 lg:py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-2xl p-6 lg:p-10">
                        <div className="prose prose-lg max-w-none">
                            <p className="text-gray-600 mb-8">
                                Welcome to VibrantMart. By accessing or using our marketplace, you agree to be bound by these Terms of Service. Please read them carefully before using our platform.
                            </p>
                            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4"> 1. Acceptance of Terms </h2>
                            <p className="text-gray-600 mb-6">
                                By creating an account, browsing, or making purchases on VibrantMart, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our services.
                            </p>
                            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4"> 2. Account Registration </h2>
                            <p className="text-gray-600 mb-4"> To use certain features of our platform, you must: </p>
                            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                                <li> Be at least 18 years old or have parental consent </li>
                                <li> Provide accurate and complete registration information </li>
                                <li> Maintain the security of your account credentials </li>
                                <li> Notify us immediately of any unauthorized account access </li>
                                <li>
                                    Accept responsibility for all activities under your account
                                </li>
                            </ul>
                            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4"> 3. Marketplace Services </h2>
                            <p className="text-gray-600 mb-6">
                                VibrantMart is a marketplace that connects buyers with independent sellers. We are not a party to transactions between buyers and sellers. We facilitate transactions but do not guarantee the quality, safety, legality, or availability of items listed on our platform.
                            </p>
                            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4"> 4. Buyer Responsibilities </h2>
                            <p className="text-gray-600 mb-4"> As a buyer, you agree to: </p>
                            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                                <li> Provide accurate shipping and payment information </li>
                                <li> Pay for items you purchase in a timely manner </li>
                                <li>
                                    Review product descriptions and seller policies before purchasing
                                </li>
                                <li> Communicate respectfully with sellers </li>
                                <li> Leave honest and fair reviews based on your experience </li>
                            </ul>
                            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4"> 5. Seller Responsibilities </h2>
                            <p className="text-gray-600 mb-4"> Sellers on VibrantMart must: </p>
                            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                                <li> Provide accurate product descriptions and images </li>
                                <li> Ship items within the stated timeframe </li>
                                <li> Honor their return and refund policies </li>
                                <li> Comply with all applicable laws and regulations </li>
                                <li>
                                    Not list prohibited items or engage in fraudulent activities
                                </li>
                                <li> Pay applicable seller fees and commissions </li>
                            </ul>
                            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4"> 6. Prohibited Activities </h2>
                            <p className="text-gray-600 mb-4"> The following activities are strictly prohibited: </p>
                            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                                <li> Selling counterfeit, stolen, or illegal items </li>
                                <li> Manipulating prices, reviews, or search rankings </li>
                                <li> Harassing or threatening other users </li>
                                <li> Using the platform for money laundering or fraud </li>
                                <li> Attempting to circumvent platform fees </li>
                                <li> Scraping or data mining without authorization </li>
                                <li> Violating intellectual property rights </li>
                            </ul>
                            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4"> 7. Payments and Fees </h2>
                            <p className="text-gray-600 mb-6">
                                All payments are processed through our secure payment system. Prices are displayed in USD unless otherwise indicated. Sellers are subject to commission fees as outlined in our Seller Agreement. We reserve the right to modify our fee structure with reasonable notice.
                            </p>
                            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4"> 8. Returns and Refunds </h2>
                            <p className="text-gray-600 mb-6">
                                Return policies vary by seller. Please review individual seller policies before purchasing. VibrantMart offers a Buyer Protection program for qualifying disputes. Refund processing times depend on the payment method and your financial institution.
                            </p>
                            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4"> 9. Intellectual Property </h2>
                            <p className="text-gray-600 mb-6">
                                The VibrantMart name, logo, and platform content are protected by intellectual property laws. Users retain ownership of their content but grant us a license to display and promote listings. We respect intellectual property rights and respond to valid infringement claims.
                            </p>
                            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4"> 10. Limitation of Liability </h2>
                            <p className="text-gray-600 mb-6">
                                VibrantMart is provided "as is" without warranties of any kind. We are not liable for indirect, incidental, or consequential damages arising from your use of our platform. Our total liability is limited to the amount you paid us in the past 12 months.
                            </p>
                            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4"> 11. Dispute Resolution </h2>
                            <p className="text-gray-600 mb-6">
                                For disputes between buyers and sellers, we encourage direct communication first. If unresolved, our Resolution Center can help mediate. Legal disputes with VibrantMart will be resolved through binding arbitration in San Francisco, California, except where prohibited by law.
                            </p>
                            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4"> 12. Account Termination </h2>
                            <p className="text-gray-600 mb-6">
                                We reserve the right to suspend or terminate accounts that violate these terms or engage in fraudulent activity. You may close your account at any time by contacting support. Outstanding obligations survive account termination.
                            </p>
                            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4"> 13. Changes to Terms </h2>
                            <p className="text-gray-600 mb-6">
                                We may update these Terms of Service from time to time. Material changes will be communicated via email or platform notification. Continued use of our services after changes constitutes acceptance of the updated terms.
                            </p>
                            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4"> 14. Governing Law </h2>
                            <p className="text-gray-600 mb-6">
                                These Terms of Service are governed by the laws of the State of California, United States, without regard to conflict of law principles. Any legal proceedings must be brought in San Francisco County, California.
                            </p>
                            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4"> 15. Contact Information </h2>
                            <p className="text-gray-600 mb-4">
                                For questions about these Terms of Service, please contact us:
                            </p>
                            <div className="bg-gray-100 rounded-xl p-6">
                                <p className="text-gray-600">
                                    <strong className="text-gray-900"> VibrantMart Legal Team </strong>
                                    <br />
                                    Email:
                                    <Link className="text-blue-600 hover:underline" href="mailto:legal@vibrantmart.com"> legal@vibrantmart.com </Link>
                                    <br />
                                    Address: 123 Commerce Street, San Francisco, CA 94102
                                    <br />
                                    Phone:
                                    <Link className="text-blue-600 hover:underline" href="tel:+18001234567"> 1-800-123-4567 </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Quick Links */}
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm">
                        <Link className="text-blue-600 hover:underline" href="privacy.html"> Privacy Policy </Link>
                        <Text className="text-gray-300"> | </Text>
                        <Link className="text-blue-600 hover:underline" href="contact.html"> Contact Us </Link>
                        <Text className="text-gray-300"> | </Text>
                        <Link className="text-blue-600 hover:underline" href="index.html"> Return to Home </Link>
                    </div>
                </div>
            </section>
        </>
    )
}