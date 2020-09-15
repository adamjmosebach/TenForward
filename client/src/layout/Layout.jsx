import React from 'react'

export default function Layout(props) {
  return (
    <div>
      <img src='' />
      <span>TenForward</span>
      <hr />
      <main>
        {props.children}
      </main>
    </div>
  )
}
