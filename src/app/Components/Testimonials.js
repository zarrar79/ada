"use client";
import React from "react";
import wealthsimple from "../../../public/assets/wealthsimple_b.svg";
import ipsy from "../../../public/assets/ipsy_b.svg";
import wave from "../../../public/assets/wave.svg";
import man from "../../../public/assets/man.svg";
import clickup from "../../../public/assets/clickup.svg";
import girl from "../../../public/assets/girl.svg";
const Testimonials = () => {
  return (
    <>
      {/* fluid container */}
      <div className="max-w-[1231px] mx-auto font-Inter">
        {/* grid */}
        <div className="grid grid-cols-3 gap-[31px] mt-16 grid_about">
          <div>
            {/* box 1 */}
            <div className="f_card_about px-8 py-9 mb-20 border-[1px] rounded-[8px] border-[#FFFFFF99] box_shadow_testi">
              {/* image */}
              <div>
                <img src={wealthsimple.src}></img>
              </div>
              {/* text */}
              <div className="mt-5 font-[700] text-[24px] text-[#1E232E]">
                2x increase in Automated Resolution Rate
              </div>
            </div>
          </div>
          {/* box 2 */}
          <div>
            <div className="s_card_about px-8 pt-9 pb-[71px] mb-20 border-[1px] rounded-[8px] border-[#FFFFFF99] box_shadow_testi">
              {/* image */}
              <div>
                <img src={ipsy.src}></img>
              </div>
              {/* text */}
              <div className="mt-5 font-[700] text-[24px] text-[#1E232E]">
                $2.7MM annual savings
              </div>
            </div>
          </div>
          <div>
            {/* box 1 */}
            <div className="t_card_about px-8 pt-9 pb-[71px] mb-20 border-[1px] rounded-[8px] border-[#FFFFFF99] box_shadow_testi">
              {/* image */}
              <div>
                <img src={wave.src}></img>
              </div>
              {/* text */}
              <div className="mt-5 font-[700] text-[24px] text-[#1E232E]">
                5x ROI in just 12 months
              </div>
            </div>
          </div>
        </div>
        {/* text */}
        <div className="b_text max-w-[800px] mx-auto text-center font-[900] text-[48px] text-[#1E232E] leading-[55px]">
          We&apos;ve helped <span className="text-[#9977D4]">350+</span> businesses
          save time, money and resources
        </div>
        {/* grid */}
        <div className="grid_of_two_about grid grid-cols-2 mt-[80px] gap-[30px]">
          {/* left */}
          {/* #FFFFFF99 */}
          <div className="px-[29px] py-[38px] rounded-[8px] border-[1px] shadow-2xl border-[#FFFFFF99]">
            {/* b_text */}
            <div className="font-[400] text-[18px] text-[#1E232E] justify-start">
            &quot;Our AI Agent brings us closer to our clients, reducing
              operational burden and increasing our automated resolution to help
              our team think about big picture levers we can pull to create a
              better client experience.&quot;
            </div>
            {/* small text + img */}
            <div className="flex items-center mt-10 sm_img_text_about">
                {/* img */}
                <div><img src={man.src}></img></div>
                <div className="ml-[23px] side_text_about pt-[8.5px]">
                    {/* bold */}
                    <div className="font-[700] text-[18px] text-[#1E232E]">Paul Teshima</div>
                    {/* small */}
                    <div className="font-[400] text-[14px] mt-[-7px] text-[#1E232E]">Chief Client Experience Officer</div>
                    {/* image */}
                    <div className="mt-[11px]"><img src={wealthsimple.src}></img></div>
                </div>
            </div>
          </div>
          {/* right */}
          <div className="px-[29px] py-[38px] rounded-[8px] border-[1px] shadow-2xl border-[#FFFFFF99]">
            {/* b_text */}
            <div className="font-[400] text-[18px] text-[#1E232E] justify-start">
            &quot;We saw impressive gains when implementing the scripted chatbot, but were blown away by the results of our generative AI Agent. With the AI Agent, we no longer have to rely on human intervention to address new customer inquiries that come through when we've updated our product.&quot;
            </div>
            {/* small text + img */}
            <div className="flex items-center mt-10 sec_img_text_about">
                {/* img */}
                <div><img src={girl.src}></img></div>
                <div className="sec_side_text ml-[23px] pt-[8.5px]">
                    {/* bold */}
                    <div className="font-[700] text-[18px] text-[#1E232E]">Allie Hurley</div>
                    {/* small */}
                    <div className="font-[400] text-[14px] mt-[-7px] text-[#1E232E]">Head of Global Support</div>
                    {/* image */}
                    <div className="mt-[11px]"><img src={clickup.src}></img></div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Testimonials;
