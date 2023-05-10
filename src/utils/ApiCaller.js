import axios from "axios";

async function ApiCaller() {
  try {
    const response = await axios.get("https://raw.githubusercontent.com/nahzul/znet/main/forecast.json");
    return response.data;
  } catch (error) {
    console.log("API Call Error! " + error);
  }
}

export default ApiCaller;
