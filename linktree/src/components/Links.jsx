
const LinksData = [
  {
    title: "Twitter Link",
    link: 'https://twitter.com/ElijahLauren',
    id: 'btn_twitter'
  },
  {
    title: "Zuri Team",
    link: 'https://training.zuri.team/',
    id: 'btn__zuri'
  },
  {
    title: "Zuri Books",
    link: 'http://books.zuri.team',
    id: 'books'
  },
  {
    title: "Python Books",
    link: 'https://books.zuri.team/python-for-beginners?ref_id=ScottDev',
    id: 'book__python'
  },
  {
    title: "Background Check for Coders",
    link: 'https://background.zuri.team',
    id: 'pitch'
  },
  {
    title: "Design Books",
    link: 'https://books.zuri.team/design-rules',
    id: 'book__design'
  }
  
]
export default function Links() {
  return (
    <main className='flex flex-col w-full gap-[24px] mt-[58px] '>
      <div className="px-[64px] flex flex-col w-full gap-[24px]">
        {LinksData.map(data => (
          <div key={data.id} className='w-full flex items-center justify-center py-[24px] bg-gray-200 text-gray-900 font-[600] text-[18px]'>
            <a href={data.link} id={data.id}>{data.title}</a>
          </div>
        ))}
      </div>
      <div></div>
    </main>
  )
}