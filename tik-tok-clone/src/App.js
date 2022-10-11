import './App.css';
import React, {useState, useEffect} from 'react'
import Video from './Video';
import db from './firebase';
import { collection , onSnapshot } from 'firebase/firestore';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(()=>{
   // onSnapshot(collection(db, 'videos'),snapshot => ( snapshot.docs.map((doc)=>{ console.log(doc.data())})));
    

    onSnapshot(collection(db, 'videos'),snapshot => (//listener que se ejecute ante cualquier update que se haga en rooms desde cualquier componente. Por eso cuando desde sidebarOption se agrega un canal se ejecuta setChannels y se renderiza el front con el nuevo canal
      setVideos(
        snapshot.docs.map((doc)=>({
          id: doc.id,
          url: doc.data().url,
          channel: doc.data().channel,
          description: doc.data().description,
          song: doc.data().song,
          likes: doc.data().likes,
          messages: doc.data().messages,
          shares: doc.data().shares,
      }))
      )
    ));
  },[]);
  
  return (
    <div className="app">
        
        <div className='app__videos'>
        {videos.map((video) =>  
            <Video 
              url={video.url} 
              channel={video.channel} 
              description={video.description}
              song={video.song}
              likes={video.likes}
              messages={video.messages}
              shares={video.shares}/> 
            )}
        </div>
    </div>
  );
}

export default App;
