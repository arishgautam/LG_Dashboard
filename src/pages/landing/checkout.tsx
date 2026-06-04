import { Text } from "@/components/custom/landing/Text"
import { Input } from "@/components/custom/landing/Input"
import { ArrowRight } from "lucide-react"
import { CreditCard } from "lucide-react"
import { Wallet } from "lucide-react"
import { Smartphone } from "lucide-react"
import { Lock } from "lucide-react"
import { ArrowLeft } from "lucide-react"
import { Image } from "@/components/custom/landing/Image"
import { Button } from "@/components/custom/landing/Button"
import { ShieldCheck } from "lucide-react"
import { RefreshCw } from "lucide-react"
import { useState } from "react"


export default function Checkout() {

    const [step, setStep] = useState(1);
    const [paymentMethod, setPaymentMethod] = useState("card");

    return (
        <>
            {/* Progress Steps */}
            <div className="bg-white border-b border-gray-200 py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-center">
                        <div className="flex items-center gap-4 md:gap-8">
                            {/* Step 1 */}
                            <div className={`flex items-center gap-2 ${step >= 1 ? 'text-blue-600' : 'text-gray-400'}`}>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${step >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}> 1 </div>
                                <Text className="hidden sm:inline font-medium"> Shipping </Text>
                            </div>
                            <div className={`w-12 h-0.5 ${step >= 2 ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
                            {/* Step 2 */}
                            <div className={`flex items-center gap-2 ${step >= 2 ? 'text-blue-600' : 'text-gray-400'}`}>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${step >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}> 2 </div>
                                <Text className="hidden sm:inline font-medium"> Payment </Text>
                            </div>
                            <div className={`w-12 h-0.5 ${step >= 3 ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
                            {/* Step 3 */}
                            <div className={`flex items-center gap-2 ${step >= 3 ? 'text-blue-600' : 'text-gray-400'}`}>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${step >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}> 3 </div>
                                <Text className="hidden sm:inline font-medium"> Review </Text>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Checkout Content */}
            <main className="py-8 lg:py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Forms Column */}
                        <div className="lg:col-span-2">
                            {/* Step 1: Shipping Information */}
                            {step === 1 && (
                                <div className="bg-white rounded-2xl p-6 lg:p-8">
                                    <h2 className="text-xl font-bold text-gray-900 mb-6"> Shipping Information </h2>
                                    <form className="space-y-6">
                                        {/* Contact Info */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2"> Email Address </label>
                                            <Input className="w-full px-4 py-3 bg-gray-100 rounded-xl border-0 focus:ring-2 focus:ring-blue-500" type="email" placeholder="your@email.com" />
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2"> First Name </label>
                                                <Input className="w-full px-4 py-3 bg-gray-100 rounded-xl border-0 focus:ring-2 focus:ring-blue-500" type="text" placeholder="John" />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2"> Last Name </label>
                                                <Input className="w-full px-4 py-3 bg-gray-100 rounded-xl border-0 focus:ring-2 focus:ring-blue-500" type="text" placeholder="Doe" />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2"> Street Address </label>
                                            <Input className="w-full px-4 py-3 bg-gray-100 rounded-xl border-0 focus:ring-2 focus:ring-blue-500" type="text" placeholder="123 Main Street" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2"> Apartment, Suite, etc. (optional) </label>
                                            <Input className="w-full px-4 py-3 bg-gray-100 rounded-xl border-0 focus:ring-2 focus:ring-blue-500" type="text" placeholder="Apt 4B" />
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2"> City </label>
                                                <Input className="w-full px-4 py-3 bg-gray-100 rounded-xl border-0 focus:ring-2 focus:ring-blue-500" type="text" placeholder="New York" />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2"> State </label>
                                                <select className="w-full px-4 py-3 bg-gray-100 rounded-xl border-0 focus:ring-2 focus:ring-blue-500">
                                                    <option> Select State </option>
                                                    <option> California </option>
                                                    <option> New York </option>
                                                    <option> Texas </option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2"> ZIP Code </label>
                                                <Input className="w-full px-4 py-3 bg-gray-100 rounded-xl border-0 focus:ring-2 focus:ring-blue-500" type="text" placeholder="10001" />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2"> Phone Number </label>
                                            <Input className="w-full px-4 py-3 bg-gray-100 rounded-xl border-0 focus:ring-2 focus:ring-blue-500" type="tel" placeholder="(555) 123-4567" />
                                        </div>
                                        {/* Shipping Method */}
                                        <div className="border-t border-gray-200 pt-6">
                                            <h3 className="text-lg font-semibold text-gray-900 mb-4"> Shipping Method </h3>
                                            <div className="space-y-3">
                                                <label className="flex items-center justify-between p-4 bg-blue-50 border-2 border-blue-500 rounded-xl cursor-pointer">
                                                    <div className="flex items-center gap-3">
                                                        <Input variant="text" className="w-5 h-5 text-blue-600" type="radio" name="shipping" />
                                                        <div>
                                                            <Text className="font-medium text-gray-900"> Free Standard Shipping </Text>
                                                            <p className="text-sm text-gray-500"> 5-7 business days </p>
                                                        </div>
                                                    </div>
                                                    <Text variant="bold" className="font-semibold text-green-600"> Free </Text>
                                                </label>
                                                <label className="flex items-center justify-between p-4 bg-gray-100 border-2 border-transparent rounded-xl cursor-pointer hover:border-gray-300">
                                                    <div className="flex items-center gap-3">
                                                        <Input variant="text" className="w-5 h-5 text-blue-600" type="radio" name="shipping" />
                                                        <div>
                                                            <Text className="font-medium text-gray-900"> Express Shipping </Text>
                                                            <p className="text-sm text-gray-500"> 2-3 business days </p>
                                                        </div>
                                                    </div>
                                                    <Text variant="bold" className="font-semibold text-gray-900"> $12.99 </Text>
                                                </label>
                                                <label className="flex items-center justify-between p-4 bg-gray-100 border-2 border-transparent rounded-xl cursor-pointer hover:border-gray-300">
                                                    <div className="flex items-center gap-3">
                                                        <Input variant="text" className="w-5 h-5 text-blue-600" type="radio" name="shipping" />
                                                        <div>
                                                            <Text className="font-medium text-gray-900"> Next Day Delivery </Text>
                                                            <p className="text-sm text-gray-500"> Order before 2pm </p>
                                                        </div>
                                                    </div>
                                                    <Text variant="bold" className="font-semibold text-gray-900"> $24.99 </Text>
                                                </label>
                                            </div>
                                        </div>
                                        <button onClick={() => { setStep(2) }} type="button" className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg flex items-center justify-center gap-2">
                                            Continue to Payment
                                            <ArrowRight className="w-5 h-5" />
                                        </button>
                                    </form>
                                </div>
                            )}
                            {/* Step 2: Payment Information */}
                            {step === 2 && (
                                <div className="bg-white rounded-2xl p-6 lg:p-8">
                                    <h2 className="text-xl font-bold text-gray-900 mb-6"> Payment Method </h2>
                                    <form className="space-y-6">
                                        {/* Payment Method Selection */}
                                        <div className="grid grid-cols-3 gap-3">
                                            <button onClick={() => { setPaymentMethod('card') }} type="button" className={`p-4 rounded-xl border-2 transition-all text-center ${paymentMethod === 'card' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}>
                                                <CreditCard className="w-6 h-6 mx-auto mb-2" />
                                                <Text className="text-sm font-medium"> Card </Text>
                                            </button>
                                            <button onClick={() => { setPaymentMethod('paypal') }} type="button" className={`p-4 rounded-xl border-2 transition-all text-center ${paymentMethod === 'paypal' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}>
                                                <Wallet className="w-6 h-6 mx-auto mb-2" />
                                                <Text className="text-sm font-medium"> PayPal </Text>
                                            </button>
                                            <button onClick={() => { setPaymentMethod('apple') }} type="button" className={`p-4 rounded-xl border-2 transition-all text-center ${paymentMethod === 'apple' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}>
                                                <Smartphone className="w-6 h-6 mx-auto mb-2" />
                                                <Text className="text-sm font-medium"> Apple Pay </Text>
                                            </button>
                                        </div>
                                        {/* Card Form */}
                                        {paymentMethod === 'card' && (
                                            <div className="space-y-4">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2"> Card Number </label>
                                                    <div className="relative">
                                                        <Input className="w-full px-4 py-3 pl-12 bg-gray-100 rounded-xl border-0 focus:ring-2 focus:ring-blue-500" type="text" placeholder="1234 5678 9012 3456" />
                                                        <CreditCard className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700 mb-2"> Expiry Date </label>
                                                        <Input className="w-full px-4 py-3 bg-gray-100 rounded-xl border-0 focus:ring-2 focus:ring-blue-500" type="text" placeholder="MM/YY" />
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700 mb-2"> CVV </label>
                                                        <div className="relative">
                                                            <Input className="w-full px-4 py-3 bg-gray-100 rounded-xl border-0 focus:ring-2 focus:ring-blue-500" type="text" placeholder="123" />
                                                            <Lock className="w-4 h-4 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2"> Cardholder Name </label>
                                                    <Input className="w-full px-4 py-3 bg-gray-100 rounded-xl border-0 focus:ring-2 focus:ring-blue-500" type="text" placeholder="John Doe" />
                                                </div>
                                                <label className="flex items-center gap-3 cursor-pointer">
                                                    <Input variant="text" className="w-5 h-5 rounded text-blue-600" type="checkbox" />
                                                    <Text className="text-sm text-gray-600"> Save card for future purchases </Text>
                                                </label>
                                            </div>
                                        )}
                                        {/* PayPal */}
                                        {paymentMethod === 'paypal' && (
                                            <div className="text-center py-8">
                                                <Wallet className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                                                <p className="text-gray-600 mb-4">
                                                    You will be redirected to PayPal to complete your payment.
                                                </p>
                                            </div>
                                        )}
                                        {/* Apple Pay */}
                                        {paymentMethod === 'apple' && (
                                            <div className="text-center py-8">
                                                <Smartphone className="w-16 h-16 text-gray-800 mx-auto mb-4" />
                                                <p className="text-gray-600 mb-4"> Confirm payment using Apple Pay on your device. </p>
                                            </div>
                                        )}
                                        {/* Billing Address */}
                                        <div className="border-t border-gray-200 pt-6">
                                            <label className="flex items-center gap-3 cursor-pointer">
                                                <Input variant="text" className="w-5 h-5 rounded text-blue-600" type="checkbox" />
                                                <Text className="text-sm text-gray-600"> Billing address is the same as shipping address </Text>
                                            </label>
                                        </div>
                                        <div className="flex gap-4">
                                            <button onClick={() => { setStep(1) }} type="button" className="flex-1 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                                                <ArrowLeft className="w-5 h-5" />
                                                Back
                                            </button>
                                            <button onClick={() => { setStep(3) }} type="button" className="flex-1 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg flex items-center justify-center gap-2">
                                                Review Order
                                                <ArrowRight className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            )}
                            {/* Step 3: Review Order */}
                            {step === 3 && (
                                <div className="bg-white rounded-2xl p-6 lg:p-8">
                                    <h2 className="text-xl font-bold text-gray-900 mb-6"> Review Your Order </h2>
                                    {/* Shipping Info Summary */}
                                    <div className="mb-6 p-4 bg-gray-100 rounded-xl">
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="font-semibold text-gray-900"> Shipping Address </h3>
                                            <button onClick={() => { setStep(1) }} className="text-blue-600 text-sm hover:underline"> Edit </button>
                                        </div>
                                        <p className="text-gray-600"> John Doe </p>
                                        <p className="text-gray-600"> 123 Main Street, Apt 4B </p>
                                        <p className="text-gray-600"> New York, NY 10001 </p>
                                    </div>
                                    {/* Payment Summary */}
                                    <div className="mb-6 p-4 bg-gray-100 rounded-xl">
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="font-semibold text-gray-900"> Payment Method </h3>
                                            <button onClick={() => { setStep(2) }} className="text-blue-600 text-sm hover:underline"> Edit </button>
                                        </div>
                                        <p className="text-gray-600 flex items-center gap-2">
                                            <CreditCard className="w-4 h-4" />
                                            Visa ending in 3456
                                        </p>
                                    </div>
                                    {/* Order Items */}
                                    <div className="space-y-4 mb-6">
                                        <h3 className="font-semibold text-gray-900"> Order Items </h3>
                                        <div className="flex gap-4 p-4 bg-gray-100 rounded-xl">
                                            <Image objectFit="cover" variant="rounded" width={400} height={400} className="w-16 h-16 rounded-lg object-cover" src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=80&h=80&fit=crop" alt="Smart Watch" />
                                            <div className="flex-1">
                                                <p className="font-medium text-gray-900"> Smart Watch Series 8 Pro </p>
                                                <p className="text-sm text-gray-500"> Qty: 1 </p>
                                            </div>
                                            <Text variant="bold" className="font-semibold text-gray-900"> $179.00 </Text>
                                        </div>
                                        <div className="flex gap-4 p-4 bg-gray-100 rounded-xl">
                                            <Image objectFit="cover" variant="rounded" width={400} height={400} className="w-16 h-16 rounded-lg object-cover" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=80&h=80&fit=crop" alt="Headphones" />
                                            <div className="flex-1">
                                                <p className="font-medium text-gray-900"> Wireless Noise Canceling Headphones </p>
                                                <p className="text-sm text-gray-500"> Qty: 2 </p>
                                            </div>
                                            <Text variant="bold" className="font-semibold text-gray-900"> $498.00 </Text>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <button onClick={() => { setStep(2) }} type="button" className="flex-1 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                                            <ArrowLeft className="w-5 h-5" />
                                            Back
                                        </button>
                                        <Button contentKey="cta_37" className="flex-1 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg flex items-center justify-center gap-2" type="submit"><Lock className="w-5 h-5" />
                                            Place Order - $740.88 </Button>
                                    </div>
                                </div>
                            )}
                        </div>
                        {/* Order Summary Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-2xl p-6 sticky top-8">
                                <h2 className="text-lg font-semibold text-gray-900 mb-4"> Order Summary </h2>
                                {/* Cart Items Preview */}
                                <div className="space-y-3 mb-6 max-h-64 overflow-y-auto">
                                    <div className="flex gap-3">
                                        <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                                            <Image objectFit="cover" variant="rounded" width={400} height={400} className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=100&h=100&fit=crop" alt="Smart Watch" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-gray-900 line-clamp-1"> Smart Watch Series 8 Pro </p>
                                            <p className="text-xs text-gray-500"> Qty: 1 </p>
                                            <p className="text-sm font-semibold text-blue-600"> $179.00 </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                                            <Image objectFit="cover" variant="rounded" width={400} height={400} className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop" alt="Headphones" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-gray-900 line-clamp-1"> Wireless Headphones </p>
                                            <p className="text-xs text-gray-500"> Qty: 2 </p>
                                            <p className="text-sm font-semibold text-blue-600"> $498.00 </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                                            <Image objectFit="cover" variant="rounded" width={400} height={400} className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=100&h=100&fit=crop" alt="Running Shoes" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-gray-900 line-clamp-1"> Premium Running Shoes </p>
                                            <p className="text-xs text-gray-500"> Qty: 1 </p>
                                            <p className="text-sm font-semibold text-blue-600"> $129.00 </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-t border-gray-200 pt-4 space-y-3 mb-6">
                                    <div className="flex justify-between text-gray-600">
                                        <Text> Subtotal (5 items) </Text>
                                        <Text> $806.00 </Text>
                                    </div>
                                    <div className="flex justify-between text-gray-600">
                                        <Text> Discount </Text>
                                        <Text className="text-green-500"> -$120.00 </Text>
                                    </div>
                                    <div className="flex justify-between text-gray-600">
                                        <Text> Shipping </Text>
                                        <Text className="text-green-500"> Free </Text>
                                    </div>
                                    <div className="flex justify-between text-gray-600">
                                        <Text> Tax </Text>
                                        <Text> $54.88 </Text>
                                    </div>
                                    <div className="border-t border-gray-200 pt-3 flex justify-between">
                                        <Text variant="bold" className="text-lg font-semibold text-gray-900"> Total </Text>
                                        <Text variant="bold" className="text-xl font-bold text-blue-600"> $740.88 </Text>
                                    </div>
                                </div>
                                {/* Trust Badges */}
                                <div className="grid grid-cols-2 gap-3 text-center">
                                    <div className="p-3 bg-gray-100 rounded-lg">
                                        <ShieldCheck className="w-5 h-5 text-green-500 mx-auto mb-1" />
                                        <Text className="text-xs text-gray-500"> Secure Payment </Text>
                                    </div>
                                    <div className="p-3 bg-gray-100 rounded-lg">
                                        <RefreshCw className="w-5 h-5 text-blue-500 mx-auto mb-1" />
                                        <Text className="text-xs text-gray-500"> 30-Day Returns </Text>
                                    </div>
                                </div>
                                {/* Payment Icons */}
                                <div className="flex items-center justify-center gap-2 mt-4">
                                    <div className="w-10 h-6 bg-gray-200 rounded flex items-center justify-center text-xs font-bold text-gray-600"> VISA </div>
                                    <div className="w-10 h-6 bg-gray-200 rounded flex items-center justify-center text-xs font-bold text-gray-600"> MC </div>
                                    <div className="w-10 h-6 bg-gray-200 rounded flex items-center justify-center text-xs font-bold text-gray-600"> AMEX </div>
                                    <div className="w-10 h-6 bg-gray-200 rounded flex items-center justify-center text-xs font-bold text-gray-600"> PP </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>

    )
}