import Image from "next/image";
import headerIcon from "./headerIcon.png";

import { ChevronsRightIcon } from "lucide-react";
import React from "react";
import { A4Page } from "../A4Page";

export const CompanyProfileTemplate = () => {
  return (
    <A4Page className="pt-[5mm] px-[6mm] bg-[./profile_page_bg.png]">
      <div className="flex items-center">
        <Image src={headerIcon} alt={"flowerIcon"} />
        <div className="text-[22px] text-[#4B5846]  font-bold border-l-2 border-[#4B5846] ml-2 pl-2">
          Corporate Info
        </div>
        <ChevronsRightIcon className="w-4 h-4 mx-1 text-black font-bold" />
        <div className="font-serif text-[20px] font-medium ">
          The Inside Scoop
        </div>
      </div>

      <div className="px-[8mm] pl-[14mm]">
        <h1 className="font-medium text-4xl pt-2 font-serif">About Us</h1>
        <p className="text-[100px] leading-[102px] pt-4">
          Company <br /> Profile
        </p>
        <div className="w-full h-[190px]" />
        <div className="flex items-stretch gap-2">
          <CompanyProfile
            title="OJIBIK"
            description="Ojiibik is a First Nation, woman, 2SLGBTQ+,and minority-owned commercial officefurniture dealership based in Tkaronto.Specializing in sustainable office furnituresolutions, Ojiibik sources products from keymanufacturing partner Teknion and proudlyrepresents other underrepresented manufacturers,including those from First Nation/Indigenouscommunities, women, minorities, and 2SLGBTQ+groups. Ojiibik aims to set new standardsfor inclusivity, accessibility, environmentalresponsibility, and social responsibility.We aim to enrich workspaces through culturalauthenticity."
          />
          <CompanyProfile
            title="teknion"
            description="Teknion is an international designer andmanufacturer of furniture solutions andarchitectural interiors (office walls) thatsupport the modern workplace. They are aprivately held Canadian company with corporateheadquarters in Toronto and a global presence.Today, Teknion's extensive product portfolioincludes commercial grade furniture, ArchitecturalInteriors, Studio TK collections, and LUUM Textiles.Their products are sold in over 50 countries,through a network of more than 385 dealers. Thisvertically integrated, worldwide network enablesTeknion to deliver value to our clients – regardlessof location. Their exceptional results spring fromboth strong client partnerships and continuousproduct innovation."
          />
        </div>
      </div>
    </A4Page>
  );
};

const CompanyProfile = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="flex-1">
      <h1 className="text-5xl pb-2">{title}</h1>
      <div>
        <span className="float-left w-[40px] grid place-items-center leading-0 h-[40px] pb-2 mr-2">
          <span className="text-[60px] leading-[0px]">{description[0]}</span>
        </span>
        <p className="text-[14px] font-serif text-black">
          {description.substring(1)}
        </p>
      </div>
    </div>
  );
};
