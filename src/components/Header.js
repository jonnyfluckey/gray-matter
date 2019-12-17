import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBrain } from '@fortawesome/free-solid-svg-icons'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <FontAwesomeIcon icon={faBrain} size="3x" style={{ marginTop: '19%' }} />
    </div>
    <div className="content">
      <div className="inner">
        <h1>Gray Matter Technology</h1>
        <p>
          Digitally transform your data and processes to scale your business
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li style={{ padding: '0 25px 0 25px' }}>
          {/* eslint-disable-next-line */}
          <a
            href="javascript:;" // eslint-disable-line
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Intro
          </a>
        </li>
        <li style={{ padding: '0 13px 0 16px' }}>
          {/* eslint-disable-next-line */}
          <a
            href="javascript:;" // eslint-disable-line
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            What We Do
          </a>
        </li>
        <li style={{ padding: '0 25px 0 25px' }}>
          {/* eslint-disable-next-line */}
          <a
            href="javascript:;" // eslint-disable-line
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            Examples
          </a>
        </li>
        <li style={{ padding: '0 25px 0 25px' }}>
          {/* eslint-disable-next-line */}
          <a
            href="javascript:;" // eslint-disable-line
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
