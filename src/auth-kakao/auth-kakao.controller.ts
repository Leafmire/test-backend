import { AuthGuard } from '@nestjs/passport';

@Get('kakao')	// 카카오 서버를 거쳐서 도착하게 될 엔드포인트
@UseGuards(AuthGuard('kakao'))	// kakao.strategy를 실행시켜 줍니다.
@HttpCode(301)
async kakaoLogin(@Req() req: Request, @Res() res: Response) {
  const { accessToken, refreshToken } = await this.authService.getJWT(
    req.user.kakaoId,
  );
  res.cookie('accessToken', accessToken, { httpOnly: true });
  res.cookie('refreshToken', refreshToken, { httpOnly: true });
  res.cookie('isLoggedIn', true, { httpOnly: false });
  return res.redirect(this.configService.get('CLIENT_URL'));
}
