import {Entity,BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne,CreateDateColumn,UpdateDateColumn} from 'typeorm'
import User from './User'

@Entity()
class Todo extends BaseEntity{
    @PrimaryGeneratedColumn() id: number;

    @Column({ type: "text" })
    text: string;

    @Column({ type: "boolean", default:false })
    done: boolean;
    
    @ManyToOne(type => User, user => user.todos)
    user: User;

    @CreateDateColumn() createdAt: string;

    @UpdateDateColumn() updatedAt: string;

}

export default Todo;