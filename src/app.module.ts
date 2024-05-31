import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { TestsModule } from './tests/tests.module';
import { SubjectsModule } from './subjects/subjects.module';
import { QuestionsModule } from './questions/questions.module';
import { TestResultsModule } from './test-results/test-results.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [PrismaModule, TestsModule, SubjectsModule, QuestionsModule, TestResultsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
