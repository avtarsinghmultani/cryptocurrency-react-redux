import React, { useState } from 'react';
import {Switch, Route, BrowserRouter, Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Analysis from "../Analysis";
import Trends from "../Trends";
import NotFound from "../../components/NotFound";


const useStyles = makeStyles(theme => ({

  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4, 0, 8),
  },
  heroButtons: {
    marginTop: theme.spacing(1),
  },
}));


export default function App() {
  const [primary, setPrimary] = useState("contained");
  const [secondary, setSecondary] = useState("outlined");
  const classes = useStyles();

  return (
      <BrowserRouter>
      <React.Fragment>
        <CssBaseline />
        <Header/>
        <main style={{minHeight: '700px'}}>
          {/* Hero unit */}
          <div className={classes.heroContent}>
            <Container maxWidth="sm">
              <div className={classes.heroButtons}>
                <Grid container spacing={2} justify="center">
                  <Grid item>
                    <Link to={"/analysis"}>
                      <Button onClick={() => {setSecondary("outlined"); setPrimary("contained")}} variant={primary} color="primary">
                      Analysis
                    </Button>
                    </Link>

                  </Grid>
                  <Grid item>
                    <Link to={"/trends"}>
                    <Button onClick={() => {setSecondary("contained"); setPrimary("outlined")}} variant={secondary} color="primary">
                      Trends
                    </Button>
                    </Link>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </div>
          <Switch>
            <Route exact path="/" component={Analysis} />
            <Route path={'/analysis'} component={Analysis}/>
            <Route path="/trends" component={Trends} />
            <Route path="" component={NotFound} />
          </Switch>
        </main>
        <Footer/>
      </React.Fragment>
      </BrowserRouter>
  );
}
