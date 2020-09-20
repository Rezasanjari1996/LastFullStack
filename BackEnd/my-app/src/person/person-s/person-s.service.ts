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
}
