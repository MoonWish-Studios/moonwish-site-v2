import Hero from "./components/Hero"
import Statement from "./components/Statement"
import WhyUs from "./components/WhyUs"
import ProcessSection from "./components/ProcessSection/ProcessSection"
import Action from "./components/Action"
import Image from "next/image"

// download headwind extension to autosort classnames so we see the same thing
export default function Home() {
  return (
    <div className="">
      <Hero />
      <Statement title="WHO WE ARE">
        Our mission is to make a positive impact on businesses in our community
        who want to provide the best service to their customers. We strive to
        highlight the amazing products and services that your business offers.
      </Statement>
      <WhyUs />
      <ProcessSection />
      <Action />
      <div className="w-full flex justify-center bg-lightGray">
        <Image
          src={"/assets/twoPeople.svg"}
          alt={""}
          height={900}
          width={900}
        />
      </div>
    </div>
  )
}
