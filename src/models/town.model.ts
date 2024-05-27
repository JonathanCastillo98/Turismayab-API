import { ITown } from "src/interfaces/town.interface";
import { BaseModel } from "./base.model";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { RegionModel } from "./region.model";

@Entity("towns")
export class TownModel extends BaseModel implements ITown{
    @Column()
    path: string;

    @Column()
    name: string;

    @Column()
    color: string;

    @Column({nullable: true})
    description?: string;

    @Column({nullable: true})
    content?: string;

    @Column({nullable: true})
    thumbnail?: string;

    @Column({nullable: true})
    gallery?: string;

    @Column({type: "boolean", default: false})
    isPuebloMagico?: boolean;

    @ManyToOne(() => RegionModel, (region) => region.towns)
    @JoinColumn({name: "region_id"})
    region: RegionModel;
}