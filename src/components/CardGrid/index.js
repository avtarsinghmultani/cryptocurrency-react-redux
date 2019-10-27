import React from "react";
import {
    Divider,
    Grid,
    List,
    ListItem,
    ListItemText,
    makeStyles
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: theme.shape.borderRadius,
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.secondary,
    },
}));

export default function CardGrid ({id, name, time, price}) {
    const classes = useStyles();
    return(
        <React.Fragment>
            <Grid key={id} item xs={6}>
                <List component="nav" className={classes.root} >
                    <ListItem >
                        <ListItemText primary={name}/>
                    </ListItem>
                    <Divider />
                    <ListItem >
                        <ListItemText primary={time} />
                    </ListItem>
                    <Divider />
                    <ListItem >
                        <ListItemText primary={price}/>
                    </ListItem>
                </List>
            </Grid>
        </React.Fragment>
    )
}