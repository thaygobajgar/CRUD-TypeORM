import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  UpdateDateColumn,
  CreateDateColumn,
  OneToMany,
  ManyToOne,
} from "typeorm";
import { Address } from "./addresses.entity";
import { Categories } from "./categories.entity";
import { schedulesUserToProperties } from "./schedulesUserToProperties.entity";

@Entity("properties")
export class Properties {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ default: false })
  sold: boolean;

  @Column({ type: "float" })
  value: number;

  @Column({ type: "int" })
  size: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => Address, { nullable: false })
  @JoinColumn()
  address: Address;

  @ManyToOne(() => Categories, (category) => category.properties)
  category: Categories;

  @OneToMany(() => schedulesUserToProperties, (schedules) => schedules.property)
  userToProperties: schedulesUserToProperties[];
}
