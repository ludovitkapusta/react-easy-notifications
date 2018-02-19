# React Easy Notifications
Simple react module for creating a notifications
## Instalation
Install **React easy notifications** by using npm command
```
//here will be npm command
```

Import `NotificationsContainer` and `notificationHandler` in your component class alongside React
```jsx
import React from 'react';
import { NotificationsContainer, notificationHandler } from 'react-easy-notifications';
```

## Examples

Example for creating a notification with supported properties
```jsx
notificationHandler.create({
  title: 'Success!',
  content: 'Your action was successfull',
  className: 'notification-success'
  duration: 3000,
  onCreate: () => this.onCreate(),
  onClose: () => this.onClose()
});
```
Example implementaion of **React Easy Notifications**
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

As idea behind **React Easy Notifications** was to create notifications, that can be called and showed from any part of code of your application, it is adviced to put `<NotificationsContainer />` component into some header part of your application.

Having more `<NotificationsContainer />` compontents in your current rendered application will result into having same multiplied notifications shown to the user.

It is advised to use your own styles as these notifications are intended unstyled.

## Properties
`notificationHandler.create({})` is prepared with thoughts to have ability to set up every notification the way you want to have it. With this, few set options was implemented.

---
#### `notificationHandler.create({ title: 'Title' });`
>Sets title of the notification. Expects string. You can use your own style by using `.notification-header` class.
---
#### `notificationHandler.create({ content: 'Content' });`
> Sets content, or the body of the notification. Expects string. You can use your own style by using `.notification-content` class.
---
#### `notificationHandler.create({ duration: 3000 });`
> Sets how long will notification be shown to the use. Expects number.
---
#### `notificationHandler.create({ onCreate: () => {}) });`
> Gives you ability to call your own callback when notification was created. Expects function.
---
#### `notificationHandler.create({ onClose: () => {}) });`
> Gives you ability to call your own callback when notification was closed. Expects function.
---