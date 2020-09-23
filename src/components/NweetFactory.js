import React, { useState } from 'react';
import { storageService, dbService } from 'fbase';
import { v4 as uuidv4 } from 'uuid';

const NweetFactory = ({ userObj }) => {
  const [nweet, setNweet] = useState('');
  const [attachment, setAttachment] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    let attachmentUrl = '';
    if (attachment !== '') {
      const attachmentRef = storageService
        .ref()
        .child(`${userObj.uid}/${uuidv4()}`);
      const response = await attachmentRef.putString(attachment, 'data_url');
      attachmentUrl = await response.ref.getDownloadURL();
    }
    const nweetObj = {
      text: nweet,
      createdAt: Date.now(),
      creatorId: userObj.uid,
      attachmentUrl,
    };
    await dbService.collection('nweets').add(nweetObj);
    setNweet('');
    setAttachment('');
  };
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setNweet(value);
  };

  const onFileChange = (e) => {
    const {
      target: { files },
    } = e;
    //allow only one file
    const uploadedFile = files[0];
    //file reader
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      } = finishedEvent;
      setAttachment(result);
    };
    reader.readAsDataURL(uploadedFile);
  };

  const clearAttachedImage = () => setAttachment(null);

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={nweet}
        onChange={onChange}
        placeholder="what's on your mind?"
        maxLength={120}
      />
      <input type="file" accept="image/*" onChange={onFileChange} />
      <input type="submit" value="Nweet" />
      {attachment && (
        <>
          <img src={attachment} alt="preview" width="50px" height="50px" />
          <button onClick={clearAttachedImage}>Clear Image</button>
        </>
      )}
    </form>
  );
};

export default NweetFactory;
