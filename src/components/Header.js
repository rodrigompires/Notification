import React from 'react';
import './Header.css';
import Card from './Card';

const Header = () => {

  const [count, setCount] = React.useState(3);
  const [unread, setUnread] = React.useState(0);


  const handleClick = (e) => {
    const elementCard = e.currentTarget;
    if (elementCard.classList.contains('unread')) {
      elementCard.classList.remove('unread');
      setCount(count - 1);
    } else {
      elementCard.classList.add('unread');
      setCount(count + 1);
    }
  };

  const markRead = () => {
    Array.from(document.getElementsByClassName("box")).forEach(
      (item, index) => {
        setTimeout(() => {
          item.classList.remove("unread");
          setUnread(unread - index - 1);
          setCount(0)
      },index * 300)
    }
    );
  };

  
  return (
    <>
      <header className={"header"}>
          <div className={"notifbox"}>
          <h1 className={"title"}>Notifications</h1>
          <span className={"notifications"}>{count}</span>
          </div>
          <p className={"markall"} onClick={markRead} >Mark all as read</p>
      </header>
      <Card handleClick={handleClick} />
  </>

  )
}

export default Header