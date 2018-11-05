/* eslint no-return-assign: 0 */
import React from 'react'
import { Redirect } from 'react-router-dom'

const redirect = (route, prevRoute) => (
  <Redirect
    to={{
      pathname: route,
      state: { from: prevRoute },
    }}
  />
)
export default redirect
