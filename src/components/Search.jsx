import React from 'react'
import { useSearchParams } from "react-router-dom";
import {Form} from 'react-bootstrap';


const Search = () => {
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
      <Form style={{width:'75%'}}>
            <fieldset>
                <Form.Group>
                    <Form.Control
                     type="search"
                     placeholder="Search"
                     />
                </Form.Group>
              </fieldset>
        </Form>
      </>
    );
  }
  
  export default Search