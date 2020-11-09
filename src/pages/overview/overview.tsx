import React, { useEffect, useState } from 'react';

import RepositoryList from '../../components/repository-list';
import { Repository } from '../../components/types';
import { getLastWeeksRepositories, mapToRepositories } from '../../api/repositories';

function Overview() {

  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    getLastWeeksRepositories()
      .then(result => {
        if (result.data && result.data.items) {
          setRepositories(mapToRepositories(result.data.items));
        }
      });
  }, []);

  return (
    <RepositoryList
      repositories={repositories}
    />
  );
}

export default Overview;