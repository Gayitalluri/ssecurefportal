import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTransactions } from "../Redux/transactionSlice";

const Transactions = () => {
  const dispatch = useDispatch();
  const { transactions, loading, error } = useSelector((state) => state.transactions);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (user) {
      dispatch(fetchTransactions(user._id));
    }
  }, [dispatch, user]);

  return (
    <div>
      <h2>Transaction History</h2>
      {loading && <p>Loading transactions...</p>}
      {error && <p>{error}</p>}
      <ul>
        {transactions.map((txn) => (
          <li key={txn._id}>
            <p><strong>Amount:</strong> ${txn.amount}</p>
            <p><strong>Type:</strong> {txn.type}</p>
            <p><strong>Date:</strong> {new Date(txn.createdAt).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Transactions;
