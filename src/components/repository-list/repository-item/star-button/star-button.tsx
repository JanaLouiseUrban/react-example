import React, { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { IconContext } from "react-icons";

import './star-button.scss';

interface Props {
  id: number;
  stars: number;
  isStarred: boolean;
}

function StarButton({id, stars, isStarred}: Props) {

  const [starred, setStarred] = useState<boolean>(isStarred);

  const iconSettings = {size: "3em", color: '#ccc'};
  if (starred) {
    iconSettings.color = '#f5cc2a';
  }

  const updateStarred = () => {
    const savedItems: number[] = JSON.parse(localStorage.getItem('starredItems') || '[]');
    if (starred) {
      localStorage.setItem('starredItems', JSON.stringify(savedItems.filter(savedItem => savedItem !== id)));
    } else {
      if (!savedItems.includes(id)) {
        savedItems.push(id);
      }
      localStorage.setItem('starredItems', JSON.stringify(savedItems));
    }
    setStarred(prevState => !prevState);
    
  }

  return (
    <div className="StarButton">
      <IconContext.Provider value={iconSettings}>
        <button type="button" onClick={updateStarred}><AiFillStar /></button>
      </IconContext.Provider>
      <span className="StarCount">{starred ? stars + 1 : stars}</span>
    </div>
  );
}

export default StarButton;