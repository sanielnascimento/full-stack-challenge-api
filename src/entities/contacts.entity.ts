import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from "typeorm";
import Client from "./clients.entity";

@Entity("contacts")
export default class Contact {
  @PrimaryGeneratedColumn("uuid") id: string;

  @Column({ length: 127 }) full_name: string;

  @Column({ length: 127, unique: true }) email: string;

  @Column() phone: number;

  @Column({ default: "Sem comentários!", length: 300 }) comment: string;

  @CreateDateColumn({ type: "date" }) createdAt: string | Date;

  @UpdateDateColumn({ type: "date" }) updatedAt: string | Date;

  @DeleteDateColumn({ type: "date", nullable: true })
  deletedAt?: string | Date | null;

  @ManyToOne(() => Client)
  client: Client;
}