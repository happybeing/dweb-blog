import React from 'react'
import convert from 'htmr'

import { useRouteData } from 'react-static'

export default function About() {
  const { about } = useRouteData()
  return (
  <div>{convert(about.contents)}</div>
  )
}
