const API = "https://randomuser.me/api/";

const getData = async (id) => {
  console.log(process.env);
  const apiURl = id ? `${API}${id}` : API;
  try {
    const response = await fetch(apiURl);
    const data = await response.json();
    return data.results[0];
  } catch (error) {
    console.log("Fetch Error", error);
  }
};

export default getData;
