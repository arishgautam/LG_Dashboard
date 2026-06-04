import Breadcrumb from "@/components/landing/Breadcrumb";
import SimilarProducts from "@/components/landing/SimilarProducts";
import { Image } from "@/components/custom/landing/Image";
import { Star } from "lucide-react";
import { Text } from "@/components/custom/landing/Text";
import { Button } from "@/components/custom/landing/Button";
import { Minus } from "lucide-react";
import { Plus } from "lucide-react";
import { Link } from "@/components/custom/landing/Link";
import { ShoppingCart } from "lucide-react";
import { Heart } from "lucide-react";
import { Truck } from "lucide-react";
import { Package } from "lucide-react";
import { RefreshCcw } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { CheckCircle } from "lucide-react";
import { Check } from "lucide-react";
import { useState } from "react";

export default function ProductDetailClient({
    productId,
}: {
    productId: string;
}) {
    const [selectedImage, setSelectedImage] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState("description");

    return (
        <>
            <Breadcrumb />

            <section id="smart_watch_series_8_pro" className="py-8 lg:py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                        {/* Product Gallery */}
                        <div className="space-y-4">
                            {/* Main Image */}
                            <div className="aspect-square rounded-2xl overflow-hidden bg-white">
                                <Image objectFit="cover" variant="rounded" width={400} height={400} className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&h=800&fit=crop" alt="Smart Watch Front View" />
                                <Image objectFit="cover" variant="rounded" width={400} height={400} className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&h=800&fit=crop" alt="Smart Watch Side View" />
                                <Image objectFit="cover" variant="rounded" width={400} height={400} className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&h=800&fit=crop" alt="Smart Watch on Wrist" />
                                <Image objectFit="cover" variant="rounded" width={400} height={400} className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1617043786394-f977fa12eddf?w=800&h=800&fit=crop" alt="Smart Watch Box" />
                            </div>
                            {/* Thumbnails */}
                            <div className="flex gap-3">
                                <button onClick={() => { setSelectedImage(0) }} className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-colors ${selectedImage === 0 ? 'border-blue-600' : 'border-transparent'}`}>
                                    <Image objectFit="cover" variant="rounded" width={400} height={400} className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=100&h=100&fit=crop" alt="Thumbnail 1" />
                                </button>
                                <button onClick={() => { setSelectedImage(1) }} className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-colors ${selectedImage === 1 ? 'border-blue-600' : 'border-transparent'}`}>
                                    <Image objectFit="cover" variant="rounded" width={400} height={400} className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=100&h=100&fit=crop" alt="Thumbnail 2" />
                                </button>
                                <button onClick={() => { setSelectedImage(2) }} className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-colors ${selectedImage === 2 ? 'border-blue-600' : 'border-transparent'}`}>
                                    <Image objectFit="cover" variant="rounded" width={400} height={400} className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=100&h=100&fit=crop" alt="Thumbnail 3" />
                                </button>
                                <button onClick={() => { setSelectedImage(3) }} className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-colors ${selectedImage === 3 ? 'border-blue-600' : 'border-transparent'}`}>
                                    <Image objectFit="cover" variant="rounded" width={400} height={400} className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1617043786394-f977fa12eddf?w=100&h=100&fit=crop" alt="Thumbnail 4" />
                                </button>
                            </div>
                        </div>
                        {/* Product Info */}
                        <div className="space-y-6">
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <Text className="px-2 py-1 bg-green-100 text-green-600 text-xs font-medium rounded-full"> In Stock </Text>
                                    <Text className="px-2 py-1 bg-orange-100 text-orange-600 text-xs font-medium rounded-full"> Best Seller </Text>
                                </div>
                                <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2"> Smart Watch Series 8 Pro </h1>
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-1">
                                        <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                        <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                        <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                        <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                        <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                    </div>
                                    <Text className="text-gray-600"> 4.9 (234 reviews) </Text>
                                </div>
                            </div>
                            {/* Price */}
                            <div className="flex items-baseline gap-3">
                                <Text variant="bold" className="text-3xl font-bold text-blue-600"> $179.00 </Text>
                                <Text className="text-xl text-gray-500 line-through"> $299.00 </Text>
                                <Text variant="bold" className="px-2 py-1 bg-red-100 text-red-600 text-sm font-bold rounded-lg"> Save 40% </Text>
                            </div>
                            {/* Variants */}
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-900 mb-2"> Color </label>
                                    <div className="flex gap-3">
                                        <Button className="w-10 h-10 rounded-full bg-gray-900 ring-2 ring-offset-2 ring-blue-600" />
                                        <Button className="w-10 h-10 rounded-full bg-gray-400 ring-2 ring-offset-2 ring-transparent hover:ring-gray-400" />
                                        <Button className="w-10 h-10 rounded-full bg-rose-400 ring-2 ring-offset-2 ring-transparent hover:ring-rose-400" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-900 mb-2"> Size </label>
                                    <div className="flex gap-3">
                                        <Button className="px-4 py-2 border-2 border-blue-600 bg-blue-50 text-blue-600 font-medium rounded-lg"> 41mm </Button>
                                        <Button className="px-4 py-2 border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:border-blue-600 transition-colors"> 45mm </Button>
                                    </div>
                                </div>
                            </div>
                            {/* Quantity & Add to Cart */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <div className="flex items-center border border-gray-300 rounded-xl">
                                    <button
                                        onClick={() => {
                                            if (quantity > 1) {
                                                setQuantity(quantity - 1);
                                            }
                                        }}
                                        className="px-4 py-3 hover:bg-gray-100 transition-colors"
                                    >
                                        <Minus className="w-5 h-5" />
                                    </button>
                                    <Text className="w-16 text-center font-medium"> 1 </Text>
                                    <button
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="px-4 py-3 hover:bg-gray-100 transition-colors"
                                    >
                                        <Plus className="w-5 h-5" />
                                    </button>
                                </div>
                                <Link className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg" href="/cart"><ShoppingCart className="w-5 h-5" />
                                    Add to Cart </Link>
                                <Button className="px-4 py-3 border border-gray-300 rounded-xl hover:bg-gray-100 transition-colors"><Heart className="w-5 h-5" /></Button>
                            </div>
                            {/* Shipping Info */}
                            <div className="bg-gray-100 rounded-xl p-4 space-y-3">
                                <div className="flex items-center gap-3">
                                    <Truck className="w-5 h-5 text-green-500" />
                                    <Text className="text-sm"><strong> Free Shipping </strong>
                                        on orders over $50 </Text>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Package className="w-5 h-5 text-blue-500" />
                                    <Text className="text-sm"> Estimated delivery:
                                        <strong> 3-5 business days </strong></Text>
                                </div>
                                <div className="flex items-center gap-3">
                                    <RefreshCcw className="w-5 h-5 text-orange-500" />
                                    <Text className="text-sm"><strong> 30-day returns </strong>
                                        for your peace of mind </Text>
                                </div>
                            </div>
                            {/* Seller Info */}
                            <Link className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow" href="sellers.html"><Image objectFit="cover" variant="rounded" width={400} height={400} className="w-12 h-12 rounded-lg object-cover" src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=60&h=60&fit=crop" alt="TechWorld Store" />
                                <div className="flex-1">
                                    <h3 className="font-medium text-gray-900"> TechWorld Store </h3>
                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                        <Text> 4.9 (2.5k reviews) </Text>
                                        <Text className="text-green-500 flex items-center gap-1"><CheckCircle className="w-4 h-4" />
                                            Verified </Text>
                                    </div>
                                </div>
                                <ChevronRight className="w-5 h-5 text-gray-400" /></Link>
                        </div>
                    </div>
                    {/* Product Tabs */}
                    <div className="mt-12 lg:mt-16">
                        <div className="border-b border-gray-200">
                            <nav className="flex gap-8 overflow-x-auto">
                                <button onClick={() => { setActiveTab('description') }} className={`py-4 px-1 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${activeTab === 'description' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}> Description </button>
                                <button onClick={() => { setActiveTab('specs') }} className={`py-4 px-1 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${activeTab === 'specs' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}> Specifications </button>
                                <button onClick={() => { setActiveTab('reviews') }} className={`py-4 px-1 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${activeTab === 'reviews' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}> Reviews (234) </button>
                            </nav>
                        </div>
                        {/* Tab Content */}
                        <div className="py-8">
                            {/* Description */}
                            {activeTab === 'description' && (
                                <div className="prose max-w-none">
                                    <p className="text-gray-600 leading-relaxed">
                                        The Smart Watch Series 8 Pro is the most advanced smartwatch we've ever created. With a stunning always-on Retina display, advanced health sensors, and all-day battery life, it's designed to help you stay connected, active, and healthy.
                                    </p>
                                    <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3"> Key Features </h3>
                                    <ul className="space-y-2 text-gray-600">
                                        <li className="flex items-start gap-2">
                                            <Check className="w-5 h-5 text-green-500 mt-0.5" />
                                            Always-on Retina display with 2000 nits brightness
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Check className="w-5 h-5 text-green-500 mt-0.5" />
                                            Advanced heart rate and blood oxygen monitoring
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Check className="w-5 h-5 text-green-500 mt-0.5" />
                                            Temperature sensing for cycle tracking
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Check className="w-5 h-5 text-green-500 mt-0.5" />
                                            Crash detection and fall detection
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Check className="w-5 h-5 text-green-500 mt-0.5" />
                                            Water resistant to 50 meters
                                        </li>
                                    </ul>
                                </div>
                            )}
                            {/* Specifications */}
                            {activeTab === 'specs' && (
                                <div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="bg-gray-100 rounded-xl p-4">
                                            <h4 className="font-medium text-gray-900 mb-4"> Display </h4>
                                            <dl className="space-y-2 text-sm">
                                                <div className="flex justify-between">
                                                    <dt className="text-gray-500"> Type </dt>
                                                    <dd className="text-gray-900"> OLED Retina </dd>
                                                </div>
                                                <div className="flex justify-between">
                                                    <dt className="text-gray-500"> Resolution </dt>
                                                    <dd className="text-gray-900"> 396 x 484 pixels </dd>
                                                </div>
                                                <div className="flex justify-between">
                                                    <dt className="text-gray-500"> Brightness </dt>
                                                    <dd className="text-gray-900"> 2000 nits max </dd>
                                                </div>
                                            </dl>
                                        </div>
                                        <div className="bg-gray-100 rounded-xl p-4">
                                            <h4 className="font-medium text-gray-900 mb-4"> Battery </h4>
                                            <dl className="space-y-2 text-sm">
                                                <div className="flex justify-between">
                                                    <dt className="text-gray-500"> Battery Life </dt>
                                                    <dd className="text-gray-900"> Up to 18 hours </dd>
                                                </div>
                                                <div className="flex justify-between">
                                                    <dt className="text-gray-500"> Charging </dt>
                                                    <dd className="text-gray-900"> Fast charging </dd>
                                                </div>
                                                <div className="flex justify-between">
                                                    <dt className="text-gray-500"> Charge Time </dt>
                                                    <dd className="text-gray-900"> ~45 minutes to 80% </dd>
                                                </div>
                                            </dl>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {/* Reviews */}
                            {activeTab === 'reviews' && (
                                <div className="space-y-6">
                                    {/* Review Summary */}
                                    <div className="flex flex-col md:flex-row gap-8 p-6 bg-gray-100 rounded-xl">
                                        <div className="text-center">
                                            <div className="text-5xl font-bold text-gray-900"> 4.9 </div>
                                            <div className="flex justify-center gap-1 my-2">
                                                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                            </div>
                                            <p className="text-sm text-gray-600"> 234 reviews </p>
                                        </div>
                                        <div className="flex-1 space-y-2">
                                            <div className="flex items-center gap-2">
                                                <Text className="text-sm w-6"> 5 </Text>
                                                <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                                                    <div style={{ width: "85%" }} className="h-full bg-yellow-400 rounded-full"></div>
                                                </div>
                                                <Text className="text-sm text-gray-500 w-10"> 85% </Text>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Text className="text-sm w-6"> 4 </Text>
                                                <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                                                    <div style={{ width: "10%" }} className="h-full bg-yellow-400 rounded-full"></div>
                                                </div>
                                                <Text className="text-sm text-gray-500 w-10"> 10% </Text>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Text className="text-sm w-6"> 3 </Text>
                                                <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                                                    <div style={{ width: "3%" }} className="h-full bg-yellow-400 rounded-full"></div>
                                                </div>
                                                <Text className="text-sm text-gray-500 w-10"> 3% </Text>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Text className="text-sm w-6"> 2 </Text>
                                                <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                                                    <div style={{ width: "1%" }} className="h-full bg-yellow-400 rounded-full"></div>
                                                </div>
                                                <Text className="text-sm text-gray-500 w-10"> 1% </Text>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Text className="text-sm w-6"> 1 </Text>
                                                <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                                                    <div style={{ width: "1%" }} className="h-full bg-yellow-400 rounded-full"></div>
                                                </div>
                                                <Text className="text-sm text-gray-500 w-10"> 1% </Text>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Individual Reviews */}
                                    <div className="space-y-6">
                                        <div className="border-b border-gray-200 pb-6">
                                            <div className="flex items-start gap-4">
                                                <Image objectFit="cover" variant="rounded" width={400} height={400} className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=48&h=48&fit=crop" alt="Reviewer" />
                                                <div className="flex-1">
                                                    <div className="flex items-center justify-between mb-1">
                                                        <h4 className="font-medium text-gray-900"> John D. </h4>
                                                        <Text className="text-sm text-gray-500"> 2 days ago </Text>
                                                    </div>
                                                    <div className="flex gap-1 mb-2">
                                                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                                    </div>
                                                    <p className="text-gray-600">
                                                        Amazing product! The display is gorgeous and the battery life exceeds my expectations. Highly recommend!
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="border-b border-gray-200 pb-6">
                                            <div className="flex items-start gap-4">
                                                <Image objectFit="cover" variant="rounded" width={400} height={400} className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=48&h=48&fit=crop" alt="Reviewer" />
                                                <div className="flex-1">
                                                    <div className="flex items-center justify-between mb-1">
                                                        <h4 className="font-medium text-gray-900"> Sarah M. </h4>
                                                        <Text className="text-sm text-gray-500"> 1 week ago </Text>
                                                    </div>
                                                    <div className="flex gap-1 mb-2">
                                                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                                    </div>
                                                    <p className="text-gray-600">
                                                        Best smartwatch I've ever owned. The health tracking features are incredibly accurate.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <SimilarProducts />
        </>
    );
}