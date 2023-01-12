import React from "react"
import Link from "next/link"
import Image from "next/image"
import PhaseBlock from "../components/PhaseBlock"
import Action from "../components/Action"
import TechStack from "../components/TechStack"

export default function page() {
  return (
    <div className="mx-auto max-w-screen-2xl ">
      <div className="flex flex-col items-center justify-start w-full mb-12 home md:items-start md:flex-row-reverse md:justify-between ">
        <div className="flex pb-10 -translate-y-12 imageSection">
          <div className="relative -z-50">
            <Image
              src="/assets/processHero.svg"
              height={900}
              width={900}
              alt={""}
            />
          </div>
        </div>
        <div className="flex flex-col justify-center max-w-md ml-3 mr-3 text-center textSection md:text-left md:mt-20 lg:mt-32 lg:ml-20 xl:ml-44 md:ml-16 lg:w-6/12 md:w-3/4 md:mr-0 sm:max-w-lg">
          <h1 className="inline lg:text-5xl text-4xl font-medium tracking-[0.03em]">
            Learn more about our process{" "}
          </h1>
          <div className="mt-5 text-2xl text-lightestGray">
            Agile-oriented, our flexible process will get your professional and
            modern website running in no time
          </div>
        </div>
      </div>
      <PhaseBlock
        number={"ONE"}
        title={"Contact"}
        outcome={["Get To Know You", "Arrange First Meeting"]}
        image={"process/contact.png"}
        last={false}
      >
        For this first step we will get in contact and first see if we can offer
        what your business needs. We’ll learn about the basics of your business
        and if you decide that you are interested we will set up a time to meet
        to discuss what your website needs.
      </PhaseBlock>
      <PhaseBlock
        number={"TWO"}
        title={"Discovery & Research"}
        outcome={["Breakdown plan & pricing", "Project timeline"]}
        image={"process/brainstorm.png"}
        last={false}
      >
        Here we will learn more about what you want from your website and get an
        idea of how much content will be on your website. After we get a good
        understanding of how your website is going to look we will give you the
        project timeline and breakdown the cost of it as well.
      </PhaseBlock>
      <PhaseBlock
        number={"THREE"}
        title={"Design & Revision"}
        outcome={["Design prototypes", "Revisions"]}
        image={"process/design.png"}
        last={false}
      >
        Starting here we will take care of almost everything. We will create a
        initial design for you and once that design is created we will get your
        input and see what needs to be changed. Once we have a design that you
        are happy with we will sign the contract and start writing the code for
        the website.
      </PhaseBlock>
      <PhaseBlock
        number={"FOUR"}
        title={"Development"}
        outcome={["Custom coded website", "Working SEO"]}
        image={"process/code.png"}
        last={false}
      >
        This is where we write all the code and create your website based off
        the design that you approved of. We use the latest technology such as
        TypeScript and React to develop your website. We make sure that the code
        we write is clean and efficient in order to give users a better
        experience and also improve your website’s SEO.
      </PhaseBlock>
      <PhaseBlock
        number={"FIVE"}
        title={"Go Live"}
        outcome={["Connect your domain", "Website launch"]}
        image={"process/live.png"}
        last={false}
      >
        Once we are given access to your domain we are able to link the website
        that we created to the domain and then its live! The SEO for your
        website also begins to start taking effect and anyone on the internet
        can now see your new website when they look up your domain.
      </PhaseBlock>
      <PhaseBlock
        number={"SIX"}
        title={"Maintain & Update"}
        outcome={[
          "Design updates",
          "SEO improvements",
          "Regular maintenance",
          "Additional pages",
        ]}
        image={"process/update.png"}
        last={true}
      >
        We continue to make sure to update and maintain your website in order to
        keep it modern and fast. Aside from the regular maintenance such as
        hosting or page speed we try to keep the SEO updated so that your page
        continues to rank higher. You can also have us update parts of the
        website whether it be uploading new images or changing the content.
      </PhaseBlock>
      <TechStack />
      <Action direction={"services"} />
    </div>
  )
}
