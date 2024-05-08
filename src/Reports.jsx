import React, { useState, useEffect } from 'react';
import { Table, Button, Input, DatePicker,Empty } from 'antd';
import axios from 'axios';
import { saveAs } from 'file-saver';
import Papa from 'papaparse';
import moment from 'moment';
import './App.css'
import { Pagination } from 'antd';


        

import { DownloadOutlined, LogoutOutlined } from '@ant-design/icons';
import Cookies from 'js-cookie';


const { RangePicker } = DatePicker;

const App = () => {
  const App = () => <Pagination defaultCurrent={6} total={500} />;
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [machineIdFilter, setMachineIdFilter] = useState('');
  const [fromDateFilter, setFromDateFilter] = useState(null);
  const [toDateFilter, setToDateFilter] = useState(null);

  useEffect(() => {// Your fetch data logic here
    const fetchData = async () => {
       
        const responseData = await fetch('https://dashboard.pinesphere.co.in/api/machinedata/');
        const fetchedData = await responseData.json();
        setData(fetchedData);
        setFilteredData(fetchedData); // Initialize filteredData with initial data
    };

    fetchData();
}, []);

  function TimestampComponent({ timestamp }) {
  const dateTime = new Date(timestamp); // Define dateTime variable here
  const formattedDateTime = `${dateTime.toLocaleDateString()} ${dateTime.toLocaleTimeString()}`;

  return (
    <span style={{ backgroundColor: '#e6f7ff', padding: '8px', display: 'inline-block', borderRadius: '4px' }}>
      {formattedDateTime}
    </span>
  );
}

// Usage:
const yourTimestampValue = "2024-05-08T12:38:17.782104Z";


  const columns = [
    {
      title1: "MACHINEID",
      title: (
        <span style={{ backgroundColor: '#e6f7ff', padding: '8px', display: 'inline-block', borderRadius: '4px' }}>
          MACHINE_ID
        </span>
      ),
      dataIndex: 'MACHINEID',
      filters: [
        { text: 'Sort Smallest to Largest', value: 'asc' },
        { text: 'Sort Largest to Smallest', value: 'desc' },
        { text: 'Sort by Color', value: 'color' },
        { text: 'Custom Sort', value: 'custom' }
      ],
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div style={{ padding: 8 }}>
          <Input
            placeholder="Search Machine ID"
            value={selectedKeys[0]}
            onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => confirm()}
            style={{ width: 188, marginBottom: 8, display: 'block' }}
          />
          <Button
            type="primary"
            onClick={() => confirm()}
            size="small"
            style={{ width: 90, marginRight: 8 }}
          >
            OK
          </Button>
          <Button onClick={() => clearFilters()} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </div>
      ),
      onFilter: (value, record) => {
        // Check if the filter value is empty
        if (!value) {
          return true; // Return true for all records when filter value is empty
        }
        // Apply filter logic when filter value is not empty
        return record.MACHINEID.indexOf(value) === 0;
      },
      sorter: (a, b) => a.MACHINEID - b.MACHINEID,
      sortDirections: ['ascend', 'descend'],
    },
    

    
    {
      title1:"DATE",
      title: <span style={{ backgroundColor: '#e6f7ff', padding: '8px', display: 'inline-block', borderRadius: '4px' }}>DATE</span>,
      dataIndex: 'DATE',
      filters: [
        { text: 'Sort Smallest to Largest', value: 'asc' },
        { text: 'Sort Largest to Smallest', value: 'desc' },
        { text: 'Sort by Color', value: 'color' },
        { text: 'Custom Sort', value: 'custom' }
      ],
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div style={{ padding: 8 }}>
          <Input
            placeholder="Search DATE"
            value={selectedKeys[0]}
            onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => confirm()}
            style={{ width: 188, marginBottom: 8, display: 'block' }}
          />
          <Button
            type="primary"
            onClick={() => confirm()}
            size="small"
            style={{ width: 90, marginRight: 8 }}
          >
            OK
          </Button>
          <Button onClick={() => clearFilters()} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </div>
      ),
      onFilter: (value, record) => record.DATE.indexOf(value) === 0,
      sorter: (a, b) => a.DATE - b.DATE,
      sortDirections: ['ascend', 'descend'],
    },


    {
      title1:"OPERATORID",
      title: <span style={{ backgroundColor: '#e6f7ff', padding: '8px', display: 'inline-block', borderRadius: '4px' }}>OPERATOR_ID</span>,
      dataIndex: 'OPERATORID',
      filters: [
        { text: 'Sort Smallest to Largest', value: 'asc' },
        { text: 'Sort Largest to Smallest', value: 'desc' },
        { text: 'Sort by Color', value: 'color' },
        { text: 'Custom Sort', value: 'custom' }
      ],
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div style={{ padding: 8 }}>
          <Input
            placeholder="Search OPERATORID"
            value={selectedKeys[0]}
            onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => confirm()}
            style={{ width: 188, marginBottom: 8, display: 'block' }}
          />
          <Button
            type="primary"
            onClick={() => confirm()}
            size="small"
            style={{ width: 90, marginRight: 8 }}
          >
            OK
          </Button>
          <Button onClick={() => clearFilters()} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </div>
      ),
      onFilter: (value, record) => record.OPERATORID.indexOf(value) === 0,
      sorter: (a, b) => a.OPERATORID - b.OPERATORID,
      sortDirections: ['ascend', 'descend'],
    },

    {
      title1:"STARTTIME",
      title: <span style={{ backgroundColor: '#e6f7ff', padding: '8px', display: 'inline-block', borderRadius: '4px' }}>START_TIME</span>,
      dataIndex: 'STARTTIME',
     
      filters: [
        { text: 'Sort Smallest to Largest', value: 'asc' },
        { text: 'Sort Largest to Smallest', value: 'desc' },
        { text: 'Sort by Color', value: 'color' },
        { text: 'Custom Sort', value: 'custom' }
      ],
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div style={{ padding: 8 }}>
          <Input
            placeholder="Search STARTTIME"
            value={selectedKeys[0]}
            onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => confirm()}
            style={{ width: 188, marginBottom: 8, display: 'block' }}
          />
          <Button
            type="primary"
            onClick={() => confirm()}
            size="small"
            style={{ width: 90, marginRight: 8 }}
          >
            OK
          </Button>
          <Button onClick={() => clearFilters()} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </div>
      ),
      onFilter: (value, record) => record.STARTTIME.indexOf(value) === 0,
      sorter: (a, b) => a.STARTTIME - b.STARTTIME,
      sortDirections: ['ascend', 'descend'],
    },

   {
    title1:"ENDTIME",
  title: <span style={{ backgroundColor: '#e6f7ff', padding: '8px', display: 'inline-block', borderRadius: '4px' }}>END_TIME</span>,
  dataIndex: 'ENDTIME',
  filters: [
    { text: 'Sort Smallest to Largest', value: 'asc' },
    { text: 'Sort Largest to Smallest', value: 'desc' },
    { text: 'Sort by Color', value: 'color' },
    { text: 'Custom Sort', value: 'custom' }
  ],
  filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
    <div style={{ padding: 8 }}>
      <Input
        placeholder="Search ENDTIME"
        value={selectedKeys[0]}
        onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
        onPressEnter={() => confirm()}
        style={{ width: 188, marginBottom: 8, display: 'block' }}
      />
      <Button
        type="primary"
        onClick={() => confirm()}
        size="small"
        style={{ width: 90, marginRight: 8 }}
      >
        OK
      </Button>
      <Button onClick={() => clearFilters()} size="small" style={{ width: 90 }}>
        Reset
      </Button>
    </div>
  ),
  onFilter: (value, record) => record.ENDTIME.indexOf(value) === 0,
  sorter: (a, b) => new Date(a.ENDTIME) - new Date(b.ENDTIME),
  sortDirections: ['ascend', 'descend'],
},

    {
      title1:"MODE",
      title: <span style={{ backgroundColor: '#e6f7ff', padding: '8px', display: 'inline-block', borderRadius: '4px' }}>MODE</span>,
      dataIndex: 'MODE',
      filters: [
        { text: 'Sort Smallest to Largest', value: 'asc' },
        { text: 'Sort Largest to Smallest', value: 'desc' },
        { text: 'Sort by Color', value: 'color' },
        { text: 'Custom Sort', value: 'custom' }
      ],
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div style={{ padding: 8 }}>
          <Input
            placeholder="Search MODE"
            value={selectedKeys[0]}
            onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => confirm()}
            style={{ width: 188, marginBottom: 8, display: 'block' }}
          />
          <Button
            type="primary"
            onClick={() => confirm()}
            size="small"
            style={{ width: 90, marginRight: 8 }}
          >
            OK
          </Button>
          <Button onClick={() => clearFilters()} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </div>
      ),
      onFilter: (value, record) => record.MODE.indexOf(value) === 0,
      sorter: (a, b) => a.MODE - b.MODE,
      sortDirections: ['ascend', 'descend'],
    },

    {
      title1:"RAWSTITCHCOUNT",
      title: <span style={{ backgroundColor: '#e6f7ff', padding: '8px', display: 'inline-block', borderRadius: '4px' }}>RAW_STITCH_COUNT</span>,
      dataIndex: 'RAWSTITCHCOUNT',
      filters: [
        { text: 'Sort Smallest to Largest', value: 'asc' },
        { text: 'Sort Largest to Smallest', value: 'desc' },
        { text: 'Sort by Color', value: 'color' },
        { text: 'Custom Sort', value: 'custom' }
      ],
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div style={{ padding: 8 }}>
          <Input
            placeholder="Search RAWSTITCHCOUNT"
            value={selectedKeys[0]}
            onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => confirm()}
            style={{ width: 188, marginBottom: 8, display: 'block' }}
          />
          <Button
            type="primary"
            onClick={() => confirm()}
            size="small"
            style={{ width: 90, marginRight: 8 }}
          >
            OK
          </Button>
          <Button onClick={() => clearFilters()} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </div>
      ),
      onFilter: (value, record) => `${record.RAWSTITCHCOUNT}`.indexOf(value) === 0,
      sorter: (a, b) => a.RAWSTITCHCOUNT - b.RAWSTITCHCOUNT,
      sortDirections: ['ascend', 'descend'],
    },

    {
      title1:"INLSTITCHCOUNT",
      title: <span style={{ backgroundColor: '#e6f7ff', padding: '8px', display: 'inline-block', borderRadius: '4px' }}>INL_STITCH_COUNT</span>,
      dataIndex: 'INLSTITCHCOUNT',
      filters: [
        { text: 'Sort Smallest to Largest', value: 'asc' },
        { text: 'Sort Largest to Smallest', value: 'desc' },
        { text: 'Sort by Color', value: 'color' },
        { text: 'Custom Sort', value: 'custom' }
      ],
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div style={{ padding: 8 }}>
          <Input
            placeholder="Search INLSTITCHCOUNT"
            value={selectedKeys[0]}
            onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => confirm()}
            style={{ width: 188, marginBottom: 8, display: 'block' }}
          />
          <Button
            type="primary"
            onClick={() => confirm()}
            size="small"
            style={{ width: 90, marginRight: 8 }}
          >
            OK
          </Button>
          <Button onClick={() => clearFilters()} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </div>
      ),
      onFilter: (value, record) => `${record.INLSTITCHCOUNT}`.indexOf(value) === 0,
      sorter: (a, b) => a.INLSTITCHCOUNT - b.INLSTITCHCOUNT,
      sortDirections: ['ascend', 'descend'],
    },

    
    {
      title1:"INLRUNTIME",
      title: <span style={{ backgroundColor: '#e6f7ff', padding: '8px', display: 'inline-block', borderRadius: '4px' }}>INL_RUNTIME</span>,
      dataIndex: 'INLRUNTIME',
      filters: [
        { text: 'Sort Smallest to Largest', value: 'asc' },
        { text: 'Sort Largest to Smallest', value: 'desc' },
        { text: 'Sort by Color', value: 'color' },
        { text: 'Custom Sort', value: 'custom' }
      ],
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div style={{ padding: 8 }}>
          <Input
            placeholder="Search INLRUNTIME"
            value={selectedKeys[0]}
            onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => confirm()}
            style={{ width: 188, marginBottom: 8, display: 'block' }}
          />
          <Button
            type="primary"
            onClick={() => confirm()}
            size="small"
            style={{ width: 90, marginRight: 8 }}
          >
            OK
          </Button>
          <Button onClick={() => clearFilters()} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </div>
      ),
      onFilter: (value, record) => `${record.INLRUNTIME}`.indexOf(value) === 0,
      sorter: (a, b) => a.INLRUNTIME - b.INLRUNTIME,
      sortDirections: ['ascend', 'descend'],
    },

    {
      title1:"INLSTOPTIME",
      title: <span style={{ backgroundColor: '#e6f7ff', padding: '8px', display: 'inline-block', borderRadius: '4px' }}>INL_STOPTIME</span>,
      dataIndex: 'INLSTOPTIME',
      filters: [
        { text: 'Sort Smallest to Largest', value: 'asc' },
        { text: 'Sort Largest to Smallest', value: 'desc' },
        { text: 'Sort by Color', value: 'color' },
        { text: 'Custom Sort', value: 'custom' }
      ],
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div style={{ padding: 8 }}>
          <Input
            placeholder="Search INLSTOPTIME"
            value={selectedKeys[0]}
            onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => confirm()}
            style={{ width: 188, marginBottom: 8, display: 'block' }}
          />
          <Button
            type="primary"
            onClick={() => confirm()}
            size="small"
            style={{ width: 90, marginRight: 8 }}
          >
            OK
          </Button>
          <Button onClick={() => clearFilters()} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </div>
      ),
      onFilter: (value, record) => `${record.INLSTOPTIME}`.indexOf(value) === 0,
      sorter: (a, b) => a.INLSTOPTIME - b.INLSTOPTIME,
      sortDirections: ['ascend', 'descend'],
    },

    {
      title1:"PICKDISPOSETIME",
      title: <span style={{ backgroundColor: '#e6f7ff', padding: '8px', display: 'inline-block', borderRadius: '4px' }}>PICK_DISPOSE_TIME</span>,
      dataIndex: 'PICKDISPOSETIME',
      filters: [
        { text: 'Sort Smallest to Largest', value: 'asc' },
        { text: 'Sort Largest to Smallest', value: 'desc' },
        { text: 'Sort by Color', value: 'color' },
        { text: 'Custom Sort', value: 'custom' }
      ],
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div style={{ padding: 8 }}>
          <Input
            placeholder="Search PICKDISPOSETIME"
            value={selectedKeys[0]}
            onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => confirm()}
            style={{ width: 188, marginBottom: 8, display: 'block' }}
          />
          <Button
            type="primary"
            onClick={() => confirm()}
            size="small"
            style={{ width: 90, marginRight: 8 }}
          >
            OK
          </Button>
          <Button onClick={() => clearFilters()} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </div>
      ),
      onFilter: (value, record) => `${record.PICKDISPOSETIME}`.indexOf(value) === 0,
      sorter: (a, b) => a.PICKDISPOSETIME- b.PICKDISPOSETIME,
      sortDirections: ['ascend', 'descend'],
    },

    {
      title1:"MANUALSTITCHESPERPIECE",
      title: <span style={{ backgroundColor: '#e6f7ff', padding: '8px', display: 'inline-block', borderRadius: '4px' }}>MANUAL_STITCHES_PER_PIECE</span>,
      dataIndex: 'MANUALSTITCHESPERPIECE',
      filters: [
        { text: 'Sort Smallest to Largest', value: 'asc' },
        { text: 'Sort Largest to Smallest', value: 'desc' },
        { text: 'Sort by Color', value: 'color' },
        { text: 'Custom Sort', value: 'custom' }
      ],
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div style={{ padding: 8 }}>
          <Input
            placeholder="Search MANUALSTITCHESPERPIECE"
            value={selectedKeys[0]}
            onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => confirm()}
            style={{ width: 188, marginBottom: 8, display: 'block' }}
          />
          <Button
            type="primary"
            onClick={() => confirm()}
            size="small"
            style={{ width: 90, marginRight: 8 }}
          >
            OK
          </Button>
          <Button onClick={() => clearFilters()} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </div>
      ),
      onFilter: (value, record) => `${record.MANUALSTITCHESPERPIECE}`.indexOf(value) === 0,
      sorter: (a, b) => a.MANUALSTITCHESPERPIECE- b.MANUALSTITCHESPERPIECE,
      sortDirections: ['ascend', 'descend'],
    },

    {
      title1:"MANUALPIECECOUNT",
      title: <span style={{ backgroundColor: '#e6f7ff', padding: '8px', display: 'inline-block', borderRadius: '4px' }}>MANUAL_PIECE_COUNT</span>,
      dataIndex: 'MANUALPIECECOUNT',
      filters: [
        { text: 'Sort Smallest to Largest', value: 'asc' },
        { text: 'Sort Largest to Smallest', value: 'desc' },
        { text: 'Sort by Color', value: 'color' },
        { text: 'Custom Sort', value: 'custom' }
      ],
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div style={{ padding: 8 }}>
          <Input
            placeholder="Search MANUALPIECECOUNT"
            value={selectedKeys[0]}
            onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => confirm()}
            style={{ width: 188, marginBottom: 8, display: 'block' }}
          />
          <Button
            type="primary"
            onClick={() => confirm()}
            size="small"
            style={{ width: 90, marginRight: 8 }}
          >
            OK
          </Button>
          <Button onClick={() => clearFilters()} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </div>
      ),
      onFilter: (value, record) => `${record.MANUALPIECECOUNT}`.indexOf(value) === 0,
      sorter: (a, b) => a.MANUALPIECECOUNT - b.MANUALPIECECOUNT,
      sortDirections: ['ascend', 'descend'],
    },

    {
      title1:"AUTOSTITCHESPERPIECE",
      title: <span style={{ backgroundColor: '#e6f7ff', padding: '8px', display: 'inline-block', borderRadius: '4px' }}>AUTO_STITCHES_PER_PIECE</span>,
      dataIndex: 'AUTOSTITCHESPERPIECE',
      filters: [
        { text: 'Sort Smallest to Largest', value: 'asc' },
        { text: 'Sort Largest to Smallest', value: 'desc' },
        { text: 'Sort by Color', value: 'color' },
        { text: 'Custom Sort', value: 'custom' }
      ],
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div style={{ padding: 8 }}>
          <Input
            placeholder="Search AUTOSTITCHESPERPIECE"
            value={selectedKeys[0]}
            onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => confirm()}
            style={{ width: 188, marginBottom: 8, display: 'block' }}
          />
          <Button
            type="primary"
            onClick={() => confirm()}
            size="small"
            style={{ width: 90, marginRight: 8 }}
          >
            OK
          </Button>
          <Button onClick={() => clearFilters()} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </div>
      ),
      onFilter: (value, record) => `${record.AUTOSTITCHESPERPIECE}`.indexOf(value) === 0,
      sorter: (a, b) => a.AUTOSTITCHESPERPIECE - b.AUTOSTITCHESPERPIECE,
      sortDirections: ['ascend', 'descend'],
    },

    

    {
      title1:"AUTOPIECECOUNT",
      title: <span style={{ backgroundColor: '#e6f7ff', padding: '8px', display: 'inline-block', borderRadius: '4px' }}>AUTO_PIECE_COUNT</span>,
      dataIndex: 'AUTOPIECECOUNT',
      filters: [
        { text: 'Sort Smallest to Largest', value: 'asc' },
        { text: 'Sort Largest to Smallest', value: 'desc' },
        { text: 'Sort by Color', value: 'color' },
        { text: 'Custom Sort', value: 'custom' }
      ],
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div style={{ padding: 8 }}>
          <Input
            placeholder="Search AUTOPIECECOUNT"
            value={selectedKeys[0]}
            onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => confirm()}
            style={{ width: 188, marginBottom: 8, display: 'block' }}
          />
          <Button
            type="primary"
            onClick={() => confirm()}
            size="small"
            style={{ width: 90, marginRight: 8 }}
          >
            OK
          </Button>
          <Button onClick={() => clearFilters()} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </div>
      ),
      onFilter: (value, record) => `${record.AUTOPIECECOUNT}`.indexOf(value) === 0,

      sorter: (a, b) => a.AUTOPIECECOUNT - b.AUTOPIECECOUNT,
      sortDirections: ['ascend', 'descend'],
    },

    {
      title1:"CUTTERCOUNT",
      title: <span style={{ backgroundColor: '#e6f7ff', padding: '8px', display: 'inline-block', borderRadius: '4px' }}>CUTTER_COUNT</span>,
      dataIndex: 'CUTTERCOUNT',
      filters: [
        { text: 'Sort Smallest to Largest', value: 'asc' },
        { text: 'Sort Largest to Smallest', value: 'desc' },
        { text: 'Sort by Color', value: 'color' },
        { text: 'Custom Sort', value: 'custom' }
      ],
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div style={{ padding: 8 }}>
          <Input
            placeholder="Search CUTTERCOUNT"
            value={selectedKeys[0]}
            onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => confirm()}
            style={{ width: 188, marginBottom: 8, display: 'block' }}
          />
          <Button
            type="primary"
            onClick={() => confirm()}
            size="small"
            style={{ width: 90, marginRight: 8 }}
          >
            OK
          </Button>
          <Button onClick={() => clearFilters()} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </div>
      ),
      onFilter: (value, record) => `${record.CUTTERCOUNT}`.indexOf(value) === 0,

      sorter: (a, b) => a.CUTTERCOUNT - b.CUTTERCOUNT,
      sortDirections: ['ascend', 'descend'],
    },

    {
      title1:"DUMMYDATA1",
      title: <span style={{ backgroundColor: '#e6f7ff', padding: '8px', display: 'inline-block', borderRadius: '4px' }}>DUMMY_DATA1</span>,
      dataIndex: 'DUMMYDATA1',
      filters: [
        { text: 'Sort Smallest to Largest', value: 'asc' },
        { text: 'Sort Largest to Smallest', value: 'desc' },
        { text: 'Sort by Color', value: 'color' },
        { text: 'Custom Sort', value: 'custom' }
      ],
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div style={{ padding: 8 }}>
          <Input
            placeholder="Search DUMMYDATA1"
            value={selectedKeys[0]}
            onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => confirm()}
            style={{ width: 188, marginBottom: 8, display: 'block' }}
          />
          <Button
            type="primary"
            onClick={() => confirm()}
            size="small"
            style={{ width: 90, marginRight: 8 }}
          >
            OK
          </Button>
          <Button onClick={() => clearFilters()} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </div>
      ),
      onFilter: (value, record) => record.DUMMYDATA1.indexOf(value) === 0,
      sorter: (a, b) => a.DUMMYDATA1 - b.DUMMYDATA1,
      sortDirections: ['ascend', 'descend'],
    },

    {
      title1:"DUMMYDATA2",
      title: <span style={{ backgroundColor: '#e6f7ff', padding: '8px', display: 'inline-block', borderRadius: '4px' }}>DUMMY_DATA2</span>,
      dataIndex: 'DUMMYDATA2',
      filters: [
        { text: 'Sort Smallest to Largest', value: 'asc' },
        { text: 'Sort Largest to Smallest', value: 'desc' },
        { text: 'Sort by Color', value: 'color' },
        { text: 'Custom Sort', value: 'custom' }
      ],
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div style={{ padding: 8 }}>
          <Input
            placeholder="Search DUMMYDATA2"
            value={selectedKeys[0]}
            onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => confirm()}
            style={{ width: 188, marginBottom: 8, display: 'block' }}
          />
          <Button
            type="primary"
            onClick={() => confirm()}
            size="small"
            style={{ width: 90, marginRight: 8 }}
          >
            OK
          </Button>
          <Button onClick={() => clearFilters()} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </div>
      ),
      onFilter: (value, record) => record.DUMMYDATA2.indexOf(value) === 0,
      sorter: (a, b) => a.DUMMYDATA2 - b.DUMMYDATA2,
      sortDirections: ['ascend', 'descend'],
    },
     
    {
      title1: "TIMESTAMP",
      title: (
        <span style={{ padding: '8px', display: 'inline-block' }}>
          <span style={{ backgroundColor: '#e6f7ff', padding: '8px', borderRadius: '4px' }}>TIME_STAMP</span>
        </span>
      ),
      dataIndex: 'TIMESTAMP',
      render: (_, record) => <TimestampComponent timestamp={record.TIMESTAMP} />, // Use render to specify the rendering of data
    }
    
    
    
    



  ];
 
