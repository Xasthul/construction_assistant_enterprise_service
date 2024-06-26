import { Test, TestingModule } from '@nestjs/testing';
import { SitesController } from '../../../src/api/sites/sites.controller';

describe('SitesController', () => {
  let controller: SitesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SitesController],
    }).compile();

    controller = module.get<SitesController>(SitesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
