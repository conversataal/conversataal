import React from 'react';
//import {Container} from 'react-responsive-grid';
//import Headroom from 'react-headroom';
import {prefixLink} from 'gatsby-helpers';
import 'material-design-icons/iconfont/material-icons';
import '../css/markdown-styles';
import 'materialize-css/dist/css/materialize.min';
import '../css/main';
import CustomHeader from './customHeader';
import CustomFooter from './customFooter';

import {rhythm} from '../utils/typography';

class CustomTemplate extends React.Component {
    render () {
        return (
            <div>
                <CustomHeader/>

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

                <CustomFooter/>
            </div>
        )
    }
}

module.exports = CustomTemplate;
