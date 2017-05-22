import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import '../css/header.scss';

class CustomHeader extends React.Component {
    render() {
        return (
            <nav className="white" role="navigation">
                <div className="nav-top">
                    <div className="container">
                        0613452354 mail@example.com            fb  ig  tw  youtube
                    </div>
                </div>
                <div className="nav-wrapper container">
                    <Link
                        to={prefixLink('/')}
                        className="brand-logo"
                    >
                        Conversa Logo
                    </Link>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="#">Lessen</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>

                    <ul id="nav-mobile" className="side-nav">
                        <li><a href="#">Lessen</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                    <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
                </div>
            </nav>
        );
    }
}


CustomHeader.propTypes = {};

export default CustomHeader;