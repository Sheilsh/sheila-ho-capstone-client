import axios from "../services/axios";
import routes from "../services/routes.json";

// --------- USER api -----------
// export async function getUsers() {
//   try {
//     const response = await axios.get(routes.user);
//     if (response.status === 200) {
//       return response.data;
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

// // Example function modified to include the user ID
// export async function getUserById() {
//   try {
//     const userId = localStorage.getItem("userId");
//     if (!userId) {
//       // Handle the case when the user ID is not available
//       throw new Error("User ID not found");
//     }

//     const url = `${routes.user}/${userId}`;
//     const response = await axios.get(url);
//     if (response.status === 200) {
//       return response.data;
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

export async function getUsers() {
  try {
    const response = await axios.get(routes.user);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getUserById() {
  try {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      throw new Error("User ID not found");
    }

    const url = `${routes.user}/${userId}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

// Modify other API functions in a similar way to include the user ID
// For example:
export async function getUserBooking() {
  try {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      // Handle the case when the user ID is not available
      throw new Error("User ID not found");
    }

    const url = `${routes.user}/${userId}/booking`;
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
    const url = `${routes.user}/${id}`;
    const response = await axios.put(url, data);
    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    console.log(error);
  }
}

// -------- PARKING api --------
// export async function getParking() {
//   try {
//     const response = await axios.get(routes.parking);
//     if (response.status === 200) {
//       return response.data;
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

export async function getParking() {
  try {
    const response = await axios.get(routes.parking);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

// // -------- PLATE api --------
// export async function addPlateByUserId(userId, data) {
//   try {
//     const url = `${routes.plate}/${userId}`;
//     const response = await axios.post(url, data);
//     if (response.status === 201) {
//       return response;
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

export async function addPlateByUserId(userId, data) {
  try {
    const url = `${routes.plate}/${userId}`;
    const response = await axios.post(url, data);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

// -------- BOOKING api ---------
// export async function getBooking() {
//   try {
//     const response = await axios.get(routes.booking);
//     if (response.status === 200) {
//       return response.data;
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

// export async function getBookingById(id) {
//   try {
//     const url = `${routes.booking}/${id}`;
//     const response = await axios.get(url);
//     if (response.status === 200) {
//       return response.data;
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

export async function getBooking() {
  try {
    const response = await axios.get(routes.booking);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getBookingById(id) {
  try {
    const url = `${routes.booking}/${id}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
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

// ---- authentication ----

// export async function signup(formData) {
//   try {
//     const response = await axios.post(routes.signup, formData);
//     if (response.status === 200 && response.data) {
//       return response.data; // Return only the response data
//     }
//   } catch (error) {
//     console.log(error);
//     throw error;
//   }
// }

// export async function login(email, password) {
//   try {
//     console.log("Login email:", email);
//     console.log("Login password:", password);

//     const response = await axios.post(routes.login, { email, password });
//     console.log("Login response:", response);

//     if (response.status === 200 && response.data) {
//       const { userId, token } = response.data;
//       console.log("User ID:", userId);
//       localStorage.setItem("userId", userId);
//       localStorage.setItem("token", token);
//       return response.data;
//     }
//   } catch (error) {
//     console.log(error);
//     throw error;
//   }
// }

export async function signup(formData) {
  try {
    const response = await axios.post(routes.signup, formData);
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function login(email, password) {
  try {
    console.log("Login email:", email);
    console.log("Login password:", password);

    const response = await axios.post(routes.login, { email, password });
    console.log("Login response:", response);

    if (response.data) {
      const { userId, token } = response.data;
      console.log("User ID:", userId);
      localStorage.setItem("userId", userId);
      localStorage.setItem("token", token);
      return response.data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}
