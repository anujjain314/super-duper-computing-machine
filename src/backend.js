async function callBackend(endpoint) {
  console.log("calling backend");
  const url = new URL(
    `https://anujjain314-projects-app.herokuapp.com/${endpoint}`
  );
  const response = await fetch(url.toString());
  const data = await response.json();
  alert(data.value);
}

export default callBackend;
