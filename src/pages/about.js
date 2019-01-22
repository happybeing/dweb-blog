import React from 'react'
import { withRouteData } from 'react-static'
import convert from 'htmr'
//

export default withRouteData(({ about }) => (
  <div>{convert(about.contents)}</div>
))

// import React from 'react'
//
// export default () => (
//   <div>
//     <p>React Static is a progressive static site generator for React.</p>
//   </div>
// )
