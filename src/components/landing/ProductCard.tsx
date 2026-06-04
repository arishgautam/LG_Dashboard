import { Star } from "lucide-react"
import { Text } from "../custom/landing/Text"
import { Link } from "../custom/landing/Link"
import { Image } from "../custom/landing/Image"
import { Heart } from "lucide-react"
import { Plus } from "lucide-react"
import { Button } from "../custom/landing/Button"

type Product = {
    id: string;
    name: string;
    price: number;
    oldPrice: number;
    rating: number;
    reviews: number;
    image: string;
};

export default function ProductCard({
    id,
    name,
    price,
    oldPrice,
    rating,
    reviews,
    image,
}: Product) {
    return (
        <Link
            className="group bg-white rounded-2xl p-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            href={`/products/${id}`}
        >
            <div className="relative mb-4">
                <div className="aspect-square rounded-xl overflow-hidden bg-gray-100">
                    <Image objectFit="cover" variant="rounded" width={400} height={400} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&h=400&fit=crop" alt="Smart Watch" />
                </div>
                <Button className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                    <Heart className="w-4 h-4 text-gray-400" />
                </Button>
                <Text
                    variant="bold"
                    className="absolute top-2 left-2 px-2 py-1 bg-red-500 text-white text-xs font-bold rounded-lg">
                    -40%
                </Text>
            </div>

            <div className="flex items-center gap-1 mb-2">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <Text className="text-sm font-medium"> 4.8 </Text>
                <Text className="text-sm text-gray-500"> (234) </Text>
            </div>

            <h3 className="font-medium text-gray-900 mb-2 line-clamp-2"> Smart Watch Series 8 Pro </h3>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Text variant="bold" className="text-lg font-bold text-blue-600"> $179 </Text>
                    <Text className="text-sm text-gray-500 line-through"> $299 </Text>
                </div>
                <Button className="w-8 h-8 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors"><Plus className="w-4 h-4 text-white" /></Button>
            </div>
        </Link>
    )
}