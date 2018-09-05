import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

let dummyData = [
  /* 1 */
  {
    "member": "5b71dafcbb83412351df5cad",
    "objectName": "JeroenCoin",
    "objectType": "Car",
    "objectPrice": 50000,
    "objectHash": "0x657b16f141086bf82d8f7bb12965802d",
    "months": 60,
    "objectDealer": "0x2c17030852C9bE842771A27360dB1509C2D7E633",
    "objectMonthlyCapitalCost": 399,
    "objectMonthlyOperatingCost": 208.33333333333337,
    "municipalityID": "1",
    "objectID": 6
  },

  /* 2 */
  {
    "member": "5b732af9bb83412351df5cb2",
    "objectName": "Troostcoin",
    "objectType": "WindMill",
    "objectPrice": 8166500,
    "objectHash": "0x40bfe5aaf79bee01aae0c710f6cbaf06",
    "months": "150",
    "objectDealer": "0x2c17030852C9bE842771A27360dB1509C2D7E633",
    "objectMonthlyCapitalCost": 54443.333333333336,
    "objectMonthlyOperatingCost": 0,
    "municipalityID": "1",
    "objectID": 9
  },

  /* 3 */
  {
    "member": "5b71dafcbb83412351df5cad",
    "objectName": "SoHeeCoin",
    "objectType": "Car",
    "objectPrice": 37000,
    "objectHash": "0xc9d21979e1a125f2fafa648ef076e214",
    "months": "60",
    "objectDealer": "0x2c17030852C9bE842771A27360dB1509C2D7E633",
    "objectMonthlyCapitalCost": 496,
    "objectMonthlyOperatingCost": 225,
    "municipalityID": "1",
    "objectID": 12
  },

  /* 4 */
  {
    "member": "5b71dafcbb83412351df5cad",
    "objectName": "ArnoCoin",
    "objectType": "Car",
    "objectPrice": 56500,
    "objectHash": "0xa923b3f488fdd4427fd55482ea296221",
    "months": "60",
    "objectDealer": "0x2c17030852C9bE842771A27360dB1509C2D7E633",
    "objectMonthlyCapitalCost": 373,
    "objectMonthlyOperatingCost": 191.66666666666669,
    "municipalityID": "1",
    "objectID": 13
  },

  /* 5 */
  {
    "member": "5b76b347bb83412351df5cba",
    "objectName": "sshyou",
    "objectType": "Car",
    "objectPrice": 35500,
    "objectHash": "0x447c10032ca6aa81398d3850792caf76",
    "months": "60",
    "objectDealer": "0x2c17030852C9bE842771A27360dB1509C2D7E633",
    "objectMonthlyCapitalCost": 355,
    "objectMonthlyOperatingCost": 0,
    "municipalityID": "1",
    "objectID": 15
  },

  /* 6 */
  {
    "member": "5b71dafcbb83412351df5cad",
    "objectName": "JohnCoin",
    "objectType": "Car",
    "objectPrice": "40000",
    "objectHash": "0x9c7a88abef5d4a249d787c13f24d1b48",
    "months": "60",
    "objectDealer": "0x2c17030852C9bE842771A27360dB1509C2D7E633",
    "objectMonthlyCapitalCost": 400,
    "objectMonthlyOperatingCost": 0,
    "municipalityID": "1",
    "objectID": 16
  },

  /* 7 */
  {
    "member": "5b71dafcbb83412351df5cad",
    "objectName": "Silviacoin",
    "objectType": "Heatpump",
    "objectPrice": 4000,
    "objectHash": "0xf660d1e11a3cb7ebd393db1db598cba8",
    "months": 120,
    "objectDealer": "0x2c17030852C9bE842771A27360dB1509C2D7E633",
    "objectMonthlyCapitalCost": 54,
    "objectMonthlyOperatingCost": 0,
    "municipalityID": "1",
    "objectID": 17
  },

  /* 8 */
  {
    "member": "5b71dafcbb83412351df5cad",
    "objectName": "Sandercoin",
    "objectType": "Car",
    "objectPrice": 55000,
    "objectHash": "0x9ec87ae1035025127071dabeb6834d01",
    "months": "60",
    "objectDealer": "0x2c17030852C9bE842771A27360dB1509C2D7E633",
    "objectMonthlyCapitalCost": 386,
    "objectMonthlyOperatingCost": 0,
    "municipalityID": "1",
    "objectID": 18
  },

  /* 9 */
  {
    "member": "5b7fec6ebb83412351df5cc0",
    "objectName": "JerCoin",
    "objectRest": 20000,
    "objectType": "Car",
    "objectPrice": "40000",
    "objectHash": "0xaa38ca63c36b62b98ecac57162ce3f65",
    "months": "60",
    "objectDealer": "0x2c17030852C9bE842771A27360dB1509C2D7E633",
    "objectMonthlyCapitalCost": 460,
    "objectMonthlyOperatingCost": 0,
    "municipalityID": "1",
    "objectID": 19
  },

  /* 10 */
  {
    "member": "5b7fec6ebb83412351df5cc0",
    "objectName": "Ceescoin",
    "objectRest": 22000,
    "objectType": "Car",
    "objectPrice": "40000",
    "objectHash": "0xf004ba248e2fd1974f3e9c7e2d85c5ae",
    "months": "60",
    "objectDealer": "0x2c17030852C9bE842771A27360dB1509C2D7E633",
    "objectMonthlyCapitalCost": 350,
    "objectMonthlyOperatingCost": 0,
    "municipalityID": "1",
    "objectID": 20
  },

  /* 11 */
  {
    "member": "5b7fec6ebb83412351df5cc0",
    "objectName": "Georgecoin",
    "objectRest": 19000,
    "objectType": "Car",
    "objectPrice": "40000",
    "objectHash": "0xc9e26b9646affa5bbeb22144f858bb99",
    "months": "60",
    "objectDealer": "0x2c17030852C9bE842771A27360dB1509C2D7E633",
    "objectMonthlyCapitalCost": 500,
    "objectMonthlyOperatingCost": 0,
    "municipalityID": "1",
    "objectID": 21
  },

  /* 12 */
  {
    "member": "5b727640bb83412351df5caf",
    "objectName": "Pumping",
    "objectRest": 0,
    "objectType": "Heatpump",
    "objectPrice": "7000",
    "objectHash": "0xa46f53729eedef964bd638d149626b65",
    "months": "120",
    "objectDealer": "0x2c17030852C9bE842771A27360dB1509C2D7E633",
    "objectMonthlyCapitalCost": 90,
    "objectMonthlyOperatingCost": 0,
    "municipalityID": "1",
    "objectID": 23
  },

  /* 13 */
  {
    "member": "5b727640bb83412351df5caf",
    "objectName": "House",
    "objectRest": 0,
    "objectType": "SolarPark",
    "objectPrice": 60000,
    "objectHash": "0x91203c11aea1ae9dc32a75df9e0dd0de",
    "months": "240",
    "objectDealer": "0x2c17030852C9bE842771A27360dB1509C2D7E633",
    "objectMonthlyCapitalCost": 480,
    "objectMonthlyOperatingCost": 0,
    "municipalityID": "1",
    "objectID": 24
  },

  /* 14 */
  {
    "member": "5b7fec6ebb83412351df5cc0",
    "objectName": "BlaCoin",
    "objectRest": 20000,
    "objectInterest": "6.7",
    "objectType": "Car",
    "objectPrice": "40000",
    "objectHash": "0xba9d88c00bad0c47a2f5473b6e32abea",
    "months": "60",
    "objectDealer": "0x2c17030852C9bE842771A27360dB1509C2D7E633",
    "objectMonthlyCapitalCost": 500,
    "objectMonthlyOperatingCost": 0,
    "municipalityID": "1",
    "objectID": 46
  },

  /* 15 */
  {
    "member": "5b7fec6ebb83412351df5cc0",
    "objectName": "JeanCoin",
    "objectRest": 0,
    "objectInterest": "3.7",
    "objectType": "Heatpump",
    "objectPrice": "7000",
    "objectHash": "0x39b8f1c7aa9f74f9e38474dea23899a5",
    "months": "120",
    "objectDealer": "0x2c17030852C9bE842771A27360dB1509C2D7E633",
    "objectMonthlyCapitalCost": 80,
    "objectMonthlyOperatingCost": 0,
    "municipalityID": "1",
    "objectID": 47
  },

  /* 16 */
  {
    "member": "5b727640bb83412351df5caf",
    "objectName": "TestCoin",
    "objectRest": 20000,
    "objectInterest": "6.7",
    "objectType": "Car",
    "objectPrice": "40000",
    "objectHash": "0x64478721fb1127fb61d7721b93592d1a",
    "months": "60",
    "objectDealer": "0x2c17030852C9bE842771A27360dB1509C2D7E633",
    "objectMonthlyCapitalCost": 500,
    "objectMonthlyOperatingCost": 0,
    "municipalityID": "1",
    "objectID": 48
  },

  /* 17 */
  {
    "member": "5b727640bb83412351df5caf",
    "objectName": "SoCoin",
    "objectRest": 20000,
    "objectInterest": "8.7",
    "objectType": "Car",
    "objectPrice": "40000",
    "objectHash": "0xb23d9da8fa1c869638c5a7f2170572ff",
    "months": "60",
    "objectDealer": "0x2c17030852C9bE842771A27360dB1509C2D7E633",
    "objectMonthlyCapitalCost": 550,
    "objectMonthlyOperatingCost": 208.33333333333337,
    "municipalityID": "1",
    "objectID": 49
  }
]
class App extends Component {

