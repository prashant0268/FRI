import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'

export const Header = () => (
  <div>
    <header className='header-two-bars'>
        <div className='header-first-bar'>
            <div className='header-limiter'>
                <h1><a href='#'><img src='http://logo-load.com/uploads/posts/2016-08/chase-logo.png' /></a></h1>
                <nav>
                    <IndexLink to='/' activeClassName='selected'>DASHBOARD</IndexLink>
                    <Link to='/variance' activeClassName='selected'>
                      VARIANCE
                    </Link>
                    <Link to='/aggregate' activeClassName='selected'>
                      AGGREGATES
                    </Link>
                </nav>
                <a href='#' className='logout-button'>Logout</a>
            </div>
        </div>
    {/*<div className='header-second-bar'>
            <div className='header-limiter'>
                <h2><a href='#'>Recent..</a></h2>
                <nav>
                    <a href='#'><i className='fa fa-comments-o'></i> June 2016 AG</a>
                    <a href='#'><i className='fa fa-file-text'></i> Apr 2016 AG</a>
                    <a href='#'><i className='fa fa-group'></i> July 2016 AG</a>
                </nav>
            </div>
        </div>*/}
    </header>    
  </div>
)

export default Header
