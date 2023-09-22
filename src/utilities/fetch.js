import { useQuery } from '@tanstack/react-query';

const url = "https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php";

const fetchJson = async (url) => {
  const response = await fetch(url);
  if (!response.ok) throw response;
  return response.json();
};

export const useJsonQuery = (url) => {
  const { data, isLoading, error } = useQuery([url], () => fetchJson(url));
  return [ data, isLoading, error ];
};