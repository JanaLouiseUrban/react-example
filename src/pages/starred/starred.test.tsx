import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';

import * as api from '../../api/repositories';
import Starred from './starred';

afterAll(() => {
  jest.resetAllMocks();
});

test('renders Starred after calling api', async () => {
  jest.spyOn(api, 'getLastWeeksRepositories').mockResolvedValue({data: {items: []}} as any);

  render(<Starred />);

  await waitFor(() => expect(api.getLastWeeksRepositories).toHaveBeenCalledTimes(1));
  const repositoryList = screen.getByTestId('repository-list');
  
  await waitFor(() => expect(repositoryList).toBeInTheDocument());
});
