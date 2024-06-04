import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { TestResultsService } from './test-results.service';
import { CreateTestResultDto } from './dto/create-test-result.dto';
import { UpdateTestResultDto } from './dto/update-test-result.dto';

@Controller('test-results')
export class TestResultsController {
  constructor(private readonly testResultsService: TestResultsService) {}

  @Post()
  create(@Body() createTestResultDto: CreateTestResultDto) {
    return this.testResultsService.create(createTestResultDto);
  }

  @Get()
  findAll() {
    return this.testResultsService.findAll();
  }

  @Get(':user_id/:test_id')
  findOne(@Param('user_id') userId: string, @Param('test_id') testId: string
  ) {
    return this.testResultsService.findOne(userId, testId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTestResultDto: UpdateTestResultDto) {
    return this.testResultsService.update(updateTestResultDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testResultsService.remove(+id);
  }
}
