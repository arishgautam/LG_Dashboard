'use client';

import { Filter } from "lucide-react";
import { Text } from "../custom/landing/Text";
import { Button } from "../custom/landing/Button";
import { Grid3x3 } from "lucide-react";
import { List } from "lucide-react";
import { useState } from "react";

export default function Toolbar() {

    const [filterOpen, setFilterOpen] = useState(false);

    return (
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div className="flex items-center gap-4">
                <button onClick={() => { setFilterOpen(true) }} className="lg:hidden flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm">
                    <Filter className="w-5 h-5" />
                    <Text> Filters </Text>
                </button>
                <p className="text-gray-600">
                    Showing
                    <Text className="font-medium text-gray-900"> 1-12 </Text>
                    of
                    <Text className="font-medium text-gray-900"> 256 </Text>
                    products
                </p>
            </div>
            <div className="flex items-center gap-4">
                <select className="px-4 py-2 bg-white rounded-lg shadow-sm border-0 focus:ring-2 focus:ring-blue-500 text-sm">
                    <option> Sort by: Featured </option>
                    <option> Price: Low to High </option>
                    <option> Price: High to Low </option>
                    <option> Newest First </option>
                    <option> Best Rating </option>
                </select>
                {/* <div className="hidden sm:flex items-center gap-2">
                    <Button className="p-2 bg-blue-600 text-white rounded-lg"><Grid3x3 className="w-5 h-5" /></Button>
                    <button className="p-2 bg-white text-gray-600 rounded-lg shadow-sm"><List className="w-5 h-5" /></button>
                </div> */}
            </div>
        </div>
    )
}