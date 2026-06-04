'use client';
import { Button } from "../custom/landing/Button";
import { Text } from "../custom/landing/Text";
import { ChevronRight } from "lucide-react";
import { ChevronLeft } from "lucide-react";

export default function Pagination() {
    return (
        <div className="flex items-center justify-center gap-2 mt-12">
            <Button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"><ChevronLeft className="w-5 h-5" /></Button>
            <Button contentKey="cta_50" className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-600 text-white"> 1 </Button>
            <Button contentKey="cta_51" className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"> 2 </Button>
            <Button contentKey="cta_52" className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"> 3 </Button>
            <Text className="px-2"> ... </Text>
            <Button contentKey="cta_53" className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"> 22 </Button>
            <Button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"><ChevronRight className="w-5 h-5" /></Button>
        </div>
    )
}