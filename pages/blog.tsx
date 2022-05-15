import React from "react"
import Head from "next/head"
import PostPreview from "../components/post-preview"
import { getAllPosts } from "../lib/util"
import { Post } from "../types"

type BlogProps = {
  allPosts: Post[]
}

const Blog = ({ allPosts }: BlogProps) => {
  return (
    <div className="alignMain">
      <Head>
        <title>blog</title>
      </Head>
      <div>
        {allPosts.map((post) => (
          <PostPreview
            key={post.data.title.toString()}
            post={post}
          ></PostPreview>
        ))}
      </div>
      <div></div>
    </div>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts()

  return {
    props: { allPosts },
  }
}

export default Blog
