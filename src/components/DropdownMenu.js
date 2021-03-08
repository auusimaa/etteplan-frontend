import { React, useState} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

import styled from 'styled-components';

const DropdownContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  
`;

export default function DropdownMenu(props) {

  const [dropdownValue, setDropdown] = useState('Kaikki kaupungit');

  const dropdownStyle = {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    color: '#262626',
    border: '1px solid #E6E6E6',
    borderRadius: '5px',
    boxShadow: 'none',
    fontFamily: 'Arial',
    fontWeight: '100',
    fontSize: '13px',

  };

  const changeValue = (text) => {
    setDropdown(text);
  };

  // Pass selection to the parent component
  const handleSelect = (e) => {
    props.onSelectionChange(e);
  }

  return (
    <DropdownContainer>
      <Dropdown onSelect={handleSelect} style={{margin: '5px 15px', width: '100%', maxWidth: '470px'}}>
        <Dropdown.Toggle style={dropdownStyle} >
          {dropdownValue}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item as="button" eventKey={'All'} >
            <div onClick={(e) => changeValue(e.target.textContent)}>Kaikki kaupungit</div>
            </Dropdown.Item>
          <Dropdown.Item as="button" eventKey={'H'} >
            <div onClick={(e) => changeValue(e.target.textContent)}>Helsinki</div>
            </Dropdown.Item>
          <Dropdown.Item as="button" eventKey={'J'} >
            <div onClick={(e) => changeValue(e.target.textContent)}>Jyväskylä</div>
            </Dropdown.Item>
          <Dropdown.Item as="button" eventKey={'K'} >
            <div onClick={(e) => changeValue(e.target.textContent)}>Kuopio</div>
            </Dropdown.Item>
          <Dropdown.Item as="button" eventKey={'T'} >
            <div onClick={(e) => changeValue(e.target.textContent)}>Tampere</div>
            </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </DropdownContainer>
  )
}
