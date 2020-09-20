import { Module } from '@nestjs/common';
import { PersonController } from './person/person.controller';
import { PersonSService } from './person-s/person-s.service';

@Module({
  controllers: [PersonController],
  providers: [PersonSService]
})
export class PersonModule {}
