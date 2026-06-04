import { ArrowRight } from "lucide-react"
import { Star } from "lucide-react"
import { CheckCircle } from "lucide-react"
import { Text } from "../custom/landing/Text"
import { Link } from "../custom/landing/Link"
import { Image } from "../custom/landing/Image"

export default function TopSellers() {
    return (
        <section id="top_sellers" className="py-16 lg:py-24 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-12">
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2"> Top Sellers </h2>
                        <p className="text-lg text-gray-600 "> Shop from our most trusted stores </p>
                    </div>
                    <Link variant="inline" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline" href="/sellers"> View All Sellers
                        <ArrowRight className="w-5 h-5" /></Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Seller 1 */}
                    <Link className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1" href="/sellers"><div className="flex items-center gap-4 mb-4">
                        <Image objectFit="cover" variant="rounded" width={400} height={400} className="w-16 h-16 rounded-xl object-cover" src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=80&h=80&fit=crop" alt="TechWorld Store" />
                        <div>
                            <h3 className="font-semibold text-gray-900"> TechWorld </h3>
                            <div className="flex items-center gap-1">
                                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                <Text className="text-sm text-gray-600 "> 4.9 (2.5k reviews) </Text>
                            </div>
                        </div>
                    </div>
                        <div className="flex items-center justify-between text-sm text-gray-600 ">
                            <Text> 1,200+ Products </Text>
                            <Text className="flex items-center gap-1 text-green-500"><CheckCircle className="w-4 h-4" />
                                Verified </Text>
                        </div></Link>
                    {/* Seller 2 */}
                    <Link className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1" href="/sellers"><div className="flex items-center gap-4 mb-4">
                        <Image objectFit="cover" variant="rounded" width={400} height={400} className="w-16 h-16 rounded-xl object-cover" src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=80&h=80&fit=crop" alt="Fashion Hub Store" />
                        <div>
                            <h3 className="font-semibold text-gray-900"> Fashion Hub </h3>
                            <div className="flex items-center gap-1">
                                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                <Text className="text-sm text-gray-600 "> 4.8 (3.1k reviews) </Text>
                            </div>
                        </div>
                    </div>
                        <div className="flex items-center justify-between text-sm text-gray-600 ">
                            <Text> 2,500+ Products </Text>
                            <Text className="flex items-center gap-1 text-green-500"><CheckCircle className="w-4 h-4" />
                                Verified </Text>
                        </div></Link>
                    {/* Seller 3 */}
                    <Link className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1" href="/sellers"><div className="flex items-center gap-4 mb-4">
                        <Image objectFit="cover" variant="rounded" width={400} height={400} className="w-16 h-16 rounded-xl object-cover" src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=80&h=80&fit=crop" alt="Home Essentials Store" />
                        <div>
                            <h3 className="font-semibold text-gray-900"> Home Essentials </h3>
                            <div className="flex items-center gap-1">
                                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                <Text className="text-sm text-gray-600 "> 4.7 (1.8k reviews) </Text>
                            </div>
                        </div>
                    </div>
                        <div className="flex items-center justify-between text-sm text-gray-600 ">
                            <Text> 890+ Products </Text>
                            <Text className="flex items-center gap-1 text-green-500"><CheckCircle className="w-4 h-4" />
                                Verified </Text>
                        </div></Link>
                    {/* Seller 4 */}
                    <Link className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1" href="/sellers"><div className="flex items-center gap-4 mb-4">
                        <Image objectFit="cover" variant="rounded" width={400} height={400} className="w-16 h-16 rounded-xl object-cover" src="https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?w=80&h=80&fit=crop" alt="Sports Zone Store" />
                        <div>
                            <h3 className="font-semibold text-gray-900"> Sports Zone </h3>
                            <div className="flex items-center gap-1">
                                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                <Text className="text-sm text-gray-600 "> 4.9 (2.2k reviews) </Text>
                            </div>
                        </div>
                    </div>
                        <div className="flex items-center justify-between text-sm text-gray-600 ">
                            <Text> 650+ Products </Text>
                            <Text className="flex items-center gap-1 text-green-500"><CheckCircle className="w-4 h-4" />
                                Verified </Text>
                        </div></Link>
                </div>
            </div>
        </section>
    )
}