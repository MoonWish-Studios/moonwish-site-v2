import Image from "next/image"
import React from "react"
import Action from "../components/Action"

export default function Page() {
  return (
    <div className="">
      <HeroSection
        title="Our Specialities That Makes Us Different"
        description="Here are some of the things we can do for your business!"
        src="/assets/designs/services-design.svg"
      />

      <div className="w-full relative -z-20 bg-neutral-50 h-80 "></div>
      <CardSection />
      {/* <Action /> */}
    </div>
  )
}

function HeroSection({ title, description, src, children }: any) {
  return (
    <div className="w-full items-start overflow-x-clip pl-40 ">
      <div className="my-16 mb-52">
        <h1 className="text-5xl leading-snug max-w-xl tracking-wide my-6 font-semibold">
          {title}
        </h1>
        <p className="text-2xl max-w-xl leading-snug text-gray-600">
          {description}
        </p>
      </div>
      <Image
        src={src}
        width="750"
        height="500"
        className="absolute right-0 top-32 -z-10
         "
        alt="Graphic Design"
      />
    </div>
  )
}

function CardSection({}) {
  return (
    <div className="flex flex-wrap gap-8 justify-center mx-9 my-12 -translate-y-32 ">
      <Card
        title="UI/UX Design"
        text="Design the user interface and web pages including mobile layouts for your business website to maximize user experience"
        src="design.svg"
      />
      <Card
        title="Front-end Development"
        text="We use the best technologies such as NextJS, TailwindCSS, and Typescript to build your digital experience"
        src="frontend.svg"
      />
      <Card
        title="SEO Optimization"
        text="We will optimize your website to rank on the first page of Google when people search related keywords"
        src="seo.svg"
      />
      <Card
        title="Analytics"
        text="Want to have data and statistics of your website to find what source is driving the most traffic? We will track of analytics for you"
        src="analytics.svg"
      />
      <Card
        title="Custom Scheduling"
        text="Set up a custom scheduling page for your business to simplify appointments with potential clients on your website"
        src="scheduling.svg"
      />
      <Card
        title="Web Hosting"
        text="We will take care of SSL certificate, integrating with your current domain, and setting server up configuration for you"
        src="webhosting.svg"
      />
      <Card
        title="Unlimited Maintenance"
        text="Want to change something about the website? Just tell us what you don’t like and we will update right away"
        src="maintenance.svg"
      />
      <Card
        title="Creative Development"
        text="Want to try experimenting with creative design using 2Ds animation and 3D worlds? Let us know!"
        src="creative-development.svg"
      />
    </div>
  )
}
function Card({
  title,
  text,
  src,
}: {
  title: string
  text: string
  src: string
}) {
  return (
    <div className="relative flex flex-col w-72  h-[22rem] bg-gray-200 rounded-xl pt-6 gap-3 overflow-y-hidden">
      <div className="flex justify-between pl-6 ">
        <Image
          src={`/assets/icons/services/${src}`}
          width="56"
          height="56"
          alt="Moonwish Grayscale Logo"
        />
        <Image
          src="/assets/brand/gray-logo.svg"
          width="45"
          className="self-center"
          height="35"
          alt="Moonwish Grayscale Logo"
        />
      </div>
      <div className="px-8 text-xl font-medium ">{title}</div>
      <p className="px-8 text-gray-700 text-lg ">{text}</p>
      <div className="w-full absolute bottom-0 bg-brown h-9"></div>
    </div>
  )
}
