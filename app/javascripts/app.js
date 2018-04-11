
// var shipmentsContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"orderId","type":"uint256"},{"name":"shipmentId","type":"uint256"},{"name":"containerId","type":"uint256"}],"name":"calculateDetentionFees","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"shipmentId","type":"uint256"}],"name":"getShipment","outputs":[{"name":"","type":"uint256"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"uint8"},{"name":"","type":"uint256"},{"name":"","type":"int256"},{"name":"","type":"int256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"shipmentId","type":"uint256"},{"name":"cType","type":"bytes32"},{"name":"cSize","type":"bytes32"}],"name":"addContainer","outputs":[{"name":"containerId","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"shipments","outputs":[{"name":"orderId","type":"uint256"},{"name":"forwarder","type":"bytes32"},{"name":"from","type":"bytes32"},{"name":"to","type":"bytes32"},{"name":"numOfContainers","type":"uint8"},{"name":"dischargeDate","type":"uint256"},{"name":"totalDemmurageFees","type":"int256"},{"name":"totalDetentionFees","type":"int256"},{"name":"totalStorageCost","type":"uint256"},{"name":"finalAmount","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"containerId","type":"uint256"}],"name":"getContainer","outputs":[{"name":"","type":"uint256"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"int256"},{"name":"","type":"int256"},{"name":"","type":"uint256"},{"name":"","type":"int256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"orderId","type":"uint256"}],"name":"getClients","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"getAllShipments","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"orderId","type":"uint256"},{"name":"shipmentId","type":"uint256"},{"name":"containerId","type":"uint256"}],"name":"calculateDemmurageFees","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"containerId","type":"uint256"},{"name":"pickupDate","type":"uint256"}],"name":"setPickupDate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"oId","type":"uint256"},{"name":"sId","type":"uint256"},{"name":"cId","type":"uint256"}],"name":"test","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"int256"},{"name":"","type":"uint256"},{"name":"","type":"int256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"shipmentId","type":"uint256"},{"name":"containerId","type":"uint256"}],"name":"calculateStorageFees","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"shipmentId","type":"uint256"}],"name":"getOrderTerms","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"shipmentId","type":"uint256"}],"name":"getForwarder","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"x","type":"bytes32"}],"name":"bytes32ToString","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"orders","outputs":[{"name":"orderNr","type":"bytes32"},{"name":"shippingAgents","type":"address"},{"name":"carrier","type":"bytes32"},{"name":"client","type":"bytes32"},{"name":"freeDaysDemmurage","type":"uint256"},{"name":"demmurageFees","type":"uint256"},{"name":"freeDaysDetention","type":"uint256"},{"name":"detentionFees","type":"uint256"},{"name":"storageCost","type":"uint256"},{"name":"finalAmount","type":"uint256"},{"name":"from","type":"bytes32"},{"name":"to","type":"bytes32"},{"name":"status","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"shipmentId","type":"uint256"},{"name":"containerId","type":"uint256"},{"name":"returnDate","type":"uint256"}],"name":"setReturnDate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"containers","outputs":[{"name":"shipmentId","type":"uint256"},{"name":"cType","type":"bytes32"},{"name":"cSize","type":"bytes32"},{"name":"dischargeDate","type":"uint256"},{"name":"totalDemmurageFees","type":"int256"},{"name":"totalDetentionFees","type":"int256"},{"name":"storageFees","type":"uint256"},{"name":"totalStorageCost","type":"uint256"},{"name":"pickupDate","type":"uint256"},{"name":"returnDate","type":"uint256"},{"name":"totalCost","type":"int256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"shipmentId","type":"uint256"},{"name":"forwarder","type":"bytes32"}],"name":"setShipmentForwarder","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"getOrdersCount","outputs":[{"name":"count","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"shipmentId","type":"uint256"}],"name":"getShipmentFinalAmount","outputs":[{"name":"","type":"int256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"getContainersCount","outputs":[{"name":"count","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"orderId","type":"uint256"}],"name":"getOrder","outputs":[{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"getShipmentsCount","outputs":[{"name":"count","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"shippingAgents","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"shipmentId","type":"uint256"},{"name":"dischargeDate","type":"uint256"}],"name":"setDischargeDate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]);
// var shipments = shipmentsContract.new(
//    {
//      from: web3.eth.accounts[0],
//      data: '0x6060604052341561000f57600080fd5b611b588061001e6000396000f300606060405260043610610149576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630367378b1461014e578063092b3740146101835780630976b85b146102c25780632ac08a93146103135780632b3e8957146103a757806342dd519c146104e0578063494dad6c1461057c57806354170085146105915780636066ef91146105c657806361805cc3146105f25780636431692b1461066c57806367fa4f1d1461069857806379ea9943146106eb5780639201de5514610787578063a85c38ef14610827578063ae1113f514610914578063b49a750914610949578063b531eb8a146109d6578063b5b3b05114610a06578063bf8300f314610a2f578063ca21d04c14610a66578063d09ef24114610a8f578063d6331a9514610ce2578063db75d2aa14610d0b578063f41a4d6414610d6e575b600080fd5b341561015957600080fd5b6101816004808035906020019091908035906020019091908035906020019091905050610d9a565b005b341561018e57600080fd5b6101a46004808035906020019091905050610ea1565b604051808a815260200180602001806020018960ff1660ff16815260200188815260200187815260200186815260200185815260200184815260200183810383528b818151815260200191508051906020019080838360005b838110156102185780820151818401526020810190506101fd565b50505050905090810190601f1680156102455780820380516001836020036101000a031916815260200191505b5083810382528a818151815260200191508051906020019080838360005b8381101561027e578082015181840152602081019050610263565b50505050905090810190601f1680156102ab5780820380516001836020036101000a031916815260200191505b509b50505050505050505050505060405180910390f35b34156102cd57600080fd5b6102fd60048080359060200190919080356000191690602001909190803560001916906020019091905050610f80565b6040518082815260200191505060405180910390f35b341561031e57600080fd5b6103346004808035906020019091905050611018565b604051808b81526020018a60001916600019168152602001896000191660001916815260200188600019166000191681526020018760ff1660ff1681526020018681526020018581526020018481526020018381526020018281526020019a505050505050505050505060405180910390f35b34156103b257600080fd5b6103c86004808035906020019091905050611088565b604051808a8152602001806020018060200189815260200188815260200187815260200186815260200185815260200184815260200183810383528b818151815260200191508051906020019080838360005b8381101561043657808201518184015260208101905061041b565b50505050905090810190601f1680156104635780820380516001836020036101000a031916815260200191505b5083810382528a818151815260200191508051906020019080838360005b8381101561049c578082015181840152602081019050610481565b50505050905090810190601f1680156104c95780820380516001836020036101000a031916815260200191505b509b50505050505050505050505060405180910390f35b34156104eb57600080fd5b6105016004808035906020019091905050611139565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610541578082015181840152602081019050610526565b50505050905090810190601f16801561056e5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561058757600080fd5b61058f611183565b005b341561059c57600080fd5b6105c46004808035906020019091908035906020019091908035906020019091905050611185565b005b34156105d157600080fd5b6105f06004808035906020019091908035906020019091905050611260565b005b34156105fd57600080fd5b61062560048080359060200190919080359060200190919080359060200190919050506112e2565b604051808981526020018881526020018781526020018681526020018581526020018481526020018381526020018281526020019850505050505050505060405180910390f35b341561067757600080fd5b61069660048080359060200190919080359060200190919050506113ac565b005b34156106a357600080fd5b6106b96004808035906020019091905050611446565b604051808681526020018581526020018481526020018381526020018281526020019550505050505060405180910390f35b34156106f657600080fd5b61070c60048080359060200190919050506114c1565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561074c578082015181840152602081019050610731565b50505050905090810190601f1680156107795780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561079257600080fd5b6107ac60048080356000191690602001909190505061150b565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156107ec5780820151818401526020810190506107d1565b50505050905090810190601f1680156108195780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561083257600080fd5b61084860048080359060200190919050506116f8565b604051808e600019166000191681526020018d73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018c600019166000191681526020018b600019166000191681526020018a8152602001898152602001888152602001878152602001868152602001858152602001846000191660001916815260200183600019166000191681526020018260018111156108f457fe5b60ff1681526020019d505050505050505050505050505060405180910390f35b341561091f57600080fd5b610947600480803590602001909190803590602001909190803590602001909190505061179a565b005b341561095457600080fd5b61096a6004808035906020019091905050611807565b604051808c81526020018b600019166000191681526020018a600019166000191681526020018981526020018881526020018781526020018681526020018581526020018481526020018381526020018281526020019b50505050505050505050505060405180910390f35b34156109e157600080fd5b610a04600480803590602001909190803560001916906020019091905050611870565b005b3415610a1157600080fd5b610a196118a3565b6040518082815260200191505060405180910390f35b3415610a3a57600080fd5b610a5060048080359060200190919050506118b3565b6040518082815260200191505060405180910390f35b3415610a7157600080fd5b610a796118ee565b6040518082815260200191505060405180910390f35b3415610a9a57600080fd5b610ab060048080359060200190919050506118fe565b60405180806020018060200180602001806020018060200187815260200186810386528c818151815260200191508051906020019080838360005b83811015610b06578082015181840152602081019050610aeb565b50505050905090810190601f168015610b335780820380516001836020036101000a031916815260200191505b5086810385528b818151815260200191508051906020019080838360005b83811015610b6c578082015181840152602081019050610b51565b50505050905090810190601f168015610b995780820380516001836020036101000a031916815260200191505b5086810384528a818151815260200191508051906020019080838360005b83811015610bd2578082015181840152602081019050610bb7565b50505050905090810190601f168015610bff5780820380516001836020036101000a031916815260200191505b50868103835289818151815260200191508051906020019080838360005b83811015610c38578082015181840152602081019050610c1d565b50505050905090810190601f168015610c655780820380516001836020036101000a031916815260200191505b50868103825288818151815260200191508051906020019080838360005b83811015610c9e578082015181840152602081019050610c83565b50505050905090810190601f168015610ccb5780820380516001836020036101000a031916815260200191505b509b50505050505050505050505060405180910390f35b3415610ced57600080fd5b610cf56119e0565b6040518082815260200191505060405180910390f35b3415610d1657600080fd5b610d2c60048080359060200190919050506119f0565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3415610d7957600080fd5b610d986004808035906020019091908035906020019091905050611a25565b005b6000806000601086815481101515610dae57fe5b90600052602060002090600d02019250601185815481101515610dcd57fe5b90600052602060002090600a02019150601284815481101515610dec57fe5b90600052602060002090600b0201905082600701548360060154620151808360080154846009015403811515610e1e57fe5b0503028160050181905550600081600501541215610e4157600081600501819055505b806005015481600a01600082825401925050819055508060050154826007016000828254019250508190555080600a0154826009016000828254019250508190555080600a01548360090160008282540192505081905550505050505050565b6000610eab611a5b565b610eb3611a5b565b600080600080600080600080610ec7611a5b565b610ecf611a5b565b60118e815481101515610ede57fe5b90600052602060002090600a0201935060108460000154815481101515610f0157fe5b90600052602060002090600d02019250610f1e836003015461150b565b9150610f2d846002015461150b565b90508d82828660040160009054906101000a900460ff168760050154886006015489600701548a600801548b600901549c509c509c509c509c509c509c509c509c50505050509193959799909294969850565b60008060128054809190600101610f979190611a6f565b9150601282815481101515610fa857fe5b90600052602060002090600b02019050848160000181905550838160010181600019169055508281600201816000191690555060048160060181905550600081600a0181905550600081600401819055506000816005018190555060008160070181905550819150509392505050565b60118181548110151561102757fe5b90600052602060002090600a02016000915090508060000154908060010154908060020154908060030154908060040160009054906101000a900460ff1690806005015490806006015490806007015490806008015490806009015490508a565b6000611092611a5b565b61109a611a5b565b60008060008060008060006110ad611a5b565b6110b5611a5b565b60128d8154811015156110c457fe5b90600052602060002090600b020192506110e1836001015461150b565b91506110f0836002015461150b565b905082600001548282856008015486600901548760040154886005015489600701548a600a01549b509b509b509b509b509b509b509b509b505050509193959799909294969850565b611141611a5b565b600061114b611a5b565b60108481548110151561115a57fe5b90600052602060002090600d02019150611177826003015461150b565b90508092505050919050565b565b600080600060118581548110151561119957fe5b90600052602060002090600a020192506010868154811015156111b857fe5b90600052602060002090600d020191506012848154811015156111d757fe5b90600052602060002090600b020190508160050154826004015462015180856005015484600801540381151561120957fe5b050302816004018190555060008160040154121561122c57600081600401819055505b806004015481600a016000828254019250508190555080600401548360060160008282540192505081905550505050505050565b600080600060128581548110151561127457fe5b90600052602060002090600b020192506011836000015481548110151561129757fe5b90600052602060002090600a0201915081600001549050620151808402420183600801819055506112cd81846000015487611185565b6112db8360000154866113ac565b5050505050565b600080600080600080600080600080600060108e81548110151561130257fe5b90600052602060002090600d0201925060118d81548110151561132157fe5b90600052602060002090600a0201915060128c81548110151561134057fe5b90600052602060002090600b020190508060080154826005015462015180846005015484600801540381151561137257fe5b04856004015486600501548560040154866007015487600501549a509a509a509a509a509a509a509a505050509397509397509397509397565b6000806011848154811015156113be57fe5b90600052602060002090600a020191506012838154811015156113dd57fe5b90600052602060002090600b02019050806006015462015180836005015483600801540381151561140a57fe5b04028160070181905550806007015481600a01600082825401925050819055508060070154826008016000828254019250508190555050505050565b600080600080600080600060118881548110151561146057fe5b90600052602060002090600a020191506010826000015481548110151561148357fe5b90600052602060002090600d020190508060040154816006015482600501548360070154846008015496509650965096509650505091939590929450565b6114c9611a5b565b60006114d3611a5b565b6011848154811015156114e257fe5b90600052602060002090600a020191506114ff826001015461150b565b90508092505050919050565b611513611a5b565b61151b611aa1565b6000806000611528611aa1565b60206040518059106115375750595b9080825280601f01601f1916602001820160405250945060009350600092505b6020831015611615578260080260020a876001900402600102915060007f010000000000000000000000000000000000000000000000000000000000000002827effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916141515611608578185858151811015156115cf57fe5b9060200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535083806001019450505b8280600101935050611557565b836040518059106116235750595b9080825280601f01601f19166020018201604052509050600092505b838310156116eb57848381518110151561165557fe5b9060200101517f010000000000000000000000000000000000000000000000000000000000000090047f01000000000000000000000000000000000000000000000000000000000000000281848151811015156116ae57fe5b9060200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350828060010193505061163f565b8095505050505050919050565b60108181548110151561170757fe5b90600052602060002090600d02016000915090508060000154908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169080600201549080600301549080600401549080600501549080600601549080600701549080600801549080600901549080600a01549080600b01549080600c0160009054906101000a900460ff1690508d565b60008060006012858154811015156117ae57fe5b90600052602060002090600b020192506011868154811015156117cd57fe5b90600052602060002090600a0201915081600001549050620151808402420183600901819055506117ff818787610d9a565b505050505050565b60128181548110151561181657fe5b90600052602060002090600b020160009150905080600001549080600101549080600201549080600301549080600401549080600501549080600601549080600701549080600801549080600901549080600a015490508b565b600060118381548110151561188157fe5b90600052602060002090600a0201905081816001018160001916905550505050565b6000601080549050905080905090565b6000806011838154811015156118c557fe5b90600052602060002090600a020190508060080154816007015482600601540101915050919050565b6000601280549050905080905090565b611906611a5b565b61190e611a5b565b611916611a5b565b61191e611a5b565b611926611a5b565b600080611931611a5b565b611939611a5b565b611941611a5b565b611949611a5b565b611951611a5b565b60108d81548110151561196057fe5b90600052602060002090600d0201955061197d866000015461150b565b945061198c866002015461150b565b935061199b866003015461150b565b92506119aa86600a015461150b565b91506119b986600b015461150b565b905084848484848a600901549b509b509b509b509b509b5050505050505091939550919395565b6000601180549050905080905090565b6000816010811015156119ff57fe5b016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000601183815481101515611a3657fe5b90600052602060002090600a0201905062015180820242018160050181905550505050565b602060405190810160405280600081525090565b815481835581811511611a9c57600b0281600b028360005260206000209182019101611a9b9190611ab5565b5b505050565b602060405190810160405280600081525090565b611b2991905b80821115611b2557600080820160009055600182016000905560028201600090556003820160009055600482016000905560058201600090556006820160009055600782016000905560088201600090556009820160009055600a82016000905550600b01611abb565b5090565b905600a165627a7a72305820ec4bb0d2099c540f641b0b524720ba29a5175bff2a7e300ee8c4f8c2ec047b800029',
//      gas: '4700000'
//    }, function (e, contract){
//     console.log(e, contract);
//     if (typeof contract.address !== 'undefined') {
//          console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
//     }
//  })

