// components
// import Image from "next/image"

import React from "react"
import { Navbar, Footer } from "@/components"
import { Suspense } from "react"
// import Navbar from "@/components/navbar";

// sections
import Hero from "./_components/hero"
import Banner from "./_components/banner"
// import OutImpressiveStats from "./out-impressive-stats";
// import CoursesCategories from "./courses-categories";
// import ExplorePets from "./_components/explore-pets";
// import Testimonial from "./testimonial";
// import Events from "./events";
// import StudentsFeedback from "./students-feedback";
// import TrustedCompany from "./trusted-companies";

const ExplorePets = React.lazy(() => import("./_components/explore-pets"))
const ExploreProducts = React.lazy(() => import("./_components/explore-products"))
// const Banner = React.lazy(() => import("./_components/banner"))

export default function Campaign() {
  return (
    <>
    <div className="bg-gradient-to-b from-[#fcefd5] via-[#fcefd5] to-[#FFE7BA]">
      <Navbar />
      <Hero />
    </div>
      {/* <OutImpressiveStats /> */}
      {/* <CoursesCategories /> */}
      <Suspense fallback={<span>Loading...</span>}>
        <ExplorePets />
      </Suspense>

      <div className="hidden lg:flex">
        <Banner />
      </div>

      <Suspense fallback={<span>Loading...</span>}>
        <ExploreProducts />
      </Suspense>

      {/* <Suspense fallback={<span>Loading...</span>}> */}

      {/* </Suspense> */}
      {/* <Testimonial /> */}
      {/* <Events /> */}
      {/* <StudentsFeedback /> */}
      {/* <TrustedCompany /> */}
      <Footer />
    </>
  );
}
