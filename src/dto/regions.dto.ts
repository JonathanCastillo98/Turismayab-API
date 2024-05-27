import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class RegionsDTO{
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    path: string;

    @IsString()
    @IsNotEmpty()
    color: string;
    
    @IsString()
    @IsNotEmpty()
    transform: string;
    
    @IsString()
    @IsNotEmpty()
    viewBox: string;

    @IsString()
    @IsOptional()
    image?: string;

    @IsString()
    @IsNotEmpty()
    description: string;
}