import React from "react"
import Link from "next/link"

const Nav = () => {
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
        {/* <li>
          <Link href="/sabbatical">
            <a title="in 2019 my boyfriend and I took a sabbatical to travel to asia, australia, and europe to relieve some pent-up wanderlust. here are some pictures from those trips :-)">
              sabbatical
            </a>
          </Link>
        </li> */}
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

export default Nav
