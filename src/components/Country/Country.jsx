import { useState } from "react";

const Country = ({ country, visitedCountries }) => {
    console.log(country);
    const { area, name, population, region, status, flags } = country;
    const [isVisited, setIsVisited] = useState(false);
    const handleVisit = () => {
        setIsVisited(!isVisited);
    };

    return (
        <div
            className={`border-2 border-orange-400 p-2 rounded-md w-[300px] mx-auto flex flex-col items-center ${
                isVisited ? "bg-green-200" : "bg-yellow-100"
            }`}
        >
            <div className="h-[120px] w-[180px]">
                <img className="h-full w-full" src={flags.svg} />
            </div>
            <h1 className="text-xl font-bold text-center">{name.common}</h1>
            <h1 className=" font-semibold">
                Area: {area} m<sup>2</sup>
            </h1>
            <h1 className=" font-semibold">population: {population} </h1>
            <h1 className=" font-semibold">Region: {region} </h1>
            <h1 className=" font-semibold">Status: {status} </h1>
            <button
                className="btn btn-success w-full"
                onClick={() => {
                    isVisited ? "" : visitedCountries(name.common);
                    handleVisit();
                }}
            >
                {isVisited ? "visited" : "visit"}
            </button>
            <p className="text-orange-700">
                {isVisited
                    ? "You visited this country"
                    : "You can visit this awesome country"}
            </p>
        </div>
    );
};

export default Country;
