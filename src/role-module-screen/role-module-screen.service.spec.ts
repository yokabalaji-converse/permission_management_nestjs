import { Test, TestingModule } from '@nestjs/testing';
import { RoleModuleScreenService } from './role-module-screen.service';

describe('RoleModuleScreenService', () => {
  let service: RoleModuleScreenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoleModuleScreenService],
    }).compile();

    service = module.get<RoleModuleScreenService>(RoleModuleScreenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