// const formattedDateTime = `${dateTime.toLocaleDateString()} ${dateTime.toLocaleTimeString()}`;

// console.log(formattedDateTime);

  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
    setFilteredData(extra.currentDataSource)
  };


  
  
    const handleLogout = () => {
      Cookies.remove('jwt');
      window.location.href = '/'; 
    };
    const filterData = () => {
      let filtered = data;
  
      // Filter by machine IDs
      if (selectedKeys[0]) {
          filtered = filtered.filter(item => item.MACHINEID.indexOf(selectedKeys[0]) === 0);
      }
  
      
      
      
  };
    
    const handleCSVDownload = () => {
      const formattedData = filteredData.map(item => ({
          ...item,
          DATE: formatDate(item.DATE)
      }));
      const csvData = Papa.unparse(formattedData);
      const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8' });
      saveAs(blob, 'data.csv');
  };
  
  const formatDate = (dateString) => {
    const parts = dateString.split(':'); 
    const day = parts[0]; 
    const month = parts[1]; 
    const year = parts[2]; 

    
    return `${day}/${month}/${year}`;
 
};
  
  const handleHTMLDownload = () => {
    // filterData(); 
    const downloadData = filteredData.length > 0 ? filteredData : data;
  
    const htmlData = `
      <html>
      <head><title>Data</title></head>
      <body>
        <table>
          <thead>
            <tr>
              ${columns.map(column => `<th>${column.title1}</th>`).join('')}
            </tr>
          </thead>
          <tbody>
            ${downloadData.map(row => `<tr>${columns.map(column => `<td>${row[column.dataIndex]}</td>`).join('')}</tr>`).join('')}
          </tbody>
        </table>
      </body>
      </html>
    `;
  
    const blob = new Blob([htmlData], { type: 'text/html;charset=utf-8' });
    saveAs(blob, 'data.html');
  };
  
