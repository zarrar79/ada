import React from 'react'
import ada from '../../../public/assets/ada footer.svg'
import youtube from '../../../public/assets/youtube.svg'
import linkedin from '../../../public/assets/linkedin.svg'
import twitter from '../../../public/assets/twitter.svg'
import facebook from '../../../public/assets/facebook.svg'
 const Footer = () => {
  return (
    <>
    <div className='container'>
    {/* fluid */}
    <div className='pb-11 max-w-[1231px] mx-auto'>
    {/* flex */}
    <div className='md:px-4 flex justify-between flex-wrap xl:flex-wrap border-t-[1px] border-t-[#E5E7EB] pt-11 mt-24 xl:pr-0 pr-[90px]'>
        {/* first contanier */}
        <div className='flex justify-between flex-col xl:hidden'>
            {/* img */}
            <div><img src={ada.src}></img></div>
            {/* socials */}
            <div className='flex items-center mt-auto space-x-4 pl-1'>
                {/* img 1 */}
                <div><img src={linkedin.src}></img></div>
                {/* img 2 */}
                <div><img src={facebook.src}></img></div>
                {/* img 3 */}
                <div><img src={twitter.src}></img></div>
                {/* img 4 */}
                <div><img src={youtube.src}></img></div>
            </div>
        </div>
        {/* second cont. */}
        <div className='font-[400] text-[14px] text-[#1E232E] font-Inter space-y-[10px]'>
            <div className='font-[700]'>Platform</div>
            <div>Overview</div>
            <div>Onboard</div>
            <div>Measure</div>
            <div>Coach</div>
            <div>Integrations</div>
            <div>Digital</div>
            <div>Voice</div>
            <div>Email</div>
        </div>
        {/* third cont. */}
        <div className='font-[400] text-[14px] text-[#1E232E] font-Inter space-y-[10px]'> 
        <div className='font-[700]'>Solutions</div>
            <div>Ecommerce</div>
            <div>FinTech</div>
            <div>SaaS</div>
            <div>Gaming</div>
            <div>All Industies</div>
        </div>
        {/* fourth cont. */}
        <div className='font-[400] text-[14px] text-[#1E232E] font-Inter space-y-[10px]'>
        <div className='font-[700]'>Resources</div>
            <div>Documentation</div>
            <div>Resource Library</div>
            <div>Blog</div>
            <div>Customer Stories</div>
            <div className='font-[700]'>Pricing</div>
            <div className='font-[700]'>Status</div>
        </div>
        {/* fifth cont. */}
        <div className='font-[400] text-[14px] text-[#1E232E] font-Inter space-y-[10px]'>
        <div className='font-[700]'>Company</div>
            <div>Who We Are</div>
            <div>Careers</div>
            <div className='font-[700]'>Partners</div>
            <div>Zendesk</div>
            <div>Salesforce</div>
            <div>Digital</div>
            <div>Voice</div>
        </div>
        {/* sixth cont. */}
        <div className='font-[400] text-[14px] text-[#1E232E] font-Inter space-y-[10px]'>
        <div className='font-[700]'>Legal</div>
            <div>Privacy Policy</div>
            <div>Terms</div>
            <div>Security</div>
            <div>Accessibility</div>
        </div>
    </div>
    <div className='hidden xl:flex xl:justify-between xl:mt-5 px-4'>
            {/* img */}
            <div><img src={ada.src}></img></div>
            {/* socials */}
            <div className='flex items-center mt-auto space-x-4 pl-1'>
                {/* img 1 */}
                <div><img src={linkedin.src}></img></div>
                {/* img 2 */}
                <div><img src={facebook.src}></img></div>
                {/* img 3 */}
                <div><img src={twitter.src}></img></div>
                {/* img 4 */}
                <div><img src={youtube.src}></img></div>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}
export default Footer;
