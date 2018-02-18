import React from 'react';
import PropTypes from 'prop-types';
import { notificationHandler } from '../notificationHandler';

class Notification extends React.Component {
    componentDidMount() {
        const { item, duration, onCreate } = this.props;
        if(onCreate) onCreate();

        setTimeout(
            () => notificationHandler.destroy(item),
            duration
        );
    }

    componentWillUnmount() {
        const { onClose } = this.props;
        if(onClose) onClose();
    }

    render() {
        const { title, content, duration } = this.props;

        return (
            <div className="notification" data-duration="{ duration }">
                <div className="notification--header">{ title }</div>
                <div className="notification--content">{ content }</div>
            </div>
        )
    };
}

Notification.PropTypes = {
    title: PropTypes.element,
    content: PropTypes.element,
    duration: PropTypes.number,
    onCreate: PropTypes.func,
    onClick: PropTypes.func
}

export default Notification;