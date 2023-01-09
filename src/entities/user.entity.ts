import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { getRounds, hashSync } from "bcryptjs";
import { schedulesUserToProperties } from "./schedulesUserToProperties.entity";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 60 })
  name: string;

  @Column({ length: 60, unique: true })
  email: string;

  @Column({ length: 120 })
  password: string;

  @Column()
  isAdm: boolean;

  @DeleteDateColumn()
  deletedAt: Date;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => schedulesUserToProperties, (schedules) => schedules.user)
  userToProperties: schedulesUserToProperties[];

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    const isEncrypted = getRounds(this.password);
    if (!isEncrypted) {
      this.password = await hashSync(this.password, 10);
    }
  }
}

export { User };
