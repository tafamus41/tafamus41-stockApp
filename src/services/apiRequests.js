import axios from "axios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify"
export const login = async (userData) => {
  const BASE_URL = "https://14104.fullstack.clarusway.com/"
//   const {data} = await axios.post(`${BASE_URL}/auth/login`, userData)
  try {
    const { data } = await axios.post(
      `${BASE_URL}/auth/login`,
      userData
    )
    toastSuccessNotify("Login işlemi başarılı")
    // dispatch(loginSuccess(data))
    // navigate("stock")
    console.log(data)
  } catch (error) {
    toastErrorNotify("Login işlemi başarısız")
    // dispatch(fetchFail())
    console.log(error)
  }
}

