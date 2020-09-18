import { dbService } from 'fbase';
import React, { useState, useEffect } from 'react';

const Home = ({ userObj }) => {
  const [nweet, setNweet] = useState('');
  const [nweets, setNweets] = useState([]);

  // const getNweets = async () => {
  //   const dbNweets = await dbService.collection('nweets').get();
  //   dbNweets.forEach((doc) => {
  //     const nweetObject = {
  //       ...doc.data(),
  //       id: doc.id,
  //     };
  //     setNweets((prev) => [nweetObject, ...prev]);
  //   });
  // };

  useEffect(() => {
    // getNweets();
    dbService.collection('nweets').onSnapshot((snapshot) => {
      console.log(snapshot.docs);
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
          <div key={nweet.id}>
            <h4>{nweet.text}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
