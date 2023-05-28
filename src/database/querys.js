export const queries = {
    getAllProducts: 'SELECT * FROM Products',
    createNewProducts: 'INSERT INTO Products (Name,Description,Quantity) VALUES (@name,@description,@quantity)',
    GetByID: 'SELECT * FROM Products WHERE Id=@id',
    deleteProduct: 'DELETE FROM Products where Id=@id',
    getTotalProducts: 'SELECT COUNT(*) FROM Products ',
    updateProducts: 'UPDATE Products SET Name=@name, Description=@description, Quantity=@quantity WHERE Id=@id'
}