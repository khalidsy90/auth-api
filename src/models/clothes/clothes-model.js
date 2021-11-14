const ClothesModel=(sequelize,DataTypes)=>{
    sequelize.define('clothes',{
        name: { type: DataTypes.STRING, allowNull: false },
        color: { type: DataTypes.STRING, allowNull: false },
        size: { type: DataTypes.STRING, allowNull: false }
    })
}

module.exports = ClothesModel;