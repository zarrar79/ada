import React from 'react'
import hireImg from '../../../public/assets/Hire_image.svg'
import arrow from '../../../public/assets/Arrow.svg'
const Hire = () => {
  return (
    <>
        {/* fluid */}
        <div className='container_hire'>
        <div className='max-w-[1231px] mx-auto mt-[86px] overflow-hidden'>
             {/*center container  */}
             <div>
                {/* head */}
                <div className='text-center font-[900] text-[48px] text-[#1e232e]'>Hire your next top-performing agent</div>
                {/* sm text */}
                <div className='mt-[29px] max-w-[530px] mx-auto text-center font-[400] text-[18px] leading-[27px]'>Onboard, measure and coach your AI agent — like you would a human — and start resolving more inquiries, with less effort.</div>
                {/* buttons */}
                <div className='flex flex-wrap justify-center items-center mt-[34px]'> 
                    {/* button 1 */}
                    <div><button className='border-[2px] border-[#E3D4FC] py-1 px-4 rounded-[16px] font-[600] text-[14px] text-[#1E232E]'>Onboard</button></div>
                    {/* button 2 */}
                    <div><button className='boxshadow_hire bg-[#E3D4FC] ml-8 border-[2px] border-[#E3D4FC] py-1 px-4 rounded-[16px] font-[600] text-[14px] text-[#1E232E]'>Measure</button></div>
                    {/* button 3 */}
                    <div><button className='coach_hire boxshadow_hire bg-[#E3D4FC] ml-8 border-[2px] border-[#E3D4FC] py-1 px-4 rounded-[16px] font-[600] text-[14px] text-[#1E232E]'>Coach</button></div>
                </div>
             </div>
             {/* text + center */}
             {/* grid */}
             <div className='grid grid-cols-2 mt-[3rem] items-center grid_hire'>
                {/* left */}
                <div className='grid_left_hire'>
                    {/* head */}
                    <div className='grid_head_hire leading-[46px] font-[900] text-[40px] text-[#1e232e]'>Automatically resolve up to 75% of customer inquiries</div>
                    {/* sm-text */}
                    <div className='pr-9 mt-[2.5rem] leading-[27px] font-[400] text-[18px] text-[#1e232e]'>Connect your AI Agent to information about your company, products and services, and parts of your existing tech stack to learn from it in seconds.</div>
                    {/* btn */}
                    <div><button className='mt-[2.5rem] boxshadow_hire px-[18px] py-[4px] rounded-[16px] flex items-center bg-[#E3D4FC] font-[600] text-[14px] text-[#1E232E]'><div>Find Out More</div>
                    <div className='ml-[10px]'>
                        <img src={arrow.src}></img>
                        </div></button>
                        </div>
                </div>
                {/* right */}
                <div>
                    <div className='mr-[-29px] ml-[1.5rem]'>
                    <img className='max-w-[109%]' src={hireImg.src}></img></div>
                    </div>
             </div>
        </div>
        </div>
    </>
  )
}
export default Hire;
