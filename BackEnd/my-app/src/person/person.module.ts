import { Module } from '@nestjs/common';
import { PersonController } from './person/person.controller';
import { PersonSService } from './person-s/person-s.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { user } from 'src/Entities/user.entity';

@Module({
  
  imports: [TypeOrmModule.forFeature([user])],
  controllers: [PersonController],
  providers: [PersonSService]
})
export class PersonModule {}
