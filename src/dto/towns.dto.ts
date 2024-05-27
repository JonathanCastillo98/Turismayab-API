import { IsArray, IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class TownsDTO {
    @IsString()
    @IsNotEmpty()
    path: string;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    color: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsString()
    @IsOptional()
    content?: string;

    @IsString()
    @IsOptional()
    thumbnail?: string;

    @IsString()
    @IsOptional()
    gallery?: string;

    @IsBoolean()
    @IsOptional()
    isPuebloMagico?: boolean;
}