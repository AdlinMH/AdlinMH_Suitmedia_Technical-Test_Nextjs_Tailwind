import React from "react"
import { Navbar, Footer } from "@/components"
import { Suspense } from "react"

// sections
import Hero from "./_components/hero"
import Banner from "./_components/banner"

const ExplorePets = React.lazy(() => import("./_components/explore-pets"))
const ExploreProducts = React.lazy(() => import("./_components/explore-products"))

export default function Campaign() {
  return (
    <>
      <div className="bg-gradient-to-b from-[#fcefd5] via-[#fcefd5] to-[#FFE7BA]">
        <Navbar />
        <Hero />
      </div>

      <Suspense fallback={<span>Loading...</span>}>
        <ExplorePets />
      </Suspense>

      <div className="hidden lg:flex">
        <Banner />
      </div>

      <Suspense fallback={<span>Loading...</span>}>
        <ExploreProducts />
      </Suspense>

      <Footer />
    </>
  );
}