//contract address temp


//ShipmentsContract = web3.eth.contract(abi);
// In your nodejs console, execute contractInstance.address to get the address at which the contract is deployed and change the line below to use your deployed address
//contractInstance = ShipmentsContract.at('0xfd59f83aaa65606e4b16f75d781f32883b5e51e0');
//candidates = {"Rama": "candidate-1", "Nick": "candidate-2", "Jose": "candidate-3"}
// Import libraries we need.

// Import the page's CSS. Webpack will know what to do with it.
import '../stylesheets/app.css'
import '../../Frontend/styles.css'
//require('../../Frontend/script.js')
//require ('../stylesheets/app.css')
import { default as Web3} from 'web3'
import { default as contract } from 'truffle-contract'
//var provider = new Web3.providers.HttpProvider("http://localhost:8545");
//var contract = require("truffle-contract");

//import 'moment'
import Shipments from '../../build/contracts/Shipments.json'
//var Shipments = require("../../build/contracts/Shipments.json");
var shp = contract(Shipments);


function getFinalAmount(){
  var shipmentId = $("#shipmentnr").val();
  var amount = shp.getFinalAmount.call(shipmentId,{from: web3.eth.accounts[0]});
  $("#Amount").html(amount.toString());
}

window.getShipment = function (){
  var shipmentId = 0; //$("#shipmentnr").val();
  ship = shp.getShipment.call(shipmentId,{from: web3.eth.accounts[0]});
  Len = ship.length;
  //text = "<ul>";
  for (i = 0; i < Len; i++) {
      document.getElementById(i).innerHTML = ship[i];
  }
}


