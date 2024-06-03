import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-kakao';
import { AuthKakaoService } from './auth-kakao.service';

@Injectable()
export class KakaoStrategy extends PassportStrategy(Strategy, 'kakao') {
  constructor(private readonly authService: AuthKakaoService) {
    super({
      clientID: process.env.KAKAO_CLIENT_ID,
      callbackURL: process.env.KAKAO_CALLBACK_URL,
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: any, done: any): Promise<any> {
    const user = await this.authService.validateKakaoUser(profile);
    done(null, user);
  }
}