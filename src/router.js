import React from "react";
import { Router, Route, Switch, Redirect } from "dva/router";
import Film from "./routes/Film";
import Center from "./routes/Center";
import App from "./routes/App";
import Cinema from "./routes/Cinema";
import Detail from "./routes/Detail";
import Login from "./routes/Login";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <switch>
        <Route
          path="/"
          render={() => (
            <App>
              <Switch>
                <Route path="/login" component={Login} />
                <Route path="/film" component={Film} />
                <Route path="/cinema" component={Cinema} />
                <Route
                  path="/center"
                  render={() =>
                    localStorage.getItem("token") ? (
                      <Center />
                    ) : (
                      <Redirect to="/login" />
                    )
                  }
                />
                <Route path="/detail/:myid" component={Detail} />

                <Redirect from="/" to="/film" />
              </Switch>
            </App>
          )}
        />
      </switch>
    </Router>
  );
}

export default RouterConfig;
