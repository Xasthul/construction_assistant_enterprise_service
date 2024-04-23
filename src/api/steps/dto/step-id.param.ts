import { ApiProperty } from "@nestjs/swagger";
import { IsUUID } from "class-validator";

export class StepIdParam {

    @IsUUID()
    @ApiProperty({ description: 'Step id' })
    id: string
}
