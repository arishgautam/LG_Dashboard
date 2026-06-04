import { Text } from "../custom/landing/Text"
import { Link } from "../custom/landing/Link"
import { Search } from "lucide-react"
import { Button } from "../custom/landing/Button"

export default function Hero() {
    return (
        <section id="hero" className="relative bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-800 dark:to-blue-700 py-16 lg:py-24">
            {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iNCIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div> */}

            <div className="absolute inset-0">
                <div
                    className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat opacity-40"
                />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"> Find Everything You Need </h1>
                    <p className="text-lg text-blue-100 max-w-2xl mx-auto">
                        Shop millions of products from thousands of trusted sellers worldwide
                    </p>
                </div>
                {/* Search Bar */}
                <div className="max-w-3xl mx-auto mb-8">
                    <div className="flex flex-col sm:flex-row gap-2">
                        <div className="relative flex-1">
                            <input placeholder="What are you looking for?" type="text" className="w-full px-5 py-4 bg-white pr-12 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-blue-300 shadow-lg" />
                            <Search className="w-5 h-5 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2" />
                        </div>
                        <Button className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:scale-[1.02]"> Search </Button>
                    </div>
                </div>
                {/* Trending Searches */}
                <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
                    <Text className="text-blue-200"> Trending: </Text>
                    <Link className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors" href="products.html"> Smartphones </Link>
                    <Link className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors" href="products.html"> Winter Jackets </Link>
                    <Link className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors" href="products.html"> Home Decor </Link>
                    <Link className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors" href="products.html"> Fitness Gear </Link>
                </div>
            </div>
        </section>
    )
}