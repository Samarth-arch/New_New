import React,{useContext, useState} from "react";
import { notecontext } from "./notecontext";


 const RegionTable = (props) => {
  const { temp } = useContext(notecontext);
  const { setClicked } = temp;

  const regionData = [
    { wardNo:  1, wardName: "Sirpur " },
    { wardNo:   2, wardName: "Chandan nagar"  },
    { wardNo:   3, wardName: "Kalani nagar "},
    { wardNo:   4, wardName: "sukhdev nagar" },
    { wardNo:   5, wardName: "raj nagar "},
    { wardNo:   6, wardName: "malharganj" },
    { wardNo:   7, wardName: "juna risala "},
    { wardNo:   8, wardName: "vrindavan" },
    { wardNo:   9, wardName: "banganga "},
    { wardNo:   10, wardName: " bhagirath pura "},
    { wardNo:   11, wardName: "govind colony " },
    { wardNo:   12, wardName: "govind colony " },
    { wardNo:   13, wardName: "sangam nagar " },
    { wardNo:   14, wardName: "ashok nagar "},
    { wardNo:   15, wardName: "bijasan" },
    { wardNo:   16, wardName: "nandbagh" },
    { wardNo:   17, wardName: "kushwah nagar "},
    { wardNo:   18, wardName: "sant kabir" },
    { wardNo:   19, wardName: "vishwa karma "},
    { wardNo:   20, wardName: "gauri nagar "},
    { wardNo:   21, wardName: "shyam nagar "},
    { wardNo:   22, wardName: "pt. dendayal upadhyay "},
    { wardNo:   23, wardName: "Lt. Rajesh joshi " },
    { wardNo:   24, wardName: "sant balijinath maharaj "},
    { wardNo:   25, wardName: "s nanda nagar "},
    { wardNo:   26, wardName: "jeen mata "},
    { wardNo:   27, wardName: "pashupati nath" },
    { wardNo:   28, wardName: "maa tulja bhawani "},
    { wardNo:   29, wardName: "Dr. shyama Prasad mukharji "},
    { wardNo:   30, wardName: "sant ravidas" },
    { wardNo:   31, wardName: "maharaj chhatrasal" },
    { wardNo:   32, wardName: "atal bihari bajpai "},
    { wardNo:   33, wardName: "sukhliya" },
    { wardNo:   34, wardName: "shaheed bhagat singh "},
    { wardNo:   35, wardName: "lasudiya mori "},
    { wardNo:   36, wardName: "nipaniya "},
    { wardNo:   37, wardName: "sai krupa "},
    { wardNo:   38, wardName: "haji colony" },
    { wardNo:   39, wardName: "nahar shah wali" },
    { wardNo:   40, wardName: "khajrana ganesh" },
    { wardNo:   41, wardName: "kailassh puri" },
    { wardNo:   42, wardName: "swami vivekanand" },
    { wardNo:   43, wardName: "Shree Nager" },
    { wardNo:   44, wardName: "HIG" },
  ];

  const handleclick = (WardNumber) => {
    setClicked(WardNumber);
    // console.log("ward number from the regiontabel",WardNumber);
  }
  return(
      <div className="card" style={{ height: "100%", overflow: "auto" }}>
      <div className="card-body">
      <h4 style={{ position: "sticky" }}>Ward List</h4>
      <table className="table">
      <thead>
      <tr className="content">
        <th>Ward No.</th>
        <th>Ward Name</th>
      </tr>
      </thead>
      <tbody>
      {regionData.map((item) => (
        <tr key={item.wardNo} onClick={()=>handleclick(item.wardNo)} className="content">
          <td>{item.wardNo}</td>
          <td>{item.wardName}</td>
        </tr>
      ))}
      </tbody>
      </table>
</div>
</div>
  ) 
};
export default RegionTable;
