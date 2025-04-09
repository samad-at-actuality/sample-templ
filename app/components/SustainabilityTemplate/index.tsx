/* eslint-disable max-len */
import { A4Page } from "../A4Page";
import Image from "next/image";
import flowerIcon from "./flower_icon.png";
import temp2Image from "./temp1.png";
import { CSSProperties } from "react";

export const SustainabilityTemplate = () => {
  return (
    <A4Page className="pt-[7mm] px-[6mm]">
      <div className="flex items-center">
        <Image src={flowerIcon} alt={"flowerIcon"} />
        <div className="text-[14px] text-[#4B5846]  font-bold border-l-2 border-[#4B5846] ml-2 pl-2">
          Title
        </div>
      </div>
      <div className="px-[13mm]">
        <h1 className="font-medium text-4xl pt-2 pb-5 font-serif text-black">
          Sustainability Strategy
        </h1>
        <div className="h-[520px] mb-4 w-full">
          <div className="flex items-stretch h-1/2 min-h-1/2 max-h-1/2">
            <HighlightCard
              ringOrigin="circle at bottom right"
              clipPath="polygon(0 0, 94% 104%, 0 104%)"
              bg="bg-[#E7DCEA]"
              className="border-r-2 border-b-2 border-r-white border-b-white rounded-br-[1.7rem] rounded-tr-[1.7rem]"
              title="People"
              subtitle="Equity, Diversity & Inclusion"
              p1="Our employees and the diversity they bring are the defining strength of our company. Their collective insights, skills, and abilities drive our           growth. Ultimately, our cultural goal is to create a place where           individual initiative and ideas are valued and supported, and where opportunity is equally available to all."
              p2="A place where every employee feels they belong."
            />
            <HighlightCard
              ringOrigin="circle at bottom left"
              clipPath="polygon(100% 0, 100% 104%, 6% 104%)"
              title="Place"
              bg="bg-[#C6D8E9]"
              className="border-l-2 border-b-2 border-white rounded-bl-[1.7rem] rounded-tl-[1.7rem]"
              p1="We contribute to causes that strengthen the wellbeing of the communities where we operate."
              subtitle="Employee & Community Wellbeing"
            />
          </div>
          <div className="flex min-h-1/2 h-1/2 max-h-1/2">
            <HighlightCard
              ringOrigin="circle at top right"
              clipPath="polygon(0 0, 94% 0, 0 100%)"
              isbottom={true}
              title="Planet"
              subtitle="Manufacturing & Carbon Footprint"
              bg="bg-[#E2DBB5]"
              className="border-t-2 border-r-2 border-white rounded-tr-[1.7rem] rounded-br-[1.7rem]"
              p1="We minimize th n committed to owning our manufacturing and supply chain as it affords us greater control to push sustainability forward. Utilizing the framework of the Science Based Target initiative (SBTi) we have set ambitious carbon reduction targets and are translating those goals into action"
            />
            <HighlightCard
              ringOrigin="circle at top left"
              clipPath="polygon(6% 0, 100% 0, 100% 100%)"
              isbottom={true}
              title="Product"
              subtitle="Product Materiality & Lifecycle"
              bg="bg-[#ADBCAF]"
              className="border-t-2 border-l-2 border-white rounded-tl-[1.7rem] rounded-bl-[1.7rem]"
              p1="By examining our entire product lifecycle from design through to end-of-life, we constantly seek better ways to create products that contribute to the wellbeing of our clients, employees, and the communities where they are made. We ensure material transparency and minimize toxicity across our entire product offering"
            />
          </div>
        </div>
        {/* */}
        <div className="font-serif text-black text-[14px]">
          <p>
            Advancing sustainability has always been a cultural imperative
            within our company, supported at both an individual and corporate
            level. The challenge moving forward is to find the opportunities,
            choose the right initiatives, and to not just push the narrative,
            but also the reality of sustainability, forward. Culturally we are
            hardwired to flex and collaborate.
          </p>
          <div className="flex flex-2">
            <p className="pt-4">
              Teknion’s commitment to sustainability practices is reflected in
              our design, manufacturing and daily operations. These initiatives
              drive our growth and innovation, strengthen customer
              relationships, are good for business and of course, the
              environment. We are committed to continually learning from and
              evaluating our results to achieve our goal of total
              sustainability. As part of our ongoing commitment to
              sustainability, we will continue to set high standards and
              challenge the status quo, while always integrating more
              environmentally sustainable materials and manufacturing processes
              into our products and systems
            </p>
            <Image src={temp2Image} alt="temp2" />
          </div>
        </div>
      </div>
    </A4Page>
  );
};

