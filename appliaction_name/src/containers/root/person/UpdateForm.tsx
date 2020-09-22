import React, { FormEvent } from 'react';
import { personDto } from "./../../../Method/interface";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Update } from '../../../apis/person/update';
const FormUpdate:React.FC = () =>{
 
    async function onsubmitupdate(e:React.FormEvent){
        e.preventDefault();
        let id:number=parseInt((document.getElementById('id') as HTMLInputElement).value);
        let name:string=(document.getElementById('name') as HTMLInputElement).value;
        let family:string=(document.getElementById('family') as HTMLInputElement).value;
        let person:personDto={
            id:id,
            name:name,
            family:family
        };
        let respons=await Update(person);
        console.log(respons);


    }

    return (
        <div className="container-fluid text-right"  >
           <form  onSubmit={(e)=>onsubmitupdate(e)}>
               <div className="form-group">
                   <label >شناسه</label>
                    <input className="form-control  "  type="text" id="id"/>
               </div>

               <div className="form-group">
                    <label >نام</label>
                    <input className="form-control " type="text" id="name"/>
               </div>
               <div className="form-group">
                    <label >نام خانوادگی</label>
                    <input className="form-control " type="text" id="family"/>  
               </div>
               <button className="btn btn-primary">بروزرسانی</button>
           </form>
        </div>
    );
}
export default FormUpdate;