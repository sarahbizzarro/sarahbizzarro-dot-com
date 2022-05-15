import React from "react"
import Head from "next/head"
import { Post } from "../types"

type BlogPostProps = {
  post: Post
}

const BlogPost = ({ post }: BlogPostProps) => {
  return (
    <div>
      <Head>
        <title>{post.data.title}</title>
      </Head>
      <div className="blog-post-container alignMain">
        <div className="title">{post.data.title}</div>
        <div className="date">{post.data.date}</div>
        <div
          dangerouslySetInnerHTML={{
            __html: post.content,
          }}
        ></div>
      </div>
    </div>
  )
}

export default BlogPost
