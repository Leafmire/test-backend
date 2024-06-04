
export class CreateTestResultDto {
    test_id: number
    score: number;
    user: {
        connect: {
            id: number;
        }
    }
}
