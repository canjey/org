import axios from "axios";

export default function axiosInstance() {
  const token = localStorage.getItem("token");
  return axios.create({
    baseURL:
      "http://m-subscribe-dev.eba-kpdc2e68.eu-central-1.elasticbeanstalk.com/",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    }
  });
}
