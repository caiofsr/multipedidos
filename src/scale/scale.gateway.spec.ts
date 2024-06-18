import { Test, TestingModule } from '@nestjs/testing';
import { ScaleGateway } from './scale.gateway';

describe('ScaleGateway', () => {
  let gateway: ScaleGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScaleGateway],
    }).compile();

    gateway = module.get<ScaleGateway>(ScaleGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