const [selectedKeys, setSelectedKeys] = useState([]);
 
const resetFilters = () => {
  setFilteredData(data);
  setSelectedKeys([]); // Reset filtered data to the original unfiltered data
};

  const applyFilters = () => {
    let filtered = data;

    // Filter by machine IDs
    if (machineIdFilter && machineIdFilter.length > 0) {
        filtered = filtered.filter(item => machineIdFilter.includes(item.MACHINEID));
    }

    // Filter by date range
    if (fromDateFilter && toDateFilter) {
        filtered = filtered.filter(item => {
            const itemDate = moment(item.DATE, 'DD/MM/YYYY'); 
            const fromDate = moment(fromDateFilter, 'DD/MM/YYYY'); 
            const toDate = moment(toDateFilter, 'DD/MM/YYYY'); 

            return itemDate.isBetween(fromDate, toDate);
        });
    }

    // Format dates in the filtered data before setting it
    const formattedFiltered = filtered.map(item => ({
        ...item,
        DATE: moment(item.DATE, 'DD/MM/YYYY').format('DD/MM/YYYY')
    }));

    setFilteredData(formattedFiltered);
};

return (
  <div className="app-container">
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}> {/* Added marginBottom */}
          <div>
              <Button onClick={handleCSVDownload} style={{ backgroundColor: '#1890ff', color: 'white', marginRight: '10px' }}>
                  Download CSV <DownloadOutlined />
              </Button>
              <Button onClick={handleHTMLDownload} style={{ backgroundColor: '#1890ff', color: 'white', marginRight: '10px' }}>
                  Download HTML <DownloadOutlined />
              </Button>

              
          </div>
          <Button onClick={handleLogout} style={{ backgroundColor: '#ff4d4f', color: 'white' }}>
              <LogoutOutlined />
          </Button>
      </div>
      
      
      <Input placeholder="Machine ID" maxLength={10} value={machineIdFilter} onChange={e => setMachineIdFilter(e.target.value)} style={{ width: '150px', marginRight: '10px' }} />

      <RangePicker
          format="DD:MM:YYYY" // Specify the desired date format here
          onChange={(dates, dateStrings) => {
              setFromDateFilter(dateStrings[0]);
              setToDateFilter(dateStrings[1]);
          }}
      />
      <Button onClick={applyFilters} style={{ backgroundColor: '#1890ff', color: 'white', marginRight: '10px', marginLeft: '10px' }}>Apply Filters</Button>
      <Button onClick={resetFilters} style={{ backgroundColor: '#1890ff', color: 'white', marginRight: '10px', marginLeft: '10px' }}>Reset Filters</Button>
     
      
      
      <div style={{ marginTop: '20px' }}>
          {filteredData.length > 0 ? (
              <Table
                  scroll={{ x: 1300 }}
                  columns={columns}
                  dataSource={filteredData}
                  onChange={onChange}
                  pagination={{ pageSize: 10 }}
              />
          ) : (
              <Empty description={<span>No data found</span>} />
          )}
      </div>
      
      <footer className="login-footer" style={{ textAlign: 'center', marginTop: '40px' }}>
          <p style={{ margin: '0' }}> © Copyright 2024. All Rights Reserved by <a href="https://pinesphere.com/">Pinesphere.</a></p>
      </footer>
  </div>
);
};

export default App;
