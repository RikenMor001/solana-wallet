import './App.css'
import {Transaction, SystemProgram, Connection, PublicKey, LAMPORTS_PER_SOL} from "@solana/web3.js"

function App() {

  function SendSol(){
    const ix = SystemProgram.transfer({
      fromPubkey: PublicKey("5wQRZdKExgNbNVtXRy2kEDGprDv3bAPp4qHvfChrdZse"),
      toPubkey: PublicKey("6kCyq58u3w8Kami5dFpjyFWqD4stWbPiKCLGvY5g2asB"),
      lamports: 0.001 * LAMPORTS_PER_SOL
    });
    const tx = new Transaction().add(ix);
    const serialized = tx.serialize(); 
  }

  return <div>
    <input type='text' placeholder='Enter your name'/>
    <input type='text' placeholder='Solana'/>
    <button>
      Send Solana
    </button>
  </div>
}

export default App
