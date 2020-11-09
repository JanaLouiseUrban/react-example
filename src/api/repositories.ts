import axios from 'axios';

function getLastWeeksRepositories() {
  const date = new Date();
  date.setDate(date.getDate() - 7);
  const dateOneWeekAgo = new Date(date);

  // returns the date string as year-month-day, where day is lead by 0 for single digit day numbers
  const dateQueryString = dateOneWeekAgo.getFullYear() + '-' + (dateOneWeekAgo.getMonth() + 1) + '-' + ('0' + dateOneWeekAgo.getDate()).slice(-2);

  return axios.get(`https://api.github.com/search/repositories?q=created:>${dateQueryString}&sort=stars&order=desc&per_page=30`);
}

function mapToRepositories(items: any[]) {
  const savedItems: number[] = JSON.parse(localStorage.getItem('starredItems') || '[]');
  return items.map((item:any) => ({
    id: item.id,
    name: item.name,
    description: item.description,
    url: item.html_url,
    stars: item.stargazers_count,
    isStarred: !!savedItems.find(savedItem => savedItem === item.id),
  }));
}

export { getLastWeeksRepositories, mapToRepositories };