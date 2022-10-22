import ProfileIcon from '../assets/profileimg.svg'
export default function Profile() {
  return (
    <header className="w-full flex flex-col justify-center items-center mt-[64px] gap-[24px] px-[64px]">
      <div className="h-[88px] w-[88px]">
        <img className="h-full w-full" src={ProfileIcon} alt="profileicon"  id="profile__img"/>
      </div>
      <div>
        <h1 className="text-gray-900 text-[20px] font-[700]" id="twitter">Scott</h1>
      </div>
    </header>
  )
}