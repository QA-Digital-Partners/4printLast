import React from "react"
import Button4PSmall from "./ButtonSmall";
import YouTubeVideo from "./YoutubeLazyLoad";

const ServicesCardHome = ({title, video, link, image, index}) => {

    let desfase = ''
    if (index==0 || index==3) {
        desfase = 'lg:mt-32'
    }else if (index==1 || index==4) {
        desfase = 'lg:mt-16'
    }else if (index ==6 ) {
      desfase = 'lg:mt-0 col-start-2'
    }

  return (
    <>
          <div className={` ${desfase}`}>
            <div className="relative w-full overflow-hidden min-h-[513px] rounded-xl">
            {/******************  Old Section  ***************************
            <video autoPlay muted loop className="absolute top-1/2 left-1/2 min-w-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover z-[-1]">
            <source src={`/videos/${video}`} type="video/mp4" />
              Tu navegador no soporta el formato de video.
            </video>*/}
            <YouTubeVideo 
              image={image} 
              videoId={video}
              videoWidth={378}
              videoHeight={672}
              imageWidth={378}
              imagHeigth={672}/>
            <div className="absolute bottom-0 w-full justify-center min-h-[139px] divpath btn-blue-to-red btn-animation p-4">
              <p className="text-white lg:text-[20px] text-[15px] font-bold pb-4 max-w-[300px] lg:max-w-[390px]">
              {title}
              </p>
              <Button4PSmall buttonText={'Learn More'} buttonLink={link} iconOption={3} buttonBgAnimation={'transparent'} textColor={'text-white'}/>
            </div>
            </div>
          </div>
    </>
  )
};

export default ServicesCardHome;
