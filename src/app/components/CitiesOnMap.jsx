import React from "react"

const CitiesOnMapSEO = ({cities, props}) => {
  return (
    <>
    <ul className="list-disc ps-8">
    {cities.map((data, index) => {
        return (
        <li key={index} className="lg:pb-2">
            {data.link ? (
            <>
                <a href={data.link} target="_self" rel="noopener noreferrer" className="underline">
                {data.text}
                </a>
                {data.cities && data.cities.length > 0 && (
                <ul>
                    {data.cities.map((city, index) => (
                    <li key={index}>{city.cityName}</li>
                    ))}
                </ul>
                )}
            </>
            ) : (
            <>
                <p>{data.title}</p>
                {data.cities && data.cities.length > 0 && (
                <ul className="list-none ps-6 my-4 grid lg:grid-cols-3 grid-cols-1">
                    {data.cities.map((city, index) => (
                    <li className="flex items-center gap-2" key={index}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                        </svg>
                        <a className="underline hover:text-4pred" href={city.citylink}>{city.cityName}</a>
                    </li>
                    ))}
                </ul>
                )}
            </>
            )}
        </li>
        );
    })}
    </ul>
    </>
  )
};

export default CitiesOnMapSEO;
