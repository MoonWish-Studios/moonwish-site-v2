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
        Lorem ipsum dolor sit amet consectetur. Amet nec facilisi lobortis sem
        ultrices. Tellus in diam tellus quis dui pretium velit odio a. Tellus
        dictum porttitor nisl leo non velit. Faucibus mattis potenti cursus et.
        Amet iaculis auctor nec eget diam sit sed cursus. Pellentesque ipsum
        commodo suspendisse at ultrices dui porta.
      </PhaseBlock>
      <PhaseBlock
        number={"THREE"}
        title={"Design & Revision"}
        outcome={["Design prototypes", "Revisions"]}
        image={"envelope.png"}
        last={false}
      >
        Lorem ipsum dolor sit amet consectetur. Amet nec facilisi lobortis sem
        ultrices. Tellus in diam tellus quis dui pretium velit odio a. Tellus
        dictum porttitor nisl leo non velit. Faucibus mattis potenti cursus et.
        Amet iaculis auctor nec eget diam sit sed cursus. Pellentesque ipsum
        commodo suspendisse at ultrices dui porta.
      </PhaseBlock>
      <PhaseBlock
        number={"FOUR"}
        title={"Development"}
        outcome={["Custom coded website", "Working SEO"]}
        image={"envelope.png"}
        last={false}
      >
        Lorem ipsum dolor sit amet consectetur. Amet nec facilisi lobortis sem
        ultrices. Tellus in diam tellus quis dui pretium velit odio a. Tellus
        dictum porttitor nisl leo non velit. Faucibus mattis potenti cursus et.
        Amet iaculis auctor nec eget diam sit sed cursus. Pellentesque ipsum
        commodo suspendisse at ultrices dui porta.
      </PhaseBlock>
      <PhaseBlock
        number={"FIVE"}
        title={"Go Live"}
        outcome={["Connect your domain", "Website launch"]}
        image={"envelope.png"}
        last={false}
      >
        Lorem ipsum dolor sit amet consectetur. Amet nec facilisi lobortis sem
        ultrices. Tellus in diam tellus quis dui pretium velit odio a. Tellus
        dictum porttitor nisl leo non velit. Faucibus mattis potenti cursus et.
        Amet iaculis auctor nec eget diam sit sed cursus. Pellentesque ipsum
        commodo suspendisse at ultrices dui porta.
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
        Lorem ipsum dolor sit amet consectetur. Amet nec facilisi lobortis sem
        ultrices. Tellus in diam tellus quis dui pretium velit odio a. Tellus
        dictum porttitor nisl leo non velit. Faucibus mattis potenti cursus et.
        Amet iaculis auctor nec eget diam sit sed cursus. Pellentesque ipsum
        commodo suspendisse at ultrices dui porta.
      </PhaseBlock>
      <TechStack />
      <Action direction={"services"} />
    </div>
  )
}
