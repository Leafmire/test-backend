import { ApiProperty } from '@nestjs/swagger';

export class CreateQuestionDto {
    @ApiProperty()
    question_text: string;
  
    @ApiProperty()
    answer: number;

    @ApiProperty()
    choice1: string;

    @ApiProperty()
    choice2: string;

    @ApiProperty()
    choice3: string;

    @ApiProperty()
    choice4: string;

    @ApiProperty()
    choice5: string;

    @ApiProperty()
    test_id: number;
}
