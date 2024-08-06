import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    AutoIncrement,
    HasMany,
    ForeignKey,
    HasOne,
    BelongsTo
} from 'sequelize-typescript';
import OrderModel from './orderModel';
import CartModel from './cartModel';
import ProdCarModel from './prodCarModel';

@Table({
    tableName:'users',
    timestamps:false
})

export default class UserModel extends Model<UserModel> {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER
    })
    id!: number;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    email!: string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    password!: string

    @HasMany(() => OrderModel)
    order!: OrderModel;

    @HasOne(() => CartModel)
    cart!: CartModel;


}