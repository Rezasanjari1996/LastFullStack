import React, { FormEvent } from 'react';
import { personDto } from "./../../../Method/interface";
import { Create } from "../../../apis/person/create";
import { create } from 'domain';
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
        <div >
           <form onSubmit={(e)=>onsubmitAdd(e)}>
               id:<input type="text" id="id"/>
               <br/>
               name:<input type="text" id="name"/>
               <br/>
              family: <input type="text" id="family"/>
               <button>create</button>
           </form>
        </div>
    );
}



export default Form;