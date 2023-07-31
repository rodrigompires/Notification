import React from 'react';
import './Card.css';
import UseFetch from "../Hooks/UseFetch";
import Gif from '../assets/images/loading-gif.gif';


const Card = ({handleClick}) => {

  const {request, data, loading, error} = UseFetch();
 
  React.useEffect(() => { 
    async function fetchData () {
      const {response, json} = await request("./data.json", {headers: {Accept: "application/json"}});
      console.log(response, json);
    }
    fetchData();

  }, [request])

  
  if (error) return <p>{error}</p>
  if (loading) return <img src={Gif} alt={'loading'} className={'loading'} />
  if (data) 
  return (
    <main className={'card'}>
      {data.map((users, index) => <div id={users.id} key={index} className={`box ${users.unread ? 'unread' : ''}`} onClick={handleClick} >
      <img src={users.src} alt={users.name} className={'avatar'} />
              <div className={'description'} key={users.id}>
                  <p>
                    <strong className='name'>{users.name}</strong><span className='action'> {users.action}</span>
                    <b className='info'>{users.info}</b>
                  </p>
                  <p className="date">{users.time}</p>
              </div>
                  {users.src_picture_comment ? <img src={users.src_picture_comment} alt="Avatar" className="avatarchess" /> : ""}
                  {users.message ? <div className={'message'}><p className="text">{users.message}</p></div> : ''}
            </div>           
      )}
    </main>
  )
  else {
    return null
  }
}

export default Card
