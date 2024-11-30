import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { Sequelize, DataTypes, Op } from 'sequelize';

const app = express();
app.use(cors());
app.use(bodyParser.json());

const sequelize = new Sequelize('equipmentsdb', 'root', 'AXProduct2024', {
    host: 'localhost',
    port: '3304',
    dialect: 'mysql',
});

// Модель для таблиці
const Equipment = sequelize.define('Equipment', {
    title: { type: DataTypes.STRING, allowNull: false },
    category: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.FLOAT, allowNull: false },
    brand: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    photo: { type: DataTypes.STRING, allowNull: false },
}, { tableName: 'equipments', timestamps: false });

// Підключення до бази даних
sequelize.authenticate()
    .then(() => console.log('Database connected'))
    .catch(err => console.error('Error connecting to the database:', err));

// Маршрут для отримання обладнання
app.get('/equipments', async (req, res) => {
    try {
        const { category, priceRange, brand, searchQuery } = req.query;

        const whereClause = {};

        if (category) whereClause.category = category;
        if (priceRange) {
            const [min, max] = priceRange.split('-').map(Number);
            if (!isNaN(min) && !isNaN(max)) {
                whereClause.price = { [Op.between]: [min, max] };
            }
        }
        if (brand) whereClause.brand = brand;
        if (searchQuery) whereClause.title = { [Op.like]: `%${searchQuery}%` };

        const equipments = await Equipment.findAll({ where: whereClause });
        res.status(200).json(equipments);
    } catch (error) {
        console.error('Error fetching equipments:', error);
        res.status(500).json({ error: 'Failed to fetch equipments' });
    }
});

const PORT = 5001;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
