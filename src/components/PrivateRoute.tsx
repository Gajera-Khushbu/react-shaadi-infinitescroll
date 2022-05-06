
import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";

interface IProps {
    component: any,
    auth: any,
    path?: string ,
    exact?: boolean
}

function PrivateRoute({ component: Component, auth, ...rest }: IProps) {
  return (
    <Route
      {...rest}
      render={(props) => {
        return (
          <>
            {auth.isAuthenticated === true ? (
              <Component {...props} />
            ) : (
              <Redirect to="/login" />
            )}
          </>
        );
      }}
    />
  );
}

const mapStateToProps = (state: any) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(PrivateRoute);

