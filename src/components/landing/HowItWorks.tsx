import { ShoppingCart } from "lucide-react"
import { Search } from "lucide-react"
import { CreditCard } from "lucide-react"
import { Package } from "lucide-react"

export default function HowItWorks() {
    return (
        <section id="how_it_works" className="py-16 lg:py-24 bg-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"> How It Works </h2>
                    <p className="text-lg text-gray-600"> Shop with confidence in 4 simple steps </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Step 1 */}
                    <div className="text-center">
                        <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4"><Search className="w-8 h-8 text-white" /></div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2"> Browse </h3>
                        <p className="text-gray-600"> Search millions of products from thousands of sellers </p>
                    </div>
                    {/* Step 2 */}
                    <div className="text-center">
                        <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4"><ShoppingCart className="w-8 h-8 text-white" /></div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2"> Add to Cart </h3>
                        <p className="text-gray-600"> Select your favorite items and add them to your cart </p>
                    </div>
                    {/* Step 3 */}
                    <div className="text-center">
                        <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4"><CreditCard className="w-8 h-8 text-white" /></div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2"> Checkout </h3>
                        <p className="text-gray-600"> Secure payment with multiple options available </p>
                    </div>
                    {/* Step 4 */}
                    <div className="text-center">
                        <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4"><Package className="w-8 h-8 text-white" /></div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2"> Receive </h3>
                        <p className="text-gray-600"> Fast delivery right to your doorstep </p>
                    </div>
                </div>
            </div>
        </section>
    )
}