/* window.getShipmentDetails1 = function(shipID){
  var shipmentId = document.getElementById("shipmentnr").value;

  shp.deployed().then(function(contractInstance){
    ship = contractInstance;
    var details = ship.getShipment.call(shipmentId,{from: web3.eth.accounts[0]});
    var Len = details.length;
    var f;
    for (var i = 0; i < Len; i++) {
        f = document.getElementById(i).innerHTML;
        f =  details[i];
    }
  });
} */

window.getShipmentDetails1 = function(){
  var shipmentId = 0 //document.getElementById("shipmentnr").value;
  var ship
  //MetaCoin.deployed().then(function(deployed){deployed.getBalance.call(web3.eth.accounts[0]).then(function(data){console.log(data)})} );

  shp.deployed().then(function(contractInstance){
    ship = contractInstance;
    return ship.getShipment.call(shipmentId,{from: web3.eth.accounts[0]});

  }).then(function(value){
    var Len = value.length;
    var f;

    for (var i = 0; i < Len; i++) {
      f = document.getElementById(i);
      f.innerHTML =  value[i].valueOf();
      //alert(f)
  }
  })
  ;

}
window.newOrder = function(){

  var OrderNr = document.getElementById(11).value;
  var Carrier = document.getElementById(0).value;
  var Client = document.getElementById(1).value;
  var From = document.getElementById(3).value.toString();
  var To = document.getElementById(4).value.toString();
  //var NumContainers = document.getElementById(2).value;
  var FreeDaysDemurrage = document.getElementById(5).value;
  var FreeDaysDetention = document.getElementById(6).value;



  var ship;
  shp.deployed().then(function(contractInstance){
    ship = contractInstance;
    ship.addOrder(OrderNr,Carrier,Client,From, To, FreeDaysDemurrage,FreeDaysDetention,{from: web3.eth.accounts[0], gas:470000}); //
    //alert("Shipment added")
  });
}

