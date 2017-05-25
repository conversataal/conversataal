import React from 'react'
import Helmet from 'react-helmet'
import { config } from 'config'

class JsonWrapper extends React.Component {
    render () {
        const data = this.props.route.page.data
        return (
            <div className="json-container container">
                <Helmet
                    title={`${config.siteTitle} | ${data.title}`}
                />
                <h1>{data.title}</h1>
                <p>Raw view of json file</p>
                <pre dangerouslySetInnerHTML={{ __html: JSON.stringify(data, null, 4) }} />
            </div>
        )
    }
}

JsonWrapper.propTypes = {
    route: React.PropTypes.object,
};

export default JsonWrapper;