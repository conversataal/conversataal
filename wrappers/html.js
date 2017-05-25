import React from 'react'
import Helmet from 'react-helmet'
import { config } from 'config'

class HtmlWrapper extends React.Component {
    render () {
        const page = this.props.route.page.data;
        return (
            <div>
                <Helmet
                    title={`${config.siteTitle} | ${page.title}`}
                />
                <div dangerouslySetInnerHTML={{ __html: page.body }} />
            </div>
        )
    }
}

HtmlWrapper.propTypes = {
    router: React.PropTypes.object
};

export default HtmlWrapper;