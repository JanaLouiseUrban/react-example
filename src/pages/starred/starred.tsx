import React, { useEffect, useState } from 'react';

import RepositoryList from '../../components/repository-list';
import { Repository } from '../../components/types';
import { getLastWeeksRepositories, mapToRepositories } from '../../api/repositories';

function Starred() {

  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    getLastWeeksRepositories()
      .then(result => {
        if (result.data && result.data.items) {
          const savedItems: number[] = JSON.parse(localStorage.getItem('starredItems') || '[]');
          setRepositories(mapToRepositories(result.data.items.filter((item: any) => savedItems.includes(item.id))));
        }
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <RepositoryList
      repositories={repositories}
    />
  );
}

export default Starred;