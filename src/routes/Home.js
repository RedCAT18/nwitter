import Nweet from 'components/Nweet';
import { dbService } from 'fbase';
import React, { useState, useEffect } from 'react';

const Home = ({ userObj }) => {
  const [nweet, setNweet] = useState('');
  const [nweets, setNweets] = useState([]);

  useEffect(() => {
    //work whenever I do something
    dbService.collection('nweets').onSnapshot((snapshot) => {
      const nweetArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNweets(nweetArray);
    });
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await dbService.collection('nweets').add({
      text: nweet,
      createdAt: Date.now(),
      creatorId: userObj.uid,
    });
    setNweet('');
  };
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setNweet(value);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={nweet}
          onChange={onChange}
          placeholder="what's on your mind?"
          maxLength={120}
        />
        <input type="submit" value="Nweet" />
      </form>
      <div>
        {nweets.map((nweet) => (
          <Nweet
            key={nweet.id}
            nweetObj={nweet}
            isOwner={nweet.creatorId === userObj.uid}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
