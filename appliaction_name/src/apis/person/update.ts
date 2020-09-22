import { Fetch } from '../fetch';
import { FetchResult } from '../fetch.interface';
import { personDto } from "../../Method/interface";

export async function Update(dto:personDto):Promise<FetchResult>{
    try {
        let url :string ='http://localhost:5000/person/update'
        let response:FetchResult = await Fetch(url,
            {
                method: 'PUT',
                body: JSON.stringify(dto),
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