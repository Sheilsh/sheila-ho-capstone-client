import axios from "../services/axios";
import routes from "../services/routes.json";

export async function getUsers() {
  try {
    const response = await axios.get(routes.user);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getUser(id) {
  try {
    const response = await axios.get(
      `${routes.user}/${"098ac9d2-b96e-4761-a94c-50e74012c1f1"}`
    );
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
}
