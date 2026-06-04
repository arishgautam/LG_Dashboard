'use client';

import { useState } from 'react';
import {Link } from 'react-router-dom'
import { Text } from '../custom/landing/Text';
import { Link as CustomLink } from '../custom/landing/Link';
import { Button } from '../custom/landing/Button';
import { Input } from '../custom/landing/Input';
import { Truck } from 'lucide-react';
import { Store } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import { Search } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { Menu } from 'lucide-react';
import { Grid3x3 } from 'lucide-react';
import { Smartphone } from 'lucide-react';
import { Shirt } from 'lucide-react';
import { Home } from 'lucide-react';
import { Dumbbell } from 'lucide-react';
import { X } from 'lucide-react';
import { Zap } from 'lucide-react';
import { Sparkles } from 'lucide-react';
import { TrendingUp } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Heart } from 'lucide-react';
import { User } from 'lucide-react';

export default function Navbar() {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [megaMenuOpen, setMegaMenuOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    return (
        <header className="sticky top-0 z-50">
            {/* Top Bar */}
            {/* <div className="bg-gray-900 text-white text-sm py-2">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Text className="flex items-center gap-1"><Truck className="w-4 h-4" />
                            <Text className="hidden sm:inline"> Free shipping on orders over $50 </Text>
                            <Text className="sm:hidden"> Free shipping $50+ </Text></Text>
                    </div>
                    <div className="flex items-center gap-4">
                        <CustomLink variant="inline" className="hover:text-blue-400 transition-colors hidden sm:inline" href="/contact"> Help Center </CustomLink>
                        <CustomLink className="hover:text-blue-400 transition-colors" href="sellers.html"> Sell on Marketplace </CustomLink>
                    </div>
                </div>
            </div> */}

            {/* Main Header */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 lg:h-20">
                        {/* Logo */}
                        <CustomLink className="flex items-center gap-2 flex-shrink-0" href="/">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl flex items-center justify-center">
                                <Store className="w-6 h-6 text-white" />
                            </div>
                            <Text variant="bold" className="text-xl font-bold text-gray-900"> VibrantMart </Text>
                        </CustomLink>
                        {/* Search Bar (Desktop) */}
                        <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
                            <div className="relative w-full">
                                <div className="flex">
                                    <Button contentKey="cta_59" className="flex items-center gap-2 px-4 py-2.5 bg-gray-100  border border-r-0 border-gray-300  rounded-l-xl text-sm text-gray-700  hover:bg-gray-200  transition-colors"><Text> All </Text>
                                        <ChevronDown className="w-4 h-4" /></Button>
                                    <Input variant="text" className="flex-1 px-4 py-2.5 border border-gray-300  bg-white  text-gray-900 placeholder-gray-500  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" type="text" placeholder="Search for products, brands, and more..." />
                                    <Button className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-r-xl transition-colors"><Search className="w-5 h-5" /></Button>
                                </div>
                                {/* Search Suggestions */}
                                {searchOpen && query.length > 0 && (
                                    <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden z-50">
                                        <div className="p-2">
                                            <p className="px-3 py-2 text-xs font-medium text-gray-500  uppercase"> Suggestions </p>
                                            <CustomLink className="flex items-center gap-3 px-3 py-2 hover:bg-gray-100  rounded-lg transition-colors" href="products.html"><Search className="w-4 h-4 text-gray-400" />
                                                <Text className="text-gray-700 "> Electronics </Text></CustomLink>
                                            <CustomLink className="flex items-center gap-3 px-3 py-2 hover:bg-gray-100  rounded-lg transition-colors" href="products.html"><Search className="w-4 h-4 text-gray-400" />
                                                <Text className="text-gray-700 "> Fashion </Text></CustomLink>
                                            <CustomLink className="flex items-center gap-3 px-3 py-2 hover:bg-gray-100  rounded-lg transition-colors" href="products.html"><Search className="w-4 h-4 text-gray-400" />
                                                <Text className="text-gray-700 "> Home & Garden </Text></CustomLink>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        {/* Right Actions */}
                        <div className="flex items-center gap-2 lg:gap-4">
                            {/* Dark Mode Toggle */}
                            {/* <button onClick={() => { setDarkMode(!darkMode) }} aria-label="Toggle dark mode" className="p-2 rounded-lg hover:bg-gray-100  transition-colors">
                            <Sun className="w-5 h-5 text-gray-600  hidden dark:block" />
                            <Moon className="w-5 h-5 text-gray-600  block dark:hidden" />
                        </button> */}
                            {/* Account (Desktop) */}
                            <CustomLink className="hidden lg:flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100  transition-colors" href="/account"><User className="w-5 h-5 text-gray-600 " />
                                <Text className="text-sm text-gray-700 "> Account </Text></CustomLink>
                            {/* Wishlist (Desktop) */}
                            <CustomLink className="hidden lg:flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100  transition-colors relative" href="/wishlish"><Heart className="w-5 h-5 text-gray-600 " />
                                <Text className="absolute -top-1 -right-1 w-5 h-5 bg-orange-500 text-white text-xs font-medium rounded-full flex items-center justify-center"> 3 </Text></CustomLink>
                            {/* Cart */}
                            <CustomLink className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100  transition-colors relative" href="/cart"><ShoppingCart className="w-5 h-5 text-gray-600 " />
                                <Text className="absolute -top-1 -right-1 w-5 h-5 bg-blue-600 text-white text-xs font-medium rounded-full flex items-center justify-center"> 5 </Text></CustomLink>
                            {/* Mobile Menu Button */}
                            <button onClick={() => { setMobileMenuOpen(true) }} aria-label="Open menu" className="lg:hidden p-2 rounded-lg hover:bg-gray-100  transition-colors">
                                <Menu className="w-6 h-6 text-gray-600 " />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Bar (Desktop) */}
            <nav className="hidden lg:block bg-gray-50 border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-12">
                        <div className="flex items-center gap-6">
                            {/* Categories Mega Menu Trigger */}
                            <div className="relative">
                                <button
                                    onClick={() => setMegaMenuOpen(!megaMenuOpen)}
                                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                                >
                                    <Grid3x3 className="w-5 h-5" />
                                    <Text> Categories </Text>
                                    <ChevronDown className="w-4 h-4" />
                                </button>
                                {/* Mega Menu */}
                                {megaMenuOpen && (
                                    <div className="absolute left-0 mt-2 w-screen max-w-4xl bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden z-50">
                                        <div className="grid grid-cols-4 gap-6 p-6">
                                            {/* Electronics */}
                                            <div>
                                                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                                    <Smartphone className="w-5 h-5 text-blue-600" />
                                                    Electronics
                                                </h3>
                                                <ul className="space-y-2 text-sm">
                                                    <li>
                                                        <CustomLink className="text-gray-600  hover:text-blue-600  transition-colors" href="/smartphone"> Smartphones </CustomLink>
                                                    </li>
                                                    <li>
                                                        <CustomLink className="text-gray-600  hover:text-blue-600  transition-colors" href="/laptops"> Laptops </CustomLink>
                                                    </li>
                                                    <li>
                                                        <CustomLink className="text-gray-600  hover:text-blue-600  transition-colors" href="/tablets"> Tablets </CustomLink>
                                                    </li>
                                                    <li>
                                                        <CustomLink className="text-gray-600  hover:text-blue-600  transition-colors" href="/electronicsaccessories"> Accessories </CustomLink>
                                                    </li>
                                                </ul>
                                            </div>
                                            {/* Fashion */}
                                            <div>
                                                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                                    <Shirt className="w-5 h-5 text-orange-500" />
                                                    Fashion
                                                </h3>
                                                <ul className="space-y-2 text-sm">
                                                    <li>
                                                        <CustomLink className="text-gray-600  hover:text-blue-600  transition-colors" href="/mensclothing"> Men's Clothing </CustomLink>
                                                    </li>
                                                    <li>
                                                        <CustomLink className="text-gray-600  hover:text-blue-600  transition-colors" href="/womensclothing"> Women's Clothing </CustomLink>
                                                    </li>
                                                    <li>
                                                        <CustomLink className="text-gray-600  hover:text-blue-600  transition-colors" href="/shoes"> Shoes </CustomLink>
                                                    </li>
                                                    <li>
                                                        <CustomLink className="text-gray-600  hover:text-blue-600  transition-colors" href="/fashionaccessories"> Accessories </CustomLink>
                                                    </li>
                                                </ul>
                                            </div>
                                            {/* Home & Garden */}
                                            <div>
                                                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                                    <Home className="w-5 h-5 text-green-500" />
                                                    Home & Garden
                                                </h3>
                                                <ul className="space-y-2 text-sm">
                                                    <li>
                                                        <CustomLink className="text-gray-600  hover:text-blue-600  transition-colors" href="/furniture"> Furniture </CustomLink>
                                                    </li>
                                                    <li>
                                                        <CustomLink className="text-gray-600  hover:text-blue-600  transition-colors" href="/decor"> Decor </CustomLink>
                                                    </li>
                                                    <li>
                                                        <CustomLink className="text-gray-600  hover:text-blue-600  transition-colors" href="/kitchen"> Kitchen </CustomLink>
                                                    </li>
                                                    <li>
                                                        <CustomLink className="text-gray-600  hover:text-blue-600  transition-colors" href="/garden"> Garden </CustomLink>
                                                    </li>
                                                </ul>
                                            </div>
                                            {/* Sports */}
                                            <div>
                                                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                                    <Dumbbell className="w-5 h-5 text-purple-500" />
                                                    Sports
                                                </h3>
                                                <ul className="space-y-2 text-sm">
                                                    <li>
                                                        <CustomLink className="text-gray-600  hover:text-blue-600  transition-colors" href="/fitness">
                                                            Fitness
                                                        </CustomLink>
                                                    </li>
                                                    <li>
                                                        <CustomLink className="text-gray-600  hover:text-blue-600  transition-colors" href="/outdoor">
                                                            Outdoor
                                                        </CustomLink>
                                                    </li>
                                                    <li>
                                                        <CustomLink className="text-gray-600  hover:text-blue-600  transition-colors" href="/teamsports">
                                                            Team Sports
                                                        </CustomLink>
                                                    </li>
                                                    <li>
                                                        <CustomLink className="text-gray-600  hover:text-blue-600  transition-colors" href="/watersports">
                                                            Water Sports
                                                        </CustomLink>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* Featured Banner */}
                                        <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <p className="text-white font-semibold"> Flash Sale! Up to 50% Off </p>
                                                    <p className="text-white/80 text-sm"> Limited time offers on thousands of items </p>
                                                </div>
                                                <CustomLink className="px-4 py-2 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors" href="/products">
                                                    Shop Now
                                                </CustomLink>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            {/* Quick Links */}
                            <CustomLink
                                className="text-sm font-medium text-gray-700  hover:text-blue-600  transition-colors"
                                href="/deals">
                                Deals
                            </CustomLink>
                            <CustomLink
                                className="text-sm font-medium text-gray-700  hover:text-blue-600  transition-colors"
                                href="/newarrivals">
                                New Arrivals
                            </CustomLink>
                            <CustomLink
                                className="text-sm font-medium text-gray-700  hover:text-blue-600  transition-colors"
                                href="/category">
                                All Categories
                            </CustomLink>
                        </div>
                        <CustomLink className="text-sm font-medium text-gray-700  hover:text-blue-600  transition-colors" href="/contact">
                            Contact Us
                        </CustomLink>
                    </div>
                </div>
            </nav>
            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div onClick={() => { setMobileMenuOpen(false) }} className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 lg:hidden"></div>
            )}
            {/* Mobile Menu Panel */}
            {mobileMenuOpen && (
                <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl z-50 lg:hidden overflow-y-auto">
                    {/* Mobile Menu Header */}
                    <div className="flex items-center justify-between p-4 border-b border-gray-200">
                        <Text variant="bold" className="text-lg font-semibold text-gray-900"> Menu </Text>
                        <button onClick={() => { setMobileMenuOpen(false) }} className="p-2 rounded-lg hover:bg-gray-100  transition-colors"><X className="w-6 h-6 text-gray-600 " /></button>
                    </div>
                    {/* Mobile Search */}
                    <div className="p-4 border-b border-gray-200">
                        <div className="relative">
                            <Input variant="text" className="w-full px-4 py-3 pl-10 bg-gray-100  text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="Search products..." />
                            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        </div>
                    </div>
                    {/* Mobile Navigation */}
                    <nav className="p-4">
                        {/* Categories Accordion */}
                        <div className="mb-4">
                            <button onClick={() => { setActiveCategory(activeCategory === 'categories' ? null : 'categories') }} className="flex items-center justify-between w-full py-3 text-left text-gray-900 font-medium">
                                <Text className="flex items-center gap-3"><Grid3x3 className="w-5 h-5 text-blue-600" />
                                    Categories </Text>
                                <ChevronDown className="w-5 h-5 transition-transform" />
                            </button>
                            {activeCategory === 'categories' && (
                                <div x-collapse="" className="pl-8 space-y-2 pb-2">
                                    <CustomLink className="block py-2 text-gray-600  hover:text-blue-600 " href="products.html"> Electronics </CustomLink>
                                    <CustomLink className="block py-2 text-gray-600  hover:text-blue-600 " href="products.html"> Fashion </CustomLink>
                                    <CustomLink className="block py-2 text-gray-600  hover:text-blue-600 " href="products.html"> Home & Garden </CustomLink>
                                    <CustomLink className="block py-2 text-gray-600  hover:text-blue-600 " href="products.html"> Sports </CustomLink>
                                    <CustomLink className="block py-2 text-blue-600  font-medium" href="categories.html"> View All Categories </CustomLink>
                                </div>
                            )}
                        </div>
                        {/* Quick Links */}
                        <div className="space-y-1">
                            <CustomLink className="flex items-center gap-3 py-3 text-gray-900 font-medium hover:text-blue-600  transition-colors" href="products.html"><Zap className="w-5 h-5 text-orange-500" />
                                Deals </CustomLink>
                            <CustomLink className="flex items-center gap-3 py-3 text-gray-900 font-medium hover:text-blue-600  transition-colors" href="products.html"><Sparkles className="w-5 h-5 text-purple-500" />
                                New Arrivals </CustomLink>
                            <CustomLink className="flex items-center gap-3 py-3 text-gray-900 font-medium hover:text-blue-600  transition-colors" href="products.html"><TrendingUp className="w-5 h-5 text-green-500" />
                                Bestsellers </CustomLink>
                            <CustomLink className="flex items-center gap-3 py-3 text-gray-900 font-medium hover:text-blue-600  transition-colors" href="sellers.html"><Store className="w-5 h-5 text-blue-500" />
                                Sellers </CustomLink>
                            <CustomLink className="flex items-center gap-3 py-3 text-gray-900 font-medium hover:text-blue-600  transition-colors" href="contact.html"><Mail className="w-5 h-5 text-gray-500" />
                                Contact Us </CustomLink>
                        </div>
                        {/* Account Section */}
                        <div className="mt-6 pt-6 border-t border-gray-200">
                            <CustomLink className="flex items-center gap-3 py-3 text-gray-900 font-medium hover:text-blue-600  transition-colors" href="contact.html"><User className="w-5 h-5" />
                                My Account </CustomLink>
                            <CustomLink className="flex items-center gap-3 py-3 text-gray-900 font-medium hover:text-blue-600  transition-colors" href="products.html"><Heart className="w-5 h-5" />
                                Wishlist
                                <Text className="ml-auto px-2 py-0.5 bg-orange-100  text-orange-600 text-xs font-medium rounded-full"> 3 </Text></CustomLink>
                            <CustomLink className="flex items-center gap-3 py-3 text-gray-900 font-medium hover:text-blue-600  transition-colors" href="cart.html"><ShoppingCart className="w-5 h-5" />
                                Cart
                                <Text className="ml-auto px-2 py-0.5 bg-blue-100  text-blue-600  text-xs font-medium rounded-full"> 5 </Text></CustomLink>
                        </div>
                    </nav>
                    {/* Mobile Menu Footer */}
                    <div className="p-4 mt-auto border-t border-gray-200">
                        <CustomLink className="flex items-center justify-center gap-2 w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-colors" href="sellers.html"><Store className="w-5 h-5" />
                            Become a Seller </CustomLink>
                    </div>
                </div>
            )}
        </header>
    )
}