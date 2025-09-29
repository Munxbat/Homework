import React from 'react';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import messengerIcon from '../../images/icon/messenger.png'

const ChatSection = () => {
  // Таны App ID болон Page ID-г энд оруулна
  const pageId = '61575996630641'; 
  const appId = '3176888419134515'; 

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '110px',
        right: '30px',
        zIndex: 1000,
        width: '45px',
        height: '45px',
        backgroundColor: '#FE693E',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
      }}
    >
      {/* Чат icon-ийг messenger.png зургаар солих */}
      <img
        src={messengerIcon}
        alt="Messenger Chat"
        style={{ width: '40px', height: '40px' }} // Зургийн хэмжээг тохируулна
      />

      {/* Messenger Customer Chat Plugin */}
      <MessengerCustomerChat
        pageId={pageId}
        appId={appId}
        htmlRef={window.location.pathname}
        themeColor="#0084FF"
        loggedInGreeting="Сайн байна уу? Тусламж хэрэгтэй юу?"
        loggedOutGreeting="Бидэнтэй чатлаарай!"
        greetingDialogDisplay="show"
        onMessengerShow={() => console.log('Чат нээгдлээ!')}
        onMessengerHide={() => console.log('Чат хаагдлаа!')}
      />
    </div>
  );
};

export default ChatSection;