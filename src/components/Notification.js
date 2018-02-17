import React from 'react';
import PropTypes from 'prop-types';

class Notification extends React.Component {
	render() {
        const { title, duration } = this.props;

		return (
            <div className="notification">
                { title } { duration }
            </div>
        )
	};
}

export default Notification;