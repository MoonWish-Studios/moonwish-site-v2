"use client"

import Image from "next/image"
import React from "react"
import Action from "../components/Action"

export default function Page() {
  return (
    <div className="mx-auto lg:max-w-screen-2xl">
      <div className="relative w-full overflow-hidden">
        <HeroSection
          title="Our Specialities That Makes Us Different"
          description="Lorem ipsum dolor sit amet consectetur. Amet nec facilisi lobortis sem ultrices "
          src="/assets/designs/services-design.svg"
        />
        <div className="relative w-full h-40 lg:rounded-md -z-20 bg-neutral-50 sm:h-80 "></div>
      </div>
      <CardSection />
      {/* <Action /> */}
    </div>
  )
}

function HeroSection({ title, description, src, children }: any) {
  return (
    <div className="box-border flex flex-col-reverse items-center w-full mt-8 md:flex-row">
      <div className="max-w-md px-5 mt-3 mb-6 text-center md:text-left md:h-64 lg:mt-24 lg:mb-28 xl:ml-28 md:mb-8 md:mt-6 md:pl-16 lg:ml-0 lg:max-w-xl">
        <h1 className="mt-6 text-4xl font-medium lg:text-5xl lg:leading-tight sm:tracking-wide">
          {title}
        </h1>
        <p className="max-w-xl mt-4 text-xl leading-snug text-gray-600 hyphens-auto lg:text-2xl">
          {description}
        </p>
      </div>
      <div className="md:absolute right-12   -z-10 h-72 md:scale-125 w-64 lg:scale-[225%] lg:top-40 lg:right-20 xl:right-48 transition transform  mx-auto    ">
        <Image src={src} fill className="object-contain" alt="Graphic Design" />
      </div>
    </div>
  )
}

function CardSection({}) {
  return (
    <div className="flex flex-wrap justify-center gap-8 my-12 -translate-y-32 mx-9 md:-translate-y-52 ">
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
      <p className="px-8 text-lg text-gray-700 ">{text}</p>
      <div className="absolute bottom-0 w-full bg-brown h-9"></div>
    </div>
  )
}
