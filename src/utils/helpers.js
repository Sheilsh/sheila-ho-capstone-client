import axios from "../services/axios";
import routes from "../services/routes.json";

// --------- user api -----------
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
      `${routes.user}/${"6f141a6b-7424-4a2b-ba10-4d4c738f9a9c"}`
    );
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getUserBooking(id) {
  try {
    const response = await axios.get(
      `${routes.user}/${"6f141a6b-7424-4a2b-ba10-4d4c738f9a9c"}/booking`
    );
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
}

// -------- parking api --------
export async function getParking() {
  try {
    const response = await axios.get(`${routes.parking}`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
}

// export async function updateParkingEndTime() {
//   try {
//     const response = await axios.update(`${routes.parking}`);
//     if (response.status === 200) {
//       return response.data;
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

// -------- booking api ---------
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
    const response = await axios.get(
      `${routes.booking}/${"015bc2fb-12ed-4b95-8c05-31a94038b1a6"}`
    );
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getAvailability(data) {
  try {
    const response = await axios.get(routes.booking, data);
    if (response.status === 201) {
      return response;
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
