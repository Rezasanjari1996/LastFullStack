import { Test, TestingModule } from '@nestjs/testing';
import { PersonSService } from './person-s.service';

describe('PersonSService', () => {
  let service: PersonSService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PersonSService],
    }).compile();

    service = module.get<PersonSService>(PersonSService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
