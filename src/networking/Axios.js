import ax from "axios"
import {getURL} from "./Server";

const Axios = ax.create({
    baseURL: getURL(),
})

export default Axios
