import React from "react"
import Head from "next/head"

type SabbaticalProps = {
  allPictures: any[]
}

const Sabbatical = ({}: SabbaticalProps) => {
  return (
    <div className="align-main-pottery">
      <Head>
        <title>sabbatical</title>
      </Head>
    </div>
  )
}

export default Sabbatical
