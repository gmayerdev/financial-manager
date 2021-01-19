import TransactionsRepository from '../repositories/TransactionsRepository';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

class GetBalanceService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionRepositort: TransactionsRepository) {
    this.transactionsRepository = transactionRepositort;
  }

  public execute(): Balance {
    const balance = this.transactionsRepository.getBalance();
    return balance;
  }
}

export default GetBalanceService;
