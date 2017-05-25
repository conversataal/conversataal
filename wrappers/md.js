import React from 'react'
import 'css/markdown-styles.css'
import Helmet from 'react-helmet'
import { config } from 'config'

class MarkdownWrapper extends React.Component {
    render () {
        const post = this.props.route.page.data;
        return (
            <div className="markdown container">
                <Helmet
                    title={`${config.siteTitle} | ${post.title}`}
                />
                <h1>{post.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: post.body }} />
            </div>
        )
    }
}

MarkdownWrapper.propTypes = {
    router: React.PropTypes.object
};

export default MarkdownWrapper;
