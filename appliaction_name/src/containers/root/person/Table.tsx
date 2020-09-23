import React, { FormEvent,useState } from 'react';
import { personDto } from "./../../../Method/interface";
import { GetAll } from '../../../apis/person/getall';
import 'bootstrap/dist/css/bootstrap.min.css';
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
    function DeleteHandler(e:React.FormEvent){

    }

    return (
        <div className="container-fluid text-right" >
            <table className="table table-striped text-right" style={{border: '1px solid black' ,textAlign: 'center'}}>
                <tr >
                    <th>شناسه</th>
                    <th>نام</th>
                    <th>نام خانوادگی</th>
                    <th>حذف</th>
                    <th>بروزرسانی</th>
                </tr>
                <tbody >
                {  list.map( (person, index) => {
           return (
            <tr key={ index } >
              <td scope="col" className="table-warning" style={{border: '1px solid black' ,textAlign: 'center'}}><h3>{ person.id }</h3></td>
              <td scope="col" className="table-primary" style={{border: '1px solid black' ,textAlign: 'center'}}><h3>{ person.name }</h3> </td>
              <td scope="col" className="table-success" style={{border: '1px solid black' ,textAlign: 'center'}}><h3>{ person.family}</h3></td>
              <td><button value={person.id} onClick={(e)=>DeleteHandler(e)} className="btn btn-outline-danger" >حذف</button></td>
              <td><button className="btn btn-outline-primary" >آپدیت</button></td>
            </tr>

          )
         }) }
                </tbody>
            </table>
            <button className="btn btn-primary" onClick={onsubmitGet}>نمایش اطلاعات</button>
         
        </div>
    );
}



export default Table;