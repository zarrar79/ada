"use client";
import React from "react";
import logo from "../../../public/assets/Logo.svg";
import down from "../../../public/assets/Down.svg";
import arrow from "../../../public/assets/Arrow.svg";
import canva from "../../../public/assets/canva.svg";
import afterpray from "../../../public/assets/afterpray.svg";
import wealthsimple from "../../../public/assets/wealthsimple.svg";
import weber from "../../../public/assets/weber.svg";
import pinterest from "../../../public/assets/pinterest.svg";
import squre from "../../../public/assets/squre.svg";
import mailchimp from "../../../public/assets/mailchimp.svg";
import ipsy from "../../../public/assets/ipsy.svg";
import verizon from "../../../public/assets/verizon.svg";
import yeti from "../../../public/assets/yeti.svg";
import bigImage from "../../../public/assets/B_picture.svg";
const Hero = () => {
  return (
    <>
      {/* nav bar */}
      <div className="bg_nav font-Inter border-b-[1px] border-b-[solid] border-[#323A4D99] w-[100%] fixed">
        {/* text-parent */}
        <div className="flex justify-between max-w-[1231px] mx-auto py-[17px] items-center">
          {/* left */}
          <div>
            {/* img */}
            <div>
              <img src={logo.src}></img>
            </div>
          </div>
          {/* mid */}
          <div className="font-[600] text-[14px] text-white flex justify-between">
            {/* boxe 1 */}
            <div className="flex items-center cursor-pointer">
              {/* text */}
              <div>Platform</div>
              {/* img */}
              <div className="ml-[7px]">
                <img src={down.src}></img>
              </div>
            </div>
            {/* boxe 2 */}
            <div className="flex items-center ml-8 cursor-pointer">
              {/* text */}
              <div>Solutions</div>
              {/* img */}
              <div className="ml-[7px]">
                <img src={down.src}></img>
              </div>
            </div>
            {/* boxe 3 */}
            <div className="flex items-center ml-8 cursor-pointer">
              {/* text */}
              <div>Resources</div>
              {/* img */}
              <div className="ml-[7px]">
                <img src={down.src}></img>
              </div>
            </div>
            {/* boxe 4 */}
            <div className="flex items-center ml-8 cursor-pointer">
              {/* text */}
              <div>Pricing</div>
            </div>
          </div>
          {/* right */}
          <div>
            {/* button */}
            <div>
              <button className="bg-[#e3d4fc] py-[5.5px] px-[20px] rounded-[16px]">
                {/* parent */}
                <div className="flex justify-between items-center">
                  {/* text */}
                  <div className="font-[600] text-[14px] text-[#1E232E]">
                    Get a demo
                  </div>
                  {/* img */}
                  <div className="ml-2">
                    <img src={arrow.src}></img>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* background */}
      <div className="bg-[#1e232e] pt-[0.1px] font-Inter overflow-hidden rounded-bottom ">
        {/* section */}
        <div className="max-w-[1231px] mx-auto mt-[9.5rem] flex justify-between">
          {/* left */}
          <div>
            {/* banner */}
            <div className="font-[600] text-[14px] text-[#1E232E] bg-[#e3d4fc] flex items-center w-[341.94px] rounded-[16px] px-[20px] py-[5px] banner_shadow">
              {/* text */}
              <div>Save your seat: Ada spring product launch</div>
              {/* img */}
              <div className="ml-2">
                <img src={arrow.src}></img>
              </div>
            </div>
            {/* big-text */}
            <div className="text-white font-[900] text-[56px] leading-[56px] mt-9">
              Meet Ada, your<br></br> new AI Agent for<br></br> customer service
            </div>
            {/* sm-text */}
            <div className="font-[400] text-[20px] text-[white] leading-[30px] mt-9">
              Hire an AI agent to deliver extraordinary customer experiences,
              faster and at a lower cost than human agents.
            </div>
            {/* buttons */}
            <div className="flex mt-9">
              {/* button 1 */}
              <div className="font-[800] text-[16px] text-[white]"><button className="rounded-[8px] px-[25px] py-[12px] bg_btns">Get a demo</button></div>
              <div className="font-[800] text-[16px] text-[white]"><button className="ml-6 border-[#9977D4] border-[2px] rounded-[8px] px-[23px] py-[10px]">Get a demo</button></div>
            </div>
          </div>
          {/* right */}
          <div className="mr-[-68px]"><img className="max-w-[130%]" src={bigImage.src}></img></div>
        </div>
        {/* images */}
        <div className="max-w-[1029px] mx-auto mt-[69px] rounded-b-[5px]">
          {/* first row */}
          <div className="flex items-center">
            {/* image1 */}
            <div><img src={canva.src}></img></div>
            {/* image2 */}
            <div className="ml-[56px]"><img src={wealthsimple.src}></img></div>
            {/* image3 */}
            <div className="ml-[56px]"><img src={pinterest.src}></img></div>
            {/* image4 */}
            <div className="ml-[56px]"><img src={afterpray.src}></img></div>
            {/* image5 */}
            <div className="ml-[56px]"><img src={squre.src}></img></div>
          </div>
          {/* second row */}
          <div className="flex items-center mt-9">
            {/* image1 */}
            <div><img src={mailchimp.src}></img></div>
            {/* image2 */}
            <div className="ml-[56px]"><img src={ipsy.src}></img></div>
            {/* image3 */}
            <div className="ml-[56px]"><img src={verizon.src}></img></div>
            {/* image4 */}
            <div className="ml-[56px]"><img src={weber.src}></img></div>
            {/* image5 */}
            <div className="ml-[56px]"><img src={yeti.src}></img></div>
          </div>
        </div>
      </div>
      <div>
      <svg viewBox="0 0 1728 120" class="pointer-events-none w-full fill-none"  xmlns="http://www.w3.org/2000/svg"> <path d="M1728 0c-269.65 78.186-570.66 120-864.462 120C569.739 120 269.645 78.186 0 0h1728Z" fill="#1e232e"></path> </svg>
      </div>
    </>
  );
};
export default Hero;
