"use client";

import { Button, Typography } from "@material-tailwind/react";
import ProductItemCard from "@/components/product-item-card";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

const PETS = [
  {
    img: "/image/pets/pet1.png",
    tag: { Gene: 'Male', Age: '02 months' },
    title: "MO231 - Pomeranian White",
    label: "6.900.000 VND",
  },
  {
    img: "/image/pets/pet2.png",
    tag: { Gene: 'Female', Age: '02 months' },
    title: "MO502 - Poodle Tiny Yellow",
    label: "3.900.000 VND",
  },
  {
    img: "/image/pets/pet3.png",
    tag: { Gene: 'Male', Age: '02 months' },
    title: "MO102 - Poodle Tiny Sepia",
    label: "4.000.000 VND",
  },
  {
    img: "/image/pets/pet4.png",
    tag: { Gene: 'Male', Age: '02 months' },
    title: "MO512 - Alaskan Malamute Grey",
    label: "8.900.000 VND",
  },
  {
    img: "/image/pets/pet5.png",
    tag: { Gene: 'Male', Age: '02 months' },
    title: "MO231 - Pembroke Corgi Cream",
    label: "7.900.000 VND",
  },
  {
    img: "/image/pets/pet6.png",
    tag: { Gene: 'Female', Age: '02 months' },
    title: "MO502 - Pembroke Corgi Tricolor",
    label: "9.000.000 VND",
  },
  {
    img: "/image/pets/pet7.png",
    tag: { Gene: 'Female', Age: '02 months' },
    title: "MO231 - Pomeranian White",
    label: "6.500.000 VND",
  },
  {
    img: "/image/pets/pet8.png",
    tag: { Gene: 'Male', Age: '02 months' },
    title: "MO512 - Poodle Tiny Dairy Cow",
    label: "5.000.000 VND",
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
            Whats new?
          </Typography>
          <Typography variant="h3">
            Take a look at some of our pets
          </Typography>
        </div>

        <Button variant="outlined" className="font-light rounded-full border-2 border-primary-500 flex items-center justify-between w-36 mt-6 !py-2">
          <span>View more</span> <ChevronRightIcon className="w-6 h-6" />
        </Button>
      </div>

     {/* card items */}
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-24 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-14">
        {PETS.map((props, idx) => (
          <ProductItemCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default ExplorePets;
