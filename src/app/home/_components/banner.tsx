"use client";

import Image from "next/image";
import { Button, Typography, Card } from "@material-tailwind/react";

import BannerImg from "@/../public/image/banner.svg"
import { PlayCircleIcon } from "@heroicons/react/24/solid";

function Banner() {
  return (
    <div className="w-full relative container mx-auto mb-16 mt-16 text-center flex justify-end items-center">
      <Image
        // width={1200}
        // height={400}
        src={BannerImg}
        alt="bg-img"
        className="absolute object-cover object-center w-full"
      />
      <div className="flex container mt-2 w-1/2 self-end justify-end px-10">
        <div className="grid grid-cols-12 text-right lg:text-right">
          <Card className="col-span-full bg-transparent py-10 p-8 shadow-none relative animate-fade">
            <Typography
              variant="h1"
              // color="primary"
              className="lg:text-6xl !leading-snug text-3xl lg:max-w-5xl font-extrabold text-primary-500 z-10"
            >
              One more friend
            </Typography>

            <Typography
              variant="h2"
              // color="primary"
              className="lg:text-5xl !leading-snug text-3xl lg:max-w-3xl font-bold text-primary-500 z-10"
            >
              Thousands more fun!
            </Typography>

            <Typography variant="lead" className="mb-10 mt-6 !text-gray-900 text-base font-medium">
              Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!
            </Typography>

            <div className="mb-8 flex justify-end gap-4 lg:justify-end">
              <Button variant="outlined" className="font-light rounded-full flex">
                View Intro <PlayCircleIcon strokeWidth={1} stroke="currentColor" fill="none" className="h-4 w-4 ml-1" />
              </Button>
              <Button className="font-light">
                Explore Now
              </Button>
            </div>

          </Card>
        </div>
      </div>
    </div>
  );
}
export default Banner;
