import React from "react";
import CardGrid from "../CardGrid";
import { Card, CardContent, CardHeader, Grid, List, ListItem, ListItemText, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: theme.shape.borderRadius,
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.secondary,
    },
}));

export default function CurrencyCard ({currency}) {
    const classes = useStyles();

    return(
        <React.Fragment>
            <Grid key={currency.id} item xs={12} sm={6} md={4} lg={4} >
            <Card >
                <CardHeader
                    title={currency.name}
                    subheader={currency.date}
                />
                <CardContent>
                    <Grid container spacing={1}>
                        {/*Check if Currency view has valid quotes.*/}
                        {currency.buy !== null ?
                        <CardGrid id={currency.buy.id} name={"Buy"} time={currency.buy.time} price={currency.buy.price}/> :
                        <CardGrid id={"null"} name={"Buy"} time={"N/A"} price={"N/A"}/>
                        }
                        {currency.sell !== null ?
                            <CardGrid id={currency.sell.id} name={"Sell"} time={currency.sell.time} price={currency.sell.price}/> :
                            <CardGrid id={"null"} name={"Sell"} time={"N/A"} price={"N/A"}/>
                        }
                        <Grid item xs={12}>
                            <List component="nav" className={classes.root} aria-label="mailbox folders">
                                {/*Display profit or loss accordingly.*/}
                                <ListItem >
                                    {
                                        currency.profit !== null ?
                                            currency.profit > 0 ?
                                            <ListItemText primary={`Profit: ${currency.profit}`} /> :
                                                <ListItemText primary={`Minimum Loss: ${currency.profit}`} /> :
                                            <ListItemText primary="N/A" />
                                    }
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
            </Grid>
        </React.Fragment>
    )
}