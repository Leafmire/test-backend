import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Injectable()
export class AuthKakaoService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateKakaoUser(createUserDto: CreateUserDto) {
    const { kakaoId, name } = createUserDto;
    let user = await this.usersService.findOneByKakaoId(kakaoId);
    if (!user) {
      user = await this.usersService.create({
        kakaoId,
        name,
        // email: profile?.kakao_account?.email || null, // 필요하다면 이메일 추가
      });
    }
    return user;
  }

  async login(user: any) {
    const payload = { id: user.kakaoId, name: user.name };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}