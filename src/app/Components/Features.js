import React from 'react'
import bigImage from '../../../public/assets/b_image_feature.svg'
import shield from '../../../public/assets/shield.svg'
import mail from '../../../public/assets/mail.svg'
import kristal from '../../../public/assets/kristal.svg'
import arrow from '../../../public/assets/Arrow.svg'
const Features = () => {
  return (
    <>
    {/* background */}
    <div className='bg-[#1e232e] overflow-hidden mt-[6rem] font-Inter'>
        {/* fluid */}
        <div className='max-w-[1231px] mx-auto'>
     {/* section */}
     <div className="mt-[6rem] flex justify-between">
          {/* left */}
          <div>
            {/* big-text */}
            <div className="text-white font-[900] text-[40px] leading-[46px] mt-[58px]">
            Basic chatbots have<br></br> <span className='text-[#F1D598]'>no business</span> representing<br></br> <span className='text-[#C4ADEB]'>your business</span>
            </div>
            {/* sm-text */}
            <div className="w-[40rem] font-[400] text-[18px] text-[white] leading-[27px] mt-9">
            Ditch code-heavy, old-school scripted chatbots.<br></br> Powered by Ada’s Reasoning Engine™, an AI Agent<br></br> reasons through the best solution to deliver responses<br></br> that are relevant, accurate and safe. Every single time.
            </div>
            {/* buttons */}
            <div className="flex mt-9 hero_btn">
              {/* button 1 */}
              <div className="font-[800] text-[16px] text-[white]"><button className="rounded-[8px] px-[25px] py-[12px] bg_btns">Get a demo</button></div>
              <div className="font-[800] text-[16px] text-[white]"><button className="btn_2 ml-7 border-[#9977D4] border-[2px] rounded-[8px] px-[23px] py-[10px]">Learn More</button></div>
            </div>
          </div>
          {/* right */}
          <div className="hero_big_img"><img className="max-w-[142%] ml-3" src={bigImage.src}></img></div>
        </div>
        {/* grid */}
        <div className='grid grid-cols-4 gap-8 mt-24'>
            {/* box 1 */}
            <div className='border border-slate-800/60 rounded-lg box_shadow_card_feature px-8 py-10'>
                {/* inner parent */}
                <div>
                    {/* img */}
                    <div><img src={shield.src}></img></div>
                    {/* head */}
                    <div className='mt-2 text-[#fff] font-[700] text-[20px]'>Forrester</div>
                    {/* text */}
                    <div className='mt-2 leading-[20px] font-[400] text-[16px] text-[#fff]'>Conversational AI Wave Challenger</div>
                </div>
            </div>
            {/* box 2 */}
            <div className='border border-slate-800/60 rounded-lg box_shadow_card_feature px-8 py-10'>
                {/* inner parent */}
                <div>
                    {/* img */}
                    <div><img src={shield.src}></img></div>
                    {/* head */}
                    <div className='mt-2 text-[#fff] font-[700] text-[20px]'>Deloitte</div>
                    {/* text */}
                    <div className='mt-2 leading-[20px] font-[400] text-[16px] text-[#fff]'>Technology Fast 500</div>
                </div>
            </div>
            {/* box 3 */}
            <div className='border border-slate-800/60 rounded-lg box_shadow_card_feature px-8 py-10'>
                {/* inner parent */}
                <div>
                    {/* img */}
                    <div><img src={shield.src}></img></div>
                    {/* head */}
                    <div className='mt-2 text-[#fff] font-[700] text-[20px]'>Fast Company</div>
                    {/* text */}
                    <div className='mt-2 leading-[20px] font-[400] text-[16px] text-[#fff]'>Next Big Things in Tech</div>
                </div>
            </div>
            {/* box 4 */}
            <div className='border border-slate-800/60 rounded-lg box_shadow_card_feature px-8 py-10'>
                {/* inner parent */}
                <div>
                    {/* img */}
                    <div><img src={mail.src}></img></div>
                    {/* head */}
                    <div className='mt-2 text-[#fff] font-[700] text-[20px]'>Globe & Mail</div>
                    {/* text */}
                    <div className='mt-2 leading-[20px] font-[400] text-[16px] text-[#fff]'>Top Growing Companies</div>
                </div>
            </div>
        </div>
        {/* flex for b-image and text */}
        <div className='flex items-center justify-between mt-[54.5px]'>
            {/* left */}
            <div className='w-[30%]'><img className='mt-[45px] ml-[-262px] max-w-[229%]' src={kristal.src}></img></div>
            {/* right */}
            <div className='text-[white] w-[70%]'>
                <div className='max-w-[56%] mx-auto ml-[283px]'>
              {/* head */}
              <div className='leading-[46px] font-[900] text-[40px] text-[#fff]'>Resolve more phone calls with voice AI</div>
              {/* sm-text */}
              <div className='mt-[38px] font-[400] leading-[27px] text-[18px]'>Stop delivering a disjointed customer experience. Hire an AI Agent that can communicate consistently in any channel. Seamlessly add intelligent phone automation using the same knowledge content, all in a single platform.</div>
            {/* banner */}
            <div className= "font-[600] mt-[38px] text-[14px] text-[#1E232E] bg-[#e3d4fc] flex items-center w-[249px] rounded-[16px] px-[20px] py-[5px] banner_shadow">
              {/* text */}
              <div>Learn More about Ada Voice</div>
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
    </>
  )
}
export default Features;
