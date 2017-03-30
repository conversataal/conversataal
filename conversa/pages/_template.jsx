import React from 'react';
import { Container } from 'react-responsive-grid';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import Headroom from 'react-headroom';
import 'material-design-icons/iconfont/material-icons';
import '../css/markdown-styles';
import 'materialize-css/dist/css/materialize.min';
import '../css/materialize-parallax';

import { rhythm } from '../utils/typography';

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    return (
      <div>
        <Headroom>
          <nav className="white" role="navigation">
            <div className="nav-wrapper container">
              <Link
                to={prefixLink('/')}
                className="brand-logo"
              >
                Conversa Logo
              </Link>
              <ul className="right hide-on-med-and-down">
                <li><a href="#">Navbar Link</a></li>
              </ul>

              <ul id="nav-mobile" className="side-nav">
                <li><a href="#">Navbar Link</a></li>
              </ul>
              <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
            </div>
          </nav>
        </Headroom>

        {this.props.children}

        {/*<Container
          style={{
            maxWidth: 960,
            padding: `${rhythm(1)} ${rhythm(3/4)}`,
            paddingTop: 0,
          }}
        >
          {this.props.children}
        </Container>*/}

        <footer className="page-footer teal">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Company Bio</h5>
                <p className="grey-text text-lighten-4">We are a team of college students working on this project like it's our full time job. Any amount would help support and continue development on this project and is greatly appreciated.</p>
              </div>
              <div className="col l3 s12">
                <h5 className="white-text">Supported file types</h5>
                <ul>
                  <li><Link className="white-text" to={prefixLink('/markdown/markdown/')}>Markdown</Link></li>
                  <li><Link className="white-text" to={prefixLink('/toml/toml/')}>toml</Link></li>
                  <li><Link className="white-text" to={prefixLink('/yaml/yaml/')}>yaml</Link></li>
                  <li><Link className="white-text" to={prefixLink('/html/html/')}>html</Link></li>
                  <li><Link className="white-text" to={prefixLink('/react/')}>JSX (React components)</Link></li>
                  <li><Link className="white-text" to={prefixLink('/coffee-react/')}>CJSX (Coffeescript React components)</Link></li>
                  <li><Link className="white-text" to={prefixLink('/json/')}>JSON</Link></li>
                </ul>
              </div>
              <div className="col l3 s12">
                <h5 className="white-text">Supported CSS processors</h5>
                <ul>
                  <li><Link className="white-text" to={prefixLink('/postcss/')}>PostCSS</Link></li>
                  <li><Link className="white-text" to={prefixLink('/css-modules/')}>CSS Modules</Link></li>
                  <li><Link className="white-text" to={prefixLink('/sass/')}>Sass</Link></li>
                  <li><Link className="white-text" to={prefixLink('/less/')}>Less</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            Made by <a className="brown-text text-lighten-3" href="http://materializecss.com">Materialize</a>
            </div>
          </div>
        </footer>
      </div>
    )
  },
})
