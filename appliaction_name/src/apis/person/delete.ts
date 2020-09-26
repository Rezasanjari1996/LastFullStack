import { Fetch } from '../fetch';
import { FetchResult } from '../fetch.interface';

export async function Delete(id:number):Promise<FetchResult>{
    try {
        let url :string ='http://localhost:5000/person/delete/'+id;
        let response:FetchResult = await Fetch(url,
            {
                method: 'DELETE',
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