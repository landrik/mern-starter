import React from 'react';
import { Route } from 'react-dom-route'


const DashboardLayout = ({ children, ...rest }) => (
  <div>{ children }</div>
)

const DashboardLayoutRoute = ({ component: Component, ...rest }) => {
  return (
    <Route 
      {...rest}
      render={(props) => (
        <DashboardLayout>
          <Component {...props} />
        </DashboardLayout>
      )}
    />
  )
}

export default DashboardLayoutRoute
