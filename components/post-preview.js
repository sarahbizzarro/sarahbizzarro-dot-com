import React from 'react'
import Link from 'next/link'

export default function PostPreview(props) {

  const href = `/blog/${props.post.slug}`

  return (
    <div className="post-preview">
      <div className="title">{props.post.data.title}</div>
      <div className="date">{props.post.data.date}</div>
      <div>
        <div className="preview">{props.post.data.preview}</div>
        <div className="readmore">
          <Link href={href}><a>Read More...</a></Link>
        </div>
      </div>
      <br></br>
    </div>
  )
}