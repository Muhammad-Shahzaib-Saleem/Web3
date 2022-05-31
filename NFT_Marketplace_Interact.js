const Web3 = require('web3');
const Tx = require('ethereumjs-tx').Transaction;

const web3 = new Web3('https://rinkeby.infura.io/v3/your infura key');


const contractAddress = 'your contract address';
const contractAbi = 'your abi';

const account1 = 'your account address 1';
const privateKey1 = Buffer.from('your private key1','hex');

const account2 = 'your account address 2';
const privateKey2 = Buffer.from('your private key 2','hex');









const contract = new web3.eth.Contract(contractAbi,contractAddress);

//Read Functions of Smart Contract 
console.log("----------Read Contract-----------");
contract.methods.name().call((err,result)=>{
    console.log("Name:",result);
})

contract.methods.symbol().call((err,result)=>{
    console.log("Symbol:",result);
})

contract.methods.nftPrice().call((err,result)=>{
    console.log("NFT for fixed price:",result);
})

contract.methods.set_time().call((err,result)=>{
    console.log("Time:",result);
})

contract.methods.tokenIds().call((err,result)=>{
    console.log("TokenIds:",result);
})


console.log("-----------Write Contract----------");

// contract.methods.createNFT(0x000D09bCD4224CE847750B4C8cC8d4FbF39e33df.toHex,"asasas").send((err,result)=>{
//     console.log(result);
// })

//---------------------Create NFT-------------------------
// web3.eth.getTransactionCount(account1, (err, txCount) => {
  

//   const txObject = {
//     nonce:web3.utils.toHex(txCount),
//     to: contractAddress,
//     value:web3.utils.toHex(web3.utils.toWei('0.01','ether')),
//     gasLimit: web3.utils.toHex(800000), // Raise the gas limit to a much higher amount
//     gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
//     data: contract.methods.createNFT(account2,'asasas').encodeABI(),
//   }
  

  
//   const tx = new Tx(txObject,{chain:'rinkeby'})
//   tx.sign(privateKey1)

//   const serializedTx = tx.serialize()
//   const raw = '0x' + serializedTx.toString('hex')
  

//   web3.eth.sendSignedTransaction(raw, (err, txHash) => {
//     console.log('err:ye ha!', err, 'txHash: Create NFT', txHash)
//     // Use this txHash to find the contract on Etherscan!
//   })
// })

//------------------------Put on Sale---------------------
// web3.eth.getTransactionCount(account1, (err, txCount) => {
  

//     const txObject = {
//       nonce:web3.utils.toHex(txCount),
//       to: contractAddress,
//     //   value:web3.utils.toHex(web3.utils.toWei('0.01','ether')),
//       gasLimit: web3.utils.toHex(800000), // Raise the gas limit to a much higher amount
//       gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
//       data: contract.methods.putOnSale(2).encodeABI()
//     }
    
  
    
//     const tx = new Tx(txObject,{chain:'rinkeby'})
//     tx.sign(privateKey1)
  
//     const serializedTx = tx.serialize()
//     const raw = '0x' + serializedTx.toString('hex')
    
  
//     web3.eth.sendSignedTransaction(raw, (err, txHash) => {
//       console.log('err:ye ha!', err, 'txHash: Put on Sale', txHash)
//       // Use this txHash to find the contract on Etherscan!
//     })
//   })
  
//------------------------Buy on Fixed Price---------------------
// web3.eth.getTransactionCount(account1, (err, txCount) => {
  

//     const txObject = {
//       nonce:web3.utils.toHex(txCount),
//       to: contractAddress,
//       value:web3.utils.toHex(web3.utils.toWei('0.01','ether')),
//       gasLimit: web3.utils.toHex(800000), // Raise the gas limit to a much higher amount
//       gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
//       data: contract.methods.buyFixedPriceMarketNFT(2).encodeABI()
//     }
    
  
    
//     const tx = new Tx(txObject,{chain:'rinkeby'})
//     tx.sign(privateKey1)
  
