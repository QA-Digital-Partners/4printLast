import Image from "next/image";
import React from "react"

const ReviewIndividual = ({slide, heightMod}) => {
  return (
    <>
      <div className="relative">
        <div className={`p-4 border-[1px] h-fit divpath lg:min-h-[274px] lg:max-w-[387px] w-full lg:min-w-[387px] max-w-[340px] min-h-[300px] rounded-xl z-20`}>
          <div className='flex items-center'>
              <div>
                  <p className='py-2 lg:leading-[22px]'>{slide.review}</p>
              </div>
           </div>
        </div>
        <div className="lg:mt-[-50px] mt-[-70px] justify-between z-50 lg:min-h-[65px] min-h-[65px] items-center lg:pb-4">
          <p className='font-bold lg:text-[18px] text-[18px] text-4pblue ps-4 lg:ps-0'>{slide.title}</p>
          <Image
            src={`/images/stars-review.svg`}
            alt=" 5 Stars review"
            sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
            srcSet="/images/stars-review.svg 768w, /images/stars-review.svg 1024w"
            width={150}
            height={23}
            className="relative lg:w-[150px] w-[150px] ps-4 lg:ps-0"
           />
        </div>
      </div>
    </>
  )
};

export default ReviewIndividual;
