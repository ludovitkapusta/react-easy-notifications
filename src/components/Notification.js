import React from 'react';
import PropTypes from 'prop-types';

class Notification extends React.Component {

    componentDidMount(){
        const { onCreate } = this.props;
        if(onCreate) this.props.onCreate();
    }
	render() {
        const { title, content, duration, onCreate, onClose } = this.props;

		return (
            <div className="notification" data-duration="{ duration }">
                <div className="notification--header">{ title }</div>
                <div className="notification--content">{ content }</div>
                <button onClick={ onClose }>close</button>
            </div>
        )
	};
}

Notification.PropTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    duration: PropTypes.number,
    onCreate: PropTypes.func,
    onClick: PropTypes.func
}

export default Notification;