import React from 'react';
import { FiExternalLink } from 'react-icons/fi';

import './repository-item.scss';

import { Repository } from '../../types';
import StarButton from './star-button';

interface Props {
  repository: Repository;
}

function RepositoryItem({repository}: Props) {
  return (
    <section className="RepositoryItem">
      <div className="Information">
        <h3><a href={repository.url} target="_blank">{repository.name}<FiExternalLink /></a></h3>
        <p>{repository.description}</p>
      </div>
      <StarButton id={repository.id} stars={repository.stars} isStarred={repository.isStarred} />
    </section>
  );
}

export default RepositoryItem;