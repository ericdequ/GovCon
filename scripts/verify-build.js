const assert = require('assert/strict')
const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')
const siteMetadata = require('../data/siteMetadata')

function getPosts(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const file = path.join(directory, entry.name)
    if (entry.isDirectory()) return getPosts(file)
    return /\.mdx?$/.test(entry.name) ? [file] : []
  })
}

const manifest = JSON.parse(fs.readFileSync('.next/prerender-manifest.json', 'utf8'))
const feed = fs.readFileSync('public/feed.xml', 'utf8')
const sitemap = fs.readFileSync('public/sitemap.xml', 'utf8')
const posts = getPosts('data/blog')
const missing = []
for (const file of posts) {
  const route =
    '/' +
    file
      .replace(/^data\//, '')
      .replace(/\.mdx?$/, '')
      .replace(/\\/g, '/')
  const { data } = matter(fs.readFileSync(file, 'utf8'))
  if (!manifest.routes[route] || (manifest.notFoundRoutes || []).includes(route)) {
    missing.push(route)
  }
  if (!data.draft && !data.canonicalUrl) {
    assert(sitemap.includes(siteMetadata.siteUrl + route), `Missing sitemap route: ${route}`)
  }
  if (data.draft !== true && data.date) {
    assert(feed.includes(siteMetadata.siteUrl + route), `Missing RSS route: ${route}`)
  }
}
assert.deepEqual(missing, [], 'Source articles must not become silent 404s')
assert(posts.length > 0, 'Expected article content')
console.log(`Verified ${posts.length} article routes, RSS, and sitemap; no silent 404s`)
