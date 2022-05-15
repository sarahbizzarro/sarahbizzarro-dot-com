import React from 'react'
import BlogPost from '../../components/blog-post'
import { getAllPosts, getPostBySlug } from '../../lib/util'
import markdownToHtml from '../../lib/markdownToHtml'

export default function Post(props) {

  return (
    <div>
      <BlogPost post={props.post}></BlogPost>
    </div>
  )
}


export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug)
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const allPosts = getAllPosts();
  const paths = allPosts.map((post) => ({
    params: {
      slug: post.slug
    }
  }))

  return { paths, fallback: false }
}
