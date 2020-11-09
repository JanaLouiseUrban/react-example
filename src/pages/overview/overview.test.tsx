import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';

import * as api from '../../api/repositories';
import Overview from './overview';

afterAll(() => {
  jest.resetAllMocks();
});

test('renders Overview after calling api', async () => {
  jest.spyOn(api, 'getLastWeeksRepositories').mockResolvedValue({data: {items: []}} as any);

  render(<Overview />);

  await waitFor(() => expect(api.getLastWeeksRepositories).toHaveBeenCalledTimes(1));
  const repositoryList = screen.getByTestId('repository-list');

  await waitFor(() => expect(repositoryList).toBeInTheDocument());
});
