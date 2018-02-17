# React easy notifications
Simple module for creating a notifications using React
## Instalation
Install **React easy notifications** by using npm command
```
future command npm install react-easy-notifications
```

Import NotificationsContainer and notification in your component class. As idea behind **React easy notifications** was to create notifications, that can be called from any part of code, put <NotificationsContainer /> into some header part of your application.
```
import { NotificationsContainer, notification } from 'react-easy-notifications';
```

##Example
````
import React, { Component } from 'react';
import { NotificationsContainer, notification } from 'react-easy-notifications';

class App extends Component {

	createSuccessNotification = (event) => {
		event.preventDefault();
		notification.create('success', 3000);
	}

	createWarningNotification = (event) => {
		event.preventDefault();
		notification.create('warning', 3000);
	}

	createInfoNotification = (event) => {
		event.preventDefault();
		notification.create('info', 3000);
	}

	render() {
		return (
			<div>
				<button onClick={ this.createSuccessNotification }>success notification</button>
				<button onClick={ this.createWarningNotification }>warning notification</button>
				<button onClick={ this.createInfoNotification }>info notification</button>
				<NotificationsContainer />
			</div>
		);
	}
}

export default App;
```