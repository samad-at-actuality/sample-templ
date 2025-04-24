"use client";
import { A4Page } from "./A4Page";

import Markdown from "react-markdown";
const markdownComponents = {
  p: (props: React.HTMLProps<HTMLParagraphElement>) => (
    <p style={{ margin: "0 0 1rem 0" }} {...props} />
  ),
  ul: (props: React.HTMLProps<HTMLUListElement>) => (
    <ul style={{ marginLeft: "1.5rem", marginBottom: "1rem" }} {...props} />
  ),
  li: (props: React.HTMLProps<HTMLLIElement>) => (
    <li style={{ listStyleType: "disc" }} {...props} />
  ),
};
export const CaseStudy = () => {
  return (
    <A4Page className="pt-[5mm] px-[20mm] flex flex-col gap-4">
      <div className="flex flex-row gap-1 items-center -ml-10 mb-2">
        <div className="grid grid-cols-3 gap-[4px] justify-center items-center pr-3 mr-2 border-r-[2px] border-[#4a5744]">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((e) => (
            <div
              key={e}
              className="w-[4px] h-[4px] bg-[#4a5744] rounded-full"
            />
          ))}
        </div>

        <div className="text-[20px] font-bold">Case study</div>
        <div className="text-[20px] font-serif">We're</div>
        <div className="text-[20px] font-serif italic">People</div>
        <div className="text-[20px] font-serif">People</div>
      </div>

      <div className="flex flex-row gap-6 w-full -mt-6">
        <div className="w-[115mm] text-[42px] font-light text-left font-serif  leading-[1.2] mt-4 pl-4 relative ">
          Bridgepoint Tech Campus
        </div>
        <div className="text-[14px] font-bold text-left  font-sans leading-[1.2] w-[60mm] align-left border-t-[1px] border-[#959698] mt-6 pt-1 relative">
          400 Innovation Road, Mississauga, ON
        </div>
      </div>

      <div className="flex flex-row gap-6 w-full">
        <div className="w-[115mm]">
          <img
            src="https://rfp-bucket-new.s3.amazonaws.com/b7246150726019a4934101f35bf648a5f6e006ed1865436accfdebee02688cc4.jpg"
            className="text-[24px] font-bold text-[#4a5744] mb-2 leading-[1.2] h-[85mm] object-cover"
          />
        </div>
        <div className="flex flex-col w-[60mm] border-l-[1px] align-left gap-0">
          <img
            src="https://rfp-bucket-new.s3.amazonaws.com/b7246150726019a4934101f35bf648a5f6e006ed1865436accfdebee02688cc4.jpg"
            className="text-[24px] font-bold text-[#4a5744] mb-1 leading-[1.2] rounded-br-[32px] w-[60mm] h-[42mm] object-cover"
          />
          <img
            src="https://rfp-bucket-new.s3.amazonaws.com/b7246150726019a4934101f35bf648a5f6e006ed1865436accfdebee02688cc4.jpg"
            className="text-[24px] font-bold text-[#4a5744] mb-1 leading-[1.2] rounded-tr-[32px] w-[60mm] h-[42mm] object-cover"
          />
        </div>
      </div>

      <div className="flex flex-row gap-6 w-full">
        <div className="flex flex-col w-[115mm] gap-12">
          <div className="flex flex-col gap-4 items-start ml-4">
            <div className="flex flex-col gap-0">
              <div className="text-[16px] font-bold text-[#4a5744] font-serif">
                Overview
              </div>
              <div className=" text-[14px] text-left leading-[1.4] mb-[15px] font-serif text-[#000000] relative">
                <Markdown
                  components={markdownComponents}
                >{`RHP Construction managed the construction of Bridgepoint Tech Campus, a 200,000 sq ft. facility.  This included implementing robust data infrastructure, high-speed connectivity, and adaptable workspaces with flexible furniture and wiring.  The project prioritized employee wellness with dedicated lounges and natural light.  A phased construction approach ensured timely completion within 28 weeks.`}</Markdown>
              </div>
            </div>
            <div className="flex flex-col gap-0">
              <div className="text-[16px] font-bold text-[#4a5744] font-serif">
                Outcome
              </div>
              <div className="text-[14px] text-left leading-[1.4] mb-[15px] font-serif text-[#000000] relative">
                <Markdown
                  components={markdownComponents}
                >{` RHP Construction provided construction management services for the Aurora Innovation Center, a 120,000 sq. ft. facility designed to foster technological research and entrepreneurial growth. The project successfully integrated collaborative workspaces with advanced energy-saving measures, including an award-winning green roof and high-efficiency HVAC systems. Value engineering ensured the project stayed within its $30 million budget despite ambitious sustainability goals and flexible design requirements.
- **On-time and on-budget delivery:** Project completed within 24 weeks and the $30 million budget.  
- **Successful integration of sustainable features:** High-efficiency systems and award-winning green roof implemented.  
- **Flexible and adaptable workspace:** Modular design accommodates evolving tenant needs.  
- **Strong client satisfaction:** Project reinforced Aurora Inc.'s reputation for sustainable innovation.

                  `}</Markdown>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[60mm] align-left  gap-2 h-full">
          <div className="flex flex-col gap-2 items-start border-t-[1px] border-[#959698] pt-2">
            <div className="flex flex-col gap-0">
              <div className="text-[16px] font-bold text-[#4a5744]">Size</div>
              <div className="text-[14px] text-left leading-[1.4] mb-[15px]">
                200,000 sqft
              </div>
            </div>

            <div className="flex flex-col">
              <div className="text-[16px] font-bold text-[#4a5744]">
                Project Value
              </div>
              <div className="text-[14px] text-left leading-[1.4] mb-[15px] relative">
                $40 Million
              </div>
            </div>
            <div className="flex flex-col">
              <div className="text-[16px] font-bold text-[#4a5744]">
                Completion Date
              </div>
              <div className="text-[14px] text-left leading-[1.4] mb-[15px] relative">
                October 2022
              </div>
            </div>
            <div className="flex flex-col">
              <div className="text-[16px] font-bold text-[#4a5744]">
                Desinger
              </div>
              <div className="text-[14px] text-left leading-[1.4] mb-[15px] relative">
                TechDesign Studio
              </div>
            </div>
            <div></div>
          </div>
          <div className="flex flex-col gap-2 items-start border-t-[1px] border-[#959698] pt-2">
            <div className="flex flex-col gap-0">
              <div className="text-[16px] font-bold text-[#4a5744]">
                Team Members
              </div>
              <div className="text-[14px] text-left">Mahesh Babooram</div>
              <div className="text-[14px] text-left">Julie Sumairski</div>
              <div className="text-[14px] text-left">Chris Lefebvre</div>
            </div>
          </div>
        </div>
      </div>
    </A4Page>
  );
};
/*

*/
