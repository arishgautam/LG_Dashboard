import { Text } from "../custom/landing/Text"

export default function Brands() {
    return (
        <section id="brand_showcase" className="py-12 border-y border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-center text-sm text-gray-500 mb-8"> Trusted by leading brands worldwide </p>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
                    <div className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                        <Text variant="bold" className="text-2xl font-bold text-gray-400"> Nike </Text>
                    </div>
                    <div className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                        <Text variant="bold" className="text-2xl font-bold text-gray-400"> Adidas </Text>
                    </div>
                    <div className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                        <Text variant="bold" className="text-2xl font-bold text-gray-400"> Apple </Text>
                    </div>
                    <div className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                        <Text variant="bold" className="text-2xl font-bold text-gray-400"> Sony </Text>
                    </div>
                    <div className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                        <Text variant="bold" className="text-2xl font-bold text-gray-400"> Samsung </Text>
                    </div>
                    <div className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                        <Text variant="bold" className="text-2xl font-bold text-gray-400"> LG </Text>
                    </div>
                </div>
            </div>
        </section>
    )
}