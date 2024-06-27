import React, { Suspense, lazy } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
 
 

export default function BasePage() {
  // useEffect(() => {
  //   console.log('Base page');
  // }, []) // [] - is required if you need only one call
  // https://reactjs.org/docs/hooks-reference.html#useeffect

  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        
        {/* {
           <Redirect exact from="/" to="/dashboard" />
        }
        <ContentRoute path="/dashboard" component={DashboardPage} />
        <ContentRoute path="/builder" component={BuilderPage} />
        <ContentRoute path="/login" component={Login} />
        <ContentRoute path="/register" component={Register} />
        <ContentRoute path="/products" component={Products} />
        <ContentRoute path="/slider" component={Slider} />
        <Route path="/google-material" component={GoogleMaterialPage} />
        <Route path="/react-bootstrap" component={ReactBootstrapPage} />
        <Route path="/e-commerce" component={ECommercePage} />
        <Route path="/user-profile" component={UserProfilepage} />
        <Redirect to="error/error-v1" /> */}
      </Switch>
    </Suspense>
  );
}
