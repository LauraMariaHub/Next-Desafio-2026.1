import ProductInfo from "./productinfo";
import ProductGallery from "./productgallery";

export default function ProductDetails() {
  return (
    <div className="w-full flex flex-col md:flex-row justify-center items-center gap-10 p-2">
        <ProductGallery />
        <ProductInfo />
    </div>
  );
}