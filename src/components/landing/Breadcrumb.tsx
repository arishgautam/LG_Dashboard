import { Link } from "../custom/landing/Link"
import { ChevronRight } from "lucide-react"
import { Text } from "../custom/landing/Text"

export default function Breadcrumb() {
    return (
        <div className="bg-white border-b border-gray-200 py-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <nav className="flex items-center gap-2 text-sm">
                    <Link className="text-gray-500 hover:text-blue-600" href="/"> Home </Link>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                    <Text className="text-gray-900 font-medium"> All Products </Text>
                </nav>
            </div>
        </div>
    )
}