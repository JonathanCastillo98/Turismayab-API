import { Module } from '@nestjs/common';
import { TownsService } from './towns.service';
import { TownsController } from './towns.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TownModel } from 'src/models/town.model';
import { RegionModel } from 'src/models/region.model';
import { RegionsService } from 'src/regions/regions.service';

@Module({
  imports: [TypeOrmModule.forFeature([TownModel, RegionModel])],
  providers: [TownsService, RegionsService],
  controllers: [TownsController],
  exports : [TownsService, TypeOrmModule]
})
export class TownsModule {}
