import React from "react"
import Link from "next/link"
import Head from "next/head"

const Connect = () => {
  return (
    <div className="alignMain">
      <Head>
        <title>connect online</title>
      </Head>
      <ul className="connect">
        <li>
          <Link href="https://www.linkedin.com/in/sarah-b-1b4bb5bb/">
            linkedin
          </Link>
        </li>
        <li>
          <Link href="https://github.com/sarahbizzarro">github</Link>
        </li>
      </ul>
    </div>
  )
}

export default Connect
