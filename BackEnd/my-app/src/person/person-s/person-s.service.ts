import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { promises } from 'dns';
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
   async Register(person:personDto):Promise<boolean>{
        //this.pepeol.push(person);
       // console.log(this.pepeol);
       try {
           const result=await this.usersRepository
           .createQueryBuilder()
           .insert()
           .values(person)
           .execute()
           return result !==undefined;
       }
        catch (error) {
            throw new HttpException({"message":"error server"},HttpStatus.INTERNAL_SERVER_ERROR);
           
       }
      
    }
    async GetAll():Promise<user[]>{
        //return this.pepeol;
        //this.usersRepository.find();
 let users= await this.usersRepository
 .createQueryBuilder()
 .select()
 .getMany();
 return users;
    }


    async Update(person:personDto):Promise<boolean>{
        console.log(person.id);
     const resutl=await this.usersRepository
     .createQueryBuilder()
     .update()
     .set({name:person.name,family:person.family})
     .where('id=:id',{id:person.id})
     .execute();
     console.log(resutl);
     return resutl !== undefined;
    }


    async Delete(id:number):Promise<boolean>{
    const result=this.usersRepository
    .createQueryBuilder()
    .delete()
    .where('id=:id',{id:id})
    .execute();
    return result !==undefined;
    }
}
