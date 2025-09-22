import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import AssignmentList from './components/AssignmentList'
import AssignmentDetail from './components/AssignmentDetail'
import Header from './components/Header'

export default function App(){
  return (
    <div>
      <Header />
      <main className="container" style={{paddingTop:20}}>
        <Routes>
          <Route path="/" element={<AssignmentList/>} />
          <Route path="/assignment/:id" element={<AssignmentDetail/>} />
        </Routes>
      </main>
    </div>
  )
}
