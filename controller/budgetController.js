export const calculateBudget = async (req, res) => {
  const { income } = req.body;
 
  if (income || isNaN(income) || income <= 0) {
    return res.status(400).json({ error: 'Please provide a valid income amount.' });
  }

  const needs = income * 0.5;
  const wants = income * 0.3;
  const savings = income * 0.2;

  res.json({
    totalIncome: income,
    breakdown: {
      needs,
      wants,
      savings,
    },
  });
}
