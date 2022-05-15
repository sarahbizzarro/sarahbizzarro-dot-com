import React from 'react'
import Head from 'next/head'

export default function PostPreview(props) {

  return (
    <div>
      <Head>
        <title>{props.post.data.title}</title>
      </Head>
      <div className="blog-post-container alignMain">
        <div className="title">{props.post.data.title}</div>
        <div className="date">{props.post.data.date}</div>

        <div
          dangerouslySetInnerHTML={{
            __html: props.post.content
          }}>
        </div>
      </div>
    </div>

  )
}