import zuriIcon from '../assets/zuri.svg'
import i4gIcon from '../assets/I4G.svg'
export default function Footer() {
  return (
    <footer className='mt-[112px] flex sm:flex-row flex-col sm:items-end items-center justify-between border-t border-[#EAECF0] sm:h-[64px] h-[150px] sm:pt-[0] pt-[20px]'>
      <div>
        <img src={zuriIcon} alt="zuriIcon" />
      </div>
      <div>
        <p className="font-[400] text-gray-500">HNG Internship 9 Frontend Task</p>
      </div>
      <div>
        <img src={i4gIcon} alt="i4gIcon" />
      </div>
    </footer>
  )
}