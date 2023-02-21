import React from 'react';
import '../App'
import Button from '@mui/material/Button'
import '../css/Header.css'
import {useState} from 'react';



class Node {
    constructor(date, movie_name, code, screen_time_min, screen_time, movie_type, start_time, venue_info, page_number) {
      this.date = date;
      this.movie_name = movie_name;
      this.code = code;
      this.screen_time_min = screen_time_min;
      this.screen_time = screen_time;
      this.movie_type = movie_type;
      this.start_time = start_time;
      this.venue_info = venue_info;
      this.page_number = page_number;
    }
  }

  function Header() {
    const [movieInfo, setMovieInfo] = useState([]);
  
    const handleFileUpload = (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();
  
      reader.onload = function () {
        const csvData = reader.result;
        const lines = csvData.split("\n");
        const header = lines[0].split(",");
  
        for (let i = 1; i < lines.length - 1; i++) {
          const row = lines[i].split("\t");
          for (let rowVal of row) {
            const date = row[0];
            const movie_name = row[1];
            const code = row[2];
            const screen_time_min = row[3];
            const screen_time = row[4];
            const movie_type = row[5];
            const start_time = row[6];
            const venue_info = row[7];
            const page_number = row[8];
  
            const node = new Node(date, movie_name, code, screen_time_min, screen_time, movie_type, start_time, venue_info, page_number);
  
            movieInfo[i - 1] = node;
          }
  
        }
  
        console.log(movieInfo);
        console.log(movieInfo.length);
        setMovieInfo(movieInfo);
      };
  
      reader.readAsText(file);
    };
  
    return (
      <div>
        <input type="file" id="fileInput" onChange={handleFileUpload} />
        <button id="upButton">Upload</button>
        <table id="dataTable"></table>
      </div>
    );
  }
  
  export default Header;


// const Header = (props) => {

//     // const myfun = () => {
//     //     props.callback(data);
//     // }
//     return (
//         <div className='header'>
//             <div className='header1'>
//                 <Button variant="contained" component="label">
//                     Upload
//                     <input hidden accept=".tab, .csv" multiple type="file" />
//                 </Button>
//             </div>
//             <div className='header2'></div>
//             <div className='header3'></div>
//             <div className='header4'></div>

//         </div>
//     );
// };

// export default Header