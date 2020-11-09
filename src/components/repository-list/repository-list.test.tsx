import React from 'react';
import { render, screen } from '@testing-library/react';

import RepositoryList from './repository-list';

test('renders RepositoryList with no entries', () => {
  render(<RepositoryList repositories={[]} />);
  const noEntriesText = screen.getByText(/No entries found/i);

  expect(noEntriesText).toBeInTheDocument();
});

test('renders RepositoryList with entries', () => {
  render(<RepositoryList repositories={[{ 
    id: 1,
    name: 'test name',
    description: 'a description',
    url: 'a/url',
    stars: 5,
    isStarred: true,
  },{ 
    id: 2,
    name: 'some other name',
    description: 'another description',
    url: 'b/url',
    stars: 3,
    isStarred: true,
  }]} />);
  const entry1 = screen.getByText(/test name/i);
  const entry2 = screen.getByText(/some other name/i);

  expect(entry1).toBeInTheDocument();
  expect(entry2).toBeInTheDocument();
});
