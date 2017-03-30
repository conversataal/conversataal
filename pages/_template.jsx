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
                <p className="grey-text text-lighten-4">Polish language school.</p>
              </div>
              <div className="col l3 s12">
                <h5 className="white-text">Example types</h5>
                <ul>
                  <li><Link className="white-text" to={prefixLink('/example-markdown/markdown/')}>Markdown</Link></li>
                  <li><Link className="white-text" to={prefixLink('/example-toml/toml/')}>TOML</Link></li>
                  <li><Link className="white-text" to={prefixLink('/example-yaml/yaml/')}>YAML</Link></li>
                  <li><Link className="white-text" to={prefixLink('/example-html/html/')}>HTML</Link></li>
                  <li><Link className="white-text" to={prefixLink('/example-react/react/')}>JSX (React components)</Link></li>
                  <li><Link className="white-text" to={prefixLink('/example-coffee-react/coffee-react/')}>CJSX (Coffeescript React components)</Link></li>
                  <li><Link className="white-text" to={prefixLink('/example-json/json/')}>JSON</Link></li>
                </ul>
              </div>
              <div className="col l3 s12">
                <h5 className="white-text">Example CSS</h5>
                <ul>
                  <li><Link className="white-text" to={prefixLink('/example-postcss/postcss/')}>PostCSS</Link></li>
                  <li><Link className="white-text" to={prefixLink('/example-css-modules/css-modules/')}>CSS Modules</Link></li>
                  <li><Link className="white-text" to={prefixLink('/example-sass/sass/')}>Sass</Link></li>
                  <li><Link className="white-text" to={prefixLink('/example-less/less/')}>Less</Link></li>
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
