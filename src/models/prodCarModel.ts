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
    BelongsToMany
} from 'sequelize-typescript';
import ProductModel from './productModel';
import UserModel from './userModel';
import CartModel from './cartModel';


@Table({
    tableName:'orders',
    timestamps:false
})

export default class ProdCarModel extends Model<ProdCarModel>{
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER
    })
    id!: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    quantity!: number;

    @ForeignKey(() => ProductModel)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    productId!: number;

    @ForeignKey(() => CartModel)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    cartId!: number;

    @BelongsToMany(() => ProductModel, () => CartModel)
    product!: ProductModel
    cart!: CartModel

}