window.newShipment = function(){
    var OrderId = document.getElementById(15).value;
    var from = document.getElementById(3).value;
    var to = document.getElementById(4).value;

    var Forwarder = 'NA';//document.getElementById(6).value;
    var NumContainers = document.getElementById(7).value;
    var cType = document.getElementById(10).value;
    var cSize = document.getElementById(11).value;

    var ship;
    shp.deployed().then(function(contractInstance){
      ship = contractInstance;
    //var cType = document.getElementById(10).value;
      ship.addShipment(OrderId,NumContainers,from,to,cType,cSize,Forwarder,{from: web3.eth.accounts[0], gas:4700000}); //
      //alert("Shipment added")
    });
  }

window.getOrder = function(){
  var orderId = 0;
  var ship;

  shp.deployed().then(function(contractInstance){
    ship = contractInstance;
    return ship.getOrder.call(orderId,{from: web3.eth.accounts[0]});

  }).then(function(value){
    var Len = value.length;
    var f;

    for (var i = 0; i < Len; i++) {
      f = document.getElementById(i);
      f.innerHTML =  value[i].valueOf();
      //alert(f)
  }
  })
  ;

}

function loadClients(){
/*   var clientsList = document.getElementById('ddrp1');
  clientsList = $("<select></select>"); */
  var ship;
  shp.deployed().then(function(contractInstance){
    ship = contractInstance;
    return ship.getOrdersCount.call({from: web3.eth.accounts[0]});
  }).then(function(value){
    for (var i = 0; i < value; i++){
/*           var c = ship.getClients.call(i);
          clientsList.append('<option value="'+i+'">Option '+c+'</option>');
          alert(c) */
          getClientName(i)

    }
  });
}

