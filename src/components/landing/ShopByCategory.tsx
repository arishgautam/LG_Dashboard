import { Link } from "../custom/landing/Link"
import { Image } from "../custom/landing/Image"
import { ArrowRight } from "lucide-react"

export default function ShopByCategory() {
    return (
        <section id="shop_by_category" className="py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"> Shop by Category </h2>
                    <p className="text-lg text-gray-600"> Explore our wide range of product categories </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
                    {/* Electronics */}
                    <Link className="group relative aspect-square rounded-2xl overflow-hidden" href="/products">
                    <Image objectFit="cover" variant="rounded" width={400} height={400} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=400&fit=crop" alt="Electronics" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                            <h3 className="text-xl font-bold text-white mb-1"> Electronics </h3>
                            <p className="text-sm text-white/80"> 10,000+ Products </p>
                        </div></Link>
                    {/* Fashion */}
                    <Link className="group relative aspect-square rounded-2xl overflow-hidden" href="/products"><Image objectFit="cover" variant="rounded" width={400} height={400} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=400&fit=crop" alt="Fashion" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                            <h3 className="text-xl font-bold text-white mb-1"> Fashion </h3>
                            <p className="text-sm text-white/80"> 25,000+ Products </p>
                        </div></Link>
                    {/* Home & Garden */}
                    <Link className="group relative aspect-square rounded-2xl overflow-hidden" href="/products"><Image objectFit="cover" variant="rounded" width={400} height={400} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop" alt="Home & Garden" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                            <h3 className="text-xl font-bold text-white mb-1"> Home & Garden </h3>
                            <p className="text-sm text-white/80"> 15,000+ Products </p>
                        </div></Link>
                    {/* Sports */}
                    <Link className="group relative aspect-square rounded-2xl overflow-hidden" href="/products"><Image objectFit="cover" variant="rounded" width={400} height={400} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=400&fit=crop" alt="Sports & Fitness" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                            <h3 className="text-xl font-bold text-white mb-1"> Sports & Fitness </h3>
                            <p className="text-sm text-white/80"> 8,000+ Products </p>
                        </div></Link>
                    {/* Beauty */}
                    <Link className="group relative aspect-square rounded-2xl overflow-hidden" href="/products"><Image objectFit="cover" variant="rounded" width={400} height={400} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop" alt="Beauty & Health" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                            <h3 className="text-xl font-bold text-white mb-1"> Beauty & Health </h3>
                            <p className="text-sm text-white/80"> 12,000+ Products </p>
                        </div></Link>
                    {/* Toys */}
                    <Link className="group relative aspect-square rounded-2xl overflow-hidden" href="/products"><Image objectFit="cover" variant="rounded" width={400} height={400} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=400&h=400&fit=crop" alt="Toys & Kids" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                            <h3 className="text-xl font-bold text-white mb-1"> Toys & Kids </h3>
                            <p className="text-sm text-white/80"> 5,000+ Products </p>
                        </div></Link>
                    {/* Automotive */}
                    <Link className="group relative aspect-square rounded-2xl overflow-hidden" href="/products"><Image objectFit="cover" variant="rounded" width={400} height={400} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=400&h=400&fit=crop" alt="Automotive" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                            <h3 className="text-xl font-bold text-white mb-1"> Automotive </h3>
                            <p className="text-sm text-white/80"> 7,000+ Products </p>
                        </div></Link>
                    {/* Books */}
                    <Link className="group relative aspect-square rounded-2xl overflow-hidden" href="/products"><Image objectFit="cover" variant="rounded" width={400} height={400} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&h=400&fit=crop" alt="Books & Media" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                            <h3 className="text-xl font-bold text-white mb-1"> Books & Media </h3>
                            <p className="text-sm text-white/80"> 20,000+ Products </p>
                        </div></Link>
                </div>
                <div className="text-center mt-8">
                    <Link variant="inline" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-blue-600 text-blue-600  font-semibold rounded-xl hover:bg-blue-600 hover:text-white  transition-all duration-200" href="/categories"> View All Categories
                        <ArrowRight className="w-5 h-5" /></Link>
                </div>
            </div>
        </section>
    )
}