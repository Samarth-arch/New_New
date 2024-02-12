import React, { useEffect } from "react";
import { LineGraph } from "./LineGraph";
import Table from "./ranked";
import { useContext } from "react";
import UnpaidTable from "./LeastRanked";
import { useState } from "react";
import ContextualExample from "./ProgressBar";
import { DoughnutComponent } from "./doughnut";
import Speedometer from "./Speedometer";
import MapComponent from "./MapContainer";
import WardMapComponent from "./wardMap";
import RegionTable from "./RegionTable";
import { notecontext } from "./notecontext";


const Dashboard = () => {

  const { selectedWard, mapComponent } = MapComponent();
  const [IsLoading, setIsLoading] = useState(false);
  const [SelectedType, setSelectedType] = useState();
  const [speedbtn, setspeedbtn] = useState(null);
  const [fetchedData, setfetchedData] = useState(null);
  const [wardNumber, setwardNumber] = useState(null);
  const {temp} =useContext(notecontext);
  const{clicked, setClicked}= temp;
  
  useEffect(() => {
    const fetchDataAndPopulateCards = async () => {
      try {
        // Fetch data from the specified endpoint
        const response = await fetch("http://localhost:8080/maps/markers");
        
        // Check if the response is successful
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        // Parse the response body as JSON
        const data = await response.json();
        
        // Convert the fetched data to an array and set it using setfetchedData
        setfetchedData(Object.values(data));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    
    // Call the fetchDataAndPopulateCards function when the component mounts
    fetchDataAndPopulateCards();
  }, []);

  
  console.log("first",fetchedData)

  function formatLargeNumber(value) {
    const roundedValue = Math.round(value * 100) / 100;
    const stringValue = roundedValue.toString();
    const truncatedValue = stringValue.substring(0, 5);
    return truncatedValue;
}

  
  const formatIndianCurrency = (value) => {
    if (value >= 1e+12) {
        return `${formatLargeNumber((Math.round(value / 1e+11) / 10).toFixed(2))} Trillion`;
    } else if (value >= 1e+9) {
        return `${formatLargeNumber((Math.round(value / 1e+8) / 10).toFixed(2))} Billion`;
    } else if (value >= 1e+6) {
        return `${formatLargeNumber((Math.round(value / 1e+5) / 10).toFixed(2))} Million`;
    } else if (value >= 1e+3) {
        return `${(value / 1e+3).toFixed(3)} K`;
    } else if (value >= 1e+7) {
        return `${(value / 1e+7).toFixed(2)} Cr`;
    } else if (value >= 1e+5) {
        return `${(value / 1e+5).toFixed(2)} Lakh`;
    } else {
        return value;
    }
}

// console.log("fetcheddata",typeof(fetchedData))
const sidetabel =(selectedWard)=>{

  const fetchedData=[
    {
      "id": "1",
      "Water_Tax": 2500,
      "Garbage_Tax": 0,
      "Property_Tax": 0,
      "pid": "1",
      "Month ": "February",
      "ward": ""
    },
    {
      "id": "10",
      "Water_Tax": 0,
      "Garbage_Tax": 150,
      "Property_Tax": 0,
      "pid": "10",
      "Month ": "February",
      "ward": "2"
    },
    {
      "id": "11",
      "Water_Tax": 0,
      "Garbage_Tax": 0,
      "Property_Tax": 0,
      "pid": "11",
      "ward": "2"
    },
    {
      "id": "12",
      "Water_Tax": 2500,
      "Garbage_Tax": 250,
      "Property_Tax": 4800,
      "pid": "12",
      "Month ": "July",
      "ward": "1"
    },
    {
      "id": "13",
      "Water_Tax": 0,
      "Garbage_Tax": 0,
      "Property_Tax": 1200,
      "pid": "13",
      "Month ": "June",
      "ward": "3"
    },
    {
      "id": "14",
      "Water_Tax": 0,
      "Garbage_Tax": 250,
      "Property_Tax": 0,
      "pid": "14",
      "Month ": "April",
      "ward": "3"
    },
    {
      "id": "15",
      "Water_Tax": 360,
      "Garbage_Tax": 0,
      "Property_Tax": 0,
      "pid": "15",
      "Month": "May",
      "ward": "2"
    },
    {
      "id": "16",
      "Water_Tax": 0,
      "Garbage_Tax": 350,
      "Property_Tax": 3500,
      "pid": "16",
      "ward": "2"
    },
    {
      "id": "17",
      "Water_Tax": 890,
      "Garbage_Tax": 0,
      "Property_Tax": 0,
      "pid": "17",
      "Month ": "August",
      "ward": "1"
    },
    {
      "id": "18",
      "Water_Tax": 0,
      "Garbage_Tax": 150,
      "Property_Tax": 0,
      "pid": "18",
      "Month ": "May",
      "ward": "2"
    },
    {
      "id": "19",
      "Water_Tax": 900,
      "Garbage_Tax": 0,
      "Property_Tax": 4800,
      "pid": "19",
      "Month ": "January",
      "ward": "3"
    },
    {
      "id": "2",
      "Water_Tax": 0,
      "Garbage_Tax": 150,
      "Property_Tax": 3500,
      "pid": "2",
      "Month ": "December",
      "ward": "1"
    },
    {
      "id": "20",
      "Water_Tax": 1000,
      "Garbage_Tax": 150,
      "Property_Tax": 1200,
      "pid": "20",
      "Month ": "December",
      "ward": "4"
    },
    {
      "id": "21",
      "Month": "January ",
      "Water_Tax": 877,
      "Garbage_Tax": 1000,
      "Property_Tax": 0,
      "pid": "21",
      "ward": "40"
    },
    {
      "id": "22",
      "Month": "February",
      "Water_Tax": 258,
      "Garbage_Tax": 2000,
      "Property_Tax": 100,
      "pid": "22",
      "ward": "39"
    },
    {
      "id": "23",
      "Month": "March",
      "Water_Tax": 741,
      "Garbage_Tax": 3000,
      "Property_Tax": 200,
      "pid": "23",
      "ward": "38"
    },
    {
      "id": "24",
      "Month": "April",
      "Water_Tax": 231,
      "Garbage_Tax": 4000,
      "Property_Tax": 300,
      "pid": "24",
      "ward": "37"
    },
    {
      "id": "25",
      "Month": "May",
      "Water_Tax": 312,
      "Garbage_Tax": 5000,
      "Property_Tax": 400,
      "pid": "25",
      "ward": "36"
    },
    {
      "id": "26",
      "Month": "June",
      "Water_Tax": 645,
      "Garbage_Tax": 6000,
      "Property_Tax": 500,
      "pid": "26",
      "ward": "35"
    },
    {
      "id": "27",
      "Month": "July",
      "Water_Tax": 465,
      "Garbage_Tax": 7000,
      "Property_Tax": 600,
      "pid": "27",
      "ward": "34"
    },
    {
      "id": "28",
      "Month": "August",
      "Water_Tax": 978,
      "Garbage_Tax": 8000,
      "Property_Tax": 700,
      "pid": "28",
      "ward": "33"
    },
    {
      "id": "29",
      "Month": "September",
      "Water_Tax": 798,
      "Garbage_Tax": 9000,
      "Property_Tax": 800,
      "pid": "29",
      "ward": "32"
    },
    {
      "id": "3",
      "Water_Tax": 0,
      "Garbage_Tax": 0,
      "Property_Tax": 0,
      "pid": "3",
      "Month": "April",
      "ward": "4"
    },
    {
      "id": "30",
      "Month": "October",
      "Water_Tax": 0,
      "Garbage_Tax": 1500,
      "Property_Tax": 900,
      "pid": "30",
      "ward": "31"
    },
    {
      "id": "3001828298",
      "Water_Tax": "6797",
      "Property_Tax_Date": "9 - 2 - 2024",
      "Garbage_Tax": "1200",
      "Property_Tax": "4979",
      "Garbage_Tax_Date": "9 - 2 - 2024",
      "pid": "3001828298",
      "Water_Tax_Date": "9 - 2 - 2024"
    },
    {
      "id": "31",
      "Month": "November",
      "Water_Tax": 856,
      "Garbage_Tax": 2500,
      "Property_Tax": 0,
      "pid": "31",
      "ward": "30"
    },
    {
      "id": "32",
      "Month": "December",
      "Water_Tax": 854,
      "Garbage_Tax": 3500,
      "Property_Tax": 100,
      "pid": "32",
      "ward": "29"
    },
    {
      "id": "33",
      "Month": "January ",
      "Water_Tax": 145,
      "Garbage_Tax": 4500,
      "Property_Tax": 255,
      "pid": "33",
      "ward": "28"
    },
    {
      "id": "34",
      "Month": "February",
      "Water_Tax": 365,
      "Garbage_Tax": 5500,
      "Property_Tax": 6885,
      "pid": "34",
      "ward": "27"
    },
    {
      "id": "35",
      "Month": "March",
      "Water_Tax": 785,
      "Garbage_Tax": 6500,
      "Property_Tax": 55,
      "pid": "35",
      "ward": "26"
    },
    {
      "id": "3548788737",
      "Water_Tax": "600",
      "Property_Tax_Date": "11 - 2 - 2024",
      "Garbage_Tax": "1200",
      "Property_Tax": "436467",
      "Garbage_Tax_Date": "11 - 2 - 2024",
      "pid": "3548788737",
      "Water_Tax_Date": "11 - 2 - 2024"
    },
    {
      "id": "36",
      "Month": "April",
      "Water_Tax": 658,
      "Garbage_Tax": 7500,
      "Property_Tax": 645,
      "pid": "36",
      "ward": "25"
    },
    {
      "id": "37",
      "Month": "May",
      "Water_Tax": 0,
      "Garbage_Tax": 8500,
      "Property_Tax": 785,
      "pid": "37",
      "ward": "24"
    },
    {
      "id": "38",
      "Month": "June",
      "Water_Tax": 585,
      "Garbage_Tax": 9500,
      "Property_Tax": 325,
      "pid": "38",
      "ward": "23"
    },
    {
      "id": "39",
      "Month": "July",
      "Water_Tax": 21,
      "Garbage_Tax": 1050,
      "Property_Tax": 654,
      "pid": "39",
      "ward": "22"
    },
    {
      "id": "4",
      "Water_Tax": 360,
      "Garbage_Tax": 150,
      "Property_Tax": 0,
      "pid": "4",
      "ward": "4"
    },
    {
      "id": "40",
      "Month": "August",
      "Water_Tax": 30,
      "Garbage_Tax": 2050,
      "Property_Tax": 110,
      "pid": "40",
      "ward": "21"
    },
    {
      "id": "5",
      "Water_Tax": 0,
      "Garbage_Tax": 0,
      "Property_Tax": 4800,
      "pid": "5",
      "ward": "4"
    },
    {
      "id": "6",
      "Water_Tax": 890,
      "Garbage_Tax": 150,
      "Property_Tax": 1200,
      "pid": "6",
      "Month ": "January"
    },
    {
      "id": "7",
      "Water_Tax": 0,
      "Garbage_Tax": 0,
      "Property_Tax": 0,
      "pid": "7",
      "Month ": "January",
      "ward": "5"
    },
    {
      "id": "8",
      "Water_Tax": 900,
      "Garbage_Tax": 150,
      "Property_Tax": 0,
      "pid": "8",
      "Month ": "January",
      "ward": "5"
    },
    {
      "id": "8337823493",
      "Water_Tax": "46764",
      "Property_Tax_Date": "11 - 2 - 2024",
      "Garbage_Tax": "9797",
      "Property_Tax": "6446",
      "Garbage_Tax_Date": "11 - 2 - 2024",
      "pid": "8337823493",
      "Water_Tax_Date": "11 - 2 - 2024"
    },
    {
      "id": "8573378574",
      "Water_Tax": "600",
      "Property_Tax_Date": "9 - 2 - 2024",
      "Garbage_Tax": "800",
      "Property_Tax": "300",
      "Garbage_Tax_Date": "9 - 2 - 2024",
      "pid": "8573378574",
      "Water_Tax_Date": "9 - 2 - 2024"
    },
    {
      "id": "8939646816",
      "Water_Tax": "250",
      "Property_Tax_Date": "4 - 2 - 2024",
      "Garbage_Tax": "250",
      "Property_Tax": "10000",
      "Garbage_Tax_Date": "1 - 2 - 2024",
      "pid": "8939646816",
      "Water_Tax_Date": "6 - 2 - 2024"
    },
    {
      "id": "9",
      "Water_Tax": 1000,
      "Garbage_Tax": 0,
      "Property_Tax": 3500,
      "pid": "9"
    }
  ]

    if (selectedWard==null)
    {
       const totalpersons=fetchedData.length;
       const waterpersons=fetchedData.filter((entry)=> entry.Water_Tax!==0);
       const Garbagepersons=fetchedData.filter((entry)=> entry.Garbage_Tax!==0);
       const propertyrsons=fetchedData.filter((entry)=> entry.Property_Tax!==0);

       document.getElementById("samarth").innerHTML=`Overall`;
      document.getElementById("FirstBlock").innerHTML=`${waterpersons.length}/${totalpersons}`;
    document.getElementById("SecondBlock").innerHTML=`${propertyrsons.length}/${totalpersons}`;
    document.getElementById("ThirdBlock").innerHTML=`${Garbagepersons.length}/${totalpersons}`;
    }

    if (clicked!==null) 
    {
      selectedWard=clicked;
      const dataArray = Object.values(fetchedData);

    //     "id": "1",
    //     "Water_Tax": 2500,
    //     "Garbage_Tax": 0,
    //     "Property_Tax": 0,
    //     "pid": "1",
    //     "Month ": "February",
    //     "ward": ""
    //   },
    //   {
    //     "id": "10",
    //     "Water_Tax": 0,
    //     "Garbage_Tax": 150,
    //     "Property_Tax": 0,
    //     "pid": "10",
    //     "Month ": "February",
    //     "ward": "2"
    //   },
    //   {
    //     "id": "11",
    //     "Water_Tax": 0,
    //     "Garbage_Tax": 0,
    //     "Property_Tax": 0,
    //     "pid": "11",
    //     "ward": "2"
    //   },
    //   {
    //     "id": "12",
    //     "Water_Tax": 2500,
    //     "Garbage_Tax": 250,
    //     "Property_Tax": 4800,
    //     "pid": "12",
    //     "Month ": "July",
    //     "ward": "1"
    //   },
    //   {
    //     "id": "13",
    //     "Water_Tax": 0,
    //     "Garbage_Tax": 0,
    //     "Property_Tax": 1200,
    //     "pid": "13",
    //     "Month ": "June",
    //     "ward": "3"
    //   },
    //   {
    //     "id": "14",
    //     "Water_Tax": 0,
    //     "Garbage_Tax": 250,
    //     "Property_Tax": 0,
    //     "pid": "14",
    //     "Month ": "April",
    //     "ward": "3"
    //   },
    //   {
    //     "id": "15",
    //     "Water_Tax": 360,
    //     "Garbage_Tax": 0,
    //     "Property_Tax": 0,
    //     "pid": "15",
    //     "Month": "May",
    //     "ward": "2"
    //   },
    //   {
    //     "id": "16",
    //     "Water_Tax": 0,
    //     "Garbage_Tax": 350,
    //     "Property_Tax": 3500,
    //     "pid": "16",
    //     "ward": "2"
    //   },
    //   {
    //     "id": "17",
    //     "Water_Tax": 890,
    //     "Garbage_Tax": 0,
    //     "Property_Tax": 0,
    //     "pid": "17",
    //     "Month ": "August",
    //     "ward": "1"
    //   },
    //   {
    //     "id": "18",
    //     "Water_Tax": 0,
    //     "Garbage_Tax": 150,
    //     "Property_Tax": 0,
    //     "pid": "18",
    //     "Month ": "May",
    //     "ward": "2"
    //   },
    //   {
    //     "id": "19",
    //     "Water_Tax": 900,
    //     "Garbage_Tax": 0,
    //     "Property_Tax": 4800,
    //     "pid": "19",
    //     "Month ": "January",
    //     "ward": "3"
    //   },
    //   {
    //     "id": "2",
    //     "Water_Tax": 0,
    //     "Garbage_Tax": 150,
    //     "Property_Tax": 3500,
    //     "pid": "2",
    //     "Month ": "December",
    //     "ward": "1"
    //   },
    //   {
    //     "id": "20",
    //     "Water_Tax": 1000,
    //     "Garbage_Tax": 150,
    //     "Property_Tax": 1200,
    //     "pid": "20",
    //     "Month ": "December",
    //     "ward": "4"
    //   },
    //   {
    //     "id": "3",
    //     "Water_Tax": 0,
    //     "Garbage_Tax": 0,
    //     "Property_Tax": 0,
    //     "pid": "3",
    //     "Month": "April",
    //     "ward": "4"
    //   },
    //   {
    //     "id": "4",
    //     "Water_Tax": 360,
    //     "Garbage_Tax": 150,
    //     "Property_Tax": 0,
    //     "pid": "4",
    //     "ward": "4"
    //   },
    //   {
    //     "id": "5",
    //     "Water_Tax": 0,
    //     "Garbage_Tax": 0,
    //     "Property_Tax": 4800,
    //     "pid": "5",
    //     "ward": "4"
    //   },
    //   {
    //     "id": "6",
    //     "Water_Tax": 890,
    //     "Garbage_Tax": 150,
    //     "Property_Tax": 1200,
    //     "pid": "6",
    //     "Month ": "January"
    //   },
    //   {
    //     "id": "7",
    //     "Water_Tax": 0,
    //     "Garbage_Tax": 0,
    //     "Property_Tax": 0,
    //     "pid": "7",
    //     "Month ": "January",
    //     "ward": "5"
    //   },
    //   {
    //     "id": "8",
    //     "Water_Tax": 900,
    //     "Garbage_Tax": 150,
    //     "Property_Tax": 0,
    //     "pid": "8",
    //     "Month ": "January",
    //     "ward": "5"
    //   },
    //   {
    //     "id": "9",
    //     "Water_Tax": 1000,
    //     "Garbage_Tax": 0,
    //     "Property_Tax": 3500,
    //     "pid": "9"
    //   }
    // ]  
    const TotalPersons = dataArray.filter((entry) => entry.ward === `${selectedWard}`);
    
    const PaidWater= TotalPersons.filter((entry)=> entry.Water_Tax!==0);
    const PaidGarbage= TotalPersons.filter((entry)=> entry.Garbage_Tax!==0);
    const PaidProperty= TotalPersons.filter((entry)=> entry.Property_Tax!==0);



    document.getElementById("FirstBlock").innerHTML=`${PaidWater.length}/${TotalPersons.length}`;
    document.getElementById("SecondBlock").innerHTML=`${PaidGarbage.length}/${TotalPersons.length}`;
    document.getElementById("ThirdBlock").innerHTML=`${PaidProperty.length}/${TotalPersons.length}`;
    document.getElementById("samarth").innerHTML=`Ward Number : ${selectedWard}`;
  }

  }

  const fourbuttons = (selectedWard) => {
    const fetchedData=[
      {
        "id": "1",
        "Water_Tax": 2500,
        "Garbage_Tax": 0,
        "Property_Tax": 0,
        "pid": "1",
        "Month ": "February",
        "ward": ""
      },
      {
        "id": "10",
        "Water_Tax": 0,
        "Garbage_Tax": 150,
        "Property_Tax": 0,
        "pid": "10",
        "Month ": "February",
        "ward": "2"
      },
      {
        "id": "11",
        "Water_Tax": 0,
        "Garbage_Tax": 0,
        "Property_Tax": 0,
        "pid": "11",
        "ward": "2"
      },
      {
        "id": "12",
        "Water_Tax": 2500,
        "Garbage_Tax": 250,
        "Property_Tax": 4800,
        "pid": "12",
        "Month ": "July",
        "ward": "1"
      },
      {
        "id": "13",
        "Water_Tax": 0,
        "Garbage_Tax": 0,
        "Property_Tax": 1200,
        "pid": "13",
        "Month ": "June",
        "ward": "3"
      },
      {
        "id": "14",
        "Water_Tax": 0,
        "Garbage_Tax": 250,
        "Property_Tax": 0,
        "pid": "14",
        "Month ": "April",
        "ward": "3"
      },
      {
        "id": "15",
        "Water_Tax": 360,
        "Garbage_Tax": 0,
        "Property_Tax": 0,
        "pid": "15",
        "Month": "May",
        "ward": "2"
      },
      {
        "id": "16",
        "Water_Tax": 0,
        "Garbage_Tax": 350,
        "Property_Tax": 3500,
        "pid": "16",
        "ward": "2"
      },
      {
        "id": "17",
        "Water_Tax": 890,
        "Garbage_Tax": 0,
        "Property_Tax": 0,
        "pid": "17",
        "Month ": "August",
        "ward": "1"
      },
      {
        "id": "18",
        "Water_Tax": 0,
        "Garbage_Tax": 150,
        "Property_Tax": 0,
        "pid": "18",
        "Month ": "May",
        "ward": "2"
      },
      {
        "id": "19",
        "Water_Tax": 900,
        "Garbage_Tax": 0,
        "Property_Tax": 4800,
        "pid": "19",
        "Month ": "January",
        "ward": "3"
      },
      {
        "id": "2",
        "Water_Tax": 0,
        "Garbage_Tax": 150,
        "Property_Tax": 3500,
        "pid": "2",
        "Month ": "December",
        "ward": "1"
      },
      {
        "id": "20",
        "Water_Tax": 1000,
        "Garbage_Tax": 150,
        "Property_Tax": 1200,
        "pid": "20",
        "Month ": "December",
        "ward": "4"
      },
      {
        "id": "21",
        "Month": "January ",
        "Water_Tax": 877,
        "Garbage_Tax": 1000,
        "Property_Tax": 0,
        "pid": "21",
        "ward": "40"
      },
      {
        "id": "22",
        "Month": "February",
        "Water_Tax": 258,
        "Garbage_Tax": 2000,
        "Property_Tax": 100,
        "pid": "22",
        "ward": "39"
      },
      {
        "id": "23",
        "Month": "March",
        "Water_Tax": 741,
        "Garbage_Tax": 3000,
        "Property_Tax": 200,
        "pid": "23",
        "ward": "38"
      },
      {
        "id": "24",
        "Month": "April",
        "Water_Tax": 231,
        "Garbage_Tax": 4000,
        "Property_Tax": 300,
        "pid": "24",
        "ward": "37"
      },
      {
        "id": "25",
        "Month": "May",
        "Water_Tax": 312,
        "Garbage_Tax": 5000,
        "Property_Tax": 400,
        "pid": "25",
        "ward": "36"
      },
      {
        "id": "26",
        "Month": "June",
        "Water_Tax": 645,
        "Garbage_Tax": 6000,
        "Property_Tax": 500,
        "pid": "26",
        "ward": "35"
      },
      {
        "id": "27",
        "Month": "July",
        "Water_Tax": 465,
        "Garbage_Tax": 7000,
        "Property_Tax": 600,
        "pid": "27",
        "ward": "34"
      },
      {
        "id": "28",
        "Month": "August",
        "Water_Tax": 978,
        "Garbage_Tax": 8000,
        "Property_Tax": 700,
        "pid": "28",
        "ward": "33"
      },
      {
        "id": "29",
        "Month": "September",
        "Water_Tax": 798,
        "Garbage_Tax": 9000,
        "Property_Tax": 800,
        "pid": "29",
        "ward": "32"
      },
      {
        "id": "3",
        "Water_Tax": 0,
        "Garbage_Tax": 0,
        "Property_Tax": 0,
        "pid": "3",
        "Month": "April",
        "ward": "4"
      },
      {
        "id": "30",
        "Month": "October",
        "Water_Tax": 0,
        "Garbage_Tax": 1500,
        "Property_Tax": 900,
        "pid": "30",
        "ward": "31"
      },
      {
        "id": "3001828298",
        "Water_Tax": "6797",
        "Property_Tax_Date": "9 - 2 - 2024",
        "Garbage_Tax": "1200",
        "Property_Tax": "4979",
        "Garbage_Tax_Date": "9 - 2 - 2024",
        "pid": "3001828298",
        "Water_Tax_Date": "9 - 2 - 2024"
      },
      {
        "id": "31",
        "Month": "November",
        "Water_Tax": 856,
        "Garbage_Tax": 2500,
        "Property_Tax": 0,
        "pid": "31",
        "ward": "30"
      },
      {
        "id": "32",
        "Month": "December",
        "Water_Tax": 854,
        "Garbage_Tax": 3500,
        "Property_Tax": 100,
        "pid": "32",
        "ward": "29"
      },
      {
        "id": "33",
        "Month": "January ",
        "Water_Tax": 145,
        "Garbage_Tax": 4500,
        "Property_Tax": 255,
        "pid": "33",
        "ward": "28"
      },
      {
        "id": "34",
        "Month": "February",
        "Water_Tax": 365,
        "Garbage_Tax": 5500,
        "Property_Tax": 6885,
        "pid": "34",
        "ward": "27"
      },
      {
        "id": "35",
        "Month": "March",
        "Water_Tax": 785,
        "Garbage_Tax": 6500,
        "Property_Tax": 55,
        "pid": "35",
        "ward": "26"
      },
      {
        "id": "3548788737",
        "Water_Tax": "600",
        "Property_Tax_Date": "11 - 2 - 2024",
        "Garbage_Tax": "1200",
        "Property_Tax": "436467",
        "Garbage_Tax_Date": "11 - 2 - 2024",
        "pid": "3548788737",
        "Water_Tax_Date": "11 - 2 - 2024"
      },
      {
        "id": "36",
        "Month": "April",
        "Water_Tax": 658,
        "Garbage_Tax": 7500,
        "Property_Tax": 645,
        "pid": "36",
        "ward": "25"
      },
      {
        "id": "37",
        "Month": "May",
        "Water_Tax": 0,
        "Garbage_Tax": 8500,
        "Property_Tax": 785,
        "pid": "37",
        "ward": "24"
      },
      {
        "id": "38",
        "Month": "June",
        "Water_Tax": 585,
        "Garbage_Tax": 9500,
        "Property_Tax": 325,
        "pid": "38",
        "ward": "23"
      },
      {
        "id": "39",
        "Month": "July",
        "Water_Tax": 21,
        "Garbage_Tax": 1050,
        "Property_Tax": 654,
        "pid": "39",
        "ward": "22"
      },
      {
        "id": "4",
        "Water_Tax": 360,
        "Garbage_Tax": 150,
        "Property_Tax": 0,
        "pid": "4",
        "ward": "4"
      },
      {
        "id": "40",
        "Month": "August",
        "Water_Tax": 30,
        "Garbage_Tax": 2050,
        "Property_Tax": 110,
        "pid": "40",
        "ward": "21"
      },
      {
        "id": "5",
        "Water_Tax": 0,
        "Garbage_Tax": 0,
        "Property_Tax": 4800,
        "pid": "5",
        "ward": "4"
      },
      {
        "id": "6",
        "Water_Tax": 890,
        "Garbage_Tax": 150,
        "Property_Tax": 1200,
        "pid": "6",
        "Month ": "January"
      },
      {
        "id": "7",
        "Water_Tax": 0,
        "Garbage_Tax": 0,
        "Property_Tax": 0,
        "pid": "7",
        "Month ": "January",
        "ward": "5"
      },
      {
        "id": "8",
        "Water_Tax": 900,
        "Garbage_Tax": 150,
        "Property_Tax": 0,
        "pid": "8",
        "Month ": "January",
        "ward": "5"
      },
      {
        "id": "8337823493",
        "Water_Tax": "46764",
        "Property_Tax_Date": "11 - 2 - 2024",
        "Garbage_Tax": "9797",
        "Property_Tax": "6446",
        "Garbage_Tax_Date": "11 - 2 - 2024",
        "pid": "8337823493",
        "Water_Tax_Date": "11 - 2 - 2024"
      },
      {
        "id": "8573378574",
        "Water_Tax": "600",
        "Property_Tax_Date": "9 - 2 - 2024",
        "Garbage_Tax": "800",
        "Property_Tax": "300",
        "Garbage_Tax_Date": "9 - 2 - 2024",
        "pid": "8573378574",
        "Water_Tax_Date": "9 - 2 - 2024"
      },
      {
        "id": "8939646816",
        "Water_Tax": "250",
        "Property_Tax_Date": "4 - 2 - 2024",
        "Garbage_Tax": "250",
        "Property_Tax": "10000",
        "Garbage_Tax_Date": "1 - 2 - 2024",
        "pid": "8939646816",
        "Water_Tax_Date": "6 - 2 - 2024"
      },
      {
        "id": "9",
        "Water_Tax": 1000,
        "Garbage_Tax": 0,
        "Property_Tax": 3500,
        "pid": "9"
      }
    ]
    if (selectedWard && fetchedData) {
      const wardData = fetchedData.filter((entry) => entry.ward === `${selectedWard}`);

      if (wardData.length > 0) {
        
      
      const WardWaterTax = wardData.reduce((total, entry) => total + entry.Water_Tax, 0);
      const WardGarbageTax = wardData.reduce((total, entry) => total + entry.Garbage_Tax, 0);
      const WardPropertyTax = wardData.reduce((total, entry) => total + entry.Property_Tax, 0);
      
      
      const TotalWardTax = WardGarbageTax + WardPropertyTax + WardWaterTax;
      
       console.log("total value in cr",formatIndianCurrency(TotalWardTax));
  
        document.getElementById("totalRevenueValue").innerText = `₹ ${(formatIndianCurrency(TotalWardTax))}`;
        document.getElementById("waterTaxValue").innerText = `₹ ${formatIndianCurrency(WardWaterTax)}`;
        document.getElementById("garbageTaxValue").innerText = `₹ ${formatIndianCurrency(WardGarbageTax)}`;
        document.getElementById("propertyTaxValue").innerText = `₹ ${formatIndianCurrency(WardPropertyTax)}`;
      }
    } else if (fetchedData!=null && selectedWard==null) {

      const totalWaterTax = fetchedData.reduce((total, entry) => total + entry.Water_Tax, 0);
      const totalGarbageTax = fetchedData.reduce((total, entry) => total + entry.Garbage_Tax, 0);
      const totalPropertyTax = fetchedData.reduce((total, entry) => total + entry.Property_Tax, 0);
  
      const totalRevenue = totalGarbageTax + totalPropertyTax + totalWaterTax;
      console.log("totalrevenue",formatIndianCurrency(totalRevenue))
  
      document.getElementById("totalRevenueValue").innerText = `₹ ${formatIndianCurrency(totalRevenue)}`;
      document.getElementById("waterTaxValue").innerText = `₹ ${formatIndianCurrency(totalWaterTax)}`;
      document.getElementById("garbageTaxValue").innerText = `₹ ${formatIndianCurrency(totalGarbageTax)}`;
      document.getElementById("propertyTaxValue").innerText = `₹ ${formatIndianCurrency(totalPropertyTax)}`;
    }
    else
    {
      document.getElementById("totalRevenueValue").innerText = `₹ ${0}`;
      document.getElementById("waterTaxValue").innerText = `₹ ${0}`;
      document.getElementById("garbageTaxValue").innerText = `₹ ${0}`;
      document.getElementById("propertyTaxValue").innerText = `₹ ${0}`;
    }
  };
  
  useEffect(() => {
    fourbuttons(selectedWard,fetchedData);
  }, [selectedWard,fetchedData]);
  
  useEffect(() => {
    sidetabel(selectedWard,fetchedData);
  }, [selectedWard,fetchedData]);
  
  
  const handleclick = (ward) => {
    setwardNumber(ward);
  };

  const handlebuttonclick = (taxtype) => {
    setSelectedType(taxtype);
  };

  const handlebtn = (taxtype) => {
    setspeedbtn(taxtype);
  };

  return (
    <>
      <div style={{ cursor: "pointer", userSelect: "none" }}>
        <spinner className="text-center"/>
        <div className="main-panel">
          <div className="content-wrapper">
            <div className="row">
              <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
                {/* card 1 */}
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-9">
                        <div className="d-flex align-items-center align-self-start">
                          <h3 className="mb-0" id="totalRevenueValue">
                            Loading...
                          </h3>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="icon icon-box-warning ">
                          <span className="mdi mdi-arrow-top-right icon-item"></span>
                        </div>
                      </div>
                    </div>
                    <h6 className="text-muted font-weight-normal">Total Revenue</h6>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
                {/* card 2 */}
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-9">
                        <div className="d-flex align-items-center align-self-start">
                          <h3 className="mb-0" id="waterTaxValue">
                            Loading...
                          </h3>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="icon icon-box-primary">
                          <span className=" mdi mdi-cup-water  icon-item"></span>
                        </div>
                      </div>
                    </div>
                    <h6 className="text-muted font-weight-normal">Water Tax</h6>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
                {/* card 3 */}
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-9">
                        <div className="d-flex align-items-center align-self-start">
                          <h3 className="mb-0" id="propertyTaxValue">
                            Loading...
                          </h3>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="icon icon-box-danger">
                          <span className=" mdi mdi-store di left icon-item"></span>
                        </div>
                      </div>
                    </div>
                    <h6 className="text-muted font-weight-normal">Property Tax</h6>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
                {/* card 4 */}
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-9">
                        <div className="d-flex align-items-center align-self-start">
                          <h3 className="mb-0" id="garbageTaxValue">
                            Loading...
                          </h3>
                          {/* <p className="text-success ms-2 mb-0 font-weight-medium">
                          +3.5%
                        </p> */}
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="icon icon-box-success ">
                          <span className=" mdi mdi-archive icon-item"></span>
                        </div>
                      </div>
                    </div>
                    <h6 className="text-muted font-weight-normal">Garbage Tax</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              {/* ward table */}
              <div className="col-md-3 grid-margin stretch-card">
                <div
                  className="card"
                  style={{
                    height: "78vh",
                    overflowY: "auto",
                    scrollbarWidth: "thick",
                    overflowX: "hidden",
                  }}
                >
                  <div className="card-body">
                    <dash/>
                    <RegionTable/>
                  </div>
                  <style>
                    {`
            /* WebKit Scrollbar Styles */
            .card::-webkit-scrollbar {
                width: 8px;
            }
            .card::-webkit-scrollbar-thumb {
                background-color: #555555;
            }
            .card::-webkit-scrollbar-track {
                background-color:   #333333 ;
            }
        `}
                  </style>
                </div>
              </div>
              {/* map card */}
              <div className="col-md-6 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">{mapComponent}</div>
                </div>
              </div>
              <div className="col-md-3 grid-margin stretch-card">
                <div className="card ">
                  <div className="card-body">
                    <div className="md-3">
                      <h3 className="text-white font-weight-normal" id="samarth">
                      Ward number : {selectedWard}
                      </h3>
                      <div
                        className="card"
                        style={{
                          backgroundColor: "rgba(0,0,0,0.6)",
                          marginBottom: "12px",
                          marginTop: "20px",
                          padding: "0px",
                        }}
                      >
                        <div className="row">
                          <div
                            className="card-body"
                            style={{ height: "80px", minHeight: "110px" }}
                          >
                            <h6>Water Tax</h6>
                            <p className="text-muted font-weight-normal" id="FirstBlock" >persons/totalpersons</p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="card"
                        style={{
                          backgroundColor: "rgba(0,0,0,0.6)",
                          marginBottom: "12px",
                          padding: "0px",
                        }}
                      >
                        <div className="row">
                          <div
                            className="card-body"
                            style={{ height: "80px", minHeight: "110px" }}
                          >
                            <h6>Property Tax</h6>
                            <p className="text-muted font-weight-normal" id="SecondBlock" >
                              persons/totalpersons
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="card"
                        style={{
                          backgroundColor: "rgba(0,0,0,0.6)",
                          marginBottom: "12px",
                          padding: "0px",
                        }}
                      >
                        <div className="row">
                          <div
                            className="card-body"
                            style={{ height: "80px", minHeight: "110px" }}
                          >
                            <h6>Garbage Tax</h6>
                            <p className="text-muted font-weight-normal" id="ThirdBlock">
                              persons/totalpersons
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              {/* progess chart */}
              <div className="col-sm-6 grid-margin">
                <div className="card">
                  <div
                    className="card-body"
                    style={{ height: "269px", alignItems: "center" }}
                  >
                    <ContextualExample />
                  </div>
                </div>
              </div>
              {/* speedo meter */}
              <div className="col-sm-6 grid-margin">
                <div className="card">
                  <div
                    className="row"
                    style={{
                      justifyContent: "center",
                      gap: "8px",
                      marginBottom: "8px",
                      marginTop: "8px",
                    }}
                  >
                    <button
                      className="btn btn-primary btn-sm"
                      style={{ width: "100px" }}
                      onClick={() => {
                        handlebtn("");
                      }}
                    >
                      Overall Tax
                    </button>
                    <button
                      className="btn btn-primary btn-sm"
                      style={{ width: "100px" }}
                      onClick={() => {
                        handlebtn("Garbage_Tax");
                      }}
                    >
                      Garbage Tax
                    </button>
                    <button
                      className="btn btn-primary btn-sm"
                      style={{ width: "100px" }}
                      onClick={() => {
                        handlebtn("Property_Tax");
                      }}
                    >
                      Property Tax
                    </button>
                    <button
                      className="btn btn-primary btn-sm"
                      style={{ width: "100px" }}
                      onClick={() => {
                        handlebtn("Water_Tax");
                      }}
                    >
                      Water Tax
                    </button>
                  </div>
                  <div
                    className="card-body"
                    style={{
                      width: "300px",
                      height: "229px",
                      display: "flex",

                      borderRadius: "5px",
                      justifyContent: "center",
                      position: "relative",
                      margin: "auto",
                    }}
                  >
                    <Speedometer
                      TaxSelected={speedbtn}
                      wardNumber={wardNumber}
                    />
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-12">
                          {/* Scrollable Menu */}
                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn btn-default dropdown-toggle"
                              data-toggle="dropdown"
                              style={{ pointer: "arrow" }}
                            >
                              Ward List
                            </button>
                            <ul
                              className="dropdown-menu scrollable-menu"
                              role="menu"
                              style={{
                                height: "auto",
                                maxHeight: "200px",
                                overflowX: "hidden",
                              }}
                            >
                              {[...Array(10).keys()].map((index) => (
                                <li key={index} style={{ cursor: "pointer" }}>
                                  <option
                                    value={index + 1}
                                    onClick={() => {
                                      handleclick(`${index + 1}`);
                                    }}
                                    style={{ pointer: "default" }}
                                  >
                                    ward {index + 1}{" "}
                                  </option>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>{" "}
                  </div>
                </div>
              </div>
            </div>
            {/* line chart */}
            {/* line chart */}
            <div className="row ">
              <div className="col-8 grid-margin">
                <div className="card" style={{ height: "71vh" }}>
                  <div
                    style={{ width: "100%", height: "50vh", margin: "auto" }}
                  >
                    <LineGraph />
                  </div>
                </div>
              </div>
              {/* pie graph */}
              <div className="col-4 grid-margin">
                <div className="card">
                  <div
                    className="row"
                    style={{
                      justifyContent: "center",
                      gap: "8px",
                      marginBottom: "8px",
                      marginTop: "8px",
                    }}
                  >
                    <button
                      type="button"
                      className="btn btn-primary btn-sm"
                      style={{ width: "80px" }}
                      onClick={() => {
                        handlebuttonclick("Paid");
                      }}
                    >
                      Paid
                    </button>

                    <button
                      type="button"
                      className="btn btn-primary btn-sm"
                      style={{ width: "80px" }}
                      onClick={() => {
                        handlebuttonclick("UnPaid");
                      }}
                    >
                      Unpaid
                    </button>
                  </div>

                  <DoughnutComponent
                    SetType={SelectedType}
                    style={{ marginBottom: "9px" }}
                  />
                </div>
              </div>
            </div>

            {/* table ranking  */}
            <div className="row">
              <div className="col-md-6 col-xl-4 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <Table />
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-4 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <UnpaidTable />
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-xl-4 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <WardMapComponent />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