function getClientName(orderID) {
  var clients = document.getElementById('ddrp1');
  var clientsList = $("<select></select>");
  var ship
  shp.deployed().then(function(contractInstance){
    ship = contractInstance;
    return  ship.getClients.call(orderID,{from: web3.eth.accounts[0]});


  }).then(function(value){
    var c = value;
    //alert(c)
    var option = document.createElement('option');
    option.value = orderID;
    option.text = c;
    //clients.append('<option value="'+orderID+'">Option '+c+'</option>');
    clients.add(option);
  })
  ;
  //clients.append(clientsList);
}

$("#ddrp1").on("change", function() {
  //alert(this.value);
  $("#8").val('O-0'+ (parseInt(this.value)+1));
  $("#15").val(parseInt(this.value));

  if($(this).find("option:selected").text() != 'General'){
    getFromTo(this.value);
  }else{
    document.getElementById(3).value = 'NA';
    document.getElementById(3).disabled = false;
    document.getElementById(4).value = 'NA';
    document.getElementById(4).disabled = false;
  }

});

function getFromTo(orderId){
  var ship

  shp.deployed().then(function(contractInstance){
    ship = contractInstance;
    return  ship.getOrder.call(orderId,{from: web3.eth.accounts[0]});
  }).then(function(value){
    //alert(value[3])
    document.getElementById(3).value = value[3];
    document.getElementById(3).disabled = true;
    document.getElementById(4).value = value[4];
    document.getElementById(4).disabled = true;
  })
  ;
}

function getShipmentsCount(){
  var ship;
  //var count;
  shp.deployed().then(function(contractInstance){
    ship = contractInstance;
    return ship.getShipmentsCount.call({from: web3.eth.accounts[0]});
  }).then(function(value){
    value = parseInt(value)+1;
    document.getElementById(9).value = 'S-0' + value;
    document.getElementById(9).disabled = true;
  });
  //alert('this '+count)
  //return count;
}

function getAllOrders(){
  var ship;
  shp.deployed().then(function(contractInstance){
    ship = contractInstance;
    return ship.getOrdersCount.call({from: web3.eth.accounts[0]});
  }).then(function(value){
    for (var i = 0; i < value; i++){
          getOrderDetails(i);
    }
  });
}

function getOrdersCount(){
  var ship;
  var count;
  shp.deployed().then(function(contractInstance){
    ship = contractInstance;
    return ship.getOrdersCount.call({from: web3.eth.accounts[0]});
  }).then(function(value){
    value = parseInt(value)+1;
    document.getElementById(11).value = 'O-0' + value;
    document.getElementById(11).disabled = true;
  });
  //alert('this '+count)
  return count;
}

function getOrderDetails(orderID){

      var ship
      var table = document.getElementById("ordersTable");
      var row = table.insertRow();
      //row.link = 'Shipments.html';

      shp.deployed().then(function(contractInstance){
        ship = contractInstance;
        return  ship.getOrder.call(orderID,{from: web3.eth.accounts[0]});


      }).then(function(value){
        for (var x=6;x>=0;x--){
          var cellID = Math.random();
          var cell = row.insertCell(cellID);
          if(x==0){
            cell.innerHTML = '<td><a href="Shipments.html?orderId='+orderID+'">'+value[x]+'</a></td>';
            continue;
          }
          cell.innerHTML = value[x];
        }
        cell = row.insertCell(7);
        cell.innerHTML = '<td> <div class="square-green">100%</div> <div class="square-green">100%</div><div class="square-green">100%</div><div class="square-orange">75%</div></td>'

      })
      ;
      if(!table.tHead){
        var header = table.createTHead();
        var tr = header.insertRow(0);
        tr.insertCell(0).outerHTML = "<th>Contract Nr</th>";
        tr.insertCell(1).outerHTML = "<th>Carrier</th>";
        tr.insertCell(2).outerHTML = "<th>Client</th>";
        tr.insertCell(3).outerHTML = "<th>From</th>";
        tr.insertCell(4).outerHTML = "<th>To</th>";
        tr.insertCell(5).outerHTML = "<th>Container Quantity</th>";
        tr.insertCell(6).outerHTML = "<th>Fee</th>";
        tr.insertCell(7).outerHTML = "<th class=\"square\">Releases:</br> C CD CR TU</th>";
        //tr.insertCell(8).outerHTML = "<th>See terms</th>";
    }
  }

