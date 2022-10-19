import React from 'react'

function SidebarComp(props) {
  return (
    <div className='sidebar-comp'>
      <img src={`../static/${props.img}`} alt={props.title} className="sidebar-img"/>
      <p className="sidebar-head">{props.title}</p>
    </div>
  )
}

export default SidebarComp