const express = require('express');
const app = express();
require('dotenv').config();
const authRoutes = require('./routes/authRoutes');
const catchAsync = require('./utils/catchAsync');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');



app.use(express.json());


// TRAITEMENT DE TOUTES LES ROUTES DU BACK
app.use('/api/v1/auth', authRoutes);

app.use('*', catchAsync(async (req, res, next) => {    
    throw new AppError(`can't find ${req.originalUrl} on this server`, 404)
}))

app.use(globalErrorHandler)


const PORT = process.env.APP_PORT || 4000;
app.listen(PORT, () => {
    console.log("Server is runing", PORT)
});