import teknionImage from "./teknion.png"
import Image from "next/image";

import { A4Page } from "../A4Page";

export const WarrantyTemplate = () => {
  return (
    <A4Page className="pt-[8mm] px-[6mm] font-serif">
      <h1 className="uppercase text-xl font-semibold tracking-[0.2rem]">
        Teknion architecture interior warranty
      </h1>
      <div className="mt-6 text-[14px] text-gray-700 flex flex-col gap-[0.3rem] leading-[15px]">
        <p>
          Teknion will, at no cost to the original purchaser and for the
          duration of the warranty period, repair or replace with a comparable
          product, at Teknion's option, any part or product sold after January
          1, 1995, which fails as a result of a defect in its design, materials
          or workmanship. For all purposes of this warranty the term "purchaser"
          is defined as the entity or individual acquiring a new Teknion product
          as the initial purchaser thereof either from Teknion or an authorized
          Teknion Dealer.
        </p>
        <p>
          Altos, Optos, FocusTM, Tek Vue Wall Systems and POD - Tek BoothTM, Tek
          RoomTM products are warranted for 10 years in material and workmanship
          unless noted below, inclusive of: Wood Fascia, Wood Tables, Laminated
          and Wood Doors, Manufacturing Electrical Wiring System Components
        </p>

        <p>
          The warranty period is defined in years with a 40 hour per week
          service level beginning from the date of delivery. Usage beyond 40
          hours per week will reduce the warranty in proportion to the increased
          usage.
        </p>

        <p>
          For Teknion's non architectural product warranty, please refer to the
          Teknion Limited Lifetime Warranty.
        </p>
      </div>

      <h3 className="mt-6 text-[14px] leading-[15px] text-black font-semibold">
        Exceptions to this warranty include:
      </h3>
      <ul className="list-disc list-inside" >
        <li>Lighting products and Grommets for 1 year;</li>
        <li>PET Whiteboard, for 3 years</li>
        <li>Architectural Complements products, for 5 years</li>
        <li>Teknion product with fabrics, for 5 years</li>
        <li>
          Glass marker boards, Glass tempered and or laminated, for 5 years
        </li>
        <li>
          Switch glass LCD film for 1 year, wiring transfer, power module,
          lamination, for 5 years
        </li>
        <li className="list-inside" >
          Hardware
          <ul className="list-hyphen list-inside ml-4" >
            <li>Electromechanical locks and strikes,for 1 year</li>
            <li>
              Auto drop seals and Soft close sliding door mechanisms, for 2
              years
            </li>
            <li>Cylindrical and Mortise lockset levers, for 3 years</li>
            <li>
              Door closers, glides, slides, adjustable worksurface mechanisms,
              arms, and bases, for 5 years
            </li>
          </ul>
        </li>
        <li>
          Special product will align its product with this warranty policy
          unless quoted otherwise in CR
        </li>
        <li>
          Customer's Own material or finishes applied to Teknion products (which
          include graded-in fabrics, which are treated by Teknion as a
          Customer's Own Material)
        </li>
        <li>
          Shade and color differences between Natural Wood Veneer sheets, which
          will be apparent between differing lots, can be due to exposure to UV
          rays/ sunlight or grain and stain acceptance which may occur due to
          the natural elements of wood
        </li>
        <li>
          Glass strain producing iridescence and glass defects within level Q3
          ASTM C1036
        </li>
        <li>
          Glass Bow within ASTM C1038 for tempered glass and ASTM C1172 for
          laminate glass
        </li>
        <li>
          Anodized Aluminum Finish, One 0.040" or Three 0.010" dia flaws per 12"
          sample area. Color variation within teknion color boundary masters.
          Reflective color variation not viewed at 90 degrees to the surface
        </li>
        <li>
          Products which have been modified or which have not been installed by
          a Teknion certified installer, or cleaned and/or used not in
          accordance to Teknion' application and installation guidelines or
          wamings
        </li>
        <li>
          Products that must be replaced due to normal wear and tear,
          negligence, abuse, accident or shipping damage
        </li>
        <li>Products used for rental purposes.</li>
      </ul>

      <h3 className="mt-6 text-[14px] text-gray-700 font-bold flex flex-col gap-[0.3rem] leading-[15px]">
        In no event shall Teknion be liable in either tort or contract for any
        loss or indirect, special, incidental, consequential, or exemplary
        damages. This warranty is the purchaser's sole remedy for product
        defects. Teknion makes no warranties, including the express or implied
        warranties of merchantability and fitness for a particular purpose,
        other than the express warranties contained herein.
      </h3>

      <Image src={teknionImage} alt="teknion-image" height="180" className="w-full mb-0 mt-16" />
      <style>{ `
        .list-hyphen {
        list-style-type: "-";
        }
        li {
          // border: 1px solid red;
          line-height:16px
        }

        `}</style>
    </A4Page>
  );
};
