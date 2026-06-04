import { Link } from "@/components/custom/landing/Link"
import { Image } from "@/components/custom/landing/Image"
import { Text } from "@/components/custom/landing/Text"

export default function Category() {
    return (
        <>
            {/* Hero */}
            <section id="hero" className="bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600 py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"> Shop by Category </h1>
                    <p className="text-lg text-blue-100 max-w-2xl mx-auto">
                        Explore our wide range of products across all categories. Find exactly what you're looking for.
                    </p>
                </div>
            </section>

            {/* Electronics */}
            <section id="electronics" className="py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
                        {/* Electronics */}
                        <Link className="group relative aspect-[4/3] rounded-2xl overflow-hidden" href="/products">
                            <Image objectFit="cover" variant="rounded" width={400} height={400} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=300&fit=crop" alt="Electronics" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 right-4">
                                <h3 className="text-xl font-bold text-white mb-1"> Electronics </h3>
                                <p className="text-sm text-white/80"> 10,000+ Products </p>
                            </div></Link>
                        {/* Fashion */}
                        <Link className="group relative aspect-[4/3] rounded-2xl overflow-hidden" href="/products">
                            <Image objectFit="cover" variant="rounded" width={400} height={400} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=300&fit=crop" alt="Fashion" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 right-4">
                                <h3 className="text-xl font-bold text-white mb-1"> Fashion </h3>
                                <p className="text-sm text-white/80"> 25,000+ Products </p>
                            </div></Link>
                        {/* Home & Garden */}
                        <Link className="group relative aspect-[4/3] rounded-2xl overflow-hidden" href="/products"><Image objectFit="cover" variant="rounded" width={400} height={400} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop" alt="Home & Garden" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 right-4">
                                <h3 className="text-xl font-bold text-white mb-1"> Home & Garden </h3>
                                <p className="text-sm text-white/80"> 15,000+ Products </p>
                            </div></Link>
                        {/* Sports & Fitness */}
                        <Link className="group relative aspect-[4/3] rounded-2xl overflow-hidden" href="/products"><Image objectFit="cover" variant="rounded" width={400} height={400} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=300&fit=crop" alt="Sports & Fitness" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 right-4">
                                <h3 className="text-xl font-bold text-white mb-1"> Sports & Fitness </h3>
                                <p className="text-sm text-white/80"> 8,000+ Products </p>
                            </div></Link>
                        {/* Beauty & Health */}
                        <Link className="group relative aspect-[4/3] rounded-2xl overflow-hidden" href="/products"><Image objectFit="cover" variant="rounded" width={400} height={400} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=300&fit=crop" alt="Beauty & Health" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 right-4">
                                <h3 className="text-xl font-bold text-white mb-1"> Beauty & Health </h3>
                                <p className="text-sm text-white/80"> 12,000+ Products </p>
                            </div></Link>
                        {/* Toys & Kids */}
                        <Link className="group relative aspect-[4/3] rounded-2xl overflow-hidden" href="/products"><Image objectFit="cover" variant="rounded" width={400} height={400} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=400&h=300&fit=crop" alt="Toys & Kids" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 right-4">
                                <h3 className="text-xl font-bold text-white mb-1"> Toys & Kids </h3>
                                <p className="text-sm text-white/80"> 5,000+ Products </p>
                            </div></Link>
                        {/* Automotive */}
                        <Link className="group relative aspect-[4/3] rounded-2xl overflow-hidden" href="/products"><Image objectFit="cover" variant="rounded" width={400} height={400} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=400&h=300&fit=crop" alt="Automotive" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 right-4">
                                <h3 className="text-xl font-bold text-white mb-1"> Automotive </h3>
                                <p className="text-sm text-white/80"> 7,000+ Products </p>
                            </div></Link>
                        {/* Books & Media */}
                        <Link className="group relative aspect-[4/3] rounded-2xl overflow-hidden" href="/products"><Image objectFit="cover" variant="rounded" width={400} height={400} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&h=300&fit=crop" alt="Books & Media" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 right-4">
                                <h3 className="text-xl font-bold text-white mb-1"> Books & Media </h3>
                                <p className="text-sm text-white/80"> 20,000+ Products </p>
                            </div></Link>
                        {/* Pet Supplies */}
                        <Link className="group relative aspect-[4/3] rounded-2xl overflow-hidden" href="/products"><Image objectFit="cover" variant="rounded" width={400} height={400} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=300&fit=crop" alt="Pet Supplies" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 right-4">
                                <h3 className="text-xl font-bold text-white mb-1"> Pet Supplies </h3>
                                <p className="text-sm text-white/80"> 4,500+ Products </p>
                            </div></Link>
                        {/* Office & School */}
                        <Link className="group relative aspect-[4/3] rounded-2xl overflow-hidden" href="/products"><Image objectFit="cover" variant="rounded" width={400} height={400} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop" alt="Office & School" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 right-4">
                                <h3 className="text-xl font-bold text-white mb-1"> Office & School </h3>
                                <p className="text-sm text-white/80"> 6,000+ Products </p>
                            </div></Link>
                        {/* Jewelry & Watches */}
                        <Link className="group relative aspect-[4/3] rounded-2xl overflow-hidden" href="/products"><Image objectFit="cover" variant="rounded" width={400} height={400} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop" alt="Jewelry & Watches" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 right-4">
                                <h3 className="text-xl font-bold text-white mb-1"> Jewelry & Watches </h3>
                                <p className="text-sm text-white/80"> 9,000+ Products </p>
                            </div></Link>
                        {/* Food & Grocery */}
                        <Link className="group relative aspect-[4/3] rounded-2xl overflow-hidden" href="/products"><Image objectFit="cover" variant="rounded" width={400} height={400} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=300&fit=crop" alt="Food & Grocery" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 right-4">
                                <h3 className="text-xl font-bold text-white mb-1"> Food & Grocery </h3>
                                <p className="text-sm text-white/80"> 3,500+ Products </p>
                            </div></Link>
                    </div>
                </div>
            </section>

            {/* Popular In Electronics */}
            <section id="popular_in_electronics" className="py-16 lg:py-24 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8"> Popular in Electronics </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 mb-12">
                        <Link className="group bg-white rounded-2xl p-4 hover:shadow-xl transition-all duration-300" href="product-detail.html"><div className="aspect-square rounded-xl overflow-hidden bg-gray-100 mb-4">
                            <Image objectFit="cover" variant="rounded" width={400} height={400} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=300&h=300&fit=crop" alt="Smart Watch" />
                        </div>
                            <h3 className="font-medium text-gray-900 mb-1 line-clamp-1"> Smart Watch </h3>
                            <Text variant="bold" className="text-lg font-bold text-blue-600"> $179 </Text></Link>
                        <Link className="group bg-white rounded-2xl p-4 hover:shadow-xl transition-all duration-300" href="product-detail.html"><div className="aspect-square rounded-xl overflow-hidden bg-gray-100 mb-4">
                            <Image objectFit="cover" variant="rounded" width={400} height={400} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop" alt="Headphones" />
                        </div>
                            <h3 className="font-medium text-gray-900 mb-1 line-clamp-1"> Wireless Headphones </h3>
                            <Text variant="bold" className="text-lg font-bold text-blue-600"> $249 </Text></Link>
                        <Link className="group bg-white rounded-2xl p-4 hover:shadow-xl transition-all duration-300" href="product-detail.html"><div className="aspect-square rounded-xl overflow-hidden bg-gray-100 mb-4">
                            <Image objectFit="cover" variant="rounded" width={400} height={400} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1523206489230-c012c64b2b48?w=300&h=300&fit=crop" alt="Phone Case" />
                        </div>
                            <h3 className="font-medium text-gray-900 mb-1 line-clamp-1"> Phone Case </h3>
                            <Text variant="bold" className="text-lg font-bold text-blue-600"> $29 </Text></Link>
                        <Link className="group bg-white rounded-2xl p-4 hover:shadow-xl transition-all duration-300" href="product-detail.html"><div className="aspect-square rounded-xl overflow-hidden bg-gray-100 mb-4">
                            <Image objectFit="cover" variant="rounded" width={400} height={400} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=300&h=300&fit=crop" alt="Wireless Charger" />
                        </div>
                            <h3 className="font-medium text-gray-900 mb-1 line-clamp-1"> Wireless Charger </h3>
                            <Text variant="bold" className="text-lg font-bold text-blue-600"> $39 </Text></Link>
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8"> Popular in Fashion </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
                        <Link className="group bg-white rounded-2xl p-4 hover:shadow-xl transition-all duration-300" href="product-detail.html"><div className="aspect-square rounded-xl overflow-hidden bg-gray-100 mb-4">
                            <Image objectFit="cover" variant="rounded" width={400} height={400} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop" alt="Sneakers" />
                        </div>
                            <h3 className="font-medium text-gray-900 mb-1 line-clamp-1"> Sport Sneakers </h3>
                            <Text variant="bold" className="text-lg font-bold text-blue-600"> $119 </Text></Link>
                        <Link className="group bg-white rounded-2xl p-4 hover:shadow-xl transition-all duration-300" href="product-detail.html"><div className="aspect-square rounded-xl overflow-hidden bg-gray-100 mb-4">
                            <Image objectFit="cover" variant="rounded" width={400} height={400} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1560343090-f0409e92791a?w=300&h=300&fit=crop" alt="Backpack" />
                        </div>
                            <h3 className="font-medium text-gray-900 mb-1 line-clamp-1"> Travel Backpack </h3>
                            <Text variant="bold" className="text-lg font-bold text-blue-600"> $79 </Text></Link>
                        <Link className="group bg-white rounded-2xl p-4 hover:shadow-xl transition-all duration-300" href="product-detail.html"><div className="aspect-square rounded-xl overflow-hidden bg-gray-100 mb-4">
                            <Image objectFit="cover" variant="rounded" width={400} height={400} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1503602642458-232111445657?w=300&h=300&fit=crop" alt="Sunglasses" />
                        </div>
                            <h3 className="font-medium text-gray-900 mb-1 line-clamp-1"> Designer Sunglasses </h3>
                            <Text variant="bold" className="text-lg font-bold text-blue-600"> $149 </Text></Link>
                        <Link className="group bg-white rounded-2xl p-4 hover:shadow-xl transition-all duration-300" href="product-detail.html"><div className="aspect-square rounded-xl overflow-hidden bg-gray-100 mb-4">
                            <Image objectFit="cover" variant="rounded" width={400} height={400} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop" alt="Watch" />
                        </div>
                            <h3 className="font-medium text-gray-900 mb-1 line-clamp-1"> Classic Watch </h3>
                            <Text variant="bold" className="text-lg font-bold text-blue-600"> $299 </Text></Link>
                    </div>
                </div>
            </section>
        </>
    )
}