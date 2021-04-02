import { useTransactionQuery } from '../components/client';

let nRenders = 0;

export default function TransactionQuery2() {
  const { data } = useTransactionQuery(
    (query) => {
      return query.human1.name;
    },
    {
      suspense: false,
    }
  );

  return (
    <div>
      {++nRenders}
      query2 {JSON.stringify(data)}
    </div>
  );
}
