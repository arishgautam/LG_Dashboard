import { Link } from "@/components/custom/landing/Link"
import { Button } from "@/components/custom/landing/Button"
import { Text } from "@/components/custom/landing/Text"


import { Phone } from "lucide-react"
import { ChevronDown } from "lucide-react"
import { MapPin } from "lucide-react"
import { Mail } from "lucide-react"
import { MessageCircle } from "lucide-react"
import ContactUsForm from "@/components/landing/ContactUsForm"
import { useState } from "react";

export default function Contact() {

    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <>
            {/* Get In Touch */}
            <section id="get_in_touch" className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 py-16 lg:py-20 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-400 rounded-full blur-3xl"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"> Get in Touch </h1>
                    <p className="text-lg text-blue-100 max-w-2xl mx-auto">
                        Have a question or need assistance? Our team is here to help you 24/7.
                    </p>
                </div>
            </section>

            {/* Call Us */}
            <section id="call_us" className="py-12 lg:py-16 -mt-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Phone */}
                        <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                            <div className="w-14 h-14 bg-blue-100  rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Phone className="w-7 h-7 text-blue-600 " />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2"> Call Us </h3>
                            <p className="text-gray-500 mb-4"> Mon-Fri 8am to 8pm EST </p>
                            <Link className="text-blue-600  font-semibold hover:underline" href="tel:+18001234567"> 1-800-123-4567 </Link>
                        </div>
                        {/* Email */}
                        <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                            <div className="w-14 h-14 bg-green-100  rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Mail className="w-7 h-7 text-green-600 " />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2"> Email Us </h3>
                            <p className="text-gray-500 mb-4"> We reply within 24 hours </p>
                            <Link className="text-blue-600  font-semibold hover:underline" href="mailto:support@vibrantmart.com"> support@vibrantmart.com </Link>
                        </div>
                        {/* Chat */}
                        <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                            <div className="w-14 h-14 bg-orange-100  rounded-xl flex items-center justify-center mx-auto mb-4">
                                <MessageCircle className="w-7 h-7 text-orange-600 " />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2"> Live Chat </h3>
                            <p className="text-gray-500 mb-4"> Available 24/7 </p>
                            <Button className="text-blue-600  font-semibold hover:underline"> Start Chat </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Send Us A Message */}
            <section id="send_us_a_message" className="py-12 lg:py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6"> Send Us a Message </h2>
                            <ContactUsForm />
                        </div>
                        {/* Additional Info */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6"> Help Center </h2>
                            {/* FAQ Accordion */}
                            <div className="space-y-4 mb-8">
                                <div className="bg-gray-100 rounded-xl overflow-hidden">
                                    <button onClick={() => { setOpenFaq(openFaq === 1 ? null : 1) }} className="w-full px-6 py-4 text-left flex items-center justify-between">
                                        <Text className="font-medium text-gray-900"> How do I track my order? </Text>
                                        <ChevronDown className="w-5 h-5 text-gray-500 transition-transform" />
                                    </button>
                                    {openFaq === 1 && (
                                        <div x-collapse="" className="px-6 pb-4 text-gray-600 ">
                                            You can track your order by logging into your account and visiting the "Orders" section. You'll also receive tracking updates via email once your order ships.
                                        </div>
                                    )}
                                </div>
                                <div className="bg-gray-100 rounded-xl overflow-hidden">
                                    <button onClick={() => { setOpenFaq(openFaq === 2 ? null : 2) }} className="w-full px-6 py-4 text-left flex items-center justify-between">
                                        <Text className="font-medium text-gray-900"> What is your return policy? </Text>
                                        <ChevronDown className="w-5 h-5 text-gray-500 transition-transform" />
                                    </button>
                                    {openFaq === 2 && (
                                        <div x-collapse="" className="px-6 pb-4 text-gray-600 ">
                                            We offer a 30-day return policy for most items. Items must be unused and in original packaging. Some exclusions apply for certain product categories.
                                        </div>
                                    )}
                                </div>
                                <div className="bg-gray-100 rounded-xl overflow-hidden">
                                    <button onClick={() => { setOpenFaq(openFaq === 3 ? null : 3) }} className="w-full px-6 py-4 text-left flex items-center justify-between">
                                        <Text className="font-medium text-gray-900"> How do I become a seller? </Text>
                                        <ChevronDown className="w-5 h-5 text-gray-500 transition-transform" />
                                    </button>
                                    {openFaq === 3 && (
                                        <div x-collapse="" className="px-6 pb-4 text-gray-600 ">
                                            Visit our
                                            <Link className="text-blue-600  hover:underline" href="sellers.html"> Sellers page </Link>
                                            and click "Start Selling Today". The registration process takes about 24 hours for approval.
                                        </div>
                                    )}
                                </div>
                                <div className="bg-gray-100 rounded-xl overflow-hidden">
                                    <button onClick={() => { setOpenFaq(openFaq === 4 ? null : 4) }} className="w-full px-6 py-4 text-left flex items-center justify-between">
                                        <Text className="font-medium text-gray-900"> Do you ship internationally? </Text>
                                        <ChevronDown className="w-5 h-5 text-gray-500 transition-transform" />
                                    </button>
                                    {openFaq === 4 && (
                                        <div x-collapse="" className="px-6 pb-4 text-gray-600 ">
                                            Yes! We ship to over 50 countries worldwide. International shipping rates and delivery times vary by location. Check availability at checkout.
                                        </div>
                                    )}
                                </div>
                            </div>
                            {/* Office Location */}
                            <div className="bg-gray-100 rounded-2xl p-6">
                                <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                    <MapPin className="w-5 h-5 text-blue-600" />
                                    Headquarters
                                </h3>
                                <address className="text-gray-600  not-italic mb-4">
                                    VibrantMart Inc.
                                    <br />
                                    123 Commerce Street
                                    <br />
                                    San Francisco, CA 94102
                                    <br />
                                    United States
                                </address>
                                <div className="aspect-video rounded-xl overflow-hidden bg-gray-300">
                                    <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=300&fit=crop" alt="Office building" fill sizes="100vw" className="w-full h-full object-cover" />
                                </div>
                            </div>
                            {/* Social Links */}
                            <div className="mt-8">
                                <h3 className="font-semibold text-gray-900 mb-4"> Follow Us </h3>
                                <div className="flex gap-4">
                                    <Link className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors" href="https://facebook.com">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 640 640" fill="#fff">
                                            <path d="M581.7 188.1C575.5 164.4 556.9 145.8 533.4 139.5C490.9 128 320.1 128 320.1 128C320.1 128 149.3 128 106.7 139.5C83.2 145.8 64.7 164.4 58.4 188.1C47 231 47 320.4 47 320.4C47 320.4 47 409.8 58.4 452.7C64.7 476.3 83.2 494.2 106.7 500.5C149.3 512 320.1 512 320.1 512C320.1 512 490.9 512 533.5 500.5C557 494.2 575.5 476.3 581.8 452.7C593.2 409.8 593.2 320.4 593.2 320.4C593.2 320.4 593.2 231 581.8 188.1zM264.2 401.6L264.2 239.2L406.9 320.4L264.2 401.6z" /></svg>
                                    </Link>
                                    <Link className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-blue-400 hover:text-white transition-colors" href="https://x.com">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 640 640" fill="#fff">
                                            <path d="M453.2 112L523.8 112L369.6 288.2L551 528L409 528L297.7 382.6L170.5 528L99.8 528L264.7 339.5L90.8 112L236.4 112L336.9 244.9L453.2 112zM428.4 485.8L467.5 485.8L215.1 152L173.1 152L428.4 485.8z" /></svg>
                                    </Link>
                                    <Link className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-pink-500 hover:text-white transition-colors" href="https://instagram.com">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 640 640" fill="#fff">
                                            <path d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z" /></svg>
                                    </Link>
                                    <Link className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-blue-700 hover:text-white transition-colors" href="https://linkedin.com">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="w-7 h-7" fill="#fff">
                                            <path d="M512 96L127.9 96C110.3 96 96 110.5 96 128.3L96 511.7C96 529.5 110.3 544 127.9 544L512 544C529.6 544 544 529.5 544 511.7L544 128.3C544 110.5 529.6 96 512 96zM231.4 480L165 480L165 266.2L231.5 266.2L231.5 480L231.4 480zM198.2 160C219.5 160 236.7 177.2 236.7 198.5C236.7 219.8 219.5 237 198.2 237C176.9 237 159.7 219.8 159.7 198.5C159.7 177.2 176.9 160 198.2 160zM480.3 480L413.9 480L413.9 376C413.9 351.2 413.4 319.3 379.4 319.3C344.8 319.3 339.5 346.3 339.5 374.2L339.5 480L273.1 480L273.1 266.2L336.8 266.2L336.8 295.4L337.7 295.4C346.6 278.6 368.3 260.9 400.6 260.9C467.8 260.9 480.3 305.2 480.3 362.8L480.3 480z" /></svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}