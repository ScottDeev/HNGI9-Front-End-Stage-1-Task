import { useState } from "react"

export default function Form() {
  const name = 'Scott'
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!msg){
      setError(true)
    }else{
      console.log(fname, lname, email,msg);
      setError(false)
    }
  }
  return (
    <div className="md:w-[70%] sm:w-[80%] w-[95%] mx-auto flex flex-col gap-[48px] md:mt-[100px] mt-[30px]">
      <div >
        <h1 className="font-semibold text-[36px] text-gray-900">Contact Me</h1>
        <p className="text-[20px] font-[400] text-gray-600">Hi there, contact me to ask me about anything you have in mind.</p>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-[24px]">
        <div className="flex lg:flex-row flex-col gap-[24px] justify-between w-full">
          <label className="flex flex-col gap-[6px] lg:w-[50%] w-full">
            <span className="text-gray-700 text-[14px] font-[500]">First name</span>
            <input className="border border-gray-300 rounded-[8px] py-[10px] px-[14px] outline-[#84CAFF]" id="first_name" type="text" placeholder="Enter your first name" onChange={(e) => setFname(e.target.value)} />
          </label>
          <label className="flex flex-col gap-[6px] lg:w-[50%] w-full">
            <span className="text-gray-700 text-[14px] font-[500]">Last name</span>
            <input className="border border-gray-300 rounded-[8px] py-[10px] px-[14px] outline-[#84CAFF]" id="last_name" type="text" placeholder="Enter your last name" onChange={(e) => setLname(e.target.value)}/>
          </label>
        </div>
        <label className="flex flex-col gap-[6px] w-full">
            <span className="text-gray-700 text-[14px] font-[500]">Email</span>
            <input className="border border-gray-300 rounded-[8px] py-[10px] px-[14px] outline-[#84CAFF]" id="email" type="email" placeholder="yourname@email.com" onChange={(e) => setEmail(e.target.value)}/>
        </label>
        <label className="flex flex-col gap-[6px] w-full">
            <span className="text-gray-700 text-[14px] font-[500]">Message</span>
            <textarea className={`border ${error ? 'border-[#F83F23]': 'border-gray-300'} rounded-[8px] py-[10px] px-[14px] h-[132px] outline-[#84CAFF]`} id="message" placeholder="Send me a message and I'll reply you as soon as possible..."  onChange={(e) => setMsg(e.target.value)}/>
            {error && <span className="text-[#F83F23] text-[14px]">Please enter a message</span>}
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