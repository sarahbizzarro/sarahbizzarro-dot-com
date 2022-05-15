import React from 'react'
import Head from 'next/head'
import PostPreview from '../components/post-preview'
import { getAllPosts } from '../lib/util'

export default function Blog(props) {
  return (
    <div className="alignMain">
      <Head>
        <title>blog</title>
      </Head>
      <div>
        {props.allPosts.map((post) => <PostPreview key={post.data.title.toString()} post={post}></PostPreview>)}
      </div>
      <div></div>
    </div>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts()

  return {
    props: { allPosts }
  }
}
