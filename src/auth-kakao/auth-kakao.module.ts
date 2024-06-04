import { Module } from '@nestjs/common';
import { AuthKakaoService } from './auth-kakao.service';
import { AuthKakaoController } from './auth-kakao.controller';
import { PrismaService } from '../prisma/prisma.service';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  providers: [JwtService, UsersService ,AuthKakaoService, PrismaService],
  controllers: [AuthKakaoController],
})
export class AuthKakaoModule {}