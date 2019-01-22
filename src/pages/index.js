import React from 'react'
import { withRouteData } from 'react-static'
import convert from 'htmr'
//

export default withRouteData(({ jdown, reactStatic }) => (
  <div>
    <section>{convert(reactStatic.contents)}</section>
    <section>{convert(jdown.contents)}</section>
  </div>
))

// import React from 'react'
// import { withSiteData } from 'react-static'
//
// export default withSiteData(() => (
//   <div style={{ textAlign: 'center' }}>
//     <h1>Welcome to React-Static</h1>
//   </div>
// ))
