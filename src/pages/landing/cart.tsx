import { Link } from "@/components/custom/landing/Link"
import { ArrowLeft } from "lucide-react"
import { Image } from "@/components/custom/landing/Image"
import { CheckCircle } from "lucide-react"
import { Text } from "@/components/custom/landing/Text"
import { Minus } from "lucide-react"
import { Plus } from "lucide-react"
import { Button } from "@/components/custom/landing/Button"
import { Heart } from "lucide-react"
import { Trash2 } from "lucide-react"
import { Input } from "@/components/custom/landing/Input"
import { Truck } from "lucide-react"
import { ShieldCheck } from "lucide-react"
import { useState } from "react";
import SimilarProducts from "@/components/landing/SimilarProducts";

export default function Cart() {

    const [qty, setQty] = useState(1);

    return (
        <>
            {/* Cart Header */}
            <div className="bg-white border-b border-gray-200 py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        <h1 className="text-2xl font-bold text-gray-900"> Shopping Cart (5 items) </h1>
                        <Link className="text-blue-600 hover:underline flex items-center gap-2" href="/products">
                            <ArrowLeft className="w-4 h-4" />
                            Continue Shopping </Link>
                    </div>
                </div>
            </div>

            {/* Order Summary */}
            <section id="order_summary" className="py-8 lg:py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Cart Items */}
                        <div className="lg:col-span-2 space-y-4">
                            {/* Item 1 */}
                            <div className="bg-white rounded-xl p-4 lg:p-6">
                                <div className="flex gap-4">
                                    <Link className="w-24 h-24 lg:w-32 lg:h-32 rounded-xl overflow-hidden bg-gray-100  flex-shrink-0" href="product-detail.html">
                                        <Image objectFit="cover" variant="rounded" width={400} height={400} className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=200&h=200&fit=crop" alt="Smart Watch" /></Link>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-2">
                                            <div>
                                                <Link className="font-medium text-gray-900 hover:text-blue-600  line-clamp-2" href="product-detail.html"> Smart Watch Series 8 Pro </Link>
                                                <p className="text-sm text-gray-500 mt-1"> Color: Black | Size: 41mm </p>
                                                <p className="text-sm text-green-500 mt-1 flex items-center gap-1">
                                                    <CheckCircle className="w-4 h-4" />
                                                    In Stock
                                                </p>
                                            </div>
                                            <div className="text-right">
                                                <Text variant="bold" className="text-lg font-bold text-blue-600"> $179.00 </Text>
                                                <p className="text-sm text-gray-500 line-through"> $299.00 </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between mt-4">
                                            <div className="flex items-center border border-gray-300 rounded-lg">
                                                <button
                                                    onClick={() => setQty(q => Math.max(1, q - 1))}
                                                    className="px-3 py-2 hover:bg-gray-100 transition-colors"
                                                >
                                                    <Minus className="w-4 h-4" />
                                                </button>

                                                <span className="w-10 text-center font-medium">{qty}</span>

                                                <button
                                                    onClick={() => setQty(q => q + 1)}
                                                    className="px-3 py-2 hover:bg-gray-100 transition-colors"
                                                >
                                                    <Plus className="w-4 h-4" />
                                                </button>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <Button className="text-gray-400 hover:text-red-500 transition-colors"><Heart className="w-5 h-5" /></Button>
                                                <Button className="text-gray-400 hover:text-red-500 transition-colors"><Trash2 className="w-5 h-5" /></Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Item 2 */}
                            <div className="bg-white rounded-xl p-4 lg:p-6">
                                <div className="flex gap-4">
                                    <Link className="w-24 h-24 lg:w-32 lg:h-32 rounded-xl overflow-hidden bg-gray-100  flex-shrink-0" href="product-detail.html"><Image objectFit="cover" variant="rounded" width={400} height={400} className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop" alt="Headphones" /></Link>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-2">
                                            <div>
                                                <Link className="font-medium text-gray-900 hover:text-blue-600  line-clamp-2" href="product-detail.html"> Wireless Noise Canceling Headphones </Link>
                                                <p className="text-sm text-gray-500 mt-1"> Color: Silver </p>
                                                <p className="text-sm text-green-500 mt-1 flex items-center gap-1">
                                                    <CheckCircle className="w-4 h-4" />
                                                    In Stock
                                                </p>
                                            </div>
                                            <div className="text-right">
                                                <Text variant="bold" className="text-lg font-bold text-blue-600"> $249.00 </Text>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between mt-4">
                                            <div className="flex items-center border border-gray-300 rounded-lg">
                                                <button
                                                    onClick={() => setQty(q => Math.max(1, q - 1))}
                                                    className="px-3 py-2 hover:bg-gray-100 transition-colors"
                                                >
                                                    <Minus className="w-4 h-4" />
                                                </button>

                                                <span className="w-10 text-center font-medium">{qty}</span>

                                                <button
                                                    onClick={() => setQty(q => q + 1)}
                                                    className="px-3 py-2 hover:bg-gray-100 transition-colors"
                                                >
                                                    <Plus className="w-4 h-4" />
                                                </button>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <Button className="text-gray-400 hover:text-red-500 transition-colors"><Heart className="w-5 h-5" /></Button>
                                                <Button className="text-gray-400 hover:text-red-500 transition-colors"><Trash2 className="w-5 h-5" /></Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Item 3 */}
                            <div className="bg-white rounded-xl p-4 lg:p-6">
                                <div className="flex gap-4">
                                    <Link className="w-24 h-24 lg:w-32 lg:h-32 rounded-xl overflow-hidden bg-gray-100  flex-shrink-0" href="product-detail.html"><Image objectFit="cover" variant="rounded" width={400} height={400} className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=200&h=200&fit=crop" alt="Running Shoes" /></Link>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-2">
                                            <div>
                                                <Link className="font-medium text-gray-900 hover:text-blue-600  line-clamp-2" href="product-detail.html"> Premium Running Shoes </Link>
                                                <p className="text-sm text-gray-500 mt-1"> Size: US 10 </p>
                                                <p className="text-sm text-green-500 mt-1 flex items-center gap-1">
                                                    <CheckCircle className="w-4 h-4" />
                                                    In Stock
                                                </p>
                                            </div>
                                            <div className="text-right">
                                                <Text variant="bold" className="text-lg font-bold text-blue-600"> $129.00 </Text>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between mt-4">
                                            <div className="flex items-center border border-gray-300 rounded-lg">
                                                <button
                                                    onClick={() => setQty(q => Math.max(1, q - 1))}
                                                    className="px-3 py-2 hover:bg-gray-100 transition-colors"
                                                >
                                                    <Minus className="w-4 h-4" />
                                                </button>

                                                <span className="w-10 text-center font-medium">{qty}</span>

                                                <button
                                                    onClick={() => setQty(q => q + 1)}
                                                    className="px-3 py-2 hover:bg-gray-100 transition-colors"
                                                >
                                                    <Plus className="w-4 h-4" />
                                                </button>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <Button className="text-gray-400 hover:text-red-500 transition-colors"><Heart className="w-5 h-5" /></Button>
                                                <Button className="text-gray-400 hover:text-red-500 transition-colors"><Trash2 className="w-5 h-5" /></Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Order Summary */}
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-xl p-6 sticky top-24">
                                <h2 className="text-lg font-semibold text-gray-900 mb-4"> Order Summary </h2>
                                {/* Promo Code */}
                                <div className="mb-6">
                                    <label className="block text-sm font-medium text-gray-700 mb-2"> Promo Code </label>
                                    <div className="flex gap-2">
                                        <Input className="flex-1 px-4 py-2 bg-gray-100  rounded-lg border-0 focus:ring-2 focus:ring-blue-500" type="text" placeholder="Enter code" />
                                        <Button contentKey="cta_31" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"> Apply </Button>
                                    </div>
                                </div>
                                <div className="space-y-3 mb-6">
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
                                        <Text variant="bold" className="text-lg font-bold text-blue-600"> $740.88 </Text>
                                    </div>
                                </div>
                                <Link className="block w-full py-3 bg-blue-600 hover:bg-blue-700 text-white text-center font-semibold rounded-xl transition-all duration-200 hover:shadow-lg mb-4" href="/checkout"> Proceed to Checkout </Link>
                                <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                                    <Text className="flex items-center gap-1"><ShieldCheck className="w-4 h-4" />
                                        Secure </Text>
                                    <Text className="flex items-center gap-1"><Truck className="w-4 h-4" />
                                        Free Shipping </Text>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <SimilarProducts />
        </>
    )
}