function getAllShipments(fileName){
  var ship;
  shp.deployed().then(function(contractInstance){
    ship = contractInstance;
    return ship.getShipmentsCount.call({from: web3.eth.accounts[0]});
  }).then(function(value){
    for (var i = 0; i < value; i++){
           getShipmentDetails(i,fileName);
    }
  });
}

function getShipmentDetails(shipID,fileName){

    var ship
    var table = document.getElementById("shipmentsTable");
    var row = table.insertRow();
    //row.onclick

    shp.deployed().then(function(contractInstance){
      ship = contractInstance;
      return  ship.getShipment.call(shipID,{from: web3.eth.accounts[0]});
    }).then(function(value){
      var dt;

        for (var x=8;x>=0;x--){
        var cellID = Math.random();
        var cell = row.insertCell(cellID);
        if(x==0){
          cell.innerHTML = '<td><a href="container.html?shipId='+shipID+'&caller='+fileName+'">'+'S-0'+(shipID+1)+'</a></td>';
          continue;
        }
        if(x==4){
          dt = value[x];
           var date = timeConverter(value[x]);
          cell.innerHTML = date;
          continue;
        }
        cell.innerHTML = value[x];
      }
      cell = row.insertCell(9);

      if(dt ==0&& (fileName == 'terminal.html')){
        cell.innerHTML = '<td> <input type="date" id=date-' +shipID + ' class="form-control"> </td>';
        cell = row.insertCell(10);
        cell.innerHTML = '<a id='+shipID+ ' href="" onclick="setDischarge(this.id)" class="btn btn-primary">Set</a>';
      }else if(fileName == 'client.html'){
        cell.innerHTML = '<td> <input type="text" id=forwarder-' +shipID + ' class="form-control"> </td>';
        //cell.outerHTML = 'Forwarder';
        cell = row.insertCell(10);
        cell.innerHTML = '<a id='+shipID+ ' href="" onclick="setShipmentForwarder(this.id)" class="btn btn-primary">Set</a>';
        }else{
        cell.innerHTML = '<td> <input type="date" disabled id=date-' +shipID + ' class="form-control"> </td>';
        cell = row.insertCell(10);
        cell.innerHTML = '<a id='+shipID+ ' disabled href="" onclick="setDischarge(this.id)" class="btn btn-primary">Set</a>';

      }

      cell = row.insertCell(11);
      if(fileName == 'client.html'){

        cell.innerHTML = '<td> <input type="text" id=forward-' +shipID + ' class="form-control"> </td>';
        var forwarder = getForwarder(shipID);
      }else{
        cell.innerHTML = ' <td> <a  id='+shipID+ ' onclick="getOrderTerms('+shipID+')"> More Information <i class="fa fa-info-circle" aria-hidden="true"></i> </td> ' ;

      }
      cell = row.insertCell(3.5);
      cell.innerHTML = 'Rotterdam'
      ;
   })
    ;

    if(!table.tHead){
      var header = table.createTHead();
      var tr = header.insertRow(0);
      tr.insertCell(0).outerHTML = "<th>Shimpment Nr</th>";
      tr.insertCell(1).outerHTML = "<th>Client</th>";
      tr.insertCell(2).outerHTML = "<th>From</th>";
      tr.insertCell(3).outerHTML = "<th>Quantity</th>";
      tr.insertCell(4).outerHTML = "<th>Discharge Date</th>";
      tr.insertCell(5).outerHTML = "<th>Demmurage fees</th>";
      tr.insertCell(6).outerHTML = "<th>Detention fees</th>";
      tr.insertCell(7).outerHTML = "<th>Quay Rent</th>";
      tr.insertCell(8).outerHTML = "<th>Total</th>";
      if(fileName == 'client.html'){
        tr.insertCell(9).outerHTML = "<th>Set Forwarder</th>";
      }else{
        tr.insertCell(9).outerHTML = "<th>Set Discharge Date</th>";
      }

      tr.insertCell(10).outerHTML = "<th></th>";
      if(fileName == 'client.html'){
        tr.insertCell(11).outerHTML = "<th>Forwarder</th>";
      }else{
        tr.insertCell(11).outerHTML = "<th>See terms</th>";
      }

      tr.insertCell(3.5).outerHTML = "<th>To</th>";
    }

}

window.setDischarge = function (shipmentId){
  var date = document.getElementById('date-'+shipmentId).value ;
  //var dateFormat = require('dateformat');
  var now = new Date();

  var r = confirm('Set discharge date for shipment '+ shipmentId + ' to: ' + date + '?');
  date = new Date(date);
  //alert(date)
  if (r == true) {

    var diff = Math.abs(date - now );
    diff = Math.ceil(diff / (1000 * 3600 * 24)); // needs to be improved!
    //alert(diff)
    var ship;
    shp.deployed().then(function(contractInstance){
      ship = contractInstance;
      ship.setDischargeDate(shipmentId,diff,{from: web3.eth.accounts[0], gas:470000}); //

    });
  } else {
      alert('Canceled!');
  }

}

window.setShipmentForwarder= function(shipmentId){
  var forwarder = document.getElementById('forwarder-'+shipmentId).value ;
  //alert(forwarder);
  var ship;
  shp.deployed().then(function(contractInstance){
    ship = contractInstance;
    ship.setShipmentForwarder(shipmentId,forwarder,{from: web3.eth.accounts[0], gas:470000}); //

  });

}

