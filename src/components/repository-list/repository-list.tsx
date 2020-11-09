import React from 'react';

import './repository-list.scss';

import {Repository} from '../types';

import RepositoryItem from './repository-item';

interface Props {
  repositories: Repository[],
}

function RepositoryList({
  repositories
}: Props) {

  return (
    <div className="RepositoryList" data-testid="repository-list">
      {
        repositories.length ?
        repositories.map(repository => <RepositoryItem key={repository.id} repository={repository} />) :
        "No entries found"
      }
    </div>
  );
}

export default RepositoryList;