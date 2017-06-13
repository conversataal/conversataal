import React, { PropTypes } from 'react';
import styles from './TextField.module.scss';

class TextArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            focus: false,
            value: ''
        };
        this.setFocusOn = this.setFocusOn.bind(this);
        this.setFocusOff = this.setFocusOff.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    setFocusOn() {
        this.setState({ focus: true });
    }

    setFocusOff() {
        this.setState({ focus: false });
    }

    handleChange(event) {
        this.setState({ 'value': event.target.value });
    }

    render() {
        let inputClassName = this.props.errorMessage && this.props.errorMessage.length > 0 ? 'invalid validate' : null;
        inputClassName += ' materialize-textarea';
        const labelClassName = this.state.focus || (this.state.value && this.state.value.length > 0) ? 'active' : null;
        return (
            <div className={'row ' + styles['textfield-module-wrapper']}>
                <div className="input-field col s6">
                    {/*<input placeholder="Placeholder" id="first_name" type="text" className="validate"/>*/}
                    <textarea
                        id={this.props.id}
                        className={inputClassName}
                        required={this.props.required}
                        onFocus={this.setFocusOn}
                        onBlur={this.setFocusOff}
                        onChange={this.handleChange}
                        value={this.state.value}
                    ></textarea>
                    <label
                        className={labelClassName}
                        htmlFor={this.props.id}
                        data-error={this.props.errorMessage}>
                        {this.props.label}
                    </label>
                </div>
            </div>
        );
    }
}

TextArea.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    required: PropTypes.bool,
    errorMessage: PropTypes.string
};

export default TextArea;