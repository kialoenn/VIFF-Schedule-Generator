//import html2canvas from "html2canvas";
import Timeline from "./Timeline";
import Venue from "./Venue";
import jsPDF from "jspdf";
import Button from '@mui/material/Button'
import * as htmlToImage from 'html-to-image';
import download from "downloadjs";

//import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';

function loadData()  {
    // normal stuff
}


const Content = (props) => {
    const mydata = loadData();
    const temp = props.data
    const scheduleDetail = [
        {
            date: "Tuesday, January 31",
            venue: [
                {
                    venueName: "The Centre",
                    screens: [
                        {
                            screenTitle: "Bones of Crows",
                            startTime: "6:00pm",
                            duration: "127min",
                            pageLocation: "p2",
                        }
                    ]
                },
                {
                    venueName: "Cinematheque",
                    screens: [
                        {
                            screenTitle: "See You Friday",
                            startTime: "3:45pm",
                            duration: "97min",
                            pageLocation: "p2",
                        },
                        {
                            screenTitle: "No Prior Appointment",
                            startTime: "6:15pm",
                            duration: "115min",
                            pageLocation: "p2",
                        },
                        {
                            screenTitle: "Geographies of Solitude",
                            startTime: "9:00pm",
                            duration: "103min",
                            pageLocation: "p2",
                        },
                    ]
                },
            ]
        },
        {
            date: "Wednesday, February 2",
            venue: [
                {
                    venueName: "Rio",
                    screens: [
                        {
                            screenTitle: "Empire of Light",
                            startTime: "6:00pm",
                            duration: "119min",
                            pageLocation: "p2",
                        },
                        {
                            screenTitle: "Decision to Leave",
                            startTime: "9:15pm",
                            duration: "138min",
                            pageLocation: "p2",
                        }
                    ]
                },
                {
                    venueName: "Studio",
                    screens: [
                        {
                            screenTitle: "The Eclipse",
                            startTime: "4:00pm",
                            duration: "109min",
                            pageLocation: "p2",
                        },
                        {
                            screenTitle: "Love Will",
                            startTime: "6:30pm",
                            duration: "81min",
                            pageLocation: "p2",
                        },
                        {
                            screenTitle: "The Word",
                            startTime: "8:45pm",
                            duration: "100min",
                            pageLocation: "p2",
                        },
                    ]
                },
                {
                    venueName: "Playhouse",
                    screens: [
                        {
                            screenTitle: "The Eclipse",
                            startTime: "4:00pm",
                            duration: "109min",
                            pageLocation: "p2",
                        },
                        {
                            screenTitle: "Love Will",
                            startTime: "6:30pm",
                            duration: "81min",
                            pageLocation: "p2",
                        },
                        {
                            screenTitle: "The Word",
                            startTime: "8:45pm",
                            duration: "100min",
                            pageLocation: "p2",
                        },
                    ]
                },
            ]
        },
        {
            date: "Thursday, February 2",
            venue: [
                {
                    venueName: "International Village 8",
                    screens: [
                        {
                            screenTitle: "Empire of Light",
                            startTime: "6:00pm",
                            duration: "119min",
                            pageLocation: "p2",
                        },
                        {
                            screenTitle: "Decision to Leave",
                            startTime: "9:15pm",
                            duration: "138min",
                            pageLocation: "p2",
                        }
                    ]
                },
                {
                    venueName: "International Village 9",
                    screens: [
                        {
                            screenTitle: "The Eclipse",
                            startTime: "4:00pm",
                            duration: "109min",
                            pageLocation: "p2",
                        },
                        {
                            screenTitle: "Love Will",
                            startTime: "6:30pm",
                            duration: "81min",
                            pageLocation: "p2",
                        },
                        {
                            screenTitle: "The Word",
                            startTime: "8:45pm",
                            duration: "100min",
                            pageLocation: "p2",
                        },
                    ]
                },
            ]
        },
        {
            date: "Friday, February 3",
            venue: [
                {
                    venueName: "The Centre",
                    screens: [
                        {
                            screenTitle: "Empire of Light",
                            startTime: "6:00pm",
                            duration: "119min",
                            pageLocation: "p2",
                        },
                        {
                            screenTitle: "Decision to Leave",
                            startTime: "9:15pm",
                            duration: "138min",
                            pageLocation: "p2",
                        }
                    ]
                },
                {
                    venueName: "Cinematheque",
                    screens: [
                        {
                            screenTitle: "The Eclipse",
                            startTime: "4:00pm",
                            duration: "109min",
                            pageLocation: "p2",
                        },
                        {
                            screenTitle: "Love Will",
                            startTime: "6:30pm",
                            duration: "81min",
                            pageLocation: "p2",
                        },
                        {
                            screenTitle: "The Word",
                            startTime: "8:45pm",
                            duration: "100min",
                            pageLocation: "p2",
                        },
                    ]
                },
                {
                    venueName: "SFU-GCA",
                    screens: [
                        {
                            screenTitle: "Empire of Light",
                            startTime: "6:00pm",
                            duration: "119min",
                            pageLocation: "p2",
                        },
                        {
                            screenTitle: "Decision to Leave",
                            startTime: "9:15pm",
                            duration: "138min",
                            pageLocation: "p2",
                        }
                    ]
                },
            ]
        },
        {
            date: "Saturday, February 4",
            venue: [
                {
                    venueName: "Annex Theatre",
                    screens: [
                        {
                            screenTitle: "Empire of Light",
                            startTime: "6:00pm",
                            duration: "119min",
                            pageLocation: "p2",
                        },
                        {
                            screenTitle: "Decision to Leave",
                            startTime: "9:15pm",
                            duration: "138min",
                            pageLocation: "p2",
                        }
                    ]
                },
                {
                    venueName: "The Centre",
                    screens: [
                        {
                            screenTitle: "The Eclipse",
                            startTime: "4:00pm",
                            duration: "109min",
                            pageLocation: "p2",
                        },
                        {
                            screenTitle: "Love Will",
                            startTime: "6:30pm",
                            duration: "81min",
                            pageLocation: "p2",
                        },
                        {
                            screenTitle: "The Word",
                            startTime: "8:45pm",
                            duration: "100min",
                            pageLocation: "p2",
                        },
                    ]
                },
                {
                    venueName: "Studio Theatre",
                    screens: [
                        {
                            screenTitle: "The Eclipse",
                            startTime: "4:00pm",
                            duration: "109min",
                            pageLocation: "p2",
                        },
                        {
                            screenTitle: "Love Will",
                            startTime: "6:30pm",
                            duration: "81min",
                            pageLocation: "p2",
                        },
                        {
                            screenTitle: "The Word",
                            startTime: "8:45pm",
                            duration: "100min",
                            pageLocation: "p2",
                        },
                    ]
                },
            ]
        },
        {
            date: "Sunday, February 5",
            venue: [
                {
                    venueName: "The Centre",
                    screens: [
                        {
                            screenTitle: "Empire of Light",
                            startTime: "6:00pm",
                            duration: "119min",
                            pageLocation: "p2",
                        },
                        {
                            screenTitle: "Decision to Leave",
                            startTime: "9:15pm",
                            duration: "138min",
                            pageLocation: "p2",
                        }
                    ]
                },
                {
                    venueName: "Playhouse",
                    screens: [
                        {
                            screenTitle: "Empire of Light",
                            startTime: "6:00pm",
                            duration: "119min",
                            pageLocation: "p2",
                        },
                        {
                            screenTitle: "Decision to Leave",
                            startTime: "9:15pm",
                            duration: "138min",
                            pageLocation: "p2",
                        }
                    ]
                },
                {
                    venueName: "Cinematheque",
                    screens: [
                        {
                            screenTitle: "The Eclipse",
                            startTime: "4:00pm",
                            duration: "109min",
                            pageLocation: "p2",
                        },
                        {
                            screenTitle: "Love Will",
                            startTime: "6:30pm",
                            duration: "81min",
                            pageLocation: "p2",
                        },
                        {
                            screenTitle: "The Word",
                            startTime: "8:45pm",
                            duration: "100min",
                            pageLocation: "p2",
                        },
                    ]
                },
            ]
        },

    ]
    return (

        <>
            <div className='topMenu'>
                <div className='header'>
                    <div className='header1'>
                        <Button variant="contained" component="label" class="button">
                            Upload File
                            <input hidden accept=".tab, .csv" multiple type="file" />
                        </Button>
                    </div>
                    <div className='header2'></div>
                    <div className='header3'></div>
                    <div className='header4'><Button variant="contained" component="label" onClick={converToPdf} class="button">Generate PDF</Button></div>
                </div>
            </div>
            <div id="content">


                <h3>Dashboard</h3>
                {scheduleDetail.map((element, index) => {
                    return (
                        <div key={index}>
                            <Timeline key={index} date={element.date}></Timeline>
                            {element.venue.map((venueEle, venueIndex) => {
                                return (<Venue key={index + "." + venueIndex} venueDetail={venueEle}></Venue>);
                            })}
                        </div>);
                })}
            </div></>
    );
};


