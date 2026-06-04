import { Link } from "../custom/landing/Link"
import { Image } from "../custom/landing/Image"
import { Text } from "../custom/landing/Text"

export default function SimilarProducts() {
    return (
        <section id="you_may_also_like" className="py-12 lg:py-16 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-8"> You May Also Like </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
                    <Link className="group bg-white rounded-2xl p-4 hover:shadow-xl transition-all duration-300" href="product-detail.html"><div className="aspect-square rounded-xl overflow-hidden bg-gray-100 mb-4">
                        <Image objectFit="cover" variant="rounded" width={400} height={400} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop" alt="Wireless Headphones" />
                    </div>
                        <h3 className="font-medium text-gray-900 mb-1 line-clamp-1"> Wireless Headphones </h3>
                        <Text variant="bold" className="text-lg font-bold text-blue-600"> $249 </Text></Link>
                    <Link className="group bg-white rounded-2xl p-4 hover:shadow-xl transition-all duration-300" href="product-detail.html"><div className="aspect-square rounded-xl overflow-hidden bg-gray-100 mb-4">
                        <Image objectFit="cover" variant="rounded" width={400} height={400} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1523206489230-c012c64b2b48?w=300&h=300&fit=crop" alt="Phone Case" />
                    </div>
                        <h3 className="font-medium text-gray-900 mb-1 line-clamp-1"> Premium Phone Case </h3>
                        <Text variant="bold" className="text-lg font-bold text-blue-600"> $29 </Text></Link>
                    <Link className="group bg-white rounded-2xl p-4 hover:shadow-xl transition-all duration-300" href="product-detail.html"><div className="aspect-square rounded-xl overflow-hidden bg-gray-100 mb-4">
                        <Image objectFit="cover" variant="rounded" width={400} height={400} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&h=300&fit=crop" alt="Watch Strap" />
                    </div>
                        <h3 className="font-medium text-gray-900 mb-1 line-clamp-1"> Leather Watch Strap </h3>
                        <Text variant="bold" className="text-lg font-bold text-blue-600"> $49 </Text></Link>
                    <Link className="group bg-white rounded-2xl p-4 hover:shadow-xl transition-all duration-300" href="product-detail.html"><div className="aspect-square rounded-xl overflow-hidden bg-gray-100 mb-4">
                        <Image objectFit="cover" variant="rounded" width={400} height={400} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=300&h=300&fit=crop" alt="Wireless Charger" />
                    </div>
                        <h3 className="font-medium text-gray-900 mb-1 line-clamp-1"> Wireless Charger </h3>
                        <Text variant="bold" className="text-lg font-bold text-blue-600"> $39 </Text></Link>
                </div>
            </div>
        </section>
    )
}