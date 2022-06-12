import { useContext } from "react";
import ExpensesOutput from "../components/Expenses/ExpensesOutput";
import { ExpenseContext } from "../store/expenses-context";

const AllExpenses = () => {
  const expenseContext = useContext(ExpenseContext);

  return (
    <ExpensesOutput
      expensesPeriod={"Total"}
      expenses={expenseContext.expenses}
      fallbackText="No registered expenses found"
    />
  );
};

export default AllExpenses;