const HighlightCard = ({
  className = "",
  title,
  subtitle,
  p1,
  p2,
  style,
  isbottom,
  bg,
  clipPath,
  ringOrigin,
}: {
  title: string;
  subtitle: string;
  p1: string;
  p2?: string;
  className?: string;
  style?: CSSProperties;
  isbottom?: boolean;
  bg: string;
  clipPath: string;
  ringOrigin: string;
}) => {
  return (
    <div className="font-serif flex-1 h-full flex flex-col" style={style}>
      {!isbottom && (
        <div
          className={`h-[20px] ${bg} border-none`}
          style={{
            clipPath,
          }}
        />
      )}
      <div
        className={`flex-1 ${bg} ${className}`}
        style={{
          backgroundImage: `radial-gradient(
          ${ringOrigin},
        transparent 10%,

        rgba(255,255,255,0.6) 10%,
        rgba(255,255,255,0.6) calc(10% + 1px),

        transparent calc(10% + 1px),
        transparent 15%,

        rgba(255,255,255,0.6) 15%,
        rgba(255,255,255,0.6) calc(15% + 1px),

        transparent calc(15% + 1px),
        transparent 20%,

        rgba(255,255,255,0.6) 20%,
        rgba(255,255,255,0.6) calc(20% + 1px),

        transparent calc(20% + 1px),
        transparent 25%,

        rgba(255,255,255,0.6) 25%,
        rgba(255,255,255,0.6) calc(25% + 1px),

        transparent calc(25% + 1px),
        transparent 30%,

        rgba(255,255,255,0.6) 30%,
        rgba(255,255,255,0.6) calc(30% + 1px),

        transparent calc(30% + 1px),
        transparent 35%,

        rgba(255,255,255,0.6) 35%,
        rgba(255,255,255,0.6) calc(35% + 1px),

        transparent calc(35% + 1px),
        transparent 40%,

        rgba(255,255,255,0.6) 40%,
        rgba(255,255,255,0.6) calc(40% + 1px),

        transparent calc(40% + 1px),
        transparent 60%,

        rgba(255,255,255,0.6) 60%,
        rgba(255,255,255,0.6) calc(60% + 1px),

        transparent calc(60% + 1px),
        transparent 100%
        )`,
        }}
      >
        <div
          className={`flex items-center px-4 ${isbottom ? "pt-[8px]" : "pt-[4px]"}`}
        >
          <h2 className="flex-[0.46] font-medium text-4xl">{title}</h2>
          <p className="flex-[0.54] border-l-2 border-l-gray-600 text-[14px] font-sans pl-4 leading-[15px] font-bold">
            {subtitle}
          </p>
        </div>
        <p className="font-sans pl-4 pt-2 pr-4 text-[14px] font-semibold">
          {p1}
        </p>
      </div>
      {isbottom && (
        <div
          className={`h-[20px] ${bg}`}
          style={{
            clipPath,
          }}
        />
      )}

      {/*   <p className="font-sans">{p1}</p>

      {p2 && <p className="font-sans">{p2}</p>} */}
    </div>
  );
};

/*

rgba(255,255,255,0.6) 45%,
rgba(255,255,255,0.6) calc(45% + 1px),

transparent calc(45% + 1px),
transparent 50%,

rgba(255,255,255,0.6) 50%,
rgba(255,255,255,0.6) calc(50% + 1px),

transparent calc(50% + 1px),
transparent 55%,

rgba(255,255,255,0.6) 55%,
rgba(255,255,255,0.6) calc(55% + 1px),

transparent calc(55% + 1px),
transparent 60%,

rgba(255,255,255,0.6) 60%,
rgba(255,255,255,0.6) calc(60% + 1px),

transparent calc(60% + 1px),
transparent 65%,

rgba(255,255,255,0.6) 65%,
rgba(255,255,255,0.6) calc(65% + 1px),

transparent calc(65% + 1px),
transparent 70%,

rgba(255,255,255,0.6) 70%,
rgba(255,255,255,0.6) calc(70% + 1px),

transparent calc(70% + 1px),
transparent 75%,

rgba(255,255,255,0.6) 75%,
rgba(255,255,255,0.6) calc(75% + 1px),

transparent calc(75% + 1px),
transparent 80%,

rgba(255,255,255,0.6) 80%,
rgba(255,255,255,0.6) calc(80% + 1px),

transparent calc(80% + 1px),
transparent 85%,

rgba(255,255,255,0.6) 85%,
rgba(255,255,255,0.6) calc(85% + 1px),

transparent calc(85% + 1px),
transparent 90%,

rgba(255,255,255,0.6) 90%,
rgba(255,255,255,0.6) calc(90% + 1px),

transparent calc(90% + 1px),
transparent 95%,

rgba(255,255,255,0.6) 95%,
rgba(255,255,255,0.6) calc(95% + 1px),

transparent calc(95% + 1px),

*/
