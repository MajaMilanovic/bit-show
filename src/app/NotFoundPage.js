import React from "react";
import { pageNotFoundImage } from "../shared/constants";

const NotFoundPage=()=>{
    return (
        <img id="image-page-not-found" src={pageNotFoundImage} alt="SORRY, wrong path."/>
    )
}
export { NotFoundPage };