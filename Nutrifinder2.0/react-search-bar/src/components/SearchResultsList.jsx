import React from "react";
import { SearchResult } from "./SearchResult";
import "./SearchResultsList.css";

 export const SearchResultsList = ({ results }) => {
//  return console.log(Object.values(results));
        return  ( <>
            <div className="results-list">
                {Object.values(results).map((result, fdcID) => {
                    return <>
                    <SearchResult result={result} key={fdcID} />;
                    </>
                    })}
            </div>
            </>
        );

    };