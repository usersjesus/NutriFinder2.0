import React from "react";
import { SearchResult } from "./SearchResult";
import "./SearchResultsList.css";

 export const SearchResultsList = ({ results }) => {
//  return console.log(Object.values(results));
        return  ( <>
            <div className="results-list">
                {Object.values(results).map((foods, fdcId) => {
                    return <>
                    <SearchResult result={foods} key={fdcId} />;
                    </>
                    })}
            </div>
            </>
        );

    };