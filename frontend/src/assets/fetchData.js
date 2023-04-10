const fetchData = async (urlApi, body) => {
  let response;
  if(body) {
    response = await fetch(urlApi, body);
  } else {
    response = await fetch(urlApi);
  }
  const data = await response.json();
  return data;
}

export { fetchData };