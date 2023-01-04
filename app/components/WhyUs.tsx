import React from "react"
import StepBlock from "./StepBlock"

export default function WhyUs() {
  return (
    <div className="mt-20">
      <div className="text-gray font-semibold text-center">WHY US</div>
      <StepBlock
        reverse={false}
        number={"01"}
        title={"Easy Communication"}
        img={"/assets/step5.png"}
      >
        For every client, we send regular updates, something about being your
        pocket web developers, on call anytime, you talk directly to us
      </StepBlock>
      <StepBlock
        reverse={true}
        number={"05"}
        title={"Maintenance"}
        img={"/assets/step5.png"}
      >
        Unlike traditional agencies, we’ll take care of technical maintenance
        and updating content so that your website stays modern and reflects your
        business accurately over time
      </StepBlock>
      <StepBlock
        reverse={false}
        number={"01"}
        title={"Easy Communication"}
        img={"/assets/step5.png"}
      >
        For every client, we send regular updates, something about being your
        pocket web developers, on call anytime, you talk directly to us
      </StepBlock>
      <StepBlock
        reverse={true}
        number={"05"}
        title={"Maintenance"}
        img={"/assets/step5.png"}
      >
        Unlike traditional agencies, we’ll take care of technical maintenance
        and updating content so that your website stays modern and reflects your
        business accurately over time
      </StepBlock>
      <StepBlock
        reverse={false}
        number={"01"}
        title={"Easy Communication"}
        img={"/assets/step5.png"}
      >
        For every client, we send regular updates, something about being your
        pocket web developers, on call anytime, you talk directly to us
      </StepBlock>
    </div>
  )
}
