import { PartialType } from '@nestjs/swagger';
import { CreateAuthKakaoDto } from './create-auth-kakao.dto';

export class UpdateAuthKakaoDto extends PartialType(CreateAuthKakaoDto) {}
