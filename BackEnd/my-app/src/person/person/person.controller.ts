import { PersonSService } from './../person-s/person-s.service';
import { Controller, Post, Body, Get, Res, Put, Delete, Param } from '@nestjs/common';
import { personDto } from "./../viewModel/PersonDto";
import { Response } from "express";

@Controller('person')
export class PersonController {
    constructor(private readonly PersonService:PersonSService){}
    @Post('create')
    Create(@Body() persons:personDto,@Res() res:Response){
        this.PersonService.Register(persons);
        res.status(200).json({list:this.PersonService.pepeol})
    }
    @Get('getall')
    getall(@Res() res:Response){
        let pepeole=this.PersonService.GetAll();
 res.status(200).json({list:pepeole}) ;
    }
    @Put('update')
    Edit(@Body() person:personDto,@Res() res:Response){
        if(this.PersonService.Update(person)){
            res.status(200).json({person:person})
        }
        else
        res.status(404).json({
            status:404,
            desc:"notfound"
        })  

    }
    @Delete('delete/:id')
    remove(@Param('id') id:number,@Res() res:Response){
        console.log(id);
        if(this.PersonService.Delete(id)) {
            res.status(200).json({des:"ok"})
        }
        res.status(404).json({
            status:404,
            desc:"notfound"
        })  

        
    }
}
