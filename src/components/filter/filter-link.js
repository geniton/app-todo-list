import React from 'react'

const filterLink = ({action, children, activeFilter, onClick}) => {
  const span = { tag: 'span' }
  const a = { tag: 'a', href: '#', onClick }
  const component = action === activeFilter ? span : a

  return (
    <component.tag
      href={component.href}
      onClick={component.onClick}
      style={{marginRight: 10}}
       >
      {children}
    </component.tag>
  )
}

export default filterLink
