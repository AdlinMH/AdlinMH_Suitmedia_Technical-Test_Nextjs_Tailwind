"use client";

import Image from "next/image";
import { Button, Typography, Card } from "@material-tailwind/react";
import { PlayCircleIcon, PlayIcon } from "@heroicons/react/24/solid";

function Hero() {
  return (
    <div className="!flex flex-col lg:flex-row lg:h-[80vh] w-full lg:items-end px-10 max-w-screen-2xl mx-auto relative">
      {/* hero texts */}
      <div className="lg:w-6/12 self-center">
        <div className="grid grid-cols-12 text-center lg:text-left">
          <Card className="col-span-full bg-transparent py-10 p-8 shadow-none relative">
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

            <div className="mb-8 flex justify-center gap-4 lg:justify-start">
              <Button variant="outlined" className="font-light rounded-full flex">
                View Intro <PlayCircleIcon strokeWidth={1} stroke="currentColor" fill="none" className="h-4 w-4 ml-1" />
              </Button>
              <Button className="font-light">
                Explore Now
              </Button>
            </div>

            <Image
              width={80}
              height={80}
              src="/image/decoration3.svg"
              alt=""
              // className="absolute inset-0 ml-auto w-[920px] h-[780px] rounded-bl-[100px] object-cover object-center"
              className="absolute -ml-3 -mt-2 -z-1 sm:w-[3em] md:w-auto"
            />
          </Card>
        </div>
      </div>

      {/* talent illustration */}
      <div className="lg:w-8/12">
        <Image
          width={1200}
          height={1200}
          src="/image/talent.png"
          alt="hero"
          className="w-full object-cover"
        />
      </div>

      <Image
        width={490}
        height={490}
        src="/image/decoration2.svg"
        alt=""
        // className="absolute inset-0 ml-auto w-[920px] h-[780px] rounded-bl-[100px] object-cover object-center"
        className="absolute hidden lg:flex"
      />
    </div>
  );
}
export default Hero;
