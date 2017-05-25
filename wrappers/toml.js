import React from 'react'
import toml from 'toml-js'
import Helmet from 'react-helmet'
import { config } from 'config'

class TomlWrapper extends React.Component {
    render () {
        const data = this.props.route.page.data;
        return (
            <div className="toml-container container">
                <Helmet
                    title={`${config.siteTitle} | ${data.title}`}
                />
                <h1>{data.title}</h1>
                <p>Raw view of toml file</p>
                <pre dangerouslySetInnerHTML={{ __html: toml.dump(data) }} />
            </div>
        )
    }
}

TomlWrapper.propTypes = {
    route: React.PropTypes.object
};

export default TomlWrapper;