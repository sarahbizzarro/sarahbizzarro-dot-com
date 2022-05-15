import React from 'react'
import Head from 'next/head'
import TangoGame from '../tango/tango-game'

export default function Tango() {
  return (

    <div className="alignMain">
      <Head>
        <title>tango</title>
      </Head>
      <TangoGame length={20} word="tango" />
    </div>

  )
} 