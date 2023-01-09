import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  Timestamp,
} from "typeorm";
import { Properties } from "./properties.entity";
import { User } from "./user.entity";

@Entity("schedules_users_properties")
export class schedulesUserToProperties {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  date: Date;

  @Column()
  hour: string;

  @ManyToOne(() => Properties, (property) => property.userToProperties)
  property: Properties;

  @ManyToOne(() => User, (user) => user.userToProperties)
  user: User;
}
