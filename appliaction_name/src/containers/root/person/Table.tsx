import React, { FormEvent,useState } from 'react';
import { personDto } from "./../../../Method/interface";
import { Create } from "../../../apis/person/create";
import { create } from 'domain';
import { GetAll } from '../../../apis/person/getall';
const Table:React.FC = () =>{
    const [count, setCount] = useState(0);
 const [list,setstate]=useState<personDto[] >([{id:1,name:"reaza",family:"sanjari"}]);
 let list1:personDto[]=[];

    async function onsubmitGet(e:React.FormEvent){
        e.preventDefault();
     
        let respons=await GetAll();
        console.log(typeof respons.body.list);
        list1=respons.body.list;
        setstate(respons.body.list) ;
        console.log(list1);
        //setstate(respons.body.list.id);
        //console.log(respons.body.list.name);


    }

    return (
        <div onLoad={onsubmitGet}>
            <button onClick={onsubmitGet}>show information</button>
            <table style={{border: '1px solid black' ,textAlign: 'center'}}>
                <tr >
                    <th>id</th>
                    <th>name</th>
                    <th>family</th>
                </tr>
                <tbody >
                {  list.map( (person, index) => {
           return (
            <tr key={ index } >
              <td style={{border: '1px solid black' ,textAlign: 'center'}}><h1>{ person.id }</h1></td>
              <td style={{border: '1px solid black' ,textAlign: 'center'}}><h1>{ person.name }</h1> </td>
              <td style={{border: '1px solid black' ,textAlign: 'center'}}><h1>{ person.family}</h1></td>
              
            </tr>
          )
         }) }
                </tbody>
            </table>
         
        </div>
    );
}



export default Table;