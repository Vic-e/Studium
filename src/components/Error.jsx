import React from 'react'
import {Image} from 'react-bootstrap';
import { useRouteError } from "react-router-dom";

export default function Error() {


    return (
      <div>
        <h2>This page could not be found.</h2>
        <p>Sorry, an unexpected error has occurred.</p>
      </div>
    );
  }
  