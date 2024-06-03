import { forwardRef, Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { KakaoStrategy } from 'src/auth-kakao/kakao.strategy';
import { UsersModule } from 'src/users/users.module';
import { AuthKakaoService } from './auth-kakao.service';
import { AuthKakaoController } from './auth-kakao.controller';

@Module({
  imports: [
    forwardRef(() => UsersModule),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [AuthKakaoController],
  providers: [AuthKakaoService, KakaoStrategy],
  exports: [AuthKakaoService, PassportModule],
})
export class AuthKakaoModule {}