//     const serializedTx = tx.serialize()
//     const raw = '0x' + serializedTx.toString('hex')
    
  
//     web3.eth.sendSignedTransaction(raw, (err, txHash) => {
//       console.log('err:ye ha!', err, 'txHas: Buy on Fixed Price:', txHash)
//       // Use this txHash to find the contract on Etherscan!
//     })
//   })

//-------------- On fixed Price Accepted Offer -----------
// web3.eth.getTransactionCount(account1, (err, txCount) => {
  

//     const txObject = {
//       nonce:web3.utils.toHex(txCount),
//       to: contractAddress,
//     //   value:web3.utils.toHex(web3.utils.toWei('0.01','ether')),
//       gasLimit: web3.utils.toHex(800000), // Raise the gas limit to a much higher amount
//       gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
//       data: contract.methods.onFixedPrice(2).encodeABI()
//     }
    
  
    
//     const tx = new Tx(txObject,{chain:'rinkeby'})
//     tx.sign(privateKey1)
  
//     const serializedTx = tx.serialize()
//     const raw = '0x' + serializedTx.toString('hex')
    
  
//     web3.eth.sendSignedTransaction(raw, (err, txHash) => {
//       console.log('err:ye ha!', err, 'txHas: Buy on Fixed Price:', txHash)
//       // Use this txHash to find the contract on Etherscan!
//     })
//   })

//-------------- Put NFT for bidding -----------
// web3.eth.getTransactionCount(account1, (err, txCount) => {
  

//     const txObject = {
//       nonce:web3.utils.toHex(txCount),
//       to: contractAddress,
//     //   value:web3.utils.toHex(web3.utils.toWei('0.02','ether')),
//       gasLimit: web3.utils.toHex(800000), // Raise the gas limit to a much higher amount
//       gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
//       data: contract.methods.putNFTForBidding(3).encodeABI()
//     }
    
  
    
//     const tx = new Tx(txObject,{chain:'rinkeby'})
//     tx.sign(privateKey1)
  
//     const serializedTx = tx.serialize()
//     const raw = '0x' + serializedTx.toString('hex')
    
  
//     web3.eth.sendSignedTransaction(raw, (err, txHash) => {
//       console.log('err:ye ha!', err, 'txHas: Putt NFT for bidding:', txHash)
//       // Use this txHash to find the contract on Etherscan!
//     })
//   })

//-------------- Bidding for NFT Method---onBid()---!---
// web3.eth.getTransactionCount(account2, (err, txCount) => {
  

//     const txObject = {
//       nonce:web3.utils.toHex(txCount),
//       to: contractAddress,
//       value:web3.utils.toHex(web3.utils.toWei('0.03','ether')),
//       gasLimit: web3.utils.toHex(800000), // Raise the gas limit to a much higher amount
//       gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
//       data: contract.methods.onBid(3).encodeABI()
//     }
    
  
    
//     const tx = new Tx(txObject,{chain:'rinkeby'})
//     tx.sign(privateKey2)
  
//     const serializedTx = tx.serialize()
//     const raw = '0x' + serializedTx.toString('hex')
    
  
//     web3.eth.sendSignedTransaction(raw, (err, txHash) => {
//       console.log('err:ye ha!', err, 'txHas: Doing Bidding from different acc:', txHash)
//       // Use this txHash to find the contract on Etherscan!
//     })
//   })

//-------------- Accept NFT Offer after Bidding method--buyOnBid()--! -----
  web3.eth.getTransactionCount(account1, (err, txCount) => {
  

    const txObject = {
      nonce:web3.utils.toHex(txCount),
      to: contractAddress,
      value:web3.utils.toHex(web3.utils.toWei('0.02','ether')),
      gasLimit: web3.utils.toHex(800000), // Raise the gas limit to a much higher amount
      gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
      data: contract.methods.buyOnBid(3).encodeABI()
    }
    
  
    
    const tx = new Tx(txObject,{chain:'rinkeby'})
    tx.sign(privateKey1)
  
    const serializedTx = tx.serialize()
    const raw = '0x' + serializedTx.toString('hex')
    
  
    web3.eth.sendSignedTransaction(raw, (err, txHash) => {
      console.log('err:ye ha!', err, 'txHas: Accepted Offer:', txHash)
      // Use this txHash to find the contract on Etherscan!
    })
  })