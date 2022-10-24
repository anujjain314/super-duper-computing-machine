async function callBackend(endpoint) {
  console.log("calling backend");
  const url = new URL(`http://127.0.0.1/${endpoint}`);
  const response = await fetch(url.toString());
  const data = await response.json();
  alert(data.value);
}

export default callBackend;
