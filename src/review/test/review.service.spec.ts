import { Test, TestingModule } from '@nestjs/testing';
import { ReviewService } from '../review.service';
import { getModelToken } from '@nestjs/mongoose';
import { Types } from 'mongoose';

describe('ReviewService', () => {
  let service: ReviewService;
  const exec = { exec: jest.fn() };
  const reviewFactory = () => ({ find: () => exec });

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ReviewService,
        { useFactory: reviewFactory, provide: getModelToken('ReviewModel') },
      ],
    }).compile();

    service = module.get<ReviewService>(ReviewService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('findByProductId', async () => {
    const id = new Types.ObjectId().toHexString();
    reviewFactory()
      .find()
      .exec.mockReturnValueOnce([{ productId: id }]);
    const res = await service.findByProductId(id);
    expect(res[0].productId).toBe(id);
  });
});