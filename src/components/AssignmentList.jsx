import React from 'react'
import { Link } from 'react-router-dom'
// sample data; replace with your assignments or fetch from an API
const ASSIGNMENTS = [
  {id: '1', title: 'Intro to Cryptography', summary: 'Symmetric vs Asymmetric, basic terms'},
  {id: '2', title: 'Hash Functions', summary: 'SHA family, collisions, uses'},
  {id: '3', title: 'AES Demo', summary: 'AES encryption/decryption demo (client-side)'},
  {id: '4', title: 'RSA Keygen (explain)', summary: 'RSA concepts and sample implementation steps'}
]

export default function AssignmentList(){
  return (
    <div className="card">
      <h2>Assignments</h2>
      <p className="muted">A quick list based on your Google Doc. Click an item for details.</p>
      <div style={{display:'grid', gap:12, marginTop:12}}>
        {ASSIGNMENTS.map(a => (
          <Link key={a.id} to={`/assignment/${a.id}`} className="card" style={{display:'block'}}>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
              <div>
                <strong>{a.title}</strong>
                <div className="muted" style={{fontSize:13}}>{a.summary}</div>
              </div>
              <div className="muted">View →</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
