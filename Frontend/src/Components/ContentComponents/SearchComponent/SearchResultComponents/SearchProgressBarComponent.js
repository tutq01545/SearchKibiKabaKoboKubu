import React, {Fragment, useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

export default function SearchProgressBarComponent(props) {
    const useStyles = makeStyles({
        root: {
            width: '100%',
        },
    });
    const classes = useStyles();
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {

            setProgress((oldProgress) => {
                if (oldProgress === 100) {
                    return 100;
                }
                const diff = Math.random()* 10;
                return Math.min(oldProgress + diff, 100);
            });
        }, 300);

        return () => {
            clearInterval(timer)
            setProgress(0)
        }
    },[props.search])

    if(props.userClickedOnSearch === true) {
        if (progress !== 100) {
            return(
                <Fragment>
                    <div className={classes.root}>
                        <LinearProgress variant={"determinate"} value={progress}/>
                    </div>

                </Fragment>
            )
        }
        else {
            return null
        }

    } else {
        return null;
    }
}