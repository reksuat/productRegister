import Product from '../models/product.js';

export const store = async (req, res) => {
    try {
    const product = await Product.create(req.body);
    return res.status(201).json(product);
} catch (error) {
    console.error(error); 
    res.status(400).json({ error: 'Erro ao criar um produto' });
}
};

export const index = async (req, res) => {
    try {
        const product = await Product.find();
        return res.status(200).json(product);
    } catch (error) {
        return res.status(500).json({ error: error });
    }

    // try {
    //     const product = await Product.find();
    //     console.log("teste");

    //     res.status(200).json(product);
    // } catch (error) {
    //     res.status(400).json({ error: 'Erro ao buscar produto' });
    // }
    };
export const show = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    } catch (error) {
        res.status(404).json({ error: 'Produto não encontrado' });
    }
    };
