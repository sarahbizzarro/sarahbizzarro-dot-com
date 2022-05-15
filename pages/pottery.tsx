import React from "react"
import Head from "next/head"
import PhotoSlider from "../components/photo_slider/photo-slider"
import PhotoGrid from "../components/photo_grid/photo-grid"
import { getAllArtworks } from "../lib/util"

type PotteryProps = {
  allArtworks: any[]
}

const Pottery = ({ allArtworks }: PotteryProps) => {
  return (
    <div className="align-main-pottery">
      <Head>
        <title>playing in dirt</title>
      </Head>
      {/* <PhotoSlider artworks={props.allArtworks}></PhotoSlider> */}
      <PhotoGrid artworks={allArtworks}></PhotoGrid>
    </div>
  )
}

// Next.js will pre-render this page at build time using the props returned by `getStaticProps`.
// The data required to render the page is available at build time ahead of a user’s request
// `getStaticProps` always runs on the server and during `next build`, and never on the client
export async function getStaticProps() {
  const allArtworks = getAllArtworks()

  return {
    props: { allArtworks },
  }
}

export default Pottery
