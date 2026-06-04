'use client';

import { ChevronDown } from "lucide-react";
import { Input } from "../custom/landing/Input";
import { Button } from "../custom/landing/Button";
import { Text } from "../custom/landing/Text";
import { useState } from "react";
import { Star } from "lucide-react";

export default function Sidebar() {

    const [open, setOpen] = useState(true);

    return (
        <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-6">
                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-gray-900"> Filters </h2>
                    <Button className="text-sm text-blue-600 hover:underline"> Clear All </Button>
                </div>
                {/* Categories */}
                <div className="bg-white rounded-xl p-4">
                    <button onClick={() => { setOpen(!open) }} className="flex items-center justify-between w-full">
                        <h3 className="font-medium text-gray-900"> Categories </h3>
                        <ChevronDown className="w-5 h-5 text-gray-400 transition-transform" />
                    </button>
                    {open && (
                        <div className="mt-4 space-y-2">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <Input variant="text" className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" type="checkbox" />
                                <Text className="text-gray-700"> Electronics </Text>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <Input variant="text" className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" type="checkbox" />
                                <Text className="text-gray-700"> Fashion </Text>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <Input variant="text" className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" type="checkbox" />
                                <Text className="text-gray-700"> Home & Garden </Text>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <Input variant="text" className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" type="checkbox" />
                                <Text className="text-gray-700"> Sports </Text>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <Input variant="text" className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" type="checkbox" />
                                <Text className="text-gray-700"> Beauty </Text>
                            </label>
                        </div>
                    )}
                </div>
                {/* Price Range */}
                <div className="bg-white rounded-xl p-4">
                    <button onClick={() => { setOpen(!open) }} className="flex items-center justify-between w-full">
                        <h3 className="font-medium text-gray-900"> Price Range </h3>
                        <ChevronDown className="w-5 h-5 text-gray-400 transition-transform" />
                    </button>
                    {open && (
                        <div className="mt-4 space-y-4">
                            <div className="flex items-center gap-2">
                                <Input variant="text" className="w-full px-3 py-2 bg-gray-100 rounded-lg text-sm border-0 focus:ring-2 focus:ring-blue-500" type="number" placeholder="Min" />
                                <Text className="text-gray-400"> - </Text>
                                <Input variant="text" className="w-full px-3 py-2 bg-gray-100 rounded-lg text-sm border-0 focus:ring-2 focus:ring-blue-500" type="number" placeholder="Max" />
                            </div>
                            <div className="space-y-2">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <Input variant="text" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500" type="radio" name="price" />
                                    <Text className="text-gray-700"> Under $25 </Text>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <Input variant="text" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500" type="radio" name="price" />
                                    <Text className="text-gray-700"> $25 - $50 </Text>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <Input variant="text" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500" type="radio" name="price" />
                                    <Text className="text-gray-700"> $50 - $100 </Text>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <Input variant="text" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500" type="radio" name="price" />
                                    <Text className="text-gray-700"> $100+ </Text>
                                </label>
                            </div>
                        </div>
                    )}
                </div>
                {/* Brands */}
                <div className="bg-white rounded-xl p-4">
                    <button onClick={() => { setOpen(!open) }} className="flex items-center justify-between w-full">
                        <h3 className="font-medium text-gray-900"> Brands </h3>
                        <ChevronDown className="w-5 h-5 text-gray-400 transition-transform" />
                    </button>
                    {open && (
                        <div className="mt-4 space-y-2">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <Input variant="text" className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" type="checkbox" />
                                <Text className="text-gray-700"> Nike </Text>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <Input variant="text" className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" type="checkbox" />
                                <Text className="text-gray-700"> Adidas </Text>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <Input variant="text" className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" type="checkbox" />
                                <Text className="text-gray-700"> Apple </Text>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <Input variant="text" className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" type="checkbox" />
                                <Text className="text-gray-700"> Samsung </Text>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <Input variant="text" className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" type="checkbox" />
                                <Text className="text-gray-700"> Sony </Text>
                            </label>
                        </div>
                    )}
                </div>
                {/* Rating */}
                <div className="bg-white rounded-xl p-4">
                    <button onClick={() => { setOpen(!open) }} className="flex items-center justify-between w-full">
                        <h3 className="font-medium text-gray-900"> Rating </h3>
                        <ChevronDown className="w-5 h-5 text-gray-400 transition-transform" />
                    </button>
                    {open && (
                        <div className="mt-4 space-y-2">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <Input variant="text" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500" type="radio" name="rating" />
                                <div className="flex items-center gap-1">
                                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                    <Star className="w-4 h-4 text-gray-300" />
                                    <Text className="text-sm text-gray-600 ml-1"> & Up </Text>
                                </div>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <Input variant="text" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500" type="radio" name="rating" />
                                <div className="flex items-center gap-1">
                                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                    <Star className="w-4 h-4 text-gray-300" />
                                    <Star className="w-4 h-4 text-gray-300" />
                                    <Text className="text-sm text-gray-600 ml-1"> & Up </Text>
                                </div>
                            </label>
                        </div>
                    )}
                </div>
            </div>
        </aside>
    )
}