  exportPdf = () => {
    const columns = [
      { title: "ID", dataKey: "objectID" },
      { title: "Type", dataKey: "objectType" },
      { title: "Name", dataKey: "objectName" },
      { title: "Interest", dataKey: "objectInterest" },
      { title: "Payment", dataKey: "objectRest" },
      { title: "Price", dataKey: "objectPrice" },
      { title: "Months", dataKey: "months" },
      { title: "MCC", dataKey: "objectMonthlyCapitalCost" },
      { title: "MOP", dataKey: "objectMonthlyOperatingCost" },
      { title: "Member", dataKey: "member" },
    ];

    var doc = new jsPDF('l', 'pt');
    doc.autoTable(columns, dummyData, {
      //https://github.com/simonbengtsson/jsPDF-AutoTable#options check here
      theme: "grid",
      // styles: { fillColor: [100, 255, 255] },
      // columnStyles: {
      //   id: { fillColor: 255 }
      // },
      margin: { top: 60 },
      addPageContent: function (data) {
        doc.text("Car Lease Data", 40, 30);
      }
    });
    doc.save('carLeaseData.pdf');
  }

  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Demo: Export To Pdf</h1>
        </header>
        <p className="App-intro">
          <button onClick={this.exportPdf.bind(this)}>Export to PDF </button>
        </p>
      </div>
    );
  }
}

export default App;
