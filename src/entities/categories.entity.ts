import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { Properties } from "./properties.entity";

@Entity("categories")
export class Categories {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 50, unique: true })
  name: string;

  @OneToMany(() => Properties, (property) => property.category)
  properties: Properties[];
}
