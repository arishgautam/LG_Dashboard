import { Link } from "@/components/custom/landing/Link"
import { Text } from "@/components/custom/landing/Text"

export default function Privacy() {
    return (
        <>
            {/* Privacy Policy */}
            <section id="privacy_policy" className="bg-white border-b border-gray-200 py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"> Privacy Policy </h1>
                    <p className="text-gray-500"> Last updated: January 15, 2025 </p>
                </div>
            </section>

            {/* 1 Information We Collect */}
            <section id="1_information_we_collect" className="py-12 lg:py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-2xl p-6 lg:p-10">
                        <div className="prose prose-lg max-w-none">
                            <p className="text-gray-600 mb-8">
                                At VibrantMart, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you use our marketplace.
                            </p>
                            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4"> 1. Information We Collect </h2>
                            <p className="text-gray-600 mb-4">
                                We collect information you provide directly to us, including:
                            </p>
                            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                                <li>
                                    Name, email address, and contact information when you create an account
                                </li>
                                <li> Billing and shipping addresses for order fulfillment </li>
                                <li>
                                    Payment information (processed securely through our payment providers)
                                </li>
                                <li> Purchase history and transaction details </li>
                                <li> Communications with our customer support team </li>
                                <li> Reviews, ratings, and feedback you submit </li>
                            </ul>
                            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4"> 2. Automatic Information Collection </h2>
                            <p className="text-gray-600 mb-4"> When you access our platform, we automatically collect: </p>
                            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                                <li> Device information (type, operating system, browser) </li>
                                <li> IP address and approximate location </li>
                                <li> Browsing behavior and interaction with our site </li>
                                <li> Cookies and similar tracking technologies </li>
                            </ul>
                            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4"> 3. How We Use Your Information </h2>
                            <p className="text-gray-600 mb-4"> We use the collected information to: </p>
                            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                                <li> Process and fulfill your orders </li>
                                <li>
                                    Communicate with you about orders, products, and promotions
                                </li>
                                <li> Personalize your shopping experience </li>
                                <li> Improve our platform and services </li>
                                <li> Detect and prevent fraud or unauthorized activities </li>
                                <li> Comply with legal obligations </li>
                            </ul>
                            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4"> 4. Information Sharing </h2>
                            <p className="text-gray-600 mb-4"> We may share your information with: </p>
                            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                                <li>
                                    <strong> Sellers: </strong>
                                    To fulfill your orders, we share necessary shipping and order details
                                </li>
                                <li>
                                    <strong> Service Providers: </strong>
                                    Payment processors, shipping carriers, and analytics services
                                </li>
                                <li>
                                    <strong> Legal Requirements: </strong>
                                    When required by law or to protect our rights
                                </li>
                                <li>
                                    <strong> Business Transfers: </strong>
                                    In connection with mergers, acquisitions, or sale of assets
                                </li>
                            </ul>
                            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4"> 5. Data Security </h2>
                            <p className="text-gray-600 mb-6">
                                We implement industry-standard security measures to protect your personal information, including SSL encryption, secure servers, and regular security audits. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
                            </p>
                            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4"> 6. Your Privacy Rights </h2>
                            <p className="text-gray-600 mb-4"> Depending on your location, you may have the right to: </p>
                            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                                <li> Access your personal information </li>
                                <li> Correct inaccurate data </li>
                                <li> Delete your account and associated data </li>
                                <li> Opt out of marketing communications </li>
                                <li> Request data portability </li>
                            </ul>
                            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4"> 7. Cookies Policy </h2>
                            <p className="text-gray-600 mb-6">
                                We use cookies and similar technologies to enhance your experience, analyze site traffic, and personalize content. You can manage your cookie preferences through your browser settings. Note that disabling cookies may affect some features of our platform.
                            </p>
                            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4"> 8. Children's Privacy </h2>
                            <p className="text-gray-600 mb-6">
                                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that a child has provided us with personal information, we will take steps to delete such information.
                            </p>
                            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4"> 9. International Data Transfers </h2>
                            <p className="text-gray-600 mb-6">
                                Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data in accordance with applicable data protection laws.
                            </p>
                            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4"> 10. Changes to This Policy </h2>
                            <p className="text-gray-600 mb-6">
                                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date. Your continued use of our services after changes constitutes acceptance of the updated policy.
                            </p>
                            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4"> 11. Contact Us </h2>
                            <p className="text-gray-600 mb-4">
                                If you have any questions about this Privacy Policy or our data practices, please contact us:
                            </p>
                            <div className="bg-gray-100 rounded-xl p-6">
                                <p className="text-gray-600">
                                    <strong className="text-gray-900"> VibrantMart Privacy Team </strong>
                                    <br />
                                    Email:
                                    <Link className="text-blue-600 hover:underline" href="mailto:privacy@vibrantmart.com"> privacy@vibrantmart.com </Link>
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
                        <Link className="text-blue-600 hover:underline" href="terms.html"> Terms of Service </Link>
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