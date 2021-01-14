import React from 'react'
import { AgencyList } from './agency-list/AgencyList'
import './Index.css'
export const Index:React.FC = ()=>{
  return (
    <div className="main-page"
    >
      <AgencyList/>
    </div>
  )
}