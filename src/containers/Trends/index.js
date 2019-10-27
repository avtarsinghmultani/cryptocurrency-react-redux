import React, {useEffect, useState} from "react";
import {Container, Grid, makeStyles} from "@material-ui/core";
import {connect} from "react-redux";
import {fetchTrends} from "./action";
import Chart from "../../components/Chart";
import Loader from "react-loader-spinner";

const useStyles = makeStyles(theme => ({
    loader: {
        position: "fixed",
        left: "0px",
        top: "0px",
        width: "100%",
        height: "100%",
        marginTop: "25%",
        marginLeft: "45%",
    },
}));

export function Trends (props) {
    const classes = useStyles();
    useEffect (() => {
        props.trendsAction();
    }, [props.trends.join(",")]);

    if(props.fetching){
        return (
            <Container className={classes.loader} fixed>
                <Loader
                    type="Grid"
                    height={100}
                    width={100}
                    color="#3f50b5"
                />
            </Container>
        )
    }
    if(props.error.length > 0){
        return (
            <Container maxWidth="xs">
                <h2>{props.error}</h2>
            </Container>
        )
    }
    return(
        <React.Fragment>
            <Container>
                <Grid container spacing={1}>
                    {
                        props.trends.map((trend)=>
                             <Chart key={trend.id} trend={trend}/>
                        )
                    }
                </Grid>
            </Container>
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return{
        trends : state.trendsReducer.trends,
        fetching: state.trendsReducer.fetching,
        fetched: state.trendsReducer.fetched,
        error: state.trendsReducer.errors,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        trendsAction: () => dispatch(fetchTrends())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Trends);