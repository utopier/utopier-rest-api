import {Entity,BaseEntity, PrimaryGeneratedColumn, Column, OneToMany,CreateDateColumn,UpdateDateColumn} from 'typeorm'
import Todo from './Todo'

@Entity()
class User extends BaseEntity{
    @PrimaryGeneratedColumn() id: number;

    @Column({ type: "text" })
    userName: string;

    @Column({ type: "text", nullable: true })
    password: string;

    @OneToMany(type => Todo, todo => todo.user)
    todos: Todo[];

    @CreateDateColumn() createdAt: string;

    @UpdateDateColumn() updatedAt: string;
}

export default User;