import React, { Component } from "react";
import Dropzone from "react-dropzone";
import "../../css/FileUpload.css";


class Basic extends Component {
    
  constructor() {
    super();
    this.onDrop = (files) => {
      this.setState({ files });
      console.log("Alert occured");
      files.forEach(fileRead);
      function fileRead(file) {
        const reader = new FileReader();
        reader.readAsText(file, "ANSI");
        reader.onload = () => {
          const csvData = reader.result;
          const lines = csvData.split("\n");
          const fileColumn = lines[0].split("\t");
          if (fileColumn.length == 9) {
            // parseGridScreens(lines);
            // alert("Time schedule file uploaded");
          } else if (fileColumn.length == 1) {
            // alert('Colour file uploaded');
          } else if (fileColumn.length == 2) {
            // alert('Sections file uploaded');
          } else if (fileColumn.length == 3) {
            // alert('GridVenue file uploaded');
          } else {
            alert(
              "Wrong file format uploaded, please check the file and try again."
            );
          }
        };
        console.log(file);
      }
    };
    this.state = {
      files: [],
    };

    // const createMap = (movieInfo) => {
    //     const scheduleDetailMap = new Map();
    //     for (const item of movieInfo) {
    //         if (!scheduleDetailMap.has(item.date)) {
    //             const venuesMap = new Map();
    //             const screenMap = new Map();
    //             screenMap.set(item.code, item);
    //             venuesMap.set(item.venue_info, screenMap);
    //             scheduleDetailMap.set(item.date, venuesMap);
    //         } else {
    //             if (!scheduleDetailMap.get(item.date).has(item.venue_info)) {
    //                 const screenMap = new Map();
    //                 screenMap.set(item.code, item);
    //                 scheduleDetailMap.get(item.date).set(item.venue_info, screenMap);
    //             } else {
    //                 if (!scheduleDetailMap.get(item.date).get(item.venue_info).has(item.code)) {
    //                     scheduleDetailMap.get(item.date).get(item.venue_info).set(item.code, item);
    //                 }
    //             }
    //         }
    //     }

    //     console.log('map', scheduleDetailMap);
    //     const testData = Array.from(scheduleDetailMap, ([date, venue]) => (
    //         {
    //             date: date,
    //             venue: Array.from(venue, ([name, screens]) => (
    //                 {
    //                     venueName: name,
    //                     screens: Array.from(screens, ([screenName, screenInfo]) => (
    //                         {
    //                             screenTitle: screenName,
    //                             startTime: screenInfo.start_time,
    //                             duration: screenInfo.screen_time,
    //                             pageLocation: screenInfo.page_number,
    //                         })),
    //                 }),
    //             ),
    //         }));

    //     let parsedScheduleIndex = 0;
    //     const parsedSchedule = [];
    //     for (const item of testData) {
    //         parsedSchedule[parsedScheduleIndex] = item;
    //         parsedScheduleIndex++;
    //     }
    //     console.log('array: ', testData);
    //     setParsedSchedule(parsedSchedule);
    //     console.log('array: ', parsedSchedule);
    //     console.log(parsedSchedule.length);
    // };

    // const parseGridScreens = (lines) => {
    //     const movieInfo = [];
    //     for (let i = 0; i < lines.length - 1; i++) {
    //         const row = lines[i].split('\t');
    //         console.log('file column number: ', row.length);
    //         for (const { } of row) {
    //             let date = new Date(row[0]);
    //             date = date.toLocaleDateString('en-CA', { weekday: 'long' }) + ', ' +
    //                 date.toLocaleDateString('en-CA', { month: 'long', day: 'numeric' });
    //             const movie_name = row[1];
    //             const code = row[2];
    //             const screen_time_min = row[3];
    //             const screen_time = row[4];
    //             const movie_type = row[5];
    //             const start_time = row[6];
    //             const venue_info = row[7];
    //             const page_number = row[8].replace('\r', '');

    //             const node = new Node(date, movie_name, code, screen_time_min,
    //                 screen_time, movie_type, start_time, venue_info, page_number);

    //             movieInfo[i] = node;
    //         }
    //     }
    //     console.log(movieInfo);
    //     console.log(movieInfo.length);
    //     createMap(movieInfo);
    // };
  }

  render() {
    const files = this.state.files.map((file) => (
      <li key={file.name}>{file.name}</li>
    ));

    return (
      <><Dropzone onDrop={this.onDrop}>
            {({ getRootProps, getInputProps }) => (
                <>
                    <div className="file-container">
                        <div {...getRootProps({ className: "dropzone" })}>
                            <input {...getInputProps()} />
                            <p>
                                <img
                                    src={require("../../assets/icons/cloud-computing.png")}
                                    width="60px" />
                                <p></p>Drag and drop files here, or <u>click here</u> to
                                select files
                            </p>
                        </div>
                    </div>
                    <br />
                    <div className="file-list">
                        <h4>Uploaded Files</h4>
                        <ul className="uploaded-files">{files}</ul>
                    </div>
                </>
            )}
        </Dropzone></>
    );
  }
}

export default Basic;
