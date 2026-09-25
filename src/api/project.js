import { API_BASE_URL } from './config';

export async function getProjects() {
  const res = await fetch(`${API_BASE_URL}`);
  if (!res.ok) throw new Error('Failed to fetch projects');
  return res.json();
}
