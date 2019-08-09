import path from 'path'
import jdown from 'jdown'

import chokidar from 'chokidar'

// Note: v6 reloadRoutes is now reloadClientData
// chokidar.watch('content').on('all', () => reloadClientData())
// reloadClientData()   // Ok with just this
// nn
// setInterval(reloadClientData, 5 * 1000)

export default {
  getSiteData: () => ({
    title: 'DWeb Blog TEST getSiteData-TITLE',
  }),
  getRoutes: async () => {
    const { posts, home, about } = await jdown('content')
    // console.log('home: %o', home)
    // console.log('about: %o', about)
    // console.log('posts: %o', posts)

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
          path: `/post/${post.slug}`,
          template: 'src/containers/Post',
          getData: () => ({
            post,
          }),
        })),
      },
    ]
  },
  plugins: [
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
  ],
}
