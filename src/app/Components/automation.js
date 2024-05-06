import React from "react";
import digicel from "../../../public/assets/digicel.svg";
import tango from "../../../public/assets/tango.svg";
import clickup from "../../../public/assets/b_clickup.svg";
const automation = () => {
  return (
    <>
      {/* img */}
      <div>
        <svg
          viewBox="0 0 1728 120"
          class="pointer-events-none w-full fill-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {" "}
          <path
            d="M0 120C269.647 41.814 570.663 0 864.462 0 1158.26 0 1458.35 41.814 1728 120H0Z"
            fill="#1e232e"
          ></path>{" "}
        </svg>
      </div>
      {/* background */}
      <div className="bg-[#1e232e]">
        <div className="container_automate">
        {/* fluid */}
        <div className="max-w-[1231px] mx-auto">
          {/* center text */}
          <div className="text-center">
            {/* lg-text */}
            <div className="font-[900] text-[72px] leading-[72px] text-[#ffff] bg_num">
              4,286,424,972
            </div>
            {/* sm-text */}
            <div className="mt-4 font-[700] text-[20px] text-[#ffff] num_text">
              conversations automated
            </div>
          </div>
          {/* text & cards grid */}
          <div className="grid grid-cols-2 items-center mt-9 grid_automate">
            {/* left */}
            <div>
                {/* first text */}
                <div>
              <div className="leading-[55px]">
                {/* sm */}
                <div className="font-[700] text-[20px] text-[#ffff] upto">Up to</div>
                {/* lg */}
                <div className="font-[900] text-[72px] text-[#c4adeb] percentage">77%</div>
                {/* sm */}
                <div className="pr-[8rem] leading-[27px] mt-4 font-[700] text-[24px] text-[#ffff] text_detail">
                  of customer service interactions resolved through automation
                </div>
              </div>
              </div>
                {/* sec text */}
                <div className="mt-32">
              <div className="leading-[55px]">
                {/* lg */}
                <div className="font-[900] text-[72px] text-[#b2eef0] percentage">50+</div>
                {/* sm */}
                <div className="pr-[8rem] leading-[27px] mt-4 font-[700] text-[24px] text-[#ffff] text_detail">
                languages supported instantly
                </div>
              </div>
              </div>
            </div>
            {/* right */}
            <div>
                <div className="pt-2">
              {/* digicel */}
              <div className="box_shadow_card_feature rounded-md mt-12">
                {/* inner content */}
                <div className="px-[30px] flex justify-start items-center py-11">
                  {/* img*/}
                  <div>
                    <img className="imgs" src={digicel.src}></img>
                  </div>
                  {/* text */}
                  <div className="ml-[35px] font-[700] text-[24px] text-[#ffff] saving">
                    $750k savings / year
                  </div>
                </div>
              </div>
              {/* clickup */}
              <div className="box_shadow_card_feature rounded-md mt-8">
                {/* inner content */}
                <div className="px-[30px] flex justify-start items-center py-11">
                  {/* img*/}
                  <div>
                    <img className="imgs" src={clickup.src}></img>
                  </div>
                  {/* text */}
                  <div className="ml-[35px] font-[700] text-[24px] text-[#ffff] increase">
                    20% increase in Automated Resolution Rate
                  </div>
                </div>
              </div>
              {/* tango */}
              <div className="box_shadow_card_feature rounded-md mt-8">
                {/* inner content */}
                <div className="px-[30px] flex justify-start items-center py-11">
                  {/* img*/}
                  <div>
                    <img className="imgs" src={tango.src}></img>
                  </div>
                  {/* text */}
                  <div className="ml-[35px] font-[700] text-[24px] text-[#ffff] ROI">
                    6.7x ROI in year 1
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};
export default automation;
