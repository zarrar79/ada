
import React from "react"
import arrow from '../../../public/assets/Arrow.svg'
import ada from '../../../public/assets/Ada.svg'
const Discover = () => {
  return (
    <>
      {/* fluid */}
      <div className="container mx-auto sm:max-w-[100%] sm:px-6">
        <div className="max-w-[1231px] mx-auto">
          {/* b text */}
          <div className="leading-[55px] mt-8 max-w-[700px] mx-auto font-[900] text-[48px] text-[#1e232e] text-center">Discover the potential of AI-powered customer service</div>
        {/* grid */}
        <div className="grid grid-cols-3 gap-[30px] mt-24 xl:grid-cols-1 xl:gap-x-0">
          <div className="col-span-2 xl:grid-cols-1">
            {/* first box */}
            <div className="shadow-light-med border-[1px]  border-[#FFFFFF99] rounded-lg">
              {/* inner parent */}
              <div className="flex pl-[30px] py-10 pr-[30px] sm:block">
                {/* img*/}
                <div>
                  <img className="sm:max-w-[25%] max-w-[115%] rounded-lg" src='https://www.ada.cx/_astro/resource-forrester.CWX68ZMu_L5WVm.webp'></img>
                  </div>
                {/* text content */}
                <div className="pl-14 sm:pl-0 sm:mt-5 space-y-[21px]">
                  {/* lg text */}
                  <div className="font-[700] text-[24px] text-[black] leading-[28px]">The analysts have spoken: Companies using Ada can get up to 408% ROI</div>
                {/* sm text */}
                <div className="leading-[27px] font-[400] text-[18px] text-[#1e232e]">Read the full study and discover how Ada customers established a robust and easy-to-manage customer service automation platform that delivers results.</div>
                {/* banner */}
            <div className= "shadow_btn font-[600] mt-[38px] text-[14px] text-[#1E232E] bg-[#e3d4fc] flex items-center w-[230px] rounded-[16px] px-[18px] py-[5px] banner_shadow banner_feature">
              {/* text */}
              <div>Get the Forrester® Report</div>
              {/* img */}
              <div className="ml-2">
                <img src={arrow.src}></img>
              </div>
            </div>
                </div>
              </div>
            </div>
            {/* second box */}
            <div className="mt-[30px] shadow-2xl shadow-light-med border-[1px] border-[#FFFFFF99] rounded-lg">
              {/* inner parent */}
              <div className="flex pl-[30px] py-10 pr-14 sm:block">
                {/* img*/}
                <div>
                  <img className="sm:max-w-[25%] max-w-[107%] rounded-lg" src='https://www.ada.cx/_astro/resource-ada.BKe_goeQ_Z10TfvM.webp'></img>
                  </div>
                {/* text content */}
                <div className="pl-8 space-y-[20px] sm:pl-0 sm:mt-5">
                  {/* lg text */}
                  <div className="font-[700] text-[24px] text-[black] leading-[28px]">The generative AI toolkit for customer service leaders</div>
                {/* sm text */ }
                <div className="leading-[27px] font-[400] text-[18px] text-[#1e232e]">Our generative AI experts have gathered insights for you to understand how to evolve your team, strategy and tech stack for an AI-first future.</div>
                {/* banner */}
            <div className= "shadow_btn font-[600] mt-[38px] text-[14px] text-[#1E232E] bg-[#e3d4fc] flex items-center w-[150px] rounded-[16px] px-[17px] py-[5px] banner_shadow banner_feature">
              {/* text */}
              <div>Get the Toolkit</div>
              {/* img */}
              <div className="ml-2">
                <img src={arrow.src}></img>
              </div>
            </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 text-[#1E232E] shadow-2xl rounded-lg">
            <div className="border-[1px]  border-[#FFFFFF99] rounded-lg">
              {/* inner parent */}
              <div className="pl-[33px] space-y-[32px] pr-6 py-[153px] xl:py-7">
                {/* lg */}
                <div className="font-[700] text-[32px] leading-[37px] pr-[105px]">Guide to interviewing AI Agents</div>
                <div className="font-[400] text-[18px] leading-[27px]">Discover the 8 success criteria you should be testing AI Agents on to get the most return on your investment</div>
                <div><button className="text-[#ffff] font-[800] text-[16px] show_btn_dscover px-[24px] py-[12px] rounded-lg">Get the Guide</button></div> 
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};
export default Discover;
