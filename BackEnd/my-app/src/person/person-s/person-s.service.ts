import { Injectable } from '@nestjs/common';
import { personDto } from "./../viewModel/PersonDto";

@Injectable()
export class PersonSService {
    public pepeol:personDto[]=[];
    Register(person:personDto){
        this.pepeol.push(person);
        console.log(this.pepeol);
    }
    GetAll():personDto[]{
        return this.pepeol;
    }
    Update(person:personDto):boolean{
        console.log('personDto:',person);
        var p:personDto=this.pepeol.find(x=>x.id==person.id);
        console.log('person:',p);
        if(!p){
            return false;
        }
        else{
            p.name=person.name;
            p.family=person.family;
            console.log('person:',person);
            return true;
        }
    }
    Delete(id:number){
        console.log('id:', id);
        var p:personDto=this.pepeol.find(x=>x.id==id );
        console.log('person:', p);
        if (!p) {
            return false;
        }
        else {
            let index :number= this.pepeol.indexOf(p); 
            console.log('person:', index);
            this.pepeol.splice(index,1);
           
            return true;
        }

    }
}
