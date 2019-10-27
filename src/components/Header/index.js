import Typography from "@material-ui/core/Typography";
import React from "react";
import {makeStyles} from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import AssessmentIcon from '@material-ui/icons/Assessment';
import AppBar from "@material-ui/core/AppBar/AppBar";

const useStyles = makeStyles(theme => ({
    icon: {
        marginRight: theme.spacing(2),
    },
}));
export default function Header () {
    const classes = useStyles();
    return(
        <React.Fragment>
            <AppBar position="relative">
                <Toolbar>
                    <AssessmentIcon className={classes.icon} />
                    <Typography variant="h6" color="inherit" noWrap>
                        Currency Views
                    </Typography>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}