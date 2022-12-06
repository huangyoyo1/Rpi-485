// 創建Modebus Client端
const ModbusRTU = require("modbus-serial");
const client = new ModbusRTU();
// 設定連線Port與baudRate
// default serial port settings are 9600,8,n,1.
client.connectRTUBuffered("/dev/ttyUSB0", { baudRate: 9600 });
// 設定ID
client.setID(1);

//function write() {
    //client.setID(1);

    // write the values 0, 0xffff to registers starting at address 5
    //client.writeRegisters(5, [0 , 0xffff])
        //.then(read);
//}

//function read() {
    // 讀取 address 5 數量1

    //client.readHoldingRegisters(0, 1)
        //.then(console.log);
//}
setInterval(function() {
    client.readHoldingRegisters(0, 1, function(err, data) {
        console.log(data.data);
    });
}, 1000);