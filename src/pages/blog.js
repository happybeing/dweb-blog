import React from 'react'
import { withRouteData } from 'react-static'
import { Link } from '@reach/router'

export default withRouteData(({ posts }) => (
  <div>
    <h1>DWeb Articles</h1>
    <br />
    All Posts:
    <ul>
      {posts.map(post => (
        <li key={post.slug}>
          <Link to={`/blog/post/${post.slug}.md`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  </div>
))
