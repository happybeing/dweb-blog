import React from 'react'
import { withRouteData } from 'react-static'
import { Link } from '@reach/router'
import convert from 'htmr'

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

function dateString(dateTime){
  const date = new Date(dateTime)
  return date.getDate() + ' ' + months[date.getMonth()] + ' ' + date.getFullYear()
}

export default withRouteData(({ post }) => (
  <div>
    <Link to="/blog/">{'<'} Back</Link>
    <br />
    <h1>{post.title}</h1>
    <p>by <a href={post.authortwitter}>{post.author}</a>, {dateString(post.date)}</p><hr/>
    {convert(post.headerhtml)}
    {convert(post.contents)}
  </div>
))
