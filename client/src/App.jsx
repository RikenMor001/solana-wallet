import './App.css'
import {Transaction, SystemProgram, Connection, PublicKey, LAMPORTS_PER_SOL} from "@solana/web3.js"

function App() {

  function SendSol(){
    const ix = SystemProgram.transfer({
      fromPubkey: PublicKey,
      toPubkey: PublicKey,
      lamports: 0.001 * LAMPORTS_PER_SOL
    });
    const transaction = new Transaction();
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
