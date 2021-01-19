import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface CreateTransactionDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  public getBalance(): Balance {
    const totalIncome = this.transactions
      .filter(({ type }) => type === 'income')
      .reduce((total, tra) => total + tra.value, 0);

    const totalOutcome = this.transactions
      .filter(({ type }) => type === 'outcome')
      .reduce((total, tra) => total + tra.value, 0);

    const total = totalIncome - totalOutcome;

    const totalBalance = {
      income: totalIncome,
      outcome: totalOutcome,
      total,
    };

    return totalBalance;
  }

  public create({ title, value, type }: CreateTransactionDTO): Transaction {
    const transaction = new Transaction({ title, value, type });
    this.transactions.push(transaction);
    return transaction;
  }
}

export default TransactionsRepository;
