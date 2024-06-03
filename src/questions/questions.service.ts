import { Injectable } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class QuestionsService {
  constructor(private prisma: PrismaService) {}

  create(createQuestionDto: CreateQuestionDto) {
    return this.prisma.question.create({ data: createQuestionDto });
  }

  findAll() {
    return this.prisma.question.findMany();
  }

  findOne(id: number) {
    return this.prisma.question.findUnique({ where: { question_id: id } });
  }

  update(id: number, updateQuestionDto: UpdateQuestionDto) {
    
  }

  remove(id: number) {
  }
}
