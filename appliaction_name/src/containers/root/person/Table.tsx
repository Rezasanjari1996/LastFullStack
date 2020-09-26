import React, { FormEvent,useState } from 'react';
import { personDto } from "./../../../Method/interface";
import { GetAll } from '../../../apis/person/getall';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { type } from 'os';
import { Delete } from '../../../apis/person/delete';
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
    async function DeleteHandler(e:any){
        
        let value:number=parseInt(e.target.value);
        if(value){
            if(window.confirm("آیا مطمئن هستید!")){
                e.preventDefault();
                let respons=await Delete(value);
                if(respons.status==200)
                alert("حذف با موفقیت انجام شد");
                console.log(respons);
            }
            window.location.reload()
        }
    }
    function UpdateHandler(e:any) {
        
        console.log("traget", e.target);
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
              <td>
                  
                      <button value={person.id} onClick={(e)=>DeleteHandler(e)} className="btn btn-outline-danger" >
                          حذف
                      </button>
                
                  </td>
              <td>
                  <Link to="/formupdate">
                  <button value={person.id} onClick={(e)=>UpdateHandler(e)} className="btn btn-outline-primary" >آپدیت</button>
                  </Link>
              </td>
            </tr>

          )
         }) }
                </tbody>
            </table>
            <div className="contianer">
                   <div className="row"> 
                  <div className="col">
                  <Link to="/form"><button className="btn btn-primary col">ثبت نام</button></Link> 
                   </div>
                  <div className="col">
                     <button className="btn btn-primary col" onClick={onsubmitGet}>نمایش اطلاعات</button>
                 </div>
                  </div>
            </div>
     
        

       
         
        </div>
    );
}



export default Table;