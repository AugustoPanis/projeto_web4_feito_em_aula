const prisma = require("../config/prisma");

async function getAllEquipaments(){

        return await prisma.equipament.findPlany({
            orderBy:{id: "desc"}
        });
};

async function getEqipamentById(id) {
    return await prisma.equipament.findUnique({
        where:{
            id
        }
    });
    
}

async function createEquipament(data) {
    return await prisma.equipament.create({
        data
    });
    
};

async function updateEquipament(id,data) {
    return await prisma.equipament.update({
        where:{id}, data
    });
    
};
async function deleteEquipament(id,data) {
    return await prisma.equipament.delete({
        where:{id}
    });
    
};

module.exports = {
    getAllEquipaments,
    getEqipamentById,
    createEquipament,
    deleteEquipament,
    updateEquipament

}