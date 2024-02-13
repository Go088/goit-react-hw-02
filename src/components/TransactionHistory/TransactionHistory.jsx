import css from "./TransactionHistory.module.css";

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.table}>
      <thead>
        <tr>
          <th className={css.title}>Type</th>
          <th className={css.title}>Amount</th>
          <th className={css.title}>Currency</th>
        </tr>
      </thead>
      <tbody className={css.tBody}>
        {items.map((item) => (
          <tr key={item.id}>
            <td className={css.unit}>{item.type}</td>
            <td className={css.unit}>{item.amount}</td>
            <td className={css.unit}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
