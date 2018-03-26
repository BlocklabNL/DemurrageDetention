//web3 = new Web3(new Web3.providers.HttpProvider("http://bl4o3aldfl3s.westeurope.cloudapp.azure.com:8545"));
//abi = JSON.parse('[{"constant":false,"inputs":[{"name":"shipmentId","type":"uint256"}],"name":"getShipment","outputs":[{"name":"","type":"address"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"uint8"},{"name":"","type":"uint8"},{"name":"","type":"uint8"},{"name":"","type":"uint8"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"shipmentsAddedByShippingAgent","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"shipments","outputs":[{"name":"shippingAgent","type":"address"},{"name":"forwarder","type":"address"},{"name":"from","type":"bytes32"},{"name":"to","type":"bytes32"},{"name":"status","type":"uint8"},{"name":"Type","type":"uint8"},{"name":"size","type":"uint8"},{"name":"numOfContainers","type":"uint8"},{"name":"freeDays","type":"uint8"},{"name":"atd","type":"uint256"},{"name":"eta","type":"uint256"},{"name":"ata","type":"uint256"},{"name":"pickupDate","type":"uint256"},{"name":"finalAmount","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"shipmentId","type":"uint256"}],"name":"calculateAmount","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"shipmentsAssignedToForwarder","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"shipmentId","type":"uint256"}],"name":"getFinalAmount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"shipmentId","type":"uint256"},{"name":"pickupDate","type":"uint256"}],"name":"setPickupDate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"shipmentId","type":"uint256"},{"name":"ata","type":"uint8"}],"name":"updateAta","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"x","type":"bytes32"}],"name":"bytes32ToString","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"shipmentId","type":"uint256"},{"name":"freeDays","type":"uint8"},{"name":"atd","type":"uint8"},{"name":"eta","type":"uint8"},{"name":"ata","type":"uint8"}],"name":"addShipmentDates","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"forwarder","type":"address"},{"name":"from","type":"bytes32"},{"name":"to","type":"bytes32"},{"name":"Type","type":"uint8"},{"name":"size","type":"uint8"},{"name":"numOfContainers","type":"uint8"},{"name":"freeDays","type":"uint8"},{"name":"atd","type":"uint8"},{"name":"eta","type":"uint8"},{"name":"ata","type":"uint8"}],"name":"addShipment","outputs":[{"name":"shipmentId","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"shipmentId","type":"uint256"}],"name":"getShipmentDates","outputs":[{"name":"","type":"uint8"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"shipmentId","type":"uint256"},{"indexed":false,"name":"shippingAgent","type":"address"},{"indexed":false,"name":"forwarder","type":"address"},{"indexed":false,"name":"eta","type":"uint256"}],"name":"NewShipmentAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"shipmentId","type":"uint256"},{"indexed":false,"name":"ata","type":"uint256"},{"indexed":false,"name":"freeDays","type":"uint8"}],"name":"AtaUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"shipmentId","type":"uint256"}],"name":"ShipmentCReleased","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"shipmentId","type":"uint256"}],"name":"ShipmentPReleased","type":"event"}]')
//abi = JSON.parse('[{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"totalVotesFor","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"validCandidate","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"candidateList","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"candidateName","type":"bytes32"}],"name":"voteForCandidate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"votesRecieved","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"candidateNames","type":"bytes32[]"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]')
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
    return ship.getShipment.call(shipmentId,{from: "0xb4930Fd334e32019F8e3Ff5B78fa307a7acD05dE"});
    
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
    ship.addOrder(OrderNr,Carrier,Client,From, To, FreeDaysDemurrage,FreeDaysDetention,{from: "0xb4930Fd334e32019F8e3Ff5B78fa307a7acD05dE", gas:470000}); //
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
      ship.addShipment(OrderId,NumContainers,from,to,cType,cSize,Forwarder,{from: "0xb4930Fd334e32019F8e3Ff5B78fa307a7acD05dE", gas:4700000}); //
      //alert("Shipment added")
    });
  }

