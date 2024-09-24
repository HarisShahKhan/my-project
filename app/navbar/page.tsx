import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
        <h1>This is NavBar Page</h1>

      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>

        <li>
          <Link href="/about">About</Link>
        </li>

        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>

    </div>
  )
}

export default Navbar