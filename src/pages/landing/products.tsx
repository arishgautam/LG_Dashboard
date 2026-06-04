import Breadcrumb from "@/components/landing/Breadcrumb";
import Pagination from "@/components/landing/Pagination";
import ProductCard from "@/components/landing/ProductCard";
import Sidebar from "@/components/landing/Sidebar";
import Toolbar from "@/components/landing/Toolbar";
import { productsTest } from "@/lib/productsTest";
import { useState } from "react";
import { Text } from "@/components/custom/landing/Text";
import { X } from "lucide-react";
import { Input } from "@/components/custom/landing/Input";

export default function Products() {

    const [filterOpen, setFilterOpen] = useState(false);

    return (
        <>
            <Breadcrumb />

            <section id="filters" className="py-8 lg:py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-8">

                        {/* Filter Sidebar (Desktop) */}
                        <Sidebar />


                        {/* Product Grid */}
                        <div className="flex-1">
                            {/* Toolbar */}
                            <Toolbar />


                            {/* Products Grid */}
                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">

                                {/* Product List */}
                                {/* <ProductCard /> */}
                                {productsTest.map((product) => (
                                    <ProductCard key={product.id} {...product} />
                                ))}
                            </div>


                            {/* Pagination */}
                            <Pagination />


                        </div>


                    </div>
                </div>
            </section>

            {/* Mobile Filter Drawer */}
            {filterOpen && (
                <div className="fixed inset-0 z-50 lg:hidden">
                    {filterOpen && (
                        <div onClick={() => { setFilterOpen(false) }} className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
                    )}
                    {filterOpen && (
                        <div className="absolute inset-y-0 left-0 w-full max-w-sm bg-white shadow-2xl overflow-y-auto">
                            <div className="flex items-center justify-between p-4 border-b border-gray-200">
                                <h2 className="text-lg font-semibold"> Filters </h2>
                                <button onClick={() => { setFilterOpen(false) }} className="p-2 rounded-lg hover:bg-gray-100"><X className="w-6 h-6" /></button>
                            </div>
                            <div className="p-4 space-y-6">
                                {/* Mobile filters content same as desktop sidebar */}
                                <div className="space-y-4">
                                    <h3 className="font-medium text-gray-900"> Categories </h3>
                                    <div className="space-y-2">
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <Input variant="text" className="w-4 h-4 text-blue-600 rounded" type="checkbox" />
                                            <Text> Electronics </Text>
                                        </label>
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <Input variant="text" className="w-4 h-4 text-blue-600 rounded" type="checkbox" />
                                            <Text> Fashion </Text>
                                        </label>
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <Input variant="text" className="w-4 h-4 text-blue-600 rounded" type="checkbox" />
                                            <Text> Home & Garden </Text>
                                        </label>
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <Input variant="text" className="w-4 h-4 text-blue-600 rounded" type="checkbox" />
                                            <Text> Sports </Text>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 border-t border-gray-200">
                                <button onClick={() => { setFilterOpen(false) }} className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors"> Apply Filters </button>
                            </div>
                        </div>
                    )}
                </div>
            )}

        </>

    )
}