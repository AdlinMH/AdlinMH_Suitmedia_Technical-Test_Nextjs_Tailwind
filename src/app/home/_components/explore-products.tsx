"use client";

import { Button, Typography } from "@material-tailwind/react";
import ProductItemCard from "@/components/product-item-card";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

const PRODUCTS = [
  {
    img: "/image/products/prod1.png",
    tag: { Product: 'Dog Food', Size: '385gm' },
    title: "Reflex Plus Adult Cat Food Salmon",
    label: "6.900.000 VND",
    promo: "Free Toy & Free Shaker",
  },
  {
    img: "/image/products/prod2.png",
    tag: { Product: 'Cat Food', Size: '385gm' },
    title: "Reflex Plus Adult Cat Food Salmon",
    label: "3.900.000 VND",
    promo: "Free Toy & Free Shaker",
  },
  {
    img: "/image/products/prod3.png",
    tag: { Product: 'Dog Food', Size: '385gm' },
    title: "Cat scratching ball toy kitten sisal rope ball",
    label: "4.000.000 VND",
    promo: "Free Cat Food",
  },
  {
    img: "/image/products/prod4.png",
    tag: { Product: 'Dog Food', Size: '385gm' },
    title: "Cute Pet Cat Warm Nest",
    label: "8.900.000 VND",
    promo: "Free Cat Food",
  },
  {
    img: "/image/products/prod5.png",
    tag: { Product: 'Dog Food', Size: '385gm' },
    title: "NaturVet Dogs - Omega-Gold Plus Salmon Oil",
    label: "7.900.000 VND",
    promo: "Free Toy & Free Shaker",
  },
  {
    img: "/image/products/prod6.png",
    tag: { Product: 'Cat Food', Size: '385gm' },
    title: "Costumes Fashion Pet Clother Cowboy Rider",
    label: "9.000.000 VND",
    promo: "Free Dog Food",
  },
  {
    img: "/image/products/prod7.png",
    tag: { Product: 'Cat Food', Size: '385gm' },
    title: "Costumes Chicken Drumsti ck Headband",
    label: "6.500.000 VND",
    promo: "Free Toy & Free Shaker",
  },
  {
    img: "/image/products/prod8.png",
    tag: { Product: 'Dog Food', Size: '385gm' },
    title: "Plush Pet Toy",
    label: "5.000.000 VND",
    promo: "Free Toy & Free Shaker",
  },
];

export function ExplorePets() {
  return (
    <section className="px-8 mt-8">
      {/* titles */}
      <div className="container mx-auto mb-24 text-center flex justify-between items-center">
        <div className="flex flex-col items-center justify-start">
          <Typography
            variant="lead"
            className="mt-2 w-full !text-gray-700 text-left"
          >
            Hard to choose right products for your pets?
          </Typography>
          <Typography variant="h3">
            Our Products
          </Typography>
        </div>

        <Button variant="outlined" className="font-light rounded-full border-2 border-primary-500 flex items-center justify-between w-36 mt-6 !py-2">
          <span>View more</span> <ChevronRightIcon className="w-6 h-6" />
        </Button>
      </div>

     {/* card items */}
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-24 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-14">
        {PRODUCTS.map((props, idx) => (
          <ProductItemCard key={`product_item_${idx}_${props.title}`} {...props} />
        ))}
      </div>
    </section>
  );
}

export default ExplorePets;
