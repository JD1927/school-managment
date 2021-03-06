import {
  BaseEntity,
  Column,
  Entity,
  ObjectIdColumn,
  PrimaryColumn,
} from 'typeorm';

@Entity()
export class Student extends BaseEntity {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;
}
