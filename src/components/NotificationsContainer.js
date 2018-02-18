import React from 'react';
import PropTypes from 'prop-types';
import Notification from './Notification';
import { notificationHandler } from '../notificationHandler';
import { arrays } from '../utils';

class NotificationsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }

    componentWillMount = () => {
        notificationHandler.addChangeListener(this.handleEventChange);
    };
    
    componentWillUnmount = () => {
        notificationHandler.removeChangeListener(this.handleEventChange);
    };

    handleEventChange = (items) => {
        this.setState({ items });
    };

    render() {
        const { items } = this.state;
        const { className } = this.props;

        const containerClasses = arrays.join(
            'notification-container',
            className
        );
        
        return (
            <div className={ containerClasses }>
                { items.map((item, index) => {
                    return 
                        <Notification 
                            key={ index }
                            item={ item }
                            title={ item.title }
                            content={ item.content }
                            duration={ item.duration }
                            onCreate={ item.onCreate }
                            onClose={ item.onClose }
                        />
                }) }
            </div>
        );
    };
};

NotificationsContainer.propTypes = {
    className: PropTypes.string
};

export default NotificationsContainer;