import React from "react"
import StepBlock from "./StepBlock"

export default function WhyUs() {
  return (
    <div className="mt-20">
      <div className="font-semibold text-center text-gray">WHY US</div>
      <StepBlock
        reverse={false}
        number={"01"}
        title={"Easy Communication"}
        img={"/assets/why-us-1.svg"}
      >
        We make sure that we are easy to access and that we communicate clearly
        with our customers. We provide regular updates and can be contacted
        about questions, requests or anything else anytime.
      </StepBlock>
      <StepBlock
        reverse={true}
        number={"02"}
        title={"Responsive Designs"}
        img={"/assets/why-us-2.png"}
      >
        With people using devices of all sizes we make sure that your website is
        responsive and looks good whether it be on a phone, tablet, or computer
      </StepBlock>
      <StepBlock
        reverse={false}
        number={"03"}
        title={"Transparency"}
        img={"/assets/why-us-3.png"}
      >
        We are very transparent with what we do and will always break down
        everything such as your project timeline and price. We also are
        accommodating to our customers’ needs and limitations.
      </StepBlock>
      <StepBlock
        reverse={true}
        number={"04"}
        title={"Maintenance"}
        img={"/assets/why-us-4.png"}
      >
        Unlike traditional agencies, we’ll take care of technical maintenance
        and updating content so that your website stays modern and reflects your
        business accurately over time
      </StepBlock>
      <StepBlock
        reverse={false}
        number={"05"}
        title={"Dedicated Team"}
        img={"/assets/why-us-5.png"}
      >
        Our team is made up of people that wants to see your business succeed.
        We are not satisfied until you are satisfied!
      </StepBlock>
    </div>
  )
}
