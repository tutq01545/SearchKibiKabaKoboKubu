import React, {Fragment} from "react";
import {OverlayTrigger, Tooltip} from "react-bootstrap";
import 'C://Users/PC-Tien/WebstormProjects/react-chat-app/src/Components/App.css'
export default function ToolTipComponent() {

    const Overlaystyle = {
        float: "right",
        padding: 10,
        top: "660px",
        position: 'relative'
    }
    return(
        <Fragment>
            <div class={"tooltipStyle"}>

                <OverlayTrigger key={'left'}
                                placement={'left'}
                                overlay={
                                    <Tooltip>
                                        Simply enter your question and click on Search button.
                                    </Tooltip>
                                }>
                    <button variant={'secondary'} style={{width: '70px', borderRadius: '50%', height: '70px', fontSize: '30px' }}>?</button>
                </OverlayTrigger>
            </div>
        </Fragment>
    )
}