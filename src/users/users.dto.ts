import { PartialType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateUserDto {
  @IsNumber()
  id: number;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsOptional()
  gender?: string;

  @IsBoolean()
  isMarried: boolean;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}

export class GetUserParamDto {
  @IsBoolean()
  @IsOptional()
  @Type(() => Boolean)
  isMarried: boolean;
}
