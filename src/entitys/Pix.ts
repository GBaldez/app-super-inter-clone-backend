import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn }from 'typeorm';
import { User } from './Users';

@Entity()
export class Pix {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    status: string;

    @ManyToOne(() => User, user => user.id)
    @JoinColumn()
    requestingUser: User;

    @ManyToOne(() => User, user => user.id, { nullable: true })
    payingUser: User;

    @Column()
    value: number;

    @CreateDateColumn()
    createAt: Date;

    @UpdateDateColumn()
    updateAt: Date;

}