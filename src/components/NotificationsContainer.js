import React from 'react';
import PropTypes from 'prop-types';
import Notification from './Notification';
import { notification } from '../notification';
import { arrays } from '../utils';

class NotificationsContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			items: []
		}
	}

	componentWillMount = () => {
		notification.addChangeListener(this.handleStoreChange);
	};
	
	componentWillUnmount = () => {
		notification.removeChangeListener(this.handleStoreChange);
	};

	handleStoreChange = (items) => {
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
					return <Notification 
						key={ index }
						title={ item.title }
						duration={ item.duration }
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