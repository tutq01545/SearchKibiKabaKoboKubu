import React, {Fragment} from "react";
import NaviBarComponent from './NaviBarComponent'
import ContentComponent from "./ContentComponents/ContentComponent";
import "./App.css"


export default function SearchLocal() {



    return(
        <Fragment>
            <div>
                <NaviBarComponent />
            </div>
           <div class={'responseSearchStyle'}>
               <ContentComponent/>
           </div>

        </Fragment>

    )
}