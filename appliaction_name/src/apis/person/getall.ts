import { Fetch } from '../fetch';
import { FetchResult } from '../fetch.interface';
import { personDto } from "../../Method/interface";

export async function GetAll():Promise<FetchResult>{
    try {
        let url :string ='http://localhost:5000/person/getall'
        let response:FetchResult = await Fetch(url,
            {
                method: 'GET',
                headers:{
                    "Content-Type": 'application/json',                    
                }
            }); 
        console.log(response);
        return response;
  
    } catch (error) {
        console.log("error",error);
        return {
            body: "fail",
            status: 0
        }
    }
}