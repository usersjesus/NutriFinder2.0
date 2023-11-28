import React, {useState} from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css"

export const SearchBar = ({setResults}) => {
    const [input, setInput] = useState("");

    const fetchData = (value) => {
        if (value!== "") {
        fetch("https://api.nal.usda.gov/fdc/v1/foods/search?api_key=intnOzvjRdLQUdPgKcD3420RkD7pCogdZ3BYLwu6&query=" + value)
        .then((response) => response.json())
        .then((json) => {setResults(json)});
        }
    };

    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    };

    return <>
        <div className="input-wrapper">
            <FaSearch  id="search=icon" />
            <input
                placeholder="Type to search..."
                value= {input}
                onChange={(e) => handleChange(e.target.value)}
            />
        </div>
    </>
}