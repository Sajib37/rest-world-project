import { useEffect, useState } from "react";
import Country from "../Country/Country";

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then((res) => res.json())
            .then((data) => setCountries(data));
    }, []);

    const [countryName, setCountryName] = useState([]);
    const visitedCountries = (name) => {
        let newCountries = [...countryName, name];
        setCountryName(newCountries);
    };

    return (
        <>
            <h1 className="text-4xl font-extrabold text-center my-6 ">
                Awesome World Tour
            </h1>
            <div className="mx-auto max-w-screen-xl border-2 border-rose-300 py-4 mb-4 rounded-xl list-none flex flex-col items-center">
                <h1 className="text-2xl font-bold text-center">
                    .........Visited Countries.......
                </h1>
                {countryName.map((country, index) => (
                    <li key={index} className="text-[20px] font-medium">
                        {country}
                    </li>
                ))}
            </div>
            <div className="mx-auto max-w-screen-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-2">
                {countries.map((country, index) => (
                    <Country
                        key={index}
                        country={country}
                        visitedCountries={visitedCountries}
                    ></Country>
                ))}
            </div>
        </>
    );
};

export default Countries;
