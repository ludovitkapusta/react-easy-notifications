import React from 'react';
import PropTypes from 'prop-types';
import notification from '../notification';
import { arrays, timer } from '../utils';

class Notification extends React.Component {
  static defaultProps = {
    closeOnClick: true
  }

  constructor(props) {
    super(props);
    this.state = {
      eventClass: 'notification-will-display',
      timeout: null
    }
  }

  componentDidMount = () => {
    const { beforeCreate, duration, item, onCreate } = this.props;

    this.setState({ eventClass: 'notification-is-displayed' });
    
    if(beforeCreate) beforeCreate();
    if(onCreate) onCreate();
    
    const timeout = timer.start(item, duration);
    this.setState({ timeout });
  }

  componentWillUnmount = () => {
    const { onClose } = this.props;
    if(onClose) onClose();
  }

  closeNotification = () => {
    const { item, closeOnClick } = this.props;
    if(closeOnClick){
      notification.destroy(item);
    }
  }

  onMouseEnter = () => {
    const { timeout } = this.state;
    timer.pause(timeout);
  }

  onMouseLeave = () => {
    const { item, duration, onCreate } = this.props;
    const { timeout } = this.state;

    const newTimer = timer.start(item, duration);
    this.setState({ timeout: newTimer });
  }

  render() {
    const { className, title, content, duration } = this.props;
    const { eventClass } = this.state;

    const notificationClassName = arrays.join(
      'notification',
      className,
      eventClass
    );

    return (
      <div
        className={ notificationClassName }
        onClick={ this.closeNotification }
        onMouseEnter={ this.onMouseEnter }
        onMouseLeave={ this.onMouseLeave } >
        { title && <div className="notification-header">{ title }</div> }
        { content && <div className="notification-content">{ content }</div> }
      </div>
    )
  };
}

Notification.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.element,
  duration: PropTypes.number,
  beforeCreate: PropTypes.func,
  onCreate: PropTypes.func,
  onClick: PropTypes.func,
  closeOnClick: PropTypes.bool
}

export default Notification;