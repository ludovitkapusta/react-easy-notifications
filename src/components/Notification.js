import React from 'react';
import PropTypes from 'prop-types';
import notification from '../notification';
import { arrays } from '../utils';

class Notification extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showClass: ''
        }
    }

    componentDidMount() {
        const { item, duration, onCreate } = this.props;
        if(onCreate) onCreate();
        this.setState({ showClass: 'notification-show' });

        if(duration)
            setTimeout(
                () => notification.destroy(item),
                duration
            );
    }

    componentWillUnmount() {
        const { onClose } = this.props;
        if(onClose) onClose();
    }

    closeNotification = () => {
        const { item } = this.props;
        notification.destroy(item);
    }

    render() {
        const { className, title, content, duration } = this.props;
        const { showClass } = this.state;

        const notificationClassName = arrays.join(
            'notification',
            className,
            showClass
        );

        return (
            <div
                className={ notificationClassName }
                onClick={ this.closeNotification } >
                { title && <div className="notification-header">{ title }</div> }
                { content && <div className="notification-content">{ content }</div> }
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