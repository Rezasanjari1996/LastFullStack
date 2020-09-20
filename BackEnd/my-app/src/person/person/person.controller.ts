import { PersonSService } from './../person-s/person-s.service';
import { Controller, Post, Body, Get, Res } from '@nestjs/common';
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
}
