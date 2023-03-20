import React, {useState} from 'react';

// Sidebar Component imports
import CMYKConverter from './SidebarComponents/CMYKConverter';
import FontSettings from './SidebarComponents/FontSettings';
import GridLineSettings from './SidebarComponents/GridLineSettings';
import ColorSettings from './SidebarComponents/ColorSettings';

// CSS import
import '../../css/Sidebar.css';

// External import
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MaterialIcon, { colorPalette } from 'material-icons-react';


const Sidebar = () => {
    const [colorComponent, setColorComponent] = useState({});
    console.log(colorComponent);
    return (
        <div className='sidebar'>
            <h3>Customization Menu</h3>
            <div className='sidebarItems'>
                <div className='sidebarBlock'>
                    <Accordion disableGutters elevation={0}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon color="primary" />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <span className='sidebarHeader'>
                                <span className="menu-icon">
                                    <MaterialIcon icon="autorenew" color='#214480' size={18} />
                                </span>CMYK Converter</span>
                        </AccordionSummary>
                        <AccordionDetails>
                            <CMYKConverter/>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div className="lineBreak"></div>
                <div className='sidebarBlock'>
                    <Accordion disableGutters elevation={0}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon color="primary" />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <span className='sidebarHeader'>
                                <span className="menu-icon">
                                    <MaterialIcon icon="format_color_fill" invert color='#5e72e4' size={18} />
                                </span>Color Settings</span>
                        </AccordionSummary>
                        <AccordionDetails>
                           <ColorSettings sendColorData={data => setColorComponent(data)}/>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div className="lineBreak"></div>
                <div className='sidebarBlock'>
                    <Accordion disableGutters elevation={0}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon color="primary" />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <span className='sidebarHeader'>
                                <span className="menu-icon">
                                    <MaterialIcon icon="text_fields" color='#11cdef' size={18} />
                                </span>Font Settings</span>
                        </AccordionSummary>
                        <AccordionDetails>
                             <FontSettings/>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div className="lineBreak"></div>
                <div className='sidebarBlock'>
                    <Accordion disableGutters elevation={0}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon color="primary" />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <span className='sidebarHeader'>
                                <span className="menu-icon">
                                    <MaterialIcon icon="view_kanban" color='#fb7253' size={18} />
                                </span>Grid Line Settings</span>
                        </AccordionSummary>
                        <AccordionDetails>
                          <GridLineSettings/>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div className="lineBreak"></div>
                <div className='sidebarBlock'>
                    <Accordion disableGutters elevation={0}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon color="primary" />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <span className='sidebarHeader'>
                                <span className="menu-icon">
                                    <MaterialIcon icon="movie" color='#f5365c' size={18} />
                                </span>Film Block Settings</span>
                        </AccordionSummary>
                        <AccordionDetails>

                        </AccordionDetails>
                    </Accordion>
                </div>
                <div className="lineBreak"></div>
                <div className='sidebarBlock'>
                    <Accordion disableGutters elevation={0}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon color="primary" />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <span className='sidebarHeader'>
                                <span className="menu-icon">
                                    <MaterialIcon icon="description" color='#4cd59b' size={18} />
                                </span>Page Settings</span>
                        </AccordionSummary>
                        <AccordionDetails>

                        </AccordionDetails>
                    </Accordion>
                </div>
                {/* Checkbox to clear empty rows  */}
                {/* <FormGroup sx={{ pl: 0.2, pt: 0.5 }}>
                    <FormControlLabel control={<Checkbox />} label="Clear Empty Rows" />
                </FormGroup> */}
            </div>
        </div>
    );
};

export default Sidebar;
