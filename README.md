# React Easy Notifications
Simple react module for creating a notifications
## Instalation
Install **React easy notifications** by using npm command
```
//here will be npm command
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
  className: 'notification-success',
  duration: 3000,
  onCreate: () => this.onCreate(),
  onClose: () => this.onClose()
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
      duration: 3000,
      onCreate: () => this.onCreate(),
      onClose: () => this.onClose()
    });
  }

  render() {
    return (
      <div>
        <button onClick={ this.createSuccessNotification }>success notification</button>
        <NotificationsContainer position="top-left"/>
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
### `<NotificationsContainer />`
`<NotificationsContainer />` needs to be presented in any part of your aplication. You can determine position of your notification by adding position prop.

---
#### `position="top-left | bottom-left | top-right | bottom-right"`
>Sets the position of notifications.
---

### `notification`
`notification.create({})` is prepared with thoughts to have ability to set up every notification the way you want to have it. With this, few set options was implemented.

---
#### `notification.create({ title: 'Title' });`
>Sets title of the notification. Expects string. You can use your own style by using `.notification-header` class.
---
#### `notification.create({ content: 'Content' });`
> Sets content, or the body of the notification. Expects string. You can use your own style by using `.notification-content` class.
---
#### `notification.create({ duration: 3000 });`
> Sets how long will notification be shown to the user. Expects number. If duration is not set, notification will live until page is refreshed or `<NotificationsContainer />` is unmounted.
---
#### `notification.create({ onCreate: () => {}) });`
> Gives you ability to call your own callback when notification was created. Expects function.
---
#### `notification.create({ onClose: () => {}) });`
> Gives you ability to call your own callback when notification was closed. Expects function.
---
#### `notification.create({ closeOnClick: true|false });`
> Allow/disallow closing notification by clicking on the notification
---