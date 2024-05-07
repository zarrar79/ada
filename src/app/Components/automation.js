import React from "react";
import digicel from "../../../public/assets/digicel.svg";
import tango from "../../../public/assets/tango.svg";
import clickup from "../../../public/assets/b_clickup.svg";
import arrow from "../../../public/assets/Arrow.svg";
import tile from "../../../public/assets/tile.svg";
import indigo from "../../../public/assets/indigo.svg";
import airasia from "../../../public/assets/airasia.svg";
import wealthsimple from "../../../public/assets/wealthsimple auto.svg";
import adult from "../../../public/assets/adult.svg";
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
                    <div className="font-[700] text-[20px] text-[#ffff] upto">
                      Up to
                    </div>
                    {/* lg */}
                    <div className="font-[900] text-[72px] text-[#c4adeb] percentage">
                      77%
                    </div>
                    {/* sm */}
                    <div className="pr-[8rem] leading-[27px] mt-4 font-[700] text-[24px] text-[#ffff] text_detail">
                      of customer service interactions resolved through
                      automation
                    </div>
                  </div>
                </div>
                {/* sec text */}
                <div className="mt-32">
                  <div className="leading-[55px]">
                    {/* lg */}
                    <div className="font-[900] text-[72px] text-[#b2eef0] percentage">
                      50+
                    </div>
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
            {/* big text */}
            <div className="max-w-[700px] mx-auto mt-[280px]">
              {/* text */}
              <div className="leading-[55px] font-[900] text-[48px] text-[#ffff] text-center">
                Automate your customer service with Ada
              </div>
              {/* button */}
              <div className="mt-10 flex justify-center">
                <button className="text-center px-[23px] rounded-lg py-[11px] bg_btns font-[800] text-[16px] text-[#ffff]">
                  Get a Demo
                </button>
              </div>
            </div>
            {/* grid span */}
            <div className="grid grid-cols-3 gap-8 mt-[280px]">
              {/* left */}
              <div className="bg_auto_grid_left rounded-[8px] border-[1px] border-[#323A4D99] px-[30px] py-[95px]">
                {/* inner parent */}
                <div>
                  {/* large */}
                  <div className="font-[700] text-[32px] leading-[37px] text-[#ffff]">
                    An AI-powered platform built<br></br> for CX teams
                  </div>
                  {/* sm */}
                  <div className="mt-6 font-[400] text-[16px] text-[#ffff] leading-[24px]">
                    Discover the power of an AI Agent for your business.
                  </div>
                  {/* banner */}
                  <div className="mt-6 font-[600] text-[14px] text-[#1E232E] bg-[#e3d4fc] flex items-center w-[195.94px] rounded-[16px] px-[18px] py-[5px] banner_shadow">
                    {/* text */}
                    <div>See all Case Studies</div>
                    {/* img */}
                    <div className="ml-2">
                      <img src={arrow.src}></img>
                    </div>
                  </div>
                </div>
              </div>
              {/* right */}
              <div className="col-span-2 rounded-[8px] border-[1px] border-[#323A4D99]">
                {/* parent */}
                <div>
                  {/* header */}
                  <div className="bg-[#2c3444] rounded-t-[8px]">
                    {/* imgs */}
                    <div className="flex  items-center justify-start px-8 py-6">
                      <div>
                        <img src={wealthsimple.src}></img>
                      </div>
                      <div className="ml-[46px]">
                        <img src={indigo.src}></img>
                      </div>
                      <div className="ml-[46px]">
                        <img src={airasia.src}></img>
                      </div>
                      <div className="ml-[46px]">
                        <img src={tile.src}></img>
                      </div>
                    </div>
                  </div>
                  {/* other content */}
                  <div className="grid grid-cols-4 px-8 py-10 gap-[20px]">
                    {/* left */}
                    <div className="col-span-1 border-r-[1px] border-r-[solid] border-r-[#323A4D]">
                      {/* box 1 */}
                      <div>
                        {/* head */}
                        <div className="text-[#ffff] font-[700] text-[24px] leading-[28px]">
                          2x
                        </div>
                        {/* sm-text */}
                        <div className="font-[400] text-[14px] text-[#ffff]">
                          increase in<br></br> Automated<br></br> Resolution
                        </div>
                      </div>
                      {/* box 2 */}
                      <div className="mt-5">
                        {/* head */}
                        <div className="text-[#ffff] font-[700] text-[24px] leading-[28px]">
                          10 pt
                        </div>
                        {/* sm-text */}
                        <div className="font-[400] text-[14px] text-[#ffff]">
                          increase in CSAT
                        </div>
                      </div>
                    </div>
                    {/* right */}
                    <div className="col-span-3">
                      {/* text */}
                      <div className="font-[400] text-[16px] leading-[24px] text-[#ffff]">
                        “Based on Automated Resolutions, our AI Agent is
                        equivalent to 10 full time agents. We’re not reducing
                        our headcount. We’re reinvesting those agents into our
                        business. The agent time savings we’ve realized by
                        implementing Ada has allowed us to form a ‘gold glove’
                        team for our top tier of clients”
                      </div>
                      {/* img + text */}
                      <div className="flex items-end mt-9">
                        {/* img */}
                        <div>
                          <img src={adult.src}></img>
                        </div>
                        {/* text */}
                        <div className="ml-[15px]">
                          <div className="font-[700] text-[16px] text-[#ffff]">
                            Christine Farrugia
                          </div>
                          <div className="font-[400] text-[14px] text-[#ffff] mt-[-5px]">
                            VP Client Experience & Strategy
                          </div>
                        </div>
                      </div>
                      {/* banner */}
                      <div className="mt-8 font-[600] text-[14px] text-[#1E232E] bg-[#e3d4fc] flex items-center w-[275.94px] rounded-[16px] px-[17px] py-[5.5px] banner_shadow">
                        {/* text */}
                        <div>Read Wealthsimple&apos;s Case Study</div>
                        {/* img */}
                        <div className="ml-2">
                          <img src={arrow.src}></img>
                        </div>
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
