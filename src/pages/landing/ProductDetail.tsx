// app/products/[productId]/page.tsx

import ProductDetailClient from "@/components/landing/ProductDetailClient";

export default async function ProductDetail({
    params,
}: {
    params: Promise<{ productId: string }>;
}) {
    const { productId } = await params;

    return <ProductDetailClient productId={productId} />;
}