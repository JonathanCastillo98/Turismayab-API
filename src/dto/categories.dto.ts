import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CategoryDTO {
    
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsOptional()
    image?: string | null;
}