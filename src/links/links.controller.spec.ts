import { Test, TestingModule } from '@nestjs/testing';
import { LinksController } from './links.controller';

describe('LinksController', () => {
  let controller: LinkController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LinkController],
    }).compile();

    controller = module.get<LinkController>(LinkController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
