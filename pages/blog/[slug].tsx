import React from "react"
import BlogPost from "../../components/blog-post"
import { getAllPosts, getPostBySlug } from "../../lib/util"
import markdownToHtml from "../../lib/markdownToHtml"
import { Post as PostData } from "../../types"

type PostProps = {
  post: PostData
}

const Post = ({ post }: PostProps) => {
  return (
    <div>
      <BlogPost post={post}></BlogPost>
    </div>
  )
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug)
  const content = await markdownToHtml(post.content || "")

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
  const allPosts = getAllPosts()
  const paths = allPosts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }))

  return { paths, fallback: false }
}

export default Post
