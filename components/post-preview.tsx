import React from "react"
import Link from "next/link"
import { Post } from "@types"

type PostPreviewProps = {
  post: Post
}

const PostPreview = ({ post }: PostPreviewProps) => {
  const href = `/blog/${post.slug}`

  return (
    <div className="post-preview">
      <div className="title">{post.data.title}</div>
      <div className="date">{post.data.date}</div>
      <div>
        <div className="preview">{post.data.preview}</div>
        <div className="readmore">
          <Link href={href}>
            <a>Read More...</a>
          </Link>
        </div>
      </div>
      <br></br>
    </div>
  )
}

export default PostPreview
