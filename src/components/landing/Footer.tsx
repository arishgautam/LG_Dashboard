import { Link } from "react-router-dom";
import { Text } from "../custom/landing/Text";
import { Store } from "lucide-react";
import { ShieldCheck } from "lucide-react";
import { Truck } from "lucide-react";
import { RefreshCcw } from "lucide-react";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Logo & About */}

          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link className="flex items-center gap-2 mb-4" to="/">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl flex items-center justify-center">
                <Store className="w-6 h-6 text-white" />
              </div>
              <Text variant="bold" className="text-xl font-bold text-white">
                {" "}
                VibrantMart{" "}
              </Text>
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              Your one-stop marketplace for everything you need. Shop from
              thousands of sellers worldwide.
            </p>
            <div className="flex items-center gap-4">
              <Link
                className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-colors"
                to="https://facebook.com"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7"
                  viewBox="0 0 640 640"
                  fill="#fff"
                >
                  <path d="M581.7 188.1C575.5 164.4 556.9 145.8 533.4 139.5C490.9 128 320.1 128 320.1 128C320.1 128 149.3 128 106.7 139.5C83.2 145.8 64.7 164.4 58.4 188.1C47 231 47 320.4 47 320.4C47 320.4 47 409.8 58.4 452.7C64.7 476.3 83.2 494.2 106.7 500.5C149.3 512 320.1 512 320.1 512C320.1 512 490.9 512 533.5 500.5C557 494.2 575.5 476.3 581.8 452.7C593.2 409.8 593.2 320.4 593.2 320.4C593.2 320.4 593.2 231 581.8 188.1zM264.2 401.6L264.2 239.2L406.9 320.4L264.2 401.6z" />
                </svg>
              </Link>
              <Link
                className="w-10 h-10 bg-gray-800 hover:bg-black rounded-lg flex items-center justify-center transition-colors"
                to="https://x.com"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7"
                  viewBox="0 0 640 640"
                  fill="#fff"
                >
                  <path d="M453.2 112L523.8 112L369.6 288.2L551 528L409 528L297.7 382.6L170.5 528L99.8 528L264.7 339.5L90.8 112L236.4 112L336.9 244.9L453.2 112zM428.4 485.8L467.5 485.8L215.1 152L173.1 152L428.4 485.8z" />
                </svg>
              </Link>
              <Link
                className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-colors"
                to="https://instagram.com"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7"
                  viewBox="0 0 640 640"
                  fill="#fff"
                >
                  <path d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z" />
                </svg>
              </Link>
              <Link
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                to="https://linkedin.com"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  className="w-7 h-7"
                  fill="#fff"
                >
                  <path d="M512 96L127.9 96C110.3 96 96 110.5 96 128.3L96 511.7C96 529.5 110.3 544 127.9 544L512 544C529.6 544 544 529.5 544 511.7L544 128.3C544 110.5 529.6 96 512 96zM231.4 480L165 480L165 266.2L231.5 266.2L231.5 480L231.4 480zM198.2 160C219.5 160 236.7 177.2 236.7 198.5C236.7 219.8 219.5 237 198.2 237C176.9 237 159.7 219.8 159.7 198.5C159.7 177.2 176.9 160 198.2 160zM480.3 480L413.9 480L413.9 376C413.9 351.2 413.4 319.3 379.4 319.3C344.8 319.3 339.5 346.3 339.5 374.2L339.5 480L273.1 480L273.1 266.2L336.8 266.2L336.8 295.4L337.7 295.4C346.6 278.6 368.3 260.9 400.6 260.9C467.8 260.9 480.3 305.2 480.3 362.8L480.3 480z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-white font-semibold mb-4"> Shop </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  className="hover:text-white transition-colors"
                  to="/allcategories"
                >
                  {" "}
                  All Categories{" "}
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-white transition-colors"
                  to="/newarrivals"
                >
                  {" "}
                  New Arrivals{" "}
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-white transition-colors"
                  to="/products"
                >
                  {" "}
                  Bestsellers{" "}
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-white transition-colors"
                  to="/products"
                >
                  {" "}
                  Deals & Offers{" "}
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-white transition-colors"
                  to="products.html"
                >
                  {" "}
                  Gift Cards{" "}
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              {" "}
              Customer Service{" "}
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  className="hover:text-white transition-colors"
                  to="contact.html"
                >
                  {" "}
                  Contact Us{" "}
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-white transition-colors"
                  to="contact.html"
                >
                  {" "}
                  FAQ{" "}
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-white transition-colors"
                  to="contact.html"
                >
                  {" "}
                  Shipping Info{" "}
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-white transition-colors"
                  to="contact.html"
                >
                  {" "}
                  Returns & Refunds{" "}
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-white transition-colors"
                  to="contact.html"
                >
                  {" "}
                  Track Order{" "}
                </Link>
              </li>
            </ul>
          </div>

          {/* Sellers */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              {" "}
              Sell on VibrantMart{" "}
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  className="hover:text-white transition-colors"
                  to="sellers.html"
                >
                  {" "}
                  Become a Seller{" "}
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-white transition-colors"
                  to="sellers.html"
                >
                  {" "}
                  Seller Login{" "}
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-white transition-colors"
                  to="sellers.html"
                >
                  {" "}
                  Seller Resources{" "}
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-white transition-colors"
                  to="sellers.html"
                >
                  {" "}
                  Success Stories{" "}
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-white transition-colors"
                  to="sellers.html"
                >
                  {" "}
                  Seller Support{" "}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4"> Company </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  className="hover:text-white transition-colors"
                  to="contact.html"
                >
                  {" "}
                  About Us{" "}
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-white transition-colors"
                  to="contact.html"
                >
                  {" "}
                  Careers{" "}
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-white transition-colors"
                  to="contact.html"
                >
                  {" "}
                  Press{" "}
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-white transition-colors"
                  to="/privacy"
                >
                  {" "}
                  Privacy Policy{" "}
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-white transition-colors"
                  to="/terms"
                >
                  {" "}
                  Terms of Service{" "}
                </Link>
              </li>
            </ul>
          </div>

          {/* Payment Methods & Trust Badges */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4 flex-wrap justify-center">
                <Text className="text-sm text-gray-500"> We accept: </Text>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-8 bg-gray-800 rounded flex items-center justify-center text-xs font-bold text-blue-400">
                    {" "}
                    VISA{" "}
                  </div>
                  <div className="w-12 h-8 bg-gray-800 rounded flex items-center justify-center text-xs font-bold text-red-400">
                    {" "}
                    MC{" "}
                  </div>
                  <div className="w-12 h-8 bg-gray-800 rounded flex items-center justify-center text-xs font-bold text-blue-300">
                    {" "}
                    AMEX{" "}
                  </div>
                  <div className="w-12 h-8 bg-gray-800 rounded flex items-center justify-center text-xs font-bold text-blue-500">
                    {" "}
                    PP{" "}
                  </div>
                  <div className="w-12 h-8 bg-gray-800 rounded flex items-center justify-center text-xs font-bold text-green-400">
                    {" "}
                    AP{" "}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <ShieldCheck className="w-5 h-5 text-green-500" />
                  <Text> Secure Payments </Text>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Truck className="w-5 h-5 text-blue-400" />
                  <Text> Fast Shipping </Text>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <RefreshCcw className="w-5 h-5 text-orange-400" />
                  <Text> Easy Returns </Text>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
            <p> © {year} VibrantMart. All rights reserved. </p>
          </div>
          
        </div>
      </div>
    </footer>
  );
}
