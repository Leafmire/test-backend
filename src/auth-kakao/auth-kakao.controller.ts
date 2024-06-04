import { Controller, Post, Body } from '@nestjs/common';
import { AuthKakaoService } from './auth-kakao.service';
import { CreateUserDto } from '../users/dto/create-user.dto';

@Controller('auth-kakao')
export class AuthKakaoController {
  constructor(private readonly authService: AuthKakaoService) {}

  @Post('kakao')
  async kakaoLogin(@Body() createUserDto: CreateUserDto) {
    const user = await this.authService.validateKakaoUser(createUserDto);
    const jwt = await this.authService.login(user);
    return { success: true, token: jwt.access_token };
  }
}