# React easy notifications
React module for creating a notifications
## Instalation
Install **React easy notifications** by using npm command
```
future command npm install react-easy-notifications
```

Import `NotificationsContainer` and `notificationHandler` in your component class.
```jsx
import { NotificationsContainer, notificationHandler } from 'react-easy-notifications';
```

## Examples

Example for creating a notification and supported properties
```jsx
notificationHandler.create({
  title: 'Success!',
  content: 'Your action was successfull',
  duration: 3000,
  onCreate: () => this.onCreate(),
  onClose: () => this.onClose()
});
```
Exmplae on implementaion
```jsx
import React, { Component } from 'react';
import { NotificationsContainer, notificationHandler } from 'react-easy-notifications';

class App extends Component {

  createSuccessNotification = (event) => {
    event.preventDefault();
    notificationHandler.create({
      title: 'Success!',
      content: 'Your action was successfull',
      duration: 3000,
      onCreate: () => this.onCreate(),
      onClose: () => this.onClose()
    });
  }

  render() {
    return (
      <div>
        <button onClick={ this.createSuccessNotification }>success notification</button>
        <NotificationsContainer />
      </div>
    );
  }
}

export default App;
```

As idea behind **React easy notifications** was to create notifications, that can be called from any part of code as simply as possible, it is adviced to put <NotificationsContainer /> into some header part of your application.