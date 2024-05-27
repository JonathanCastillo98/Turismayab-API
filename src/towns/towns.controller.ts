import { Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TownsService } from './towns.service';

@Controller('towns')
export class TownsController {
    constructor(
        private readonly townsService: TownsService
    ){}

    @Get('all')
    public getTowns() {
        return this.townsService.getTowns();
    }

    @Get('getTownsByRegionId/:regionId')
    public getTownsByRegionId( @Param('regionId') regionId: string ) {
        return this.townsService.getTownsByRegionId( regionId );
    }

    @Post('createTownsByRegionId/:regionId')
    public createTowns( @Param('regionId') regionId: string ) {
        return this.townsService.createTownsByRegionId( regionId );
    }

    @Delete('all')
    public deleteAllTowns() {
        return this.townsService.deleteAllTowns();
    }
}
