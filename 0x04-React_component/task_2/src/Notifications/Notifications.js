import React, { Fragment } from "react";
import PropTypes from 'prop-types';
import close from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import './Notifications.css';
import NotificationItemShape from './NotificationItemShape'

class  Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }
  static markAsRead(id){
    console.log(`Notification ${id} has been marked as read`);
  }
  render (){
    const { displayDrawer, listNotifications } = this.props;
    return(
    <>
        <div className='menuItem'> Your notifications</div>
      { displayDrawer && (
        <div className='Notifications'>
          {listNotifications.length > 0 ? (
            <Fragment>
            <p>Here is the list of notifications</p>
            <ul>
              {listNotifications.map((notification) => (
              <NotificationItem
                key={notification.id}
                type={notification.type}
                value={notification.value}
                html={notification.html} />
              ))}
            </ul>
            <button className='close-b' aria-label="Close" onClick={ () => console.log('Close button has been clicked') }>
              <img
              src={close} alt="close-icon"
              style={{ height: '10px', width: '10px' }}
              />
            </button>
            </Fragment>
          ) : (<p>No new notification for now</p>)}
        </div>
      )}
    </>
  );
}
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  markAsRead: ()=>{},
  id: NaN,
};

Notifications.defaultProps = {
  displayDrawer: false,
  markAsRead: PropTypes.func,
  id: PropTypes.number,
};

export default Notifications;