const equipamentService = require("../services/equipamentService");


async function createEquipament(req, res) {
    try {
        const result = await equipamentService.create(req.body);
        res.json(result);
    } catch (error) {
        return res.status(500).json({
            error: error.message
        });
    }
};
