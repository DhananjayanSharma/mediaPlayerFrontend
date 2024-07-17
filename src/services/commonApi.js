import axios from "axios"

export const commonAPI = async (httpRequest, url, reqBody) => {
    const reqConfig = {
        method: httpRequest,
        url,
        data: reqBody,
        headers: { "Content-Type": "Application/json" }
    }
    return await axios(reqConfig).then((result) => {
        return result
    }).catch((err) => {
        return err
    })
}
