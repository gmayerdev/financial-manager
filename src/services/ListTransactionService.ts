import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

class ListTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionRepositort: TransactionsRepository) {
    this.transactionsRepository = transactionRepositort;
  }

  public execute(): Transaction[] {
    return this.transactionsRepository.all();
  }
}

export default ListTransactionService;
