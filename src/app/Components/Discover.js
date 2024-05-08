
import React from "react"
import Forrester from '../../../public/assets/forrester.svg'
const Discover = () => {
  return (
    <>
      {/* fluid */}
      <div className="container mx-auto">
        <div className="max-w-[1231px] mx-auto">
          {/* b text */}
          <div className="leading-[55px] mt-8 max-w-[700px] mx-auto font-[900] text-[48px] text-[#1e232e] text-center">Discover the potential of AI-powered customer service</div>
        {/* grid */}
        <div className="grid grid-cols-4">
          <div className="col-span-3">
            {/* first box */}
            <div>
              {/* inner parent */}
              <div>
                {/* img*/}
                <div className="flex justify-between">
                  <img src={Forrester.src}></img>
                  </div>
                {/* text content */}
                <div>
                  {/* lg text */}
                  <div className="font-[700] text-[24px] text-[black]">The analysts have spoken: Companies using Ada can get up to 408% ROI</div>
                </div>
              </div>
            </div>
            {/* second box */}
          </div>
          <div className="col-span-1">
            <div>lkjl;kj</div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};
export default Discover;
