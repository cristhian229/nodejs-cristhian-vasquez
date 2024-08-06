import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    AutoIncrement,
    HasMany,
    ForeignKey,
    BelongsTo,
    HasOne
} from 'sequelize-typescript';
import UserModel from './userModel';
import ProdCarModel from './prodCarModel';
import ProductModel from './productModel';


@Table({
    tableName:'orders',
    timestamps:false
})

export default class CartModel extends Model<CartModel>{
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER
    })
    id!: number;


    @ForeignKey(() => UserModel)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    userId!: number;

    @ForeignKey(() => ProdCarModel)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    prodcarId!: number;

    @ForeignKey(() => ProductModel)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    productId!: number;

    @BelongsTo(() => UserModel)
    user!: UserModel;

    @HasOne(() => ProdCarModel)
    prodcar!: ProdCarModel

}