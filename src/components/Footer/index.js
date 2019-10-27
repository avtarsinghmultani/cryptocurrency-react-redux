import Typography from "@material-ui/core/Typography";
import React from "react";
import { makeStyles } from "@material-ui/core";
import Link from '@material-ui/core/Link';


const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));
export default function Footer () {
    const classes = useStyles();
    return(
        <React.Fragment>
        {/* Footer */}
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    Designed and Developed by Avtar Singh.
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    To know more about me. Please visit :
                    <Link color="primary" href="http://avtarsingh.com.au"> avtarsingh.com.au </Link>
                </Typography>
            </footer>
        {/* End footer */}
    </React.Fragment>
    )
}