import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { artworks } from '../_data/artworks'

const postsDirectory = join(process.cwd(), '/_data/_posts')

export function getPostSlugs() {
    return fs.readdirSync(postsDirectory).map(el => el.replace(/\.md$/, ''))
}

export function getPostBySlug(slug) {
    const fullPath = join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    return {
        data,
        content,
        slug
    }
}

export function getAllPosts() {
    const slugs = getPostSlugs()
    const posts = slugs
        .map(getPostBySlug)
        .sort((post1, post2) => (new Date(post1.data.date) > new Date(post2.data.date) ? -1 : 1))
    return posts
}

export function getAllArtworks() {
    return artworks
}

export function redirect() {

}