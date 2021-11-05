module.exports = (sequelize, type) => {
    return sequelize.define(
        "user", {
            dbid: {
                type: type.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nombre: {
                type: type.STRING(100),
                allowNull: false
            },
            contrasenia: {
                type: type.STRING(255),
                allowNull: false
            },
            estado: {
                type: type.CHAR(1),
                allowNull: false,
                defaultValue: "A"
            }
        }, {
            tableName: "USUARIO",
            timestamps: true
        }
    );
};