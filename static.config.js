import axios from 'axios'

import { reloadRoutes } from 'react-static/node'
import jdown from 'jdown'
import chokidar from 'chokidar'

//chokidar.watch('content').on('all', () => reloadRoutes())

export default {
  getSiteData: () => ({
    title: 'React Static',
  }),
  getRoutes: async () => {
    const { posts, home, about } = await jdown('content')
    console.log('home: %o', home)
    console.log('about: %o', about)
    console.log('posts: %o', posts)
    return [
      {
        path: '/',
        getData: () => ({
          ...home,
        }),
      },
      {
        path: '/about',
        getData: () => ({
          about,
        }),
      },
      {
        path: '/blog',
        getData: () => ({
          posts,
        }),
        children: posts.map(post => ({
          path: `/post/${post.slug}.md`,
          component: 'src/containers/Post',
          getData: () => ({
            post,
          }),
        })),
      },
    ]
  },
}
