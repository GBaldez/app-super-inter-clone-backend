import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn }from 'typeorm';

@Entity()
export class Pix {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    status: string;

    @Column()
    value: number;

    @CreateDateColumn()
    createAt: Date;

    @UpdateDateColumn()
    createAt: Date;

}