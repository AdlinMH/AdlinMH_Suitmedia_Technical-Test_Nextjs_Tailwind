// components
import Image from "next/image"

import { Navbar, Footer } from "@/components";

// sections
import Hero from "./_components/hero";
// import OutImpressiveStats from "./out-impressive-stats";
// import CoursesCategories from "./courses-categories";
// import ExploreCourses from "./explore-courses";
// import Testimonial from "./testimonial";
// import Events from "./events";
// import StudentsFeedback from "./students-feedback";
// import TrustedCompany from "./trusted-companies";

export default function Campaign() {
  return (
    <>
    <div className="bg-gradient-to-b from-[#fcefd5] via-[#fcefd5] to-[#FFE7BA]">
      <Navbar />
      <Hero />
    </div>
      {/* <OutImpressiveStats />
      <CoursesCategories />
      <ExploreCourses />
      <Testimonial />
      <Events />
      <StudentsFeedback />
      <TrustedCompany /> */}
      {/* <Footer /> */}
    </>
  );
}
