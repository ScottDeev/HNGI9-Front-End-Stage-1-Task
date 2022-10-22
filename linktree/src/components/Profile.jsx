import ProfileIcon from '../assets/profileImg.jpg'
import ShareIcon from '../assets/share.svg'
import ShareIconMobile from '../assets/shareMobile.svg'
export default function Profile() {
  return (
    <header className=" relative w-full flex flex-col justify-center items-center mt-[64px] gap-[24px] md:px-[64px] px-0 py-[20px]">
      <div className="h-[88px] w-[88px]">
        <img className="h-full w-full rounded-[50%]" src={ProfileIcon} alt="profileicon"  id="profile__img"/>
      </div>
      <div>
        <h1 className="text-gray-900 text-[20px] font-[700]" id="twitter">Scott</h1>
      </div>
      <div className='hidden'>
        <h1 className="text-gray-900 text-[20px] font-[700]" id="slack">ScottDev</h1>
      </div>

      {/* Share icon-- positioned absolute */}
      <div className="absolute top-0 sm:right-[20%] right-0 cursor-pointer">
        <img className="hidden md:block" src={ShareIcon} alt="share" />
        <img className="block md:hidden" src={ShareIconMobile} alt="share" />
      </div>
    </header>
  )
}