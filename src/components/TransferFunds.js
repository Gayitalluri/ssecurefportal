import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { transferFunds } from "../Redux/transactionSlice";

const TransferFunds = () => {
  const [receiverId, setReceiverId] = useState("");
  const [amount, setAmount] = useState("");
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.transactions);
  const user = useSelector((state) => state.auth.user);

  const handleTransfer = (e) => {
    e.preventDefault();
    if (!user) return;

    dispatch(transferFunds({ senderId: user._id, receiverId, amount }));
  };

  return (
    <div>
      <h2>Transfer Funds</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleTransfer}>
        <input
          type="text"
          placeholder="Receiver ID"
          value={receiverId}
          onChange={(e) => setReceiverId(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>{loading ? "Processing..." : "Transfer"}</button>
      </form>
    </div>
  );
};

export default TransferFunds;