window.getOrder = function(){
  var orderId = 0;
  var ship;

  shp.deployed().then(function(contractInstance){
    ship = contractInstance;
    return ship.getOrder.call(orderId,{from: "0xb4930Fd334e32019F8e3Ff5B78fa307a7acD05dE"});
    
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
    return ship.getOrdersCount.call({from: "0xb4930Fd334e32019F8e3Ff5B78fa307a7acD05dE"});
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
    return  ship.getClients.call(orderID,{from: "0xb4930Fd334e32019F8e3Ff5B78fa307a7acD05dE"});

    
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
    return  ship.getOrder.call(orderId,{from: "0xb4930Fd334e32019F8e3Ff5B78fa307a7acD05dE"});
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
    return ship.getShipmentsCount.call({from: "0xb4930Fd334e32019F8e3Ff5B78fa307a7acD05dE"});
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
    return ship.getOrdersCount.call({from: "0xb4930Fd334e32019F8e3Ff5B78fa307a7acD05dE"});
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
    return ship.getOrdersCount.call({from: "0xb4930Fd334e32019F8e3Ff5B78fa307a7acD05dE"});
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
        return  ship.getOrder.call(orderID,{from: "0xb4930Fd334e32019F8e3Ff5B78fa307a7acD05dE"});
  
        
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
    return ship.getShipmentsCount.call({from: "0xb4930Fd334e32019F8e3Ff5B78fa307a7acD05dE"});
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
      return  ship.getShipment.call(shipID,{from: "0xb4930Fd334e32019F8e3Ff5B78fa307a7acD05dE"});
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
      ship.setDischargeDate(shipmentId,diff,{from: "0xb4930Fd334e32019F8e3Ff5B78fa307a7acD05dE", gas:470000}); //
      
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
    ship.setShipmentForwarder(shipmentId,forwarder,{from: "0xb4930Fd334e32019F8e3Ff5B78fa307a7acD05dE", gas:470000}); //
    
  });

}

function getForwarder(shipmentId){
  var ship; 
  shp.deployed().then(function(contractInstance){
    ship = contractInstance;
    return ship.getForwarder.call(shipmentId,{from: "0xb4930Fd334e32019F8e3Ff5B78fa307a7acD05dE"});
  }).then(function(value){

    document.getElementById('forward-' +shipmentId).value = value;
    document.getElementById('forward-' +shipmentId).disabled = true;
  });
  
}

function getAllContainers(shipId,caller){
  var ship; 
  shp.deployed().then(function(contractInstance){
    ship = contractInstance;
    return ship.getContainersCount.call({from: "0xb4930Fd334e32019F8e3Ff5B78fa307a7acD05dE"});
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
        return  ship.getContainer.call(containerID,{from: "0xb4930Fd334e32019F8e3Ff5B78fa307a7acD05dE"});
  
        
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
      ship.setPickupDate(containerID,diff,{from: "0xb4930Fd334e32019F8e3Ff5B78fa307a7acD05dE", gas:470000});
      
    });
    }
  

  }

   window.getOrderTerms = function(orderId){
    var ship; 
    //alert(orderId)
    shp.deployed().then(function(contractInstance){
      ship = contractInstance;
      return ship.getOrderTerms.call(orderId,{from: "0xb4930Fd334e32019F8e3Ff5B78fa307a7acD05dE"});
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
      ship.setReturnDate(shipmentId,containerID,diff,{from: "0xb4930Fd334e32019F8e3Ff5B78fa307a7acD05dE", gas:470000});
      
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
      console.warn("No web3 detected. Falling back to http://127.0.0.1:9545. You should remove this fallback when you deploy live, as it's inherently insecure. Consider switching to Metamask for development. More info here: http://truffleframework.com/tutorials/truffle-and-metamask");
      // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
      window.web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));
    }
    //App.start();
  });
  