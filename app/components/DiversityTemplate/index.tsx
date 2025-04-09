import Image, { StaticImageData } from "next/image";
import flowerIcon from "./flower_icon.png";
import barcodeIcon from "./barcodeIcon.png";
import workplaceImage from "./workplace.jpg";
import marketplaceImage from "./marketplace.jpg";
import workforceImage from "./workforce.jpg";
import justLabel from "./justLabel.png";

import { ChevronsRightIcon } from "lucide-react";
import React from "react";
import { A4Page } from "../A4Page";

export const DiversityTemplate = () => {
  return (
    <A4Page className="pt-[5mm] px-[6mm]">
      {/* page header */}
      <div className="flex items-center">
        <Image src={flowerIcon} alt={"flowerIcon"} />
        <div className="text-[20px] text-[#4B5846]  font-bold border-l-2 border-[#4B5846] ml-2 pl-2">
          Environment and Sustainability
        </div>
        <ChevronsRightIcon className="w-4 h-4 mx-1 text-black font-bold" />
        <div className="font-serif text-[23px] font-medium">Title</div>
      </div>

      <div className="px-[8mm]">
        <h1 className="font-medium text-4xl pt-2 pb-5 font-serif">
          Diversity, Equity and Inclusion
        </h1>
        {/* title */}
        <div className="flex gap-4">
          <div className="flex-[0.45]">
            {/* <div className="w-full h-[580px] bg-[#F0EFEB] rounded-tr-[70px] rounded-bl-[70px] pt-[35px] pl-4">
              <div className="font-extrabold text-7xl font-m">
                Just<span className="text-lg">&#9632;</span>{" "}
              </div>
            </div> */}
            <Image src={justLabel} alt="cdc" />
            <Image
              src={barcodeIcon}
              // width="90"
              // height="90"
              alt="barcode icon"
              className="ml-auto mt-3"
            />
          </div>
          <div className="flex-[0.55] pt-[35px]">
            <p className="font-serif text-[15px] text-left leading-5 text-[#000000]">
              From our inception, Teknion's values are anchored in a commitment
              to diversity, equity, and inclusion. We seek to understand,
              accept, and value differences in our employees' backgrounds and
              identities. We remain committed to an inclusive and respectful
              environment for all. We continue to be invested in the communities
              that we live, work, and serve, because we know our work is never
              done. Championed and led by our executive team, our strategy
              focuses on three main pillars:
            </p>
            <div className="flex flex-col gap-2 mt-2">
              <Highlightes
                title="Workplace"
                description="Recruit, develop and retain high performing, talented emlployees with diverse backgrounds and perspectives"
                image={workplaceImage}
              />

              <Highlightes
                title="Marketplace"
                description="Develop, communicate, and design environments that foster an inclusive culture"
                image={marketplaceImage}
              />

              <Highlightes
                title="Workforce"
                description="Contribute to community and build valued relationships with diverse clients, dealers, and suppliers"
                image={workforceImage}
              />
            </div>

            <h2 className="mt-4 text-[#4B5846] text-xl font-extrabold">
              Our Commitment to the Just Program
            </h2>
            <p className="font-serif text-[16px] text-left leading-5 text-[#000000]">
              Just is a nutrition label for socially just and equitable
              organizations. As a voluntary disclosure tool for organizations,
              Just allows for continuous improvement. The Just label
              demonstrates Teknion's commitment to social justice aligned with
              our values of diversity, equity, and inclusion. It also provides a
              transparent and comprehensive third-party framework and
              roadmap.{" "}
            </p>
          </div>
        </div>
        <p className="pl-2 text-2xl font-extrabold uppercase">Key Statistics</p>
        <div className="h-full w-full mt-2 flex gap-2 font-sans">
          <div className="flex-1">
            <div className="flex items-center uppercase py-2 pl-3 font-bold text-base bg-[#D5E0F2] rounded-bl-2xl ">
              Manufacturing
            </div>
            <div className="flex py-2 px-3 pt-0  bg-[#D5E0F2] rounded-tl-2xl">
              <div className="flex-1 font-semibold text-sm">
                <div className="text-6xl font-normal">38%</div>
                <p>of the overall</p>
                <p> workforce are </p>
                <p>women</p>
              </div>
              <div className="flex-1 font-semibold text-sm">
                <div className="text-6xl font-normal">45%</div>
                <p>of the overall</p>
                <p> workforce are visible</p>
                <p>minorities</p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center uppercase py-2 pl-3 font-bold text-base bg-[#D5E0F2] rounded-bl-2xl rounded-tr-3xl ">
              Global
            </div>
            <div className="flex gap-2 py-2 px-3 pt-0  bg-[#D5E0F2] rounded-tl-2xl">
              <div className="flex-1 font-semibold text-sm">
                <div className="text-6xl font-normal">3.1%</div>
                <p>Canada turnover rate</p>
                <p>(12.99% less than the </p>
                <p>national avg)</p>
              </div>
              <div className="flex-1 font-semibold text-sm">
                <div className="text-6xl font-normal">57</div>
                <p>Countries are</p>
                <p>represented in</p>
                <p>Teknion's workforce</p>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </A4Page>
  );
};

const Highlightes = ({
  title,
  image,
  description,
}: {
  title: string;
  image: StaticImageData;
  description: string;
}) => {
  return (
    <div className="flex items-center gap-3 ">
      <Image
        src={image}
        alt="workplace image"
        className="aspect-square w-16 h-16 rounded-full object-fill"
      />
      <div className="text-sm">
        <h3 className="font-semibold text-[#4B5846]">{title}</h3>
        <p className="text-[14px] font-sans text-gray-800">{description}</p>
      </div>
    </div>
  );
};
