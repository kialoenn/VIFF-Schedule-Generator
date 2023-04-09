import React from 'react';

// Sidebar Component imports
import CMYKConverter from './SidebarComponents/CMYKConverter';
import FontSettings from './SidebarComponents/FontSettings';
import GridLineSettings from './SidebarComponents/GridLineSettings';
import ColorSettings from './SidebarComponents/ColorSettings';

// CSS import
import '../../css/Sidebar.css';

// External import
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MaterialIcon from 'material-icons-react';


const Sidebar = () => {
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
                                    <MaterialIcon icon="autorenew" color='#5e72e4' size={18} />
                                </span>CMYK Converter</span>
                        </AccordionSummary>
                        <AccordionDetails>
                            <CMYKConverter />
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
                                    <MaterialIcon icon="format_color_fill" invert color='#11cdef' size={18} />
                                </span>Color Settings</span>
                        </AccordionSummary>
                        <AccordionDetails>
                            <ColorSettings />
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
                                    <MaterialIcon icon="text_fields" color='#fb7253' size={18} />
                                </span>Font Settings</span>
                        </AccordionSummary>
                        <AccordionDetails>
                            <FontSettings />
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
                                    <MaterialIcon icon="view_kanban" color='#f5365c' size={18} />
                                </span>Grid Line Settings</span>
                        </AccordionSummary>
                        <AccordionDetails>
                            <GridLineSettings />
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div className="lineBreak"></div>
                {/* Checkbox to clear empty rows  */}
                {/* <FormGroup sx={{ pl: 0.2, pt: 0.5 }}>
                    <FormControlLabel control={<Checkbox />} label="Clear Empty Rows" />
                </FormGroup> */}
            </div>
        </div>
    );
};

export default Sidebar;
