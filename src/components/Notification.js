import React from 'react';
import PropTypes from 'prop-types';
import { notificationHandler } from '../notificationHandler';
import { arrays } from '../utils';

class Notification extends React.Component {
    componentDidMount() {
        const { item, duration, onCreate } = this.props;
        if(onCreate) onCreate();

        if(duration)
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
        const { className, title, content, duration } = this.props;

        const notificationClassName = arrays.join(
            'notification',
            className
        );

        return (
            <div className={ notificationClassName } data-duration={ duration }>
                <div className="notification-header">{ title }</div>
                <div className="notification-content">{ content }</div>
            </div>
        )
    };
}

Notification.PropTypes = {
    className: PropTypes.string,
    title: PropTypes.element,
    content: PropTypes.element,
    duration: PropTypes.number,
    onCreate: PropTypes.func,
    onClick: PropTypes.func
}

export default Notification;