import { Body, Controller, Get, Post } from '@nestjs/common';
import { RegionsService } from './regions.service';
import { RegionsDTO } from 'src/dto/regions.dto';

@Controller('regions')
export class RegionsController {
    constructor(
        private readonly regionsService: RegionsService,
    ) {}

    @Post('create')
    public createRegion(@Body() body: RegionsDTO){
        return this.regionsService.createRegion(body);
    }

    @Get('all')
    public getAllRegions(){
        return this.regionsService.getAllRegions();
    }
}
