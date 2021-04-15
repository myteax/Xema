import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useParams,
} from "react-router-dom";
import Header from "./Components/Header/Header";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Companies from "./Components/Companies/Companies";
import Createnewc from "./Components/Companies/Createnewc";
import Createnewp from "./Components/Person/Createnewp";
import "./App.css";
import ShowPerson from "./Components/Person/ShowPerson";
import ShowIndPerson from "./Components/Person/ShowIndPerson";
import Company from "./Components/Companies/Company";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    // padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  mbx: {
    marginBottom: "25px",
  },
}));

function App() {
  const [refreshc, setRefreshc] = useState(false);
  const classes = useStyles();

  const refreshCompanies = () => {
    setRefreshc(!refreshc);
  };
  return (
    <Router>
      <Switch>
        {/* Route to Individual Staff */}
        <Route path="/people/:id">
          <Container maxWidth="md">
            <div className="App">
              <div>
                <Header />
              </div>

              <div className="ap_dle3">
                <div className={classes.root}>
                  <Grid container spacing={3}>
                    <Grid item md={8} xs={12}>
                      <Paper className={classes.paper}>
                        <ShowIndPerson />
                      </Paper>
                    </Grid>
                    <Grid item md={4} xs={12}>
                      <Grid item xs={12} className={classes.mbx}>
                        <Paper className={classes.paper}>
                          <Createnewc refresh={setRefreshc} />
                        </Paper>
                      </Grid>
                      <Grid item xs={12} className={classes.mbx}>
                        <Paper className={classes.paper}>
                          <Createnewp />
                        </Paper>
                      </Grid>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </div>
          </Container>
        </Route>
        {/* Route to Company Info */}
        <Route path="/company/:id">
          <Container maxWidth="md">
            <div className="App">
              <div>
                <Header />
              </div>

              <div className="ap_dle3">
                <div className={classes.root}>
                  <Grid container spacing={3}>
                    <Grid item md={8} xs={12}>
                      <Paper className={classes.paper}>
                        <Company />
                      </Paper>
                    </Grid>
                    <Grid item md={4} xs={12}>
                      <Grid item xs={12} className={classes.mbx}>
                        <Paper className={classes.paper}>
                          <Createnewc refresh={setRefreshc} />
                        </Paper>
                      </Grid>
                      <Grid item xs={12} className={classes.mbx}>
                        <Paper className={classes.paper}>
                          <Createnewp />
                        </Paper>
                      </Grid>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </div>
          </Container>
        </Route>
        {/* Route to Company Staff */}
        <Route path="/companystaff/:id">
          <Container maxWidth="md">
            <div className="App">
              <div>
                <Header />
              </div>

              <div className="ap_dle3">
                <div className={classes.root}>
                  <Grid container spacing={3}>
                    <Grid item md={8} xs={12}>
                      <Paper className={classes.paper}>
                        <ShowPerson />
                      </Paper>
                    </Grid>
                    <Grid item md={4} xs={12}>
                      <Grid item xs={12} className={classes.mbx}>
                        <Paper className={classes.paper}>
                          <Createnewc refresh={setRefreshc} />
                        </Paper>
                      </Grid>
                      <Grid item xs={12} className={classes.mbx}>
                        <Paper className={classes.paper}>
                          <Createnewp />
                        </Paper>
                      </Grid>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </div>
          </Container>
        </Route>

        {/* Default Route */}
        <Route path="/">
          <Container maxWidth="md">
            <div className="App">
              <div>
                <Header />
              </div>

              <div className="ap_dle3">
                <div className={classes.root}>
                  <Grid container spacing={3}>
                    <Grid item md={8} xs={12}>
                      <Paper className={classes.paper}>
                        <Companies refresh={refreshc} />
                      </Paper>
                    </Grid>
                    <Grid item md={4} xs={12}>
                      <Grid item xs={12} className={classes.mbx}>
                        <Paper className={classes.paper}>
                          <Createnewc refresh={setRefreshc} />
                        </Paper>
                      </Grid>
                      <Grid item xs={12} className={classes.mbx}>
                        <Paper className={classes.paper}>
                          <Createnewp />
                        </Paper>
                      </Grid>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </div>
          </Container>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
