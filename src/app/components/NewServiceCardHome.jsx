import React from "react"

const NewServiceCardHome = ({data, ...props}) => {
  return (
    <>
      <div className={`${data.className} rounded-lg lg:pt-0 ps-8 pe-8 lg:ps-0 pt-40 pb-6 text-white content-end`}>
        <h3 className="text-[20px] font-bold pb-4">{data.title}</h3>
        <p className="lg:w-[18rem]">{data.desc}</p>
        <div className={`${data.link ? 'block' : 'hidden'} min-h-[35px]`}>
          <a href={data.link} className="text-white underline">Read more</a>
        </div>
      </div>
    </>
  )
};

export default NewServiceCardHome;
