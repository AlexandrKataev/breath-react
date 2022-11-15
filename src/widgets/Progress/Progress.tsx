import React, { useEffect } from 'react';

import s from './Progress.module.scss';

import ProgressBar from 'entities/ProgressBar/ProgressBar';
import Difficulty from 'features/Difficulty/Difficulty';

import { collection, doc, getFirestore, onSnapshot, setDoc } from 'firebase/firestore';
import db from '../../firebase';

const Progress: React.FC = () => {
  useEffect(() => {
    const unsub = onSnapshot(collection(db, 'progress'), (snapshot) => {
      console.log(snapshot.docs.map((doc) => doc.data()));
    });
    return unsub;
  }, []);
  return (
    <div>
      <div className={s.progress}>
        <ProgressBar />
      </div>

      <Difficulty />
    </div>
  );
};

export default Progress;
