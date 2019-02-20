import React from 'react'
import { withRouteData } from 'react-static'
import convert from 'htmr'

export default withRouteData(({
  dwebIntro,
  joinTheDweb,
  rightNowYouCan,
  whatsComing,
  moreAboutDweb
  }) => (
  <div>
    {convert(dwebIntro.contents)}
    <section>{convert(joinTheDweb.contents)}</section>
    <section>{convert(rightNowYouCan.contents)}</section>
    <section>{convert(whatsComing.contents)}</section>
    <section>{convert(moreAboutDweb.contents)}</section>
  </div>
))

    // <h1>REACT_STATIC_ENV={process.env.REACT_STATIC_ENV}</h1>
    // <p>Begin dwebIntro.contents</p>
// import React from 'react'
// import { withSiteData } from 'react-static'
//
// export default withSiteData(() => (
//   <div style={{ textAlign: 'center' }}>
//     <h1>Welcome to React-Static</h1>
//   </div>
// ))
