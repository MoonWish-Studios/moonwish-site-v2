import React from "react"
import Link from "next/link"
import Image from "next/image"
import PhaseBlock from "../components/PhaseBlock"
import Action from "../components/Action"
import TechStack from "../components/TechStack"

export default function page() {
  return (
    <div>
      <div className="home w-full mb-12 flex flex-col items-center md:items-start  md:flex-row-reverse md:justify-between justify-start  ">
        <div className=" imageSection pb-10 flex w-80 md:w-2/3 ">
          <div>
            <Image
              className=""
              src="/assets/processHero.svg"
              height={900}
              width={900}
              alt={""}
            />
          </div>
        </div>
        <div
          className="textSection  flex text-center md:text-left justify-center md:mt-20 lg:mt-48
        lg:pl-28 md:pl-16 flex-col lg:w-8/12 md:w-3/4  ml-3 mr-3 md:ml-0 md:mr-0 "
        >
          <h1 className="inline lg:text-5xl text-4xl font-medium tracking-[0.03em]">
            Learn more about our process{" "}
          </h1>
          <div className="text-lightestGray text-2xl mt-5">
            Lorem ipsum dolor sit amet consectetur. Amet nec facilisi lobortis
            sem ultrices. Tellus in diam tellus quis dui pretium velit odio a.
            Tellus dictum porttitor nisl leo non velit
          </div>
        </div>
      </div>
      <PhaseBlock
        number={"TWO"}
        title={"Discovery & Research"}
        outcome={["Breakdown plan & pricing", "Project timeline"]}
        image={"envelope.png"}
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
        image={"envelope.png"}
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
        image={"envelope.png"}
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
        image={"envelope.png"}
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
        image={"envelope.png"}
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
