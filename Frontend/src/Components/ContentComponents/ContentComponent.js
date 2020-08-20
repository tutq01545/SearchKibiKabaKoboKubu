import React, {Fragment, useState} from "react";
import ToolTipComponent from "./ToolTipComponent";
import StepProgressBarComponent from "./StepProgressBarComponent";
import SearchComponent from "./SearchComponent/SearchComponent";

export default function ContentComponent() {

    const [workDone, setWorkDone] = useState(false)

   if(workDone === false) {
    return(
        <Fragment>
            <div class={'searchComponentStyle'}>
                <SearchComponent
                    workDone={workDone}
                    setWorkDone={setWorkDone}
                />
            </div>
            <div class={'searchComponentTooltip'}>
                <ToolTipComponent/>
            </div>

        </Fragment>

    )}

    else {
        return (
            <Fragment>
                <div>
                <StepProgressBarComponent
                    workDone={workDone}
                    setWorkDone={setWorkDone}
                />
                </div>
                <div class={'searchComponentTooltipProgressStep'}>
                    <ToolTipComponent/>
                </div>

            </Fragment>
        )
   }

}