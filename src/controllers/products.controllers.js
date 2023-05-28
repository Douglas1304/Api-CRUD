import { getConnection, sql, queries } from "../database"
export const getProducts = async (req, res) => {

    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllProducts)
        console.log(result)
        res.json(result.recordset)
    } catch (error) {
        res.status(500)
        res.send(error.msg)
    }
}
export const createProducts = async (req, res) => {

    const { name, description } = req.body;
    let { quantity } = req.body;

    if (name == null || description == null) {
        return res.status(400).json({ msg: 'Bad Request .Please fill all fields' })
    }

    if (quantity == null) quantity = 0;

    try {
        const pool = await getConnection();
        await pool.request()
            .input("name", sql.VarChar, name)
            .input("description", sql.Text, description)
            .input("quantity", sql.Int, quantity)
            .query(queries.createNewProducts)

        res.json({ name, description, quantity })
    } catch (error) {
        res.status(500)
        res.send(error.msg)
    }
};

export const getProductsById = async (req, res) => {
    const { id } = req.params

    const pool = await getConnection()
    const result = await pool.request().input('id', id).query(queries.GetByID)
    console.log(result);
    res.send(result.recordset[0]);
};

export const deleteProductsById = async (req, res) => {
    const { id } = req.params

    const pool = await getConnection()
    const result = await pool.request().input('id', id).query(queries.deleteProduct);
    console.log(result);
    res.sendStatus(204);
};

export const getTotalProducts = async (req, res) => {
    const pool = await getConnection()
    const result = await pool.request().query(queries.getTotalProducts);
    res.json(result.recordset[0][''])
};

export const UpdateProductsById = async (req, res) => {
    const { name, description, quantity } = req.body;
    const { id } = req.params;
    if (name == null || description == null, quantity == null) {
        return res.status(400).json({ msg: 'Bad Request .Please fill all fields' })
    }

    const pool = await getConnection()
    await pool.request()
        .input("name", sql.VarChar, name)
        .input("description", sql.Text, description)
        .input("quantity", sql.Int, quantity)
        .input("id", sql.Int, id)
        .query(queries.updateProducts);

        res.json({name,description,quantity});
};