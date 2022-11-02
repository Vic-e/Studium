import React from 'react'
import { useSearchParams } from "react-router-dom";


function Search() {
    const [searchParams, setSearchParams] = useSearchParams();

    //function handleSubmit(event) {
     // event.preventDefault();
      // The serialize function here would be responsible for
      // creating an object of { key: value } pairs from the
      // fields in the form that make up the query.
      // resource https://www.robinwieruch.de/react-router-search-params/
     // const params = serializeFormQuery(event.target);
     // setSearchParams(params);
   // }

    return (
      <>
      <input type="search" value="Search" />
      </>
    );
  }
  
  export default Search