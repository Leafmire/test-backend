import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthKakaoService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateKakaoUser(profile: any) {
    const kakaoId = profile.id;
    let user = await this.usersService.findOneByKakaoId(kakaoId);
    if (!user) {
      user = await this.usersService.create({
        user_name: profile.username,
        user_email: profile._json.kakao_account.email,
        platform: 'KAKAO',
        role: 'USER',
      });
    }
    return user;
  }

  async login(user: any) {
    const payload = { user_id: user.user_id, user_name: user.user_name };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}