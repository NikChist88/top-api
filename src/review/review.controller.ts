import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateRreviewDto } from './dto/create-review.dto';
import { ReviewService } from './review.service';

@Controller('review')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Post('create')
  async create(@Body() dto: CreateRreviewDto) {
    this.reviewService.create(dto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    this.reviewService.delete(id);
  }

  @Get('byProduct/:productId')
  async getByProduct(@Param('productId') productId: string) {
    this.reviewService.findByProductId(productId);
  }
}
