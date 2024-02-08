import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { Session } from '@0xsequence/auth'

import {ethers} from 'ethers'
import {Fluence, kras} from '@fluencelabs/js-client'
import {retrieveShares, serveDirectory, helloWorld} from './main'
import {genWallet, openWallet} from './main_y'
// import {serveDirectory} from './main_x'

function stripHexPrefix(privKey: any) {
  // Use a regular expression to match and extract the hexadecimal portion
  const hexPortion = privKey.match(/^0x(.*)$/);
  // If a match is found, return the captured group
  if (hexPortion) {
      return hexPortion[1];
  }
  // If not, return the original string
  return privKey;
}

function App() {

  const [shares, setShares] = useState<any>([])
  const [address, setAddress] = useState('')
  const [address2, setAddress2] = useState('')
  const [session, setSession] = useState<any>(null)
  const [message, setMessage] = useState<any>(null)
  const [message2, setMessage2] = useState<any>(null)
  
  useEffect(() => {

    setTimeout(async () => {

      const wallet = ethers.Wallet.createRandom()
      const privateKey = wallet.privateKey
    
      // Write private key to .env file
    
      console.log(privateKey)
      await Fluence.connect(kras[4].multiaddr)
      setAddress(kras[4].multiaddr)
      console.log(await Fluence.getClient().getPeerId())
      //'/ip4/127.0.0.1/tcp/9991/ws/p2p/12D3KooWR5g7X5twdqfBhMFTVJ2PG6k9zCqfri8kXNMZMzD8x8av'

      const provider = new ethers.providers.JsonRpcProvider('https://nodes.sequence.app/polygon/')
    
      const hexPortion = stripHexPrefix(privateKey);
      
      // const res: any = await genWallet(hexPortion)
      // setShares(res[0])
      // console.log('res')
      // console.log(res)
      // // Create your server EOA
      // const walletEOA = new ethers.Wallet(privateKey, provider)
  
      // // Open a Sequence session, this will find or create
      // // a Sequence wallet controlled by your server EOA
      // const session = await Session.singleSigner({
      //   signer: walletEOA,
      //   projectAccessKey: ''
      // })
      // setSession(walletEOA)
  
      // const signer = session.account.getSigner(137)
      // console.log(`Your wallet address: ${signer.account.address}`)
      // setAddress(signer.account.address)
    }, 0)
  }, [])

  useEffect(() => {

  }, [session])

  const signMessage = async () => {
    // const signer = await session.getSigner(137)
    const messageBytes = ethers.utils.toUtf8Bytes('hello world');

    const res = await session.signMessage(messageBytes)  
    setMessage(res)
  }

  const signMessage2 = async () => {
    const messageBytes = ethers.utils.toUtf8Bytes('hello world');
    const provider = new ethers.providers.JsonRpcProvider('https://nodes.sequence.app/polygon/AQAAAAAAAAe-yBS8MLNXFaAc7L4SE5bUrfE')
    // const res = await openWallet(["12D3KooWA1ShFoHjfjL93QTPd2paG1ofnL5bScyd7uRryGNsvBfx","12D3KooWKhAP4JynNvFk3SuAfZugXXyrXucLCd3Evqe2az2QM9uV","12D3KooWSKJbzR1U1z5kFFkwQhqERQwHc6DQ5n1qpQarqYfJqWeK"],'/dns4/4-kras.fluence.dev/tcp/9000/wss/p2p/12D3KooWJd3HaMJ1rpLY1kQvcjRPEvnDwcXrH8mJvk7ypcZXqXGE')
    // const res = await retrieveShares(["12D3KooWA1ShFoHjfjL93QTPd2paG1ofnL5bScyd7uRryGNsvBfx","12D3KooWKhAP4JynNvFk3SuAfZugXXyrXucLCd3Evqe2az2QM9uV","12D3KooWSKJbzR1U1z5kFFkwQhqERQwHc6DQ5n1qpQarqYfJqWeK"],kras[4].multiaddr)
    const res = await serveDirectory("12D3KooWA1ShFoHjfjL93QTPd2paG1ofnL5bScyd7uRryGNsvBfx", kras[4].multiaddr)
    // const res = await helloWorld("12D3KooWA1ShFoHjfjL93QTPd2paG1ofnL5bScyd7uRryGNsvBfx")
    console.log(res)
    // const walletEOA = new ethers.Wallet(res[0], provider)

    // const sig = await walletEOA.signMessage(messageBytes)  
    // setMessage2(sig)
    // console.log(await serveDirectory('12D3KooWA1ShFoHjfjL93QTPd2paG1ofnL5bScyd7uRryGNsvBfx'))
    // console.log(await retrieveShares(["12D3KooWA1ShFoHjfjL93QTPd2paG1ofnL5bScyd7uRryGNsvBfx"],kras[4].multiaddr))
  }

  return (
    <div className="App">
      <h1>key generation</h1>
      {address}
      <div style={{margin: 'auto', width: '100%'}} >
      <div className="container">
        <ul style={{width: 100}} className="asterisk-list">
          {shares.map((share: any) => {
            return <li>{share}</li>
          })}
        </ul>
      </div>
      </div>
      <br/>
      {message}
      <br/>
      <button onClick={() => signMessage()}>sign</button>
      <hr/>
      <h1>wallet</h1>
      {address2}
      <br/>
      {message2}
      <br/>
      <button onClick={() => signMessage2()}>sign</button>
    </div>
  );
}

export default App;