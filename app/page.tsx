"use client"
import CallToActionWithAnnotation from "@/components/HeroSection"
import SimpleThreeColumns from "@/components/Features"
import SplitWithImage from "@/components/Testimonials"
import Carousel from "@/components/Carousel"

export default function Home() {
  return (
    <>
      <Carousel />
      <CallToActionWithAnnotation />
      <SimpleThreeColumns />
      <SplitWithImage />
    </>
  )
}
