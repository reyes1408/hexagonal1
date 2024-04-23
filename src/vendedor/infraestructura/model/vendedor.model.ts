import { DataType, Column, Model, Table } from "sequelize-typescript";

@Table({
    tableName: 'vendedores',
    timestamps: false
})

class ModelVendedor extends Model {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        // autoIncrement: true,
    }) public id !: number;

    @Column({
        type: DataType.STRING,
        allowNull: false
    }) public name !: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    }) public lastName !: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    }) public password !: string;

} export default ModelVendedor;