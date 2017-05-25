import React from 'react'
import yaml from 'js-yaml'
import Helmet from 'react-helmet'
import { config } from 'config'

class YamlWrapper extends React.Component {
    render () {
        const data = this.props.route.page.data;
        return (
            <div className="yaml-container container">
                <Helmet
                    title={`${config.siteTitle} | ${data.title}`}
                />
                <h1>{data.title}</h1>
                <p>Raw view of yaml file</p>
                <pre dangerouslySetInnerHTML={{ __html: yaml.safeDump(data) }} />
            </div>
        )
    }
}

YamlWrapper.propTypes = {
    route: React.PropTypes.object
};

export default YamlWrapper;