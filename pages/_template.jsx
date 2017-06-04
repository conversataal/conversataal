import React from 'react';
//import {Container} from 'react-responsive-grid';
//import Headroom from 'react-headroom';
import {prefixLink} from 'gatsby-helpers';
import 'material-design-icons/iconfont/material-icons';
import '../css/font.scss';
import '../css/markdown-styles';
import 'materialize-css/dist/css/materialize.min';
import '../css/main';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

//import {rhythm} from '../utils/typography';

class CustomTemplate extends React.Component {
    render () {
        return (
            <div id="main-wrapper">
                <Header/>

                <section id="main-content">
                    {this.props.children}
                </section>

                {/*<Container
                 style={{
                 maxWidth: 960,
                 padding: `${rhythm(1)} ${rhythm(3/4)}`,
                 paddingTop: 0,
                 }}
                 >
                 {this.props.children}
                 </Container>*/}

                <Footer/>
            </div>
        )
    }
}

module.exports = CustomTemplate;
