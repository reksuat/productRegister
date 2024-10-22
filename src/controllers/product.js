import Product from '../models/product.js';

export const store = async (req, res) => {
try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
} catch (error) {
    res.status(400).json({ error: 'Erro ao criar um produto' });
}
};
export const show = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    } catch (error) {
        res.status(404).json({ error: 'Produto não encontrado' });
    }
    };