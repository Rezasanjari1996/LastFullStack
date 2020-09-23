import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('users')
export class user{
    @PrimaryColumn({name:'id'})
    id:number;

    @Column({name:'name'})
    name:string;

    @Column({name:'family'})
    family:string
}