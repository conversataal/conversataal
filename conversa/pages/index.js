import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import Helmet from 'react-helmet';
import { config } from 'config';
import bgParallaxImg from '../img/bg-parallax.jpg';
import $ from 'jquery';
import 'materialize-css/dist/js/materialize.js';

export default class Index extends React.Component {

  constructor(props) {
    super(props);
    this.renderParallax = this.renderParallax.bind(this);
  }

  componentDidMount() {
    this.renderParallax();
  }

  componentDidUpdate() {
    this.renderParallax();
  }

  // See http://tech.oyster.com/using-react-and-jquery-together/
  renderParallax() {
    console.log('renderParallax');
    $('.parallax').parallax();
  }

  render () {
    return (
      <div><div id="index-banner" className="parallax-container" style={{width: '100%'}}>
          <div className="section no-pad-bot">
            <div className="container">
              <br/><br/>
              <h1 className="header center teal-text text-lighten-2">Conversa</h1>
              <div className="row center">
                <h5 className="header col s12 light">Tailor-made individual and group courses</h5>
              </div>
              <div className="row center">
                <a href="http://materializecss.com/getting-started.html" id="download-button" className="btn-large waves-effect waves-light teal lighten-1">Get Started</a>
              </div>
              <br/><br/>

            </div>
          </div>
          <div className="parallax"><img src={prefixLink(bgParallaxImg)} alt="Unsplashed background img 1"/></div>
        </div>

        <div className="container">
          <div className="section">
            <div className="row">
              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center brown-text"><i className="material-icons">business</i></h2>
                  <h5 className="center">In your company</h5>

                  <p className="light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna fermentum ac. </p>
                </div>
              </div>

              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center brown-text"><i className="material-icons">group</i></h2>
                  <h5 className="center">At your chosen location</h5>

                  <p className="light">Cras ut ultricies eros. Maecenas eros justo, ullamcorper a sapien id, viverra ultrices eros. Morbi sem neque, posuere et pretium eget, bibendum sollicitudin lacus. Aliquam eleifend sollicitudin diam, eu mattis nisl maximus sed. Nulla imperdiet semper molestie. </p>
                </div>
              </div>

              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center brown-text"><i className="material-icons">videocam</i></h2>
                  <h5 className="center">On Skype</h5>

                  <p className="light">Morbi massa odio, condimentum sed ipsum ac, gravida ultrices erat. Nullam eget dignissim mauris, non tristique erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="parallax-container valign-wrapper">
          <div className="section no-pad-bot">
            <div className="container">
              <div className="row center">
                <h5 className="header col s12 light">Tailor-made individual and group courses</h5>
              </div>
            </div>
          </div>
          <div className="parallax"><img src={prefixLink(bgParallaxImg)} alt="Unsplashed background img 2"/></div>
        </div>

        <div className="container">
          <div className="section">

            <div className="row">
              <div className="col s12 center">
                <h3><i className="mdi-content-send brown-text"></i></h3>
                <h4>Contact Us</h4>
                <p className="left-align light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna fermentum ac. Cras ut ultricies eros. Maecenas eros justo, ullamcorper a sapien id, viverra ultrices eros. Morbi sem neque, posuere et pretium eget, bibendum sollicitudin lacus. Aliquam eleifend sollicitudin diam, eu mattis nisl maximus sed. Nulla imperdiet semper molestie. Morbi massa odio, condimentum sed ipsum ac, gravida ultrices erat. Nullam eget dignissim mauris, non tristique erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>
              </div>
            </div>

          </div>
        </div>


        <div className="parallax-container valign-wrapper">
          <div className="section no-pad-bot">
            <div className="container">
              <div className="row center">
                <h5 className="header col s12 light">Tailor-made individual and group courses</h5>
              </div>
            </div>
          </div>
          <div className="parallax"><img src={prefixLink(bgParallaxImg)} alt="Unsplashed background img 3"/></div>
        </div>




        <Helmet
          title={config.siteTitle}
          meta={[
            {"name": "description", "content": "Sample"},
            {"name": "keywords", "content": "sample, something"},
          ]}
        />
      </div>
    )
  }
}
