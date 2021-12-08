import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn }from 'typeorm';

@Entity()
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    firstName: string;

    @Column()
    lastName: number;

    @Column()
    accountNumber: number;
    
    @Column()
    accountDigit: number;
    
    @Column()
    wallet: number;

    @Column()
    email: string;

    @Column()
    password: string;

}