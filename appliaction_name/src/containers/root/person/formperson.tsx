import React, { FormEvent } from 'react';
import { personDto } from "./../../../Method/interface";
import { Create } from "../../../apis/person/create";
import 'bootstrap/dist/css/bootstrap.min.css';
const Form:React.FC = () =>{
 
    async function onsubmitAdd(e:React.FormEvent){
        e.preventDefault();
        let id:number=parseInt((document.getElementById('id') as HTMLInputElement).value);
        let name:string=(document.getElementById('name') as HTMLInputElement).value;
        let family:string=(document.getElementById('family') as HTMLInputElement).value;
        let person:personDto={
            id:id,
            name:name,
            family:family
        };
        let respons=await Create(person);
        console.log(respons);


    }

    return (
        <div className="container-fluid text-right"  >
           <form  onSubmit={(e)=>onsubmitAdd(e)}>
               <div className="form-group">
                   <label >    شناسه</label>
                    <input className="form-control  "  type="text" id="id"/>
               </div>

               <div className="form-group">
                    <label >    نام</label>
                    <input className="form-control " type="text" id="name"/>
               </div>
               <div className="form-group">
                    <label >نام خانوادگی</label>
                    <input className="form-control " type="text" id="family"/>  
               </div>
               <button className="btn btn-primary">create</button>
           </form>
        </div>
    );
}



export default Form;