import { ArrowRight } from "lucide-react"
import { Star } from "lucide-react"
import { Plus } from "lucide-react"
import { Heart } from "lucide-react"

import { Button } from "../custom/landing/Button"
import { Text } from "../custom/landing/Text"
import { Link } from "../custom/landing/Link"
import { Image } from "../custom/landing/Image"

export default function Trending() {
    return (
        <section id="trending_now" className="py-16 lg:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-12">
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2"> Trending Now </h2>
                        <p className="text-lg text-gray-600"> Most popular products this week </p>
                    </div>
                    <Link variant="inline" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline" href="products.html"> View All
                        <ArrowRight className="w-5 h-5" /></Link>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
                    {/* Product 1 */}
                    <Link className="group bg-gray-50 rounded-2xl p-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-1" href="/products"><div className="relative mb-4">
                        <div className="aspect-square rounded-xl overflow-hidden bg-white">
                            <Image objectFit="cover" variant="rounded" width={400} height={400} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop" alt="Running Shoes" />
                        </div>
                        <Button className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-red-50 transition-colors"><Heart className="w-4 h-4 text-gray-400 hover:text-red-500" /></Button>
                    </div>
                        <div className="flex items-center gap-1 mb-2">
                            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                            <Text className="text-sm font-medium text-gray-900"> 4.8 </Text>
                            <Text className="text-sm text-gray-500"> (234) </Text>
                        </div>
                        <h3 className="font-medium text-gray-900 mb-2 line-clamp-2"> Premium Running Shoes </h3>
                        <div className="flex items-center justify-between">
                            <Text variant="bold" className="text-lg font-bold text-blue-600"> $89.99 </Text>
                            <Button className="w-8 h-8 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors"><Plus className="w-4 h-4 text-white" /></Button>
                        </div></Link>
                    {/* Product 2 */}
                    <Link className="group bg-gray-50 rounded-2xl p-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-1" href="/products"><div className="relative mb-4">
                        <div className="aspect-square rounded-xl overflow-hidden bg-white">
                            <Image objectFit="cover" variant="rounded" width={400} height={400} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1523206489230-c012c64b2b48?w=400&h=400&fit=crop" alt="iPhone Case" />
                        </div>
                        <Button className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-red-50 transition-colors"><Heart className="w-4 h-4 text-gray-400 hover:text-red-500" /></Button>
                        <Text variant="bold" className="absolute top-2 left-2 px-2 py-1 bg-green-500 text-white text-xs font-bold rounded-lg"> New </Text>
                    </div>
                        <div className="flex items-center gap-1 mb-2">
                            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                            <Text className="text-sm font-medium text-gray-900"> 4.9 </Text>
                            <Text className="text-sm text-gray-500"> (189) </Text>
                        </div>
                        <h3 className="font-medium text-gray-900 mb-2 line-clamp-2"> Premium Phone Case </h3>
                        <div className="flex items-center justify-between">
                            <Text variant="bold" className="text-lg font-bold text-blue-600"> $29.99 </Text>
                            <Button className="w-8 h-8 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors"><Plus className="w-4 h-4 text-white" /></Button>
                        </div></Link>
                    {/* Product 3 */}
                    <Link className="group bg-gray-50 rounded-2xl p-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-1" href="/products"><div className="relative mb-4">
                        <div className="aspect-square rounded-xl overflow-hidden bg-white">
                            <Image objectFit="cover" variant="rounded" width={400} height={400} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1560343090-f0409e92791a?w=400&h=400&fit=crop" alt="Backpack" />
                        </div>
                        <Button className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-red-50 transition-colors"><Heart className="w-4 h-4 text-gray-400 hover:text-red-500" /></Button>
                    </div>
                        <div className="flex items-center gap-1 mb-2">
                            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                            <Text className="text-sm font-medium text-gray-900"> 4.7 </Text>
                            <Text className="text-sm text-gray-500"> (567) </Text>
                        </div>
                        <h3 className="font-medium text-gray-900 mb-2 line-clamp-2"> Travel Backpack 40L </h3>
                        <div className="flex items-center justify-between">
                            <Text variant="bold" className="text-lg font-bold text-blue-600"> $79.99 </Text>
                            <Button className="w-8 h-8 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors"><Plus className="w-4 h-4 text-white" /></Button>
                        </div></Link>
                    {/* Product 4 */}
                    <Link className="group bg-gray-50 rounded-2xl p-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-1" href="/products"><div className="relative mb-4">
                        <div className="aspect-square rounded-xl overflow-hidden bg-white">
                            <Image objectFit="cover" variant="rounded" width={400} height={400} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400&h=400&fit=crop" alt="Skincare Set" />
                        </div>
                        <Button className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-red-50 transition-colors"><Heart className="w-4 h-4 text-gray-400 hover:text-red-500" /></Button>
                        <Text variant="bold" className="absolute top-2 left-2 px-2 py-1 bg-orange-500 text-white text-xs font-bold rounded-lg"> Hot </Text>
                    </div>
                        <div className="flex items-center gap-1 mb-2">
                            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                            <Text className="text-sm font-medium text-gray-900"> 4.9 </Text>
                            <Text className="text-sm text-gray-500"> (892) </Text>
                        </div>
                        <h3 className="font-medium text-gray-900 mb-2 line-clamp-2"> Complete Skincare Set </h3>
                        <div className="flex items-center justify-between">
                            <Text variant="bold" className="text-lg font-bold text-blue-600"> $59.99 </Text>
                            <Button className="w-8 h-8 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors"><Plus className="w-4 h-4 text-white" /></Button>
                        </div></Link>
                    {/* Product 5 */}
                    <Link className="group bg-gray-50 rounded-2xl p-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-1" href="/products"><div className="relative mb-4">
                        <div className="aspect-square rounded-xl overflow-hidden bg-white">
                            <Image objectFit="cover" variant="rounded" width={400} height={400} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop" alt="Nike Shoes" />
                        </div>
                        <Button className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-red-50 transition-colors"><Heart className="w-4 h-4 text-gray-400 hover:text-red-500" /></Button>
                    </div>
                        <div className="flex items-center gap-1 mb-2">
                            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                            <Text className="text-sm font-medium text-gray-900"> 4.8 </Text>
                            <Text className="text-sm text-gray-500"> (345) </Text>
                        </div>
                        <h3 className="font-medium text-gray-900 mb-2 line-clamp-2"> Sport Sneakers Red </h3>
                        <div className="flex items-center justify-between">
                            <Text variant="bold" className="text-lg font-bold text-blue-600"> $119.99 </Text>
                            <Button className="w-8 h-8 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors"><Plus className="w-4 h-4 text-white" /></Button>
                        </div></Link>
                    {/* Product 6 */}
                    <Link className="group bg-gray-50 rounded-2xl p-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-1" href="/products"><div className="relative mb-4">
                        <div className="aspect-square rounded-xl overflow-hidden bg-white">
                            <Image objectFit="cover" variant="rounded" width={400} height={400} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1612817288484-6f916006741a?w=400&h=400&fit=crop" alt="Perfume" />
                        </div>
                        <Button className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-red-50 transition-colors"><Heart className="w-4 h-4 text-gray-400 hover:text-red-500" /></Button>
                    </div>
                        <div className="flex items-center gap-1 mb-2">
                            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                            <Text className="text-sm font-medium text-gray-900"> 4.6 </Text>
                            <Text className="text-sm text-gray-500"> (123) </Text>
                        </div>
                        <h3 className="font-medium text-gray-900 mb-2 line-clamp-2"> Luxury Perfume 100ml </h3>
                        <div className="flex items-center justify-between">
                            <Text variant="bold" className="text-lg font-bold text-blue-600"> $89.99 </Text>
                            <Button className="w-8 h-8 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors"><Plus className="w-4 h-4 text-white" /></Button>
                        </div></Link>
                    {/* Product 7 */}
                    <Link className="group bg-gray-50 rounded-2xl p-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-1" href="/products"><div className="relative mb-4">
                        <div className="aspect-square rounded-xl overflow-hidden bg-white">
                            <Image objectFit="cover" variant="rounded" width={400} height={400} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1503602642458-232111445657?w=400&h=400&fit=crop" alt="Sunglasses" />
                        </div>
                        <Button className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-red-50 transition-colors"><Heart className="w-4 h-4 text-gray-400 hover:text-red-500" /></Button>
                        <Text variant="bold" className="absolute top-2 left-2 px-2 py-1 bg-blue-500 text-white text-xs font-bold rounded-lg"> Best </Text>
                    </div>
                        <div className="flex items-center gap-1 mb-2">
                            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                            <Text className="text-sm font-medium text-gray-900"> 4.7 </Text>
                            <Text className="text-sm text-gray-500"> (456) </Text>
                        </div>
                        <h3 className="font-medium text-gray-900 mb-2 line-clamp-2"> Designer Sunglasses </h3>
                        <div className="flex items-center justify-between">
                            <Text variant="bold" className="text-lg font-bold text-blue-600"> $149.99 </Text>
                            <Button className="w-8 h-8 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors"><Plus className="w-4 h-4 text-white" /></Button>
                        </div></Link>
                    {/* Product 8 */}
                    <Link className="group bg-gray-50 rounded-2xl p-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-1" href="/products"><div className="relative mb-4">
                        <div className="aspect-square rounded-xl overflow-hidden bg-white">
                            <Image objectFit="cover" variant="rounded" width={400} height={400} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=400&h=400&fit=crop" alt="Yoga Mat" />
                        </div>
                        <Button className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-red-50 transition-colors"><Heart className="w-4 h-4 text-gray-400 hover:text-red-500" /></Button>
                    </div>
                        <div className="flex items-center gap-1 mb-2">
                            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                            <Text className="text-sm font-medium text-gray-900"> 4.8 </Text>
                            <Text className="text-sm text-gray-500"> (678) </Text>
                        </div>
                        <h3 className="font-medium text-gray-900 mb-2 line-clamp-2"> Premium Yoga Mat </h3>
                        <div className="flex items-center justify-between">
                            <Text variant="bold" className="text-lg font-bold text-blue-600"> $39.99 </Text>
                            <Button className="w-8 h-8 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors"><Plus className="w-4 h-4 text-white" /></Button>
                        </div></Link>
                </div>
            </div>
        </section>
    )
}