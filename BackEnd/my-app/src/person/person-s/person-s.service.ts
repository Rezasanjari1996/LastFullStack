import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { user } from 'src/Entities/user.entity';
import { Repository } from 'typeorm';
import { personDto } from "./../viewModel/PersonDto";

@Injectable()
export class PersonSService {
    constructor(
        @InjectRepository(user)
        private usersRepository: Repository<user>,
      ) {}
    public pepeol:personDto[]=[];
    Register(person:personDto){
        this.pepeol.push(person);
        console.log(this.pepeol);
    }
    async GetAll():Promise<user[]>{
        //return this.pepeol;
 let users= await this.usersRepository.find();
 return users;
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
