import React, {useEffect} from "react";
import { connect } from 'react-redux';
import CurrencyCard from "../../components/CurrencyCard";
import { fetchAnalysis } from "./action";
import {Container, Grid, makeStyles} from "@material-ui/core";
import Loader from 'react-loader-spinner'


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
    grid: {
        paddingTop: "30px"
    }
}));

export function Analysis (props) {
    const classes = useStyles();
    useEffect (() => {
        props.analsisAction();
    }, [props.analysis.join(",")]);

    if(props.fetching){
        return (
            <Container fixed className={classes.loader}>
                <Loader
                    type="Grid"
                    color="#00BFFF"
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
            {props.analysis.length > 0 ?
                <Container className={classes.grid}>
                    <Grid container spacing={3}>
                        {props.analysis.map((currency) =>
                            <CurrencyCard key={currency.id} currency={currency}/>
                        )}
                    </Grid>
                </Container> :
                <Container maxWidth="xs">
                    <h2>"No Analysis to display."</h2>
                </Container>
            }

        </React.Fragment>
    )
}


const mapStateToProps = state => {
    return{
        analysis : state.analysisReducer.analysis,
        fetching: state.analysisReducer.fetching,
        fetched: state.analysisReducer.fetched,
        error: state.analysisReducer.errors,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        analsisAction: () => dispatch(fetchAnalysis())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Analysis);
