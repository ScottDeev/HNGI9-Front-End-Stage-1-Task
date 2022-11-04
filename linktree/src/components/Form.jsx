export default function Form() {
  const name = 'Scott'

  return (
    <div className="md:w-[70%] sm:w-[80%] w-[95%] mx-auto flex flex-col gap-[48px]">
      <div >
        <h1 className="font-semibold text-[36px] text-gray-900">Contact Me</h1>
        <p className="text-[20px] font-[400] text-gray-600">Hi there, contact me to ask me about anything you have in mind.</p>
      </div>
      <form className="flex flex-col gap-[24px]">
        <div className="flex lg:flex-row flex-col gap-[24px] justify-between w-full">
          <label className="flex flex-col gap-[6px] lg:w-[50%] w-full">
            <span className="text-gray-700 text-[14px] font-[500]">First name</span>
            <input className="border border-gray-300 rounded-[8px] py-[10px] px-[14px] outline-[#84CAFF]" id="first_name" type="text" placeholder="Enter your first name" />
          </label>
          <label className="flex flex-col gap-[6px] lg:w-[50%] w-full">
            <span className="text-gray-700 text-[14px] font-[500]">Last name</span>
            <input className="border border-gray-300 rounded-[8px] py-[10px] px-[14px] outline-[#84CAFF]" id="last_name" type="text" placeholder="Enter your last name" />
          </label>
        </div>
        <label className="flex flex-col gap-[6px] w-full">
            <span className="text-gray-700 text-[14px] font-[500]">Email</span>
            <input className="border border-gray-300 rounded-[8px] py-[10px] px-[14px] outline-[#84CAFF]" id="email" type="email" placeholder="yourname@email.com" />
        </label>
        <label className="flex flex-col gap-[6px] w-full">
            <span className="text-gray-700 text-[14px] font-[500]">Message</span>
            <textarea className="border border-gray-300 rounded-[8px] py-[10px] px-[14px] h-[132px] outline-[#84CAFF]" id="message" placeholder="Send me a message and I'll reply you as soon as possible..." />
        </label>
        <label className="flex items-start gap-[12px]">
          <input className="h-[20px] w-[20px] rounded-[6px]" type="checkbox"  />
          <span>You agree to providing your data to {name} who may contact you.</span>
        </label>
        <label className="flex flex-col gap-[6px] w-full mt-[8px]">
          <input className="border border-gray-300 rounded-[8px] py-[12px] px-[14px] bg-[#1570EF] text-white" 
          id="btn__submit" type="submit" value="Send message" />
        </label>
      </form>
    </div>
  )
}