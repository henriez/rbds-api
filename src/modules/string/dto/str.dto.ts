import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class StrDTO {
  @IsString()
  @IsNotEmpty()
  @MaxLength(2, { context: { maxLength: 2 } }) // change for more characters
  value: string;
}
