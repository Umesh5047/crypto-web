import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(){
  return (
    <header style={{padding:'18px 0', borderBottom:'1px solid rgba(255,255,255,0.03)'}}>
      <div className="container flex" style={{justifyContent:'space-between'}}>
        <Link to="/"><h1 style={{margin:0}}>🔐 Crypto Web Assignments</h1></Link>
        <nav className="muted">
          <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
          &nbsp;·&nbsp;
          <a href="https://vercel.com/" target="_blank" rel="noreferrer">Vercel</a>
        </nav>
      </div>
    </header>
  )
}
