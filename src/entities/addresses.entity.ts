import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("addresses")
export class Address {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 50 })
  district: string;

  @Column({ length: 10 })
  zipCode: string;

  @Column({ nullable: true, length: 9 })
  number: string;

  @Column({ length: 50 })
  city: string;

  @Column({ length: 2 })
  state: string;
}
