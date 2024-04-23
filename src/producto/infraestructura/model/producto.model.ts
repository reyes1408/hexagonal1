import { DataType, Column, Model, Table } from "sequelize-typescript";

@Table({
    tableName: 'producto',
    timestamps: false
})

class ModelProducto extends Model {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
    }) public id !: number;

    @Column({
        type: DataType.STRING,
        allowNull: false
    }) public nombre !: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    }) public cantidad !: number;

    @Column({
        type: DataType.STRING,
        allowNull: false
    }) public precio !: number;
}

export default ModelProducto;