
import Brands from "@/components/landing/Brands";
import FlashDeals from "@/components/landing/FlashDeals";
import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import ShopByCategory from "@/components/landing/ShopByCategory";
import TopSellers from "@/components/landing/TopSellers";
import Trending from "@/components/landing/Trending";

export default function Page() {
  return (
    <>
      <Hero />
      <FlashDeals />
      <ShopByCategory/>
      <Trending/>
      <TopSellers/>
      <HowItWorks/>
      <Brands/>
    </>
  );
}
