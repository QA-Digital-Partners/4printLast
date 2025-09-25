import React from "react"

const MiniMenu = ({toMap, CP}) => {
  return (
    <><div className="flex flex-wrap lg:flex-nowrap justify-center">

      {toMap.map((data, index) => {
          let divider = true;
          let size
          let last = false
          if(index === 0) {
            size = "lg:w-[240px] lg:min-w-[190px]"
          }else {
            size = "lg:w-[190px] lg:min-w-[190px]"
          }
          if(CP === 0)  {
            size = "lg:w-[145px] lg:min-w-[140px]"
          }
          if(CP === 1)  {
            size = "lg:w-[130px] lg:min-w-[120px]"
          }
          if(index === toMap.length-1) {
              divider = false;
            }
          if(index === toMap.length-1) {
            last = true;
          }
            return(
                <div key={index} className={`flex flex-wrap lg:flex-nowrap ${size} justify-center min-h-[106px] lh:min-h-auto w-1/2`}>
                <a href={data.link} className="content-center lg:text-[18px] text-[16px] font-semibold text-center lg:leading-6 leading-5 lg:w-[80%] self-end lg:self-center duration-300 transition-all ease-in-out hover:scale-110 bg-white hover:text-4pblue hover:font-bold lg:h-[90px] hover:shadow-[0px_3px_8px_rgba(0,0,0,0.15)]">{data.name}</a>
                
                {divider ? (
                    <>
                  <div className="w-[3px] lg:py-4 px-[1rem] content-evenly lg:block hidden">
                      <div className="bg-4plight-grey w-full min-w-[3px] min-h-[6rem] ">
                      </div>
                  </div>
                  <div className="w-full pt-4 content-evenly lg:hidden block max-h-[34px] self-end">
                      <div className="bg-4plight-grey w-full min-h-[2px] rounded-xl">
                      </div>
                  </div>
                  </>
                  
                ) : ('')
                }

                {last ? (
                  <>
                    <div className="w-full pt-4 content-evenly lg:hidden block max-h-[34px] self-end">
                      <div className="bg-4plight-grey w-full min-h-[2px] rounded-xl"></div>
                    </div>
                  </>
                ) : ('')}
                </div>
            )
        })
    }
    </div>
    </>
  )
};

export default MiniMenu;
