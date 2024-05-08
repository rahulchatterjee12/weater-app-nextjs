import axios from "axios";

const API_KEY = "895284fb2d2c50a520ea537456963d9c";

export default async function getWeather(city) {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    if (response.status === 200) {
      return response.data;
    } else {
      return response.status;
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
