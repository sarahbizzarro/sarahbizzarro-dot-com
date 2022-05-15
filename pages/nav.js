import React from 'react'
import Link from 'next/link'

export default function Nav() {

  return (
    <div className="alignNav">
      <ul className="nav">
        <li>
          <Link href="/home">
            <a>home</a>
          </Link>
        </li>
        <li>
          <Link href="/pottery">
            <a>playing in dirt</a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a>blog</a>
          </Link>
        </li>
        <li>
          <Link href="/connect">
            <a>connect online</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}