const converToPdf = async () => {

    //1.make canvas from the html
    //const canvas = await html2canvas(document.getElementById('content'));
    //const canvas = await htmlToImage.toSvg(document.getElementById('content'));

    const canvas = htmlToImage.toPng(document.getElementById('content'))
    .then(function (dataUrl) {
       download(dataUrl, 'my-node.png');
    });
    var svgAsText = new XMLSerializer().serializeToString(canvas);
    //2.Imaging
    //const imageFile = canvas.toDataURL('image/svg');
    //3. Ready pdf
    const doc = new jsPDF('l', 'px', [3067, 2713]);
    //the size of width, height
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();

    //Since the length of the image and the width of the pdf are different, the ratio is calculated based on the length of the image.
    const widthRatio = pageWidth / canvas.width;
    //Image height according to the ratio
    const customHeight = canvas.height * widthRatio;
    //add 
    doc.addImage(svgAsText, 0, 0, pageWidth, customHeight);
    doc.addImage(canvas, 'SVG', 0, 0, pageWidth, customHeight);
    //doc.addImage(imgData, 'PNG', margin, position, imgWidth, imgHeight);
    //감소하면서 남은 길이 변수
    let heightLeft = customHeight;
    //증가하면서 이미지 자를 위치 변수
    let heightAdd = -pageHeight;

    // if the image is more than one page.
    while (heightLeft >= pageHeight) {
        //Add pdf page
        doc.addPage();
        //add remains image
        doc.addImage(canvas, 'SVG', 0, heightAdd, pageWidth, customHeight);
        //height left.
        heightLeft -= pageHeight;
        //height left
        heightAdd -= pageHeight;
    }
    //save the document
    doc.save('filename' + new Date().getTime() + '.pdf');
};

export default Content