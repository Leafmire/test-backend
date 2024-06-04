import { Injectable } from '@nestjs/common';
import { CreateTestResultDto } from './dto/create-test-result.dto';
import { UpdateTestResultDto } from './dto/update-test-result.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TestResultsService {
  constructor(private prisma: PrismaService) { }

  async create(createTestResultDto: CreateTestResultDto) {
    return this.prisma.testResult.create({
      data: createTestResultDto,
    });
  }

  findAll() {
    return `This action returns all testResults`;
  }

  async findOne(userId: string, testId: string) {
    return this.prisma.testResult.findUnique({
      where: {
        result_id: {
          user_id: parseInt(userId), test_id: parseInt(testId)
        }
      },
    });
  }

  async update(updateTestResultDto: UpdateTestResultDto) {
  }

  remove(id: number) {
    return `This action removes a #${id} testResult`;
  }
}
