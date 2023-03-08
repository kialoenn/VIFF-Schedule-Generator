// Customized components import
import ColorPicker from './ColorPicker';
import DateTextPicker from './CustomPickers/DateTextPicker';
import DateBarPicker from './CustomPickers/DateBarPicker';


// CSS import
import '../../css/Sidebar.css';

// External import
import React from 'react';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MaterialIcon, {colorPalette} from 'material-icons-react';




const Sidebar = () => {
    return (
        <div className='sidebar'>
            <h3>Customization Menu</h3>
            <div className='sidebarItems'>

      <div className='sidebarBlock'>
            <Accordion disableGutters elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon color="primary"/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <span className='sidebarHeader'><span class="menu-icon"><MaterialIcon icon="autorenew" color='#214480' size={18}/></span>CMYK Converter</span>
        </AccordionSummary>
        <AccordionDetails>

        </AccordionDetails>
      </Accordion>
      </div>
      <div className="lineBreak"></div>
                <div className='sidebarBlock'>
            <Accordion disableGutters elevation={0} defaultExpanded={'true'}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon color="primary"/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <span className='sidebarHeader'><span class="menu-icon"><MaterialIcon icon="format_color_fill" invert color='#5e72e4' size={18}/></span>Color Settings</span>
        </AccordionSummary>
        <AccordionDetails>
            <div className="accordionItems">
        <p id="colorLabels">Date Text</p>
        <div id='colorPicker'><DateTextPicker /> </div>
                    <p id="colorLabels">Date Bar</p>
                    <div id='colorPicker'>
                        <DateBarPicker />
                    </div>
                    <p id="colorLabels">Time Text</p>
                    <div id='colorPicker'><DateTextPicker /></div>
                    <p id="colorLabels">Venue Text</p>
                    <div id='colorPicker'><ColorPicker /></div>
                    <p id="colorLabels">Venue Bar</p>
                    <div id='colorPicker'><ColorPicker /></div>
                    <p id="colorLabels">Film Title Text</p>
                    <div id='colorPicker'><ColorPicker /> </div>
                    <p id="colorLabels">Film Details Text</p>
                    <div id='colorPicker'><ColorPicker /> </div>
                    <p id="colorLabels">Film Block</p>
                    <div id='colorPicker'><ColorPicker /></div>
                    <p id="colorLabels">Odd Row</p>
                    <div id='colorPicker'><ColorPicker /> </div>
                    <p id="colorLabels">Even Row</p>
                    <div id='colorPicker'><ColorPicker /> </div>
                    <p id="colorLabels">Background</p>
                    <div id='colorPicker'><ColorPicker /> </div>
                    </div>
        </AccordionDetails>
      </Accordion>
      </div>
      <div className="lineBreak"></div>
      <div className='sidebarBlock'>
            <Accordion disableGutters elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon color="primary"/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <span className='sidebarHeader'><span class="menu-icon"><MaterialIcon icon="text_fields" color='#11cdef' size={18}/></span>Font Settings</span>
        </AccordionSummary>
        <AccordionDetails>

                    {/* Font Select */}
                    <FormControl sx={{ width: '65%', pr: 1 }} size="small">
                        <InputLabel id="demo-simple-select-helper-label">Font</InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            label="Font"
                            size="small"
                            defaultValue={0}
                        //   value={age}
                        //   onChange={handleChange}
                        >
                            <MenuItem value={0}>Helvetica</MenuItem>
                            <MenuItem value={1}>NeueHaas</MenuItem>
                            <MenuItem value={2}>Calibri</MenuItem>
                            <MenuItem value={3}>Arial</MenuItem>
                            <MenuItem value={4}>Garamond</MenuItem>
                            <MenuItem value={5}>Geneva</MenuItem>
                            <MenuItem value={6}>Verdana</MenuItem>
                            <MenuItem value={1}>AvantGarde</MenuItem>
                        </Select>
                    </FormControl>

                    {/* Font Size Select */}
                    <FormControl sx={{ width: '25%' }} size="small">
                        <InputLabel id="demo-simple-select-helper-label">Size</InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            label="Size"
                            size="small"
                            defaultValue={7}
                        //   value={age}
                        //   onChange={handleChange}
                        >
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={6}>6</MenuItem>
                            <MenuItem value={7}>7</MenuItem>
                            <MenuItem value={8}>8</MenuItem>
                            <MenuItem value={9}>9</MenuItem>
                            <MenuItem value={10}>10</MenuItem>
                            <MenuItem value={11}>11</MenuItem>
                            <MenuItem value={12}>12</MenuItem>
                            <MenuItem value={13}>13</MenuItem>
                            <MenuItem value={14}>14</MenuItem>
                            <MenuItem value={15}>15</MenuItem>
                            <MenuItem value={16}>16</MenuItem>
                            <MenuItem value={17}>17</MenuItem>
                            <MenuItem value={18}>18</MenuItem>
                            <MenuItem value={19}>19</MenuItem>
                            <MenuItem value={20}>20</MenuItem>
                            <MenuItem value={21}>21</MenuItem>
                            <MenuItem value={22}>22</MenuItem>
                            <MenuItem value={23}>23</MenuItem>
                            <MenuItem value={24}>24</MenuItem>
                            <MenuItem value={25}>25</MenuItem>
                            <MenuItem value={26}>26</MenuItem>
                            <MenuItem value={27}>27</MenuItem>
                            <MenuItem value={29}>28</MenuItem>
                            <MenuItem value={29}>29</MenuItem>
                            <MenuItem value={30}>30</MenuItem>
                            <MenuItem value={31}>31</MenuItem>
                            <MenuItem value={32}>32</MenuItem>
                            <MenuItem value={33}>33</MenuItem>
                        </Select>
                    </FormControl>

        </AccordionDetails>
      </Accordion>
      </div>
      <div className="lineBreak"></div>
      <div className='sidebarBlock'>
            <Accordion disableGutters elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon color="primary"/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <span className='sidebarHeader'><span class="menu-icon"><MaterialIcon icon="view_kanban" color='#fb7253' size={18}/></span>Grid Line Settings</span>
        </AccordionSummary>
        <AccordionDetails>

                {/* Line Type Select */}
                <FormControl sx={{ width: '65%', pr: 1 }} size="small">
                    <InputLabel id="demo-simple-select-helper-label">Type</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        label="Type"
                        size="small"
                        defaultValue={2}
                    //   value={age}
                    //   onChange={handleChange}
                    >
                        <MenuItem value={0}>Dashed</MenuItem>
                        <MenuItem value={1}>Dotted</MenuItem>
                        <MenuItem value={2}>Solid</MenuItem>
                    </Select>
                </FormControl>

                {/* Line Width Select */}
                <FormControl sx={{ width: '25%' }} size="small">
                    <InputLabel id="demo-simple-select-helper-label">Width</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        label="Width"
                        size="small"
                        defaultValue={3}
                    //   value={age}
                    //   onChange={handleChange}
                    >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                    </Select>
                </FormControl>

        </AccordionDetails>
      </Accordion>
      </div>
      <div className="lineBreak"></div>
      <div className='sidebarBlock'>
            <Accordion disableGutters elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon color="primary"/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <span className='sidebarHeader'><span class="menu-icon"><MaterialIcon icon="movie" color='#f5365c' size={18}/></span>Film Block Settings</span>
        </AccordionSummary>
        <AccordionDetails>

        </AccordionDetails>
      </Accordion>
      </div>
      <div className="lineBreak"></div>
      <div className='sidebarBlock'>
            <Accordion disableGutters elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon color="primary"/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <span className='sidebarHeader'><span class="menu-icon"><MaterialIcon icon="description" color='#4cd59b' size={18}/></span>Page Settings</span>
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
