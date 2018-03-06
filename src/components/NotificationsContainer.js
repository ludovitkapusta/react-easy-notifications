import React from 'react';
import PropTypes from 'prop-types';
import Notification from './Notification';
import notification from '../notification';
import { arrays } from '../utils';
import '../style.css';

class NotificationsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }

    componentWillMount = () => {
        notification.addChangeListener(this.handleEventChange);
    };
    
    componentWillUnmount = () => {
        notification.removeChangeListener(this.handleEventChange);
    };

    handleEventChange = (items) => {
        this.setState({ items });
    };

    render() {
        const { items } = this.state;
        const { className, name, position } = this.props;

        const containerClasses = arrays.join(
            'notifications-container',
            className,
            position
        );
        
        return (
            <div className={ containerClasses }>
                { items.map((item, index) => {
                    if(item.target !== '') {
                        if(item.target !== name) return null;
                    }
                    return (
                        <Notification 
                            key={ index }
                            item={ item }
                            className={ item.className }
                            title={ item.title }
                            content={ item.content }
                            duration={ item.duration }
                            beforeCreate={ item.beforeCreate }
                            onCreate={ item.onCreate }
                            onClose={ item.onClose }
                            closeOnClick={ item.closeOnClick }
                        />
                    )
                }) }
            </div>
        );
    };
};

NotificationsContainer.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    position: PropTypes.string.isRequired
};

export default NotificationsContainer;