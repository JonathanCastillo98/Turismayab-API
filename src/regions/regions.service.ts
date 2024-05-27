import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RegionsDTO } from 'src/dto/regions.dto';
import { RegionModel } from 'src/models/region.model';
import { ErrorManager } from 'src/utils/error.util';
import { Repository } from 'typeorm';

@Injectable()
export class RegionsService {
    constructor(
        @InjectRepository(RegionModel)
        private readonly regionRepository: Repository<RegionModel>,
    ) {}

    public async createRegion(body: RegionsDTO): Promise<RegionModel> {
        try {
            return await this.regionRepository.save(body);
        } catch (error) {
            throw ErrorManager.createSignatureError(error.message);
        }
    }

    public async getAllRegions(): Promise<RegionModel[]> {
        try {
            const regions = await this.regionRepository.find();
            if (regions.length === 0) {
                throw new ErrorManager({
                    type: 'NOT_FOUND',
                    message: 'No regions found',
                });
            }
            return regions;
        } catch (error) {
            throw ErrorManager.createSignatureError(error.message);
        }
    }
    
    public async findRegionById(regionId: string): Promise<RegionModel> {
        try {
            const region = await this.regionRepository.findOne({ where: { id: regionId } });
            if(!region) throw new ErrorManager({ type: 'NOT_FOUND', message: 'Region not found' });
            return region;
        } catch (error) {
            throw ErrorManager.createSignatureError(error.message);
        }
    }
}
