import { Module } from '@nestjs/common';
import { RegionsService } from './regions.service';
import { RegionsController } from './regions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegionModel } from 'src/models/region.model';
import { TownModel } from 'src/models/town.model';
import { TownsService } from 'src/towns/towns.service';


@Module({
  imports: [TypeOrmModule.forFeature([RegionModel, TownModel])],
  providers: [RegionsService, TownsService],
  controllers: [RegionsController],
  exports: [RegionsService, TownsService, TypeOrmModule]
})
export class RegionsModule {}
