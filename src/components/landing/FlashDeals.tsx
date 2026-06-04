import { Text } from "../custom/landing/Text"
import { Link as CustomLink } from "../custom/landing/Link"
import {Link} from 'react-router-dom';
import { Image } from "../custom/landing/Image";
import { Zap } from "lucide-react";

export default function FlashDeals() {
    return (
        <section id="flash_deals" className="py-8 lg:py-12 bg-gradient-to-r from-orange-50 to-red-50 " >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-8">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center"><Zap className="w-6 h-6 text-white" /></div>
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 "> Flash Deals </h2>
                            <p className="text-gray-600"> Ends in: </p>
                        </div>
                    </div>
                    {/* Countdown Timer */}
                    <div x-init="setInterval(() => { seconds--; if(seconds < 0) { seconds = 59; minutes--; } if(minutes < 0) { minutes = 59; hours--; } if(hours < 0) { hours = 23; } }, 1000)" className="flex items-center gap-3">
                        <div className="w-16 h-16 bg-gray-900 rounded-xl flex flex-col items-center justify-center">
                            <Text variant="bold" className="text-xl font-bold text-white"> 23 </Text>
                            <Text className="text-xs text-gray-400"> Hours </Text>
                        </div>
                        <Text variant="bold" className="text-2xl font-bold text-gray-400"> : </Text>
                        <div className="w-16 h-16 bg-gray-900 rounded-xl flex flex-col items-center justify-center">
                            <Text variant="bold" className="text-xl font-bold text-white"> 45 </Text>
                            <Text className="text-xs text-gray-400"> Mins </Text>
                        </div>
                        <Text variant="bold" className="text-2xl font-bold text-gray-400"> : </Text>
                        <div className="w-16 h-16 bg-gray-900 rounded-xl flex flex-col items-center justify-center">
                            <Text variant="bold" className="text-xl font-bold text-white"> 30 </Text>
                            <Text className="text-xs text-gray-400"> Secs </Text>
                        </div>
                    </div>
                    <CustomLink 
                    className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg" 
                    href="products.html"> View All Deals </CustomLink>
                </div>
                {/* Deal Products */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                    {/* Deal 1 */}
                    <Link to="/product-detail" className="group bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-300"><div className="relative mb-4">
                        <div className="aspect-square rounded-xl overflow-hidden bg-gray-100">
                            <Image objectFit="cover" variant="rounded" width={400}
                                height={400} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&h=400&fit=crop" alt="Smart Watch" />
                        </div>
                        <Text variant="bold" className="absolute top-2 left-2 px-2 py-1 bg-red-500 text-white text-xs font-bold rounded-lg"> -40% </Text>
                    </div><h3 className="font-medium text-gray-900  mb-1 line-clamp-2"> Smart Watch Series 8 </h3><div className="flex items-center gap-2">
                            <Text variant="bold" className="text-lg font-bold text-blue-600"> $179 </Text>
                            <Text className="text-sm text-gray-500 line-through"> $299 </Text>
                        </div></Link>
                    {/* Deal 2 */}
                    <Link to="/product-detail" className="group bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-300"><div className="relative mb-4">
                        <div className="aspect-square rounded-xl overflow-hidden bg-gray-100">
                            <Image objectFit="cover" width={400}
                                height={400} variant="rounded" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop" alt="Wireless Headphones" />
                        </div>
                        <Text variant="bold" className="absolute top-2 left-2 px-2 py-1 bg-red-500 text-white text-xs font-bold rounded-lg"> -35% </Text>
                    </div><h3 className="font-medium text-gray-900  mb-1 line-clamp-2"> Wireless Headphones Pro </h3><div className="flex items-center gap-2">
                            <Text variant="bold" className="text-lg font-bold text-blue-600"> $129 </Text>
                            <Text className="text-sm text-gray-500 line-through"> $199 </Text>
                        </div></Link>
                    {/* Deal 3 */}
                    <Link to="/product-detail" className="group bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-300"><div className="relative mb-4">
                        <div className="aspect-square rounded-xl overflow-hidden bg-gray-100">
                            <Image objectFit="cover" variant="rounded" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" width={400}
                                height={400} src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop" alt="Designer Watch" />
                        </div>
                        <Text variant="bold" className="absolute top-2 left-2 px-2 py-1 bg-red-500 text-white text-xs font-bold rounded-lg"> -50% </Text>
                    </div><h3 className="font-medium text-gray-900  mb-1 line-clamp-2"> Designer Watch Classic </h3><div className="flex items-center gap-2">
                            <Text variant="bold" className="text-lg font-bold text-blue-600"> $149 </Text>
                            <Text className="text-sm text-gray-500 line-through"> $299 </Text>
                        </div></Link>
                    {/* Deal 4 */}
                    <Link to="/product-detail" className="group bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-300"><div className="relative mb-4">
                        <div className="aspect-square rounded-xl overflow-hidden bg-gray-100">
                            <Image objectFit="cover" width={400}
                                height={400} variant="rounded" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400&h=400&fit=crop" alt="Skincare Set" />
                        </div>
                        <Text variant="bold" className="absolute top-2 left-2 px-2 py-1 bg-red-500 text-white text-xs font-bold rounded-lg"> -30% </Text>
                    </div><h3 className="font-medium text-gray-900  mb-1 line-clamp-2"> Premium Skincare Set </h3><div className="flex items-center gap-2">
                            <Text variant="bold" className="text-lg font-bold text-blue-600"> $69 </Text>
                            <Text className="text-sm text-gray-500 line-through"> $99 </Text>
                        </div></Link>
                </div>
            </div>
        </section>
    )
}