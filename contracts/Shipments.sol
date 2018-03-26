pragma solidity ^0.4.15;
contract Shipments {
    enum orderStatus {working, ended}
    enum shipmentStatus {pending, atPort,commerciallyReleased, pickedUp, deliverd}
    enum containerType {GP,RF}
    enum containerSize {twenty, fourty}
    
    address[16] public shippingAgents; //what is address[16]

    struct order {
        bytes32 orderNr;
        address shippingAgents;
        bytes32 carrier;
        bytes32 client;
        uint freeDaysDemmurage; //free days to pickup 
        uint demmurageFees; //per day
        uint freeDaysDetention; //free days to return.
        uint detentionFees; // per day
        uint storageCost; // totals
        uint finalAmount;
        bytes32 from; 
        bytes32 to;  
        //uint numOfContainers;
        orderStatus status;
        

        //  requirerequire(orderId >= 0 && orderId <= 15); Amr: why?
    }
    struct shipment {
        //bytes32 shipmentNr;  
        //bytes32 client;
        uint orderId;
        bytes32  forwarder;
        bytes32  from; 
        bytes32 to;
        //uint creationDate; 
        //shipmentStatus status; 
        uint8 numOfContainers; // important for forwarder and also to calculate D&D in case of pickup after free days
        //uint ata; // actual time of arrival 
        uint dischargeDate; // discharge date of last container 
        int totalDemmurageFees;
        int totalDetentionFees;
        uint totalStorageCost;
        uint finalAmount;

    }

    struct container {
        uint shipmentId; 
        //bytes32 containerNr;
        bytes32 cType;
        bytes32 cSize;
        uint dischargeDate;
        // uint8 freeDaysDem; //free days to pickup after discharge. is it on container level or shipment level?
        // uint8 freeDaysDet; //free days to return. is it on container level or shipment level?
        int totalDemmurageFees; 
        int totalDetentionFees; 
        uint storageFees; // fees per day. is it on container level or shipment level? I think it differs based on size and type, so it should be container level
        uint totalStorageCost; 
        uint pickupDate;
        uint returnDate;
        int totalCost;

    }

    
    
    order[] public orders;
    shipment[] public shipments; // to add new shipments. 
    container[] public containers; // to add all containers related to each shipment by shipment ID.
/*     mapping(address => uint[]) public ordersAddedByShippingAgent; // Pouinter to shipments indexes for shipments added by each shipping agent.
    mapping(address => uint[]) public ordersAssignedToForwarder; // Pouinter to shipments indexes for shipments assgined to a freight forwarder. 
    mapping(address => uint[]) public shipmentsAddedByShippingAgent; // Pouinter to shipments indexes for shipments added by each shipping agent.
    mapping(address => uint[]) public shipmentsAssignedToForwarder; // Pouinter to shipments indexes for shipments assgined to a freight forwarder.





    function addOrder (bytes32 orderNr, bytes32 carrier, bytes32 client, bytes32 from, bytes32 to,   uint freeDaysDemmurage, uint freeDaysDetention) public returns(uint orderId) { 
        orderId = orders.length++;
        order storage o = orders[orderId];
        o.orderNr = orderNr;
        o.shippingAgents = msg.sender;
        o.carrier = carrier;
        o.client = client; 
        o.status = orderStatus.working;
        o.from = from;
        o.to = to; 
        //o.numOfContainers = numOfContainers; 
        o.freeDaysDemmurage = freeDaysDemmurage;
        o.freeDaysDetention = freeDaysDetention;

        o.demmurageFees = 5;  // later on it should come from the order details
        o.detentionFees = 5;   // later on it should come from the order details
        
        //ordersAddedByShippingAgent[o.shippingAgents].push(orderId);
        //ordersAssignedToForwarder[o.forwarder].push(orderId);
        o.storageCost = 4; 
        o.finalAmount = 0;

        //require(orderId >= 0 && orderId <= 30); 
        //shippingAgents[orderId] = msg.sender;
        return orderId;
    }

  
    function addShipment ( uint orderId,   
    uint8 numOfContainers,  bytes32 from, bytes32 to, bytes32 cType, bytes32 cSize,bytes32 forwarder) public returns(uint shipmentId) 
    {  
        
        shipmentId = shipments.length++;
        shipment storage s = shipments[shipmentId];
        s.orderId = orderId;
        //order storage o = orders[orderId];
        //require(o.shippingAgents == msg.sender);
        //s.shipmentNr = shipmentNr;
        //s.client = client;
        s.forwarder = forwarder;
        s.from = from;
        s.to = to;
        //s.creationDate = now;
        //s.status = shipmentStatus.pending;
        //setFromTo(shipmentId, from, to);
        s.numOfContainers = numOfContainers;
        s.finalAmount = 0;
        s.totalDemmurageFees = 0;
        s.totalDetentionFees = 0;
        s.totalStorageCost = 0;
        //shipmentsAddedByShippingAgent[msg.sender].push(shipmentId);
        //shipmentsAssignedToForwarder[o.forwarder].push(shipmentId);

        //NewShipmentAdded(shipmentId, o.shippingAgents, o.forwarder);
        
        for (int16 i = 0; i < numOfContainers; i++) {
            addContainer(shipmentId,  cType, cSize);
        }

        return shipmentId;
    }

/*     function setFromTo(uint shipmentId, bytes32 from, bytes32 to) {
        shipment storage s = shipments[shipmentId];
        s.from = from; 
        s.to = to;
     } */

    function setShipmentForwarder(uint shipmentId, bytes32 forwarder) {
        shipment storage s = shipments[shipmentId];
        s.forwarder = forwarder;
    }

    function addContainer (uint shipmentId,  bytes32 cType, bytes32 cSize) public returns(uint containerId) {
        containerId = containers.length++;
        container storage c = containers[containerId];
        c.shipmentId = shipmentId;
        //c.containerNr = containerNr; //unique id for each container
        c.cType = cType;
        c.cSize = cSize;

        c.storageFees = 4; // per day, later on it should come from the order details based on container type and size 
        c.totalCost = 0;
        c.totalDemmurageFees = 0;
        c.totalDetentionFees = 0;
        c.totalStorageCost = 0;
        return containerId;

    }


    function getOrdersCount() returns(uint count) {
        count = orders.length;
        return count;
    }

  /*   function getAllOrders() public constant returns(order[]) {
        return  orders; //[listSize]; //loop? or we can find a better way? 
    } */
 
    function getOrder(uint orderId) returns(string, string, string,string, string, uint) {
        order storage o = orders[orderId];
        string memory orderNr = bytes32ToString(o.orderNr);
        string memory carrier = bytes32ToString(o.carrier);
        string memory client = bytes32ToString(o.client);
        string memory from = bytes32ToString(o.from);
        string memory to = bytes32ToString(o.to); 
        return(orderNr, carrier, client, from, to, o.finalAmount);
        
    }
    function getClients(uint orderId) returns(string) {
        order storage o = orders[orderId];
        string memory client = bytes32ToString(o.client);
        return(client);

    }

    function getOrderTerms(uint shipmentId) returns(uint, uint, uint, uint, uint) {
        shipment storage s = shipments[shipmentId];
        order storage o = orders[s.orderId];
        return(o.freeDaysDemmurage, o.freeDaysDetention, o.demmurageFees, o.detentionFees, o.storageCost);
    }    

    function getShipment(uint shipmentId) returns(uint, string, string, uint8, uint, int, int, uint, uint) {
        shipment storage s = shipments[shipmentId];
        order storage o = orders[s.orderId];

        //string memory shipmentNr = bytes32ToString(s.shipmentNr);
        string memory client = bytes32ToString(o.client);
        
        string memory from = bytes32ToString(s.from);
        //string memory to = bytes32ToString(s.to);
        return (shipmentId, client, from,  s.numOfContainers, s.dischargeDate, s.totalDemmurageFees, s.totalDetentionFees,s.totalStorageCost, s.finalAmount);
    }

    function getForwarder(uint shipmentId) returns(string) {
        shipment storage s = shipments[shipmentId];
        string memory forwarder = bytes32ToString(s.forwarder);
        return(forwarder);
  
    }
    
    function getShipmentsCount()returns(uint count) {
        count = shipments.length; // all shipments from all orders! ac ondition on orderID should be added later
        return count;
    }

    function getAllShipments() {
        //to be added later
    }

    function getContainersCount() returns(uint count) {
        count = containers.length;
        return count;

    }

    function getContainer(uint containerId) returns(uint, string, string, uint, uint, int, int, uint, int) {
   
         container storage c = containers[containerId];
         //string memory orderNr = bytes32ToString(o.orderNr);
         string memory cType = bytes32ToString(c.cType);
         string memory cSize = bytes32ToString(c.cSize);
         return(c.shipmentId, cType, cSize, c.pickupDate, c.returnDate, c.totalDemmurageFees, c.totalDetentionFees, c.totalStorageCost, c.totalCost);


    }

    /* function getAllShipments()returns(shipments[10]) {
        idea: get the length of the shipments array and then loop over this array row by row to return all or part of


    } */

    // function geAlltContainers() 


    function getShipmentFinalAmount(uint shipmentId) returns(int) {
        shipment storage s = shipments[shipmentId];
        return(s.totalDemmurageFees + s.totalDetentionFees + int(s.totalStorageCost));
    }



    // strings are really heavy, only 2 strings (from and to) caused the "stack too deep" error
    // we save them as bytes32 and call the below bytes32ToString function to read them as string
    function bytes32ToString(bytes32 x) constant returns (string) {
    bytes memory bytesString = new bytes(32);
    uint charCount = 0;
    for (uint j = 0; j < 32; j++) {
        byte char = byte(bytes32(uint(x) * 2 ** (8 * j)));
        if (char != 0) {
            bytesString[charCount] = char;
            charCount++;
        }
    }
    bytes memory bytesStringTrimmed = new bytes(charCount);
    for (j = 0; j < charCount; j++) {
        bytesStringTrimmed[j] = bytesString[j];
    }
    return string(bytesStringTrimmed);
}

    function setDischargeDate(uint shipmentId, uint dischargeDate) {
        shipment storage s = shipments[shipmentId];
         s.dischargeDate = now + dischargeDate * 1 days; //this will update the discharge date of the shipment with each container, the final one will be the discharge date of last container, not optimal! 
       


    }


    
    // only forwarder should be able to set pickup date
    // after pickup, fees should be transfered from forwarder to shipping agent
    // whenever pickup date is updated this shipment should be inactive and no one can update any field!
    // it calls calculateAmount after setting the pickup date.

    function setPickupDate( uint containerId, uint pickupDate) {

        //shipment storage o = shipments[shipmentId];
        container storage c = containers[containerId];
        shipment storage s = shipments[c.shipmentId];
        uint orderId = s.orderId;

        c.pickupDate = now + pickupDate * 1 days; // we should pass 0 if on the same day, -1 if in the previous day for example, future dates shouldn't be accepted? 
        calculateDemmurageFees(orderId, c.shipmentId, containerId);
        calculateStorageFees(c.shipmentId, containerId);


    }
    function test(uint oId, uint sId, uint cId) returns(uint, uint, uint, uint, uint, int, uint, int) {
        order storage o = orders[oId];
        shipment storage s = shipments[sId];
        container storage c = containers[cId];
        return (c.pickupDate, s.dischargeDate, (c.pickupDate - s.dischargeDate)/86400, o.freeDaysDemmurage, o.demmurageFees, c.totalDemmurageFees, c.totalStorageCost, c.totalDetentionFees);

    }

    function calculateDemmurageFees(uint orderId, uint shipmentId, uint containerId) {
        
        shipment storage s = shipments[shipmentId];
        //uint orderId = s.orderId;
        order storage o = orders[orderId];
        container storage c = containers[containerId];
        c.totalDemmurageFees = (((int(c.pickupDate - s.dischargeDate))/86400) - int(o.freeDaysDemmurage)) * int(o.demmurageFees); //86400 seconds per day
        if (c.totalDemmurageFees < 0) {
            c.totalDemmurageFees = 0;
        }
        c.totalCost += c.totalDemmurageFees;
        s.totalDemmurageFees += c.totalDemmurageFees;

        //setContainerTotalCost(containerId);

    }

    function calculateStorageFees( uint shipmentId, uint containerId) {
        //order storage o = orders[orderId]; // storage cost based on order level or container (type) level? 
        shipment storage s = shipments[shipmentId];
        container storage c = containers[containerId];
        c.totalStorageCost = uint((c.pickupDate - s.dischargeDate)/86400) * c.storageFees; 
        c.totalCost += int(c.totalStorageCost);
        s.totalStorageCost += c.totalStorageCost;
        //setContainerTotalCost(containerId);

    }

    
    function setReturnDate( uint shipmentId, uint containerId, uint returnDate) {

        // only FF can set return date, to be done
       
        //shipment storage o = shipments[shipmentId];
        container storage c = containers[containerId];
        shipment storage s = shipments[shipmentId];
        uint orderId = s.orderId;
        c.returnDate = now + returnDate * 1 days; // we should pass 0 if on the same day, -1 if in the previous day for example, future dates shouldn't be accepted? 
        calculateDetentionFees(orderId, shipmentId, containerId);
        //calculateAmount(shipmentId);
        //ShipmentPReleased(shipmentId);


    }

    

    function calculateDetentionFees(uint orderId, uint shipmentId, uint containerId) {
        order storage o = orders[orderId];
        shipment storage s = shipments[shipmentId];
        container storage c = containers[containerId];
        c.totalDetentionFees = ((int(c.returnDate - c.pickupDate)/86400) - int(o.freeDaysDetention)) * int(o.detentionFees); 
        if (c.totalDetentionFees < 0) {
            c.totalDetentionFees = 0;
        }
        c.totalCost += c.totalDetentionFees;
        s.totalDetentionFees += c.totalDetentionFees;
        s.finalAmount += uint(c.totalCost); 
        o.finalAmount += uint(c.totalCost);
        //setContainerTotalCost(containerId);
    }
}
