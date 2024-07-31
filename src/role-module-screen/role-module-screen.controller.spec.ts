import { Test, TestingModule } from '@nestjs/testing';
import { RoleModuleScreenController } from './role-module-screen.controller';
import { RoleModuleScreenService } from './role-module-screen.service';

describe('RoleModuleScreenController', () => {
  let controller: RoleModuleScreenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoleModuleScreenController],
      providers: [RoleModuleScreenService],
    }).compile();

    controller = module.get<RoleModuleScreenController>(RoleModuleScreenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
