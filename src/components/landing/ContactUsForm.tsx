import { Input } from "../custom/landing/Input"
import { Button } from "../custom/landing/Button"
import { Send } from "lucide-react"

export default function ContactUsForm() {
    return (
        <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700  mb-2"> First Name </label>
                    <Input className="w-full px-4 py-3 bg-gray-100  rounded-xl border-0 focus:ring-2 focus:ring-blue-500" type="text" placeholder="John" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700  mb-2"> Last Name </label>
                    <Input className="w-full px-4 py-3 bg-gray-100  rounded-xl border-0 focus:ring-2 focus:ring-blue-500" type="text" placeholder="Doe" />
                </div>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700  mb-2"> Email Address </label>
                <Input className="w-full px-4 py-3 bg-gray-100  rounded-xl border-0 focus:ring-2 focus:ring-blue-500" type="email" placeholder="john@example.com" />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700  mb-2"> Subject </label>
                <select className="w-full px-4 py-3 bg-gray-100  rounded-xl border-0 focus:ring-2 focus:ring-blue-500">
                    <option> Select a topic </option>
                    <option> Order Inquiry </option>
                    <option> Returns & Refunds </option>
                    <option> Product Question </option>
                    <option> Seller Support </option>
                    <option> Technical Issue </option>
                    <option> Other </option>
                </select>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700  mb-2"> Order Number (optional) </label>
                <Input className="w-full px-4 py-3 bg-gray-100  rounded-xl border-0 focus:ring-2 focus:ring-blue-500" type="text" placeholder="ORD-123456" />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700  mb-2"> Message </label>
                <textarea placeholder="How can we help you?" rows={5} className="w-full px-4 py-3 bg-gray-100  rounded-xl border-0 focus:ring-2 focus:ring-blue-500 resize-none"></textarea>
            </div>
            <Button contentKey="cta_34" className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg flex items-center justify-center gap-2" type="submit"><Send className="w-5 h-5" />
                Send Message </Button>
        </form>
    )
}