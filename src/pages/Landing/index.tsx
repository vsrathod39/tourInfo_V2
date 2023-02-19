import React from 'react';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Header from './header';
import './style.css'
import Timeline from './timeline';
import RightSideBox from './right-side-box';

export default function App() {
  return (
    <MDBRow>
      <MDBCol md='8'>
        <MDBRow>
          <Header />
        </MDBRow>
        <div className='horizontal-line mt-3 mb-3'></div>
        <MDBRow>
          <Timeline />
        </MDBRow>
      </MDBCol>
      <MDBCol md='4'>
        <RightSideBox />
      </MDBCol>
    </MDBRow>
  );
}