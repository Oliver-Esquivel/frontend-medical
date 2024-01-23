import axios from "axios";
import { routeApi } from "../routes/route";

export const loginRequest = user  => axios.post(`${routeApi}/`, user)