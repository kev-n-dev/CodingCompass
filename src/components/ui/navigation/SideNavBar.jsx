import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { SiReact, SiVuedotjs } from "react-icons/si";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  console.log("value:", value);
  console.log("index:", index);

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex' }}>
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="topics"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab icon={<SiReact />} label="React" {...a11yProps(0)} />
        <Tab icon={<SiVuedotjs />} label="Vue.js" {...a11yProps(1)} />
      </Tabs>

      <TabPanel value={value} index={0}>
        <p>Blogs on React </p><SiReact />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Blogs on Vue.js <SiVuedotjs />
      </TabPanel>
    </Box>
  );
}
