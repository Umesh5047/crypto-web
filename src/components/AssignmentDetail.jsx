import React from 'react'
import { useParams, Link } from 'react-router-dom'

const DETAILS = {
  '1': {
    title: 'Intro to Cryptography',
    content: `Overview:\n- Symmetric vs Asymmetric encryption\n- Use cases: confidentiality, integrity, authentication\n- Tools: OpenSSL, WebCrypto API`
  },
  '2': {
    title: 'Hash Functions',
    content: `SHA-256 example (client-side):\n- Use SubtleCrypto.digest(...)\n- Properties: preimage resistance, collision resistance (practical collision attacks vs theoretical)`
  },
  '3': {
    title: 'AES Demo',
    content: `This assignment suggests a small client-side demo using Web Crypto API (SubtleCrypto).\nNOTE: For production never implement crypto primitives yourself; use battle-tested libraries and HTTPS.`
  },
  '4': {
    title: 'RSA Keygen (explain)',
    content: `Explain RSA key generation, primes, Euler's phi, public/private keys, and small demo steps.`
  }
}

export default function AssignmentDetail(){
  const { id } = useParams()
  const item = DETAILS[id] || {title: 'Not found', content: 'No content available'}
  return (
    <div>
      <div style={{marginBottom:12}}>
        <Link to="/" className="muted">← Back to assignments</Link>
      </div>
      <div className="card">
        <h2>{item.title}</h2>
        <pre style={{whiteSpace:'pre-wrap', fontFamily:'inherit'}}>{item.content}</pre>
        <div style={{marginTop:12}} className="muted">Want interactive demos (hash, AES encrypt/decrypt)? Ask me to add them.</div>
      </div>
    </div>
  )
}
