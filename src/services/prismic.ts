/*import Prismic from '@prismicio/client'

const routes = [
    {
      type: 'page',
      path: '/:uid',
    },
  ]

export function getPrismicClient() {
    const prismic = Prismic.createClient('https://thisismyignews2.cdn.prismic.io/api/v2', { routes, fetch })
    return prismic;
}*/


/* ESTÁ FUNCIONANDO
import * as prismic from '@prismicio/client'
import fetch from 'node-fetch'

const repoName = 'https://thisismyignews2.cdn.prismic.io/api/v2'
const client = prismic.createClient('https://thisismyignews2.prismic.io/api/v2', { fetch, accessToken: process.env.PRISMIC_ACCESS_TOKEN})

export function getPrismicClient() {
  return client;
}
*/
import * as prismic from '@prismicio/client'
import fetch from 'node-fetch'

const repoName = 'https://thisismyignews2.cdn.prismic.io/api/v2'


export function getPrismicClient() {
  const client = prismic.createClient('https://thisismyignews2.prismic.io/api/v2', { fetch, accessToken: process.env.PRISMIC_ACCESS_TOKEN})
  return client;
}