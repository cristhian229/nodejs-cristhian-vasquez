import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    AutoIncrement,
    HasMany,
    ForeignKey,
    BelongsTo
} from 'sequelize-typescript';
import UserModel from './userModel';

@Table({
    tableName:'orders',
    timestamps:false
})

export default class OrderModel extends Model<OrderModel>{
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER
    })
    id!: number;

    @Column({
        type: DataType.DECIMAL,
        allowNull: false,
    })
    total!: number;

    @ForeignKey(() => UserModel)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    userId!: number;

    @BelongsTo(() => UserModel)
    user!: UserModel;
}