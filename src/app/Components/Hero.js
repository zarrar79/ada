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
  const display = () => {
    const menuElements = document.getElementsByClassName('menuNew');

// Loop through each element with the 'menuNew' class and toggle its display style
for (let i = 0; i < menuElements.length; i++) {
if (menuElements[i].style.display === "block") {
  menuElements[i].style.display = "none";
} else {
  menuElements[i].style.display = "block";
}
}
}
  return (
    <>
      {/* nav bar */}
      <div className="nav_par bg_nav font-Inter border-b-[1px] border-b-[solid] border-[#323A4D99] w-[100%] fixed">
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
            <div className="all_nav_hero flex items-center cursor-pointer">
              {/* text */}
              <div>Platform</div>
              {/* img */}
              <div className="ml-[7px]">
                <img src={down.src}></img>
              </div>
            </div>
            {/* boxe 2 */}
            <div className="all_nav_hero flex items-center ml-8 cursor-pointer">
              {/* text */}
              <div>Solutions</div>
              {/* img */}
              <div className="ml-[7px]">
                <img src={down.src}></img>
              </div>
            </div>
            {/* boxe 3 */}
            <div className="all_nav_hero flex items-center ml-8 cursor-pointer">
              {/* text */}
              <div>Resources</div>
              {/* img */}
              <div className="ml-[7px]">
                <img src={down.src}></img>
              </div>
            </div>
            {/* boxe 4 */}
            <div className="all_nav_hero flex items-center ml-8 cursor-pointer">
              {/* text */}
              <div>Pricing</div>
            </div>
          </div>
          {/* right */}
          <div>
            {/* button */}
            <div className="flex items-center">
              <button className="all_nav_hero bg-[#e3d4fc] py-[5.5px] px-[20px] rounded-[16px]">
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
              {/* Hamburger */}
            <div id="menuToggle" onClick={display}>
                                {/* <!--
      A fake / hidden checkbox is used as click reciever,
      so you can use the :checked selector on it.
      --> */}
                                <input type="checkbox" />

                                {/* <!--
      Some spans to act as a hamburger.
      
      They are acting like a real hamburger,
      not that McDonalds stuff.
      --> */}
                                <span></span>
                                <span></span>
                                <span></span>

                                {/* <!--
      Too bad the menu has to be inside of the button
      but hey, it's pure CSS magic.
      --> */}
                                <ul id="menu">
                                    <a href="#"><li>Home</li></a>
                                    <a href="#"><li>About</li></a>
                                    <a href="#"><li>Info</li></a>
                                    <a href="#"><li>Contact</li></a>
                                    <a href="https://erikterwan.com/" target="_blank"><li>Show me more</li></a>
                                </ul>
                            </div>
                            <div className='menuNew bg-[#041123] custom-shadow space-y-5 p-6 rounded absolute top-16 right-11 hidden'>
                            <div className='hover:text-[#494a4c] transition duration-[0.6s] hover:transition hover:duration-[0.6s] text-[16px] font-medium text-white cursor-pointer'>Platform</div>
                            <div className='hover:text-[#494a4c] transition duration-[0.6s] hover:transition hover:duration-[0.6s] text-[16px] font-medium text-white cursor-pointer'>Solutions</div>
                            <div className='hover:text-[#494a4c] transition duration-[0.6s] hover:transition hover:duration-[0.6s] text-[16px] font-medium text-white cursor-pointer'>Pricing</div>
                            <div className='hover:text-[#494a4c] transition duration-[0.6s] hover:transition hover:duration-[0.6s] text-[16px] font-medium text-white cursor-pointer'>Resources</div>
                            <div className='hover:text-[#494a4c] transition duration-[0.6s] hover:transition hover:duration-[0.6s] text-[16px] font-medium text-white cursor-pointer'>Get a Demo</div>
                            </div>
            </div>
          </div>
        </div>
      </div>
      {/* background */}
      <div className="bg-[#1e232e] pt-[0.1px] font-Inter overflow-hidden rounded-bottom ">
        {/* section */}
        <div className="content_image_hero max-w-[1231px] hero_section mx-auto mt-[12rem] flex justify-between">
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
            <div className="flex mt-9 hero_btn">
              {/* button 1 */}
              <div className="font-[800] text-[16px] text-[white]"><button className="rounded-[8px] px-[25px] py-[12px] bg_btns">Get a demo</button></div>
              <div className="font-[800] text-[16px] text-[white]"><button className="btn_2 ml-6 border-[#9977D4] border-[2px] rounded-[8px] px-[23px] py-[10px]">Learn More</button></div>
            </div>
          </div>
          {/* right */}
          <div className="hero_big_img mr-[-68px]"><img className="max-w-[130%]" src={bigImage.src}></img></div>
        </div>
        {/* images */}
        <div className="hero_images max-w-[1029px] mx-auto mt-[14px] rounded-b-[5px]">
          {/* ml-56px */}
            {/* grid */}
            <div className="grid_hero grid grid-cols-5 items-center gap-x-[48px] pb-[13px]">
              <div className="space-y-14">
                {/* img 1 */}
                <div className="canva"><img src={canva.src}></img></div>
                {/* img 2 */}
                <div className="mailchimp"><img src={mailchimp.src}></img></div>
              </div>
              <div className="space-y-14">
                {/* img 1 */}
                <div className="wealthsimple"><img src={wealthsimple.src}></img></div>
                {/* img 2 */}
                <div className="ipsy"><img src={ipsy.src}></img></div>
              </div>
              <div className="space-y-14">
                {/* img 1 */}
                <div className="pinterest"><img src={pinterest.src}></img></div>
                {/* img 2 */}
                <div className="verizon"><img src={verizon.src}></img></div>
              </div>
              <div className="space-y-14">
                {/* img 1 */}
                <div className="afterpay mt-11"><img src={afterpray.src}></img></div>
                {/* img 2 */}
                <div className="weber"><img src={weber.src}></img></div>
              </div>
              <div className="space-y-14">
                {/* img 1 */}
                <div className="square mt-4"><img src={squre.src}></img></div>
                {/* img 2 */}
                <div className="yeti"><img src={yeti.src}></img></div>
              </div>
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