function getForwarder(shipmentId){
  var ship;
  shp.deployed().then(function(contractInstance){
    ship = contractInstance;
    return ship.getForwarder.call(shipmentId,{from: web3.eth.accounts[0]});
  }).then(function(value){

    document.getElementById('forward-' +shipmentId).value = value;
    document.getElementById('forward-' +shipmentId).disabled = true;
  });

}

function getAllContainers(shipId,caller){
  var ship;
  shp.deployed().then(function(contractInstance){
    ship = contractInstance;
    return ship.getContainersCount.call({from: web3.eth.accounts[0]});
  }).then(function(value){

    for (var i = 0; i < value; i++){

      getContainerDetails(i,shipId,caller);

    }
  });


}

function getContainerDetails(containerID,shipId,caller){

      var ship
      var table = document.getElementById("containersTable");
      var row = table.insertRow();
            //var table = document.getElementById("containersTable");



      shp.deployed().then(function(contractInstance){
        ship = contractInstance;
        return  ship.getContainer.call(containerID,{from: web3.eth.accounts[0]});


      }).then(function(value){

        if(value[0] == shipId){
          var dt1;
          var dt2;
          for (var x=10;x>=0;x--){
          var cellID = Math.random();
          var cell = row.insertCell(cellID);
          if(x==0){
            //cell.innerHTML = '<td><a href="container.html?shipId='+shipID+'">'+value[x]+'</a></td>';
            cell.innerHTML = "IMC-"+containerID;
            continue;
          }
          if(x==3){

            //alert(dt1)
            var date = timeConverter(value[x]);
            cell.innerHTML = date;
            continue;
          }
          if(x==4){
            //dt2 = value[x];
            var date = timeConverter(value[x]);
            cell.innerHTML = date;
            continue;
          }
          if(x==9){
            dt1 = value[3];
            if(dt1==0 && caller == 'lsp.html'){

               cell.innerHTML = '<td> <input type="date"  id=pkdate-' +containerID + ' class="form-control"> </td>';
              continue;
            }else{
              cell.innerHTML = '<td> <input type="date" disabled id=pkdate-' +containerID + ' class="form-control"> </td>';
              continue;
            }
          }

          if(x==10){
            dt2 = value[4];
            //alert(caller)
            if(dt2 ==0 && caller == 'lsp.html'){
              cell.innerHTML = '<td> <input type="date"  id=rtdate-' +containerID + ' class="form-control"> </td>';
              continue;
            } else {
              cell.innerHTML = '<td> <input type="date" disabled id=rtdate-' +containerID + ' class="form-control"> </td>';
              continue;

          }

          }

          cell.innerHTML = value[x];
        }
        cell = row.insertCell(10);
        if(dt1==0 && caller == 'lsp.html'){
              cell.innerHTML = '<a id='+containerID+' href="" onclick="setPickupDate(this.id)" class="btn btn-primary">Set</a>';
        } else{
          cell.innerHTML = '<a id='+containerID+' disabled href="" onclick="setPickupDate(this.id)" class="btn btn-primary">Set</a>';
        }

        cell = row.insertCell(12);
        if(dt2 ==0 && caller == 'lsp.html'){
          cell.innerHTML = '<a id='+containerID+ ' href="" onclick="setReturnDate(this.id)" class="btn btn-primary">Set</a>';
        } else{
          cell.innerHTML = '<a id='+containerID+ ' disabled href="" onclick="setReturnDate(this.id)" class="btn btn-primary">Set</a>';

        }



        };
     })
      ;
      if(!table.tHead){
        var header = table.createTHead();
        var tr = header.insertRow(0);
        tr.insertCell(0).outerHTML = "<th>Container Nr</th>";
        tr.insertCell(1).outerHTML = "<th>Type</th>";
        tr.insertCell(2).outerHTML = "<th>Size</th>";
        tr.insertCell(3).outerHTML = "<th>Pickup Date</th>";
        tr.insertCell(4).outerHTML = "<th>Return Date</th>";
        tr.insertCell(5).outerHTML = "<th>Demmurage Fee</th>";
        tr.insertCell(6).outerHTML = "<th>Detention Fee</th>";
        tr.insertCell(7).outerHTML = "<th>Quay Rent</th>";
        tr.insertCell(8).outerHTML = "<th>Total Cost</th>";
        tr.insertCell(9).outerHTML = "<th>Set Pickup Date</th>";
        tr.insertCell(10).outerHTML = "<th></th>";
        tr.insertCell(11).outerHTML = "<th>Set Return Date</th>";
        tr.insertCell(12).outerHTML = "<th></th>";
        }

  }

  window.setPickupDate = function(containerID){
    //var shipmentId = document.getElementById("shipId").value;

    var now = new Date();
    var date = document.getElementById("pkdate-"+containerID).value;
    var r = confirm('Set pickup date for container '+ containerID + ' to: ' + date + '?');
    date = new Date(date);
    if (r == true) {

      var diff = Math.abs(date - now );
      diff = Math.ceil(diff / (1000 * 3600 * 24)); // need to be improved!
     // alert(diff)
    var ship
    shp.deployed().then(function(contractInstance){
      ship = contractInstance;
      ship.setPickupDate(containerID,diff,{from: web3.eth.accounts[0], gas:470000});

    });
    }


  }

   window.getOrderTerms = function(orderId){
    var ship;
    //alert(orderId)
    shp.deployed().then(function(contractInstance){
      ship = contractInstance;
      return ship.getOrderTerms.call(orderId,{from: web3.eth.accounts[0]});
    }).then(function(value){
      var freeDaysDemmurage = value[0];
      var freeDaysDetention = value[1];
      var demmurageFees = value[2];
      var detentionFees = value[3];
      var storageCost = value[4]; 

      alert("Free days demmurage= "+freeDaysDemmurage + " days \nFree days detention= "+freeDaysDetention + " days \nDemmurage fees per day="+demmurageFees+" Euro \nDetention fees per day="+detentionFees+" Euro \nStorage cost per day="+storageCost+'"' );
    });

  }

  window.setReturnDate = function(containerID){
    var shipmentId = document.getElementById("shipId").value;
    var now = new Date();
    var date = document.getElementById("rtdate-"+containerID).value;
    //alert(date)
    var r = confirm('Set return date for container '+ containerID + ' to: ' + date + '?');
    date = new Date(date);
    if (r == true) {

      var diff = Math.abs(date - now );
      diff = Math.ceil(diff / (1000 * 3600 * 24)); // need to be improved!
      //alert(diff)
    var ship
    shp.deployed().then(function(contractInstance){
      ship = contractInstance;
      ship.setReturnDate(shipmentId,containerID,diff,{from: web3.eth.accounts[0], gas:470000});

    });
    }


  }

  function timeConverter(UNIX_timestamp){

    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    //var hour = a.getHours();
    //var min = a.getMinutes();
    //var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year  ; //+ ' ' + hour + ':' + min + ':' + sec
    return time;
  }

