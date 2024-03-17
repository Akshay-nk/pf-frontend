//register

import { BASEURL } from "./BaseURL"
import { commonAPI } from "./CommonAPi"



export const registerAPI = async(user)=>{
    return await commonAPI("POST",`${BASEURL}/user/register`,user,"")
}

//login

export const loginAPI = async(user)=>{
    return await commonAPI("POST",`${BASEURL}/user/login`,user,"")
}

//add projects


export const addProjectAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("POST",`${BASEURL}/projects/add`,reqBody,reqHeader)
}