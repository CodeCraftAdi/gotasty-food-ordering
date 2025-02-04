import Image from 'next/image';
import AddToCartButton from "./AddToCartButton";

export default function MenuItemTile({ onAddToCart, ...item }) {
    const { image, description, name, basePrice, sizes, extraIngredientPrices } = item;
    const hasSizesOrExtras = sizes?.length > 0 || extraIngredientPrices?.length > 0;

    return (
        <div className="bg-gray-200 p-4 rounded-lg text-center group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
            <div className="text-center">
                <Image
                    src={image}
                    alt={name}
                    width={200} // Set a default width
                    height={200} // Set a default height
                    className="max-h-36 object-contain mx-auto"
                    style={{ width: 'auto', height: 'auto' }} // Maintain aspect ratio
                    priority // Add this property for above-the-fold images
                />
            </div>
            <h4 className="font-semibold text-xl my-3">{name}</h4>
            <p className="text-gray-500 text-sm line-clamp-3">
                {description}
            </p>
            <AddToCartButton
                image={image}
                hasSizesOrExtras={hasSizesOrExtras}
                onClick={onAddToCart}
                basePrice={basePrice}
            />
        </div>
    );
}