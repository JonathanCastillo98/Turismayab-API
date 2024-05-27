import { IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator"

export class UsersDTO {
    @IsNotEmpty()
    @IsString()
    firstname: string
    
    @IsNotEmpty()
    @IsString()
    lastname: string
    
    @IsNotEmpty()
    @IsString()
    email: string
    
    @IsOptional()
    @IsBoolean()
    emailVerified: boolean
    
    @IsOptional()
    image?: string | null
    
    @IsOptional()
    age?: number | null
    
    @IsNotEmpty()
    @IsString()
    username: string
    
    @IsNotEmpty()
    @IsString()
    password: string
}