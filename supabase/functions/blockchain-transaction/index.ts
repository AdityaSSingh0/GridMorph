
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.43.0";

// Define allowed origins for CORS
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
}

// Mock blockchain transaction interface
interface Transaction {
  userId: string;
  transactionType: string;
  amount: number;
  recipient?: string;
}

serve(async (req: Request) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Get the Authorization header from the request
    const authHeader = req.headers.get('Authorization');
    if (!authHeader) {
      return new Response(JSON.stringify({ error: 'No authorization header' }), {
        status: 401,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Create a Supabase client with the Auth header
    const supabaseUrl = 'https://utidymwvrwcpoibyzxsm.supabase.co';
    const supabaseKey = req.headers.get('apikey') || '';
    const supabase = createClient(supabaseUrl, supabaseKey, {
      global: {
        headers: {
          Authorization: authHeader,
        },
      },
    });

    // Get the user from the auth header
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      return new Response(JSON.stringify({ error: 'Invalid user token' }), {
        status: 401,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Process the request body
    const { transactionType, amount, recipient } = await req.json() as Transaction;

    // Generate a mock blockchain transaction hash
    const transactionHash = `0x${Array.from({ length: 64 }, () => Math.floor(Math.random() * 16).toString(16)).join('')}`;
    
    // Record the transaction in the database
    const { data, error } = await supabase
      .from('blockchain_transactions')
      .insert({
        user_id: user.id,
        transaction_hash: transactionHash,
        transaction_type: transactionType,
        amount: amount,
        status: 'pending',
      })
      .select()
      .single();

    if (error) {
      throw error;
    }

    // Create a notification for the user
    await supabase.from('notifications').insert({
      user_id: user.id,
      title: 'Blockchain Transaction Initiated',
      message: `Your ${transactionType} transaction of ${amount} units has been initiated. Transaction ID: ${transactionHash.substring(0, 10)}...`,
      notification_type: 'blockchain',
    });

    // Respond with the transaction data
    return new Response(JSON.stringify({ success: true, transaction: data }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
