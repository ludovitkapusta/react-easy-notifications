# React Easy Notifications
Simple react module for creating a notifications
## Instalation
Install **React easy notifications** by using npm command
```jsx
npm install react-easy-notifications
```

Import `NotificationsContainer` and `notification` in your component class alongside React
```jsx
import React from 'react';
import { NotificationsContainer, notification } from 'react-easy-notifications';
```

## Examples

Example for creating a notification with supported properties
```jsx
notification.create({
  title: 'Success!',
  content: 'Your action was successfull',
  contentLeft: 'Left Col',
  contentRight: 'Right Col',
  className: 'notification-success',
  duration: 3000,
  onCreate: () => this.onCreate(),
  onClose: () => this.onClose(),
  target: 'target'
});
```
Example implementaion of **React Easy Notifications**
```jsx
import React, { Component } from 'react';
import { NotificationsContainer, notification } from 'react-easy-notifications';

class App extends Component {
  createSuccessNotification = (event) => {
    event.preventDefault();
    notification.create({
      title: 'Success!',
      content: 'Your action was successfull',
      contentLeft: 'Left Col',
      contentRight: 'Right Col',
      duration: 3000,
      onCreate: () => this.onCreate(),
      onClose: () => this.onClose()
    });
  }

  render() {
    return (
      <div>
        <button onClick={ this.createSuccessNotification }>success notification</button>
        <NotificationsContainer position="top-left" name="target"/>
      </div>
    );
  }
}

export default App;
```

As idea behind **React Easy Notifications** was to create notifications, that can be called and showed from any part of code of your application, it is adviced to put `<NotificationsContainer />` component into some header part of your application.

Having more `<NotificationsContainer />` compontents in your current rendered application will result into having same multiplied notifications shown to the user.

It is advised to use your own styles as these notifications are intended unstyled.

## Properties
## `<NotificationsContainer />`
`<NotificationsContainer />` needs to be presented in any part of your aplication. You can determine position of your notification by adding position prop.

#### `position="top-left | bottom-left | top-right | bottom-right"`
Sets the position of notifications.

#### `name=""`
Sets the name of container. Byt this name, notification can be targeted for name specified container 

## `notification`
`notification.create({})` is prepared with thoughts to have ability to set up every notification the way you want to have it. With this, these properties are here to help you.

#### `title` | string
Sets title of the notification. You can use your own style by using `.notification-header` class.
#### `content` | string
Sets content, or the body of the notification. You can use your own style by using `.notification-content` class and `notication-column-center` container class.
#### `contentLeft` | string
Sets content, or the body of the notification. You can use your own style by using `notication-column-center` container class.
#### `contentRight` | string
Sets content, or the body of the notification. You can use your own style by using `notication-column-center` container class.
#### `duration` | number
Sets how long will notification be shown to the user. If duration is not set, notification will live until page is refreshed or `<NotificationsContainer />` is unmounted.
#### `beforeCreate` | function
Gives you ability to call your own callback when notification will be created.
#### `onCreate` | function
Gives you ability to call your own callback when notification was created.
#### `onClose`  | function
Gives you ability to call your own callback when notification was closed.
#### `closeOnClick`: | bool
Allow/disallow closing notification by clicking on the notification
#### `target`: | string
Sets targeted `<NotificaitonController />`