import React from 'react';
import './Footer.css';
import MyAvatar from '../assets/images/image-1.svg';


const Footer = () => {

  const [show, setShow] = React.useState(false);

  const handleClick = (e) => {
    const elementCard = e.currentTarget;
    if (elementCard.classList.contains('unread')) {
      elementCard.classList.remove('unread');
    } else {
      elementCard.classList.add('unread');
    }
  };

  return (
    <>
     <div className={`box msg ${show ? 'show' : ''}`} onClick={handleClick} >
        <img src={MyAvatar} alt={'my avatar'} className={'avatar'} />
            <div className={'description'} >
                <p>
                    <strong className='name'>Rodrigo Pires</strong><span className='action'> Like your like</span>
                    <a href="https://github.com/rodrigompires?tab=repositories" target="_blank" rel="noopener noreferrer"><b className='info'>Shall we connect on GitHub?</b></a>
                </p>
                <p className="date">Right now</p>
            </div>
    </div>


    <footer className="footerBox">
      <img src={MyAvatar} alt="my avatar" className="footerAvatar" onClick={() => setShow(!show)}/>
      <div className="author">
        <span className="authorText">Creation of</span>
        <a href="https://github.com/rodrigompires?tab=repositories" className="btnFlip" data-back="Developer"
          data-front="Rodrigo Pires" target="_blank" rel="noopener noreferrer"> </a>
      </div>
    </footer>
  </>
  )
}

export default Footer