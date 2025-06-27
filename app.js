import express from "express";
import budgetRoute from './routes/budgetRoute.js';

const port = 3000;

const app = express();
app.use(express.json());

app.use('/api/budget', budgetRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
