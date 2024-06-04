import { Module } from '@nestjs/common';
import { AuthKakaoService } from './auth-kakao.service';
import { AuthKakaoController } from './auth-kakao.controller';
import { PrismaService } from '../prisma/prisma.service';
import { UsersService } from 'src/users/users.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: "lastmorn",
    }),
  ],
  providers: [AuthKakaoService, PrismaService],
  controllers: [AuthKakaoController],
})
export class AuthKakaoModule {}