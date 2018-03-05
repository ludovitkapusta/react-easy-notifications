import React from 'react';
import PropTypes from 'prop-types';
import notification from '../notification';
import { arrays } from '../utils';

class Notification extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            eventClass: ''
        }
    }

    componentWillMount() {
        const { beforeCreate } = this.props;
        this.setState({ eventClass: 'notification-will-display' });

        if(beforeCreate) beforeCreate();
    }

    componentDidMount() {
        const { item, duration, onCreate } = this.props;
        this.setState({ eventClass: 'notification-is-displayed' });

        if(onCreate) onCreate();

        if(duration) {
            const countdown = setTimeout(
                () => {
                    this.setState({ eventClass: 'notification-is-hidden' });
                    notification.destroy(item);
                },
                duration
            );
        }
    }

    componentWillUnmount() {
        const { onClose } = this.props;        
        if(onClose) onClose();
    }

    closeNotification = () => {
        const { item, closeOnClick } = this.props;
        if(closeOnClick){
            this.setState({ eventClass: 'notification-is-hidden' });
            notification.destroy(item);
        }
    }

    render() {
        const { className, title, content, contentLeft, contentRight, duration } = this.props;
        const { eventClass } = this.state;

        const notificationClassName = arrays.join(
            'notification',
            className,
            eventClass
        );

        return (
            <div
                className={ notificationClassName }
                onClick={ this.closeNotification } >
                <div className="notification-column notification-column-left">
                    { contentLeft }
                </div>
                <div className="notification-column notification-column-center">
                    { title && <div className="notification-header">{ title }</div> }
                    { content && <div className="notification-content">{ content }</div> }
                </div>
                <div className="notification-column notification-column-right">
                    { contentRight }
                </div>
            </div>
        )
    };
}

Notification.PropTypes = {
    className: PropTypes.string,
    title: PropTypes.element,
    content: PropTypes.element,
    contentLeft: PropTypes.element,
    contentRight: PropTypes.element,
    duration: PropTypes.number,
    beforeCreate: PropTypes.func,
    onCreate: PropTypes.func,
    onClick: PropTypes.func,
    closeOnClick: PropTypes.bool
}

Notification.defaultProps = {
    closeOnClick: true
}

export default Notification;