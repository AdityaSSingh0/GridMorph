
import { supabase } from '@/integrations/supabase/client';

export interface BlockchainTransaction {
  id: string;
  user_id: string;
  transaction_hash: string;
  transaction_type: string;
  amount: number | null;
  status: string;
  created_at: string;
  updated_at: string;
}

export class BlockchainService {
  static async getTransactions(userId: string): Promise<BlockchainTransaction[]> {
    const { data, error } = await supabase
      .from('blockchain_transactions')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });
    
    if (error) {
      throw new Error(error.message);
    }
    
    return data || [];
  }
  
  static async initiateTransaction(transaction: {
    transactionType: string;
    amount: number;
    recipient?: string;
  }): Promise<BlockchainTransaction> {
    const { data, error } = await supabase.functions.invoke('blockchain-transaction', {
      body: transaction,
    });
    
    if (error) {
      throw new Error(error.message);
    }
    
    return data.transaction;
  }
  
  static async updateTransactionStatus(id: string, status: string): Promise<BlockchainTransaction> {
    const { data, error } = await supabase
      .from('blockchain_transactions')
      .update({ status, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single();
    
    if (error) {
      throw new Error(error.message);
    }
    
    return data;
  }
}
