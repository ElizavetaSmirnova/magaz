import React from 'react'

export default function Footer() {
  return (
    <footer>
    <div className='footer-logo'>
        <img src="image/footer-logo.svg" alt="logo" width="100" height="42"/>
        <p className="logo-text">магаз всегда рядом</p>
    </div>
    <div className="contacts">
        <h2 >наши контакты</h2>
        <p className="tel">
            89000000000<br/>
            magaz@mail.ru
        </p>
    </div>
    <div className="media">
        <h2>переходи на темную сторону</h2>
        <div className="soc">
            <div className="social tg"></div>
            <div className="social vk"></div>
            <div className="social ok"></div>
        </div>
    </div>
    </footer>
  )
}
