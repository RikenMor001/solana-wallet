import './App.css'
import {Transaction, SystemProgram, Connection, PublicKey, LAMPORTS_PER_SOL} from "@solana/web3.js"
import axios from "axios"

const connection = Connection("https://solana-mainnet.g.alchemy.com/v2/i9WpXCP_SX2QikFfKnXFmZT--rjRGo65");

function App() {

  function SendSol(){
    const ix = SystemProgram.transfer({
      fromPubkey: new PublicKey("5wQRZdKExgNbNVtXRy2kEDGprDv3bAPp4qHvfChrdZ3p"),
      toPubkey: new PublicKey("6kCyq58u3w8Kami5dFpjyFWqD4stWbPiKCLGvY5g2XwB"),
      lamports: 0.001 * LAMPORTS_PER_SOL
    });
    const tx = new Transaction().add(ix);
    const serializedTx = tx.serialize();
    
    axios.post("api/v1/txn/sign", {
      message: serializedTx,
      retry: false
    })
  }

  return <div>
    <input type='text' placeholder='Enter your name'/>
    <input type='text' placeholder='Solana'/>
    <button onClick={SendSol}>
      Send Solana
    </button>
  </div>
}

export default App
