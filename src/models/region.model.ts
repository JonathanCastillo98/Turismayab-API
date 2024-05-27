import { Column, Entity, OneToMany } from "typeorm";
import { BaseModel } from "./base.model";
import { IRegion } from "src/interfaces/region.interface";
import { TownModel } from "./town.model";

@Entity('regions')
export class RegionModel extends BaseModel implements IRegion {
    @Column()
    name: string

    @Column()
    path: string

    @Column()
    color: string

    @Column()
    transform: string

    @Column()
    viewBox: string

    @Column({ nullable: true })
    image?: string

    @Column()
    description: string

    @OneToMany(() => TownModel, town => town.region)
    towns: TownModel[]
}