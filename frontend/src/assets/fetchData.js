const fetchData = async (urlApi) => {
  const response = await fetch(urlApi);
  const data = await response.json();
  return data;
}

export { fetchData };