/*
//this logic might be needed later, don't delete
if(window.attachEvent) {
  window.attachEvent('onload', shipmentsTable);
} else {
  if(window.onload) {
      var curronload = window.onload;
      var newonload = function(evt) {
          curronload(evt);
          shipmentsTable(evt);
      };
      window.onload = newonload;
  } else {
      window.onload = shipmentsTable;
  }
} */

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

window.addEventListener('load', function() {
    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof web3 !== 'undefined') {
      console.warn("Using web3 detected from external source. If you find that your accounts don't appear or you have 0 MetaCoin, ensure you've configured that source properly. If using MetaMask, see the following link. Feel free to delete this warning. :) http://truffleframework.com/tutorials/truffle-and-metamask")
      // Use Mist/MetaMask's provider
      window.web3 = new Web3(web3.currentProvider);
      shp.setProvider(web3.currentProvider);
      var fileName = location.pathname.split("/").slice(-1);
      if(fileName == 'Shipments.html'){

        //var orderId = parent.document.URL.substring(parent.document.URL.indexOf('?'), parent.document.URL.length);
        //orderId = orderId.substring(orderId.indexOf('=')+1,orderId.length);
        getAllShipments(fileName);

      }
      if(fileName == 'lsp.html'){

        //var orderId = parent.document.URL.substring(parent.document.URL.indexOf('?'), parent.document.URL.length);
        //orderId = orderId.substring(orderId.indexOf('=')+1,orderId.length);
        getAllShipments(fileName);
      }
      if(fileName == 'terminal.html'){

        //var orderId = parent.document.URL.substring(parent.document.URL.indexOf('?'), parent.document.URL.length);
        //orderId = orderId.substring(orderId.indexOf('=')+1,orderId.length);
        getAllShipments(fileName);
      }
      if(fileName == 'orders.html'){
        getAllOrders();
        // $(document).on('click', '#ordersTable tr', function () {window.location.href=$(this).attr('link');}); //alert('You clicked row '+ ($(this).index()+1) );
      }
      if(fileName == 'container.html'){


        //var shipId = parent.document.URL.substring(parent.document.URL.indexOf('?'), parent.document.URL.length);
        //shipId = shipId.substring(shipId.indexOf('=')+1,shipId.length);

        var shipId = getParameterByName('shipId');
        var caller = getParameterByName('caller');

        var input = document.createElement("input");

        input.setAttribute("type", "hidden");

        input.setAttribute("id", "shipId");

        input.setAttribute("value", shipId);
        document.getElementById("containersTable").appendChild(input);
        //$('#form').append('<input type="hidden" id="shipId" value=' + shipId +' />');
        getAllContainers(shipId,caller);

      }
      if(fileName=='carrierAddContract.html'){
        getOrdersCount();
        var select = document.getElementById(1);
        select.onchange = function(){
        var selectedString = select.options[select.selectedIndex].value;
        if(selectedString!='General'){
          document.getElementById(3).value = 'Antwerpen';
          document.getElementById(3).disabled = false;
          document.getElementById(4).value = 'Rotterdam';
          document.getElementById(4).disabled = false;
        } else{
          document.getElementById(3).value = 'NA';
          document.getElementById(3).disabled = true;
          document.getElementById(4).value = 'NA';
          document.getElementById(4).disabled = true;
        }
      }

      }
      if (fileName=='client.html'){
        getAllShipments(fileName);
      }
      if(fileName=='carrierAddShipment.html'){
        loadClients();
        getShipmentsCount();
      }
    } else {
      console.warn("No web3 detected. Falling back to http://127.0.0.1:8545. You should remove this fallback when you deploy live, as it's inherently insecure. Consider switching to Metamask for development. More info here: http://truffleframework.com/tutorials/truffle-and-metamask");
      // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
      window.web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));
    }
    //App.start();
  });
