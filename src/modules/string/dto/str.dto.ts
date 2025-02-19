import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class StrDTO {
  @IsString()
  @IsNotEmpty()
  @MaxLength(5, { context: { maxLength: 5 } }) // change for more characters
  value: string;
}
