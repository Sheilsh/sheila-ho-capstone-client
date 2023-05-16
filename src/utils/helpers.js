import axios from "../services/axios";
import routes from "../services/routes.json";

// --------- USER api -----------
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

export async function getUserById(id) {
  try {
    const url = `${routes.user}/${"6f141a6b-7424-4a2b-ba10-4d4c738f9a9c"}`;
    const response = await axios.get(url);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getUserBooking(id) {
  try {
    const url = `${
      routes.user
    }/${"6f141a6b-7424-4a2b-ba10-4d4c738f9a9c"}/booking`;
    const response = await axios.get(url);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function editUser(id, data) {
  try {
    const url = `${routes.user}/${"6f141a6b-7424-4a2b-ba10-4d4c738f9a9c"}`;
    const response = await axios.put(url, data);
    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    console.log(error);
  }
}

// -------- PARKING api --------
export async function getParking() {
  try {
    const response = await axios.get(routes.parking);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
}

// // -------- PLATE api --------
export async function addPlateByUserId(userId, data) {
  try {
    const url = `${routes.plate}/${"6f141a6b-7424-4a2b-ba10-4d4c738f9a9c"}`;
    const response = await axios.post(url, data);
    if (response.status === 201) {
      return response;
    }
  } catch (error) {
    console.log(error);
  }
}

// -------- BOOKING api ---------
export async function getBooking() {
  try {
    const response = await axios.get(routes.booking);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getBookingById(id) {
  try {
    // const response = await axios.get(
    //   `${routes.booking}/${"015bc2fb-12ed-4b95-8c05-31a94038b1a6"}`
    // );
    const url = `${routes.booking}/${id}`;
    const response = await axios.get(url);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function addBooking(data) {
  try {
    const response = await axios.post(routes.booking, data);
    if (response.status === 201) {
      return response;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function deleteBooking(id) {
  try {
    const url = `${routes.booking}/${id}`;
    const response = await axios.delete(url);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
}
