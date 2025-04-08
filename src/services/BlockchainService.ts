
import { supabase } from '@/integrations/supabase/client';
import { Database } from '@/integrations/supabase/types';

type BlockchainTransaction = Database['public']['Tables']['blockchain_transactions']['Row'];
type BlockchainTransactionInsert = Database['public']['Tables']['blockchain_transactions']['Insert'];
type BlockchainTransactionUpdate = Database['public']['Tables']['blockchain_transactions']['Update'];

export interface BlockchainTransactionInterface {
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
  static async getTransactions(userId: string): Promise<BlockchainTransactionInterface[]> {
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
  }): Promise<BlockchainTransactionInterface> {
    const { data, error } = await supabase.functions.invoke('blockchain-transaction', {
      body: transaction,
    });
    
    if (error) {
      throw new Error(error.message);
    }
    
    return data.transaction;
  }
  
  static async updateTransactionStatus(id: string, status: string): Promise<BlockchainTransactionInterface> {
    const { data, error } = await supabase
      .from('blockchain_transactions')
      .update({ status, updated_at: new Date().toISOString() } as BlockchainTransactionUpdate)
      .eq('id', id)
      .select()
      .single();
    
    if (error) {
      throw new Error(error.message);
    }
    
    return data;
  }
}
