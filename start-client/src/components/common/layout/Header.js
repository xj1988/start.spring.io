import React from 'react'

import HeaderMobile from './HeaderMobile'

function Header() {
  return (
    <header id='header'>
      <div className='not-mobile'>
        <h2 className='logo'>
          <a href='/'>
            <span className='logo-content' tabIndex='-1'>
              脚手架生成器
            </span>
          </a>
        </h2>
      </div>
      <HeaderMobile />
    </header>
  )
}

export default Header
