import React from 'react'
import { useRouteData } from 'react-static'
import convert from 'htmr'

export default function Home() {
  const {
    dwebIntro,
    joinTheDweb,
    rightNowYouCan,
    whatsComing,
    moreAboutDweb
    } = useRouteData()
  return (
  <div>
    {convert(dwebIntro.contents)}
    <section>{convert(joinTheDweb.contents)}</section>
    <section>{convert(rightNowYouCan.contents)}</section>
    <section>{convert(moreAboutDweb.contents)}</section>
  </div>
  )
}
