import { get, map } from "lodash";
import { MDBBtn, MDBCol, MDBRow } from "mdb-react-ui-kit";
import React from "react";

export default function RightSideBox() {
  const searchBox = () => {
    return (
      <>
        <div className="search-box d-flex justify-content-center align-items-center">
          <input className='input-search' type='text' placeholder='Search' />
          <i className="fa fa-magnifying-glass" style={{ background: '' }}></i>
        </div>
        <i className="fa-sharp fa-regular fa-bell icon-box pointer-cursor"></i>
        <i className="fa fa-upload icon-box pointer-cursor"></i>
      </>
    )
  }
  const sectionHeading = (heading: string, subHeading: string) => {
    return (
      <>
        <div className="d-flex justify-content-between align-items-center fixed-element">
          <span className="header-text-bold">{heading}</span>
          <span className="header-text-black">{subHeading}</span>
        </div>
      </>
    )
  }
  const followSuggestionList = () => {
    return (
      <>
        <div>
          <div className='d-flex justify-content-between align-items-center mt-3 mb-3'>
            <div className='d-flex align-items-center'>
              <div className="square rounded-circle border border-1 timeline-post-pic-size d-flex justify-content-center align-items-center">
                <img
                  src='https://mdbootstrap.com/img/new/standard/city/047.webp'
                  className='rounded-circle timeline-post-pic-size'
                  alt={`icon - ${'Vikas'}`}
                />
              </div>
              <div className="ms-2 d-flex flex-column justify-content-center align-items-start">
                <span className="header-text-black margin-padding-border-outline-none">Vikas</span>
                <span className="header-text-light-xsm margin-padding-border-outline-none">@vsrathod39</span>
              </div>
            </div>
            <div>
              <MDBBtn>
                <span>Follow</span>
              </MDBBtn>
            </div>
          </div>
        </div>
      </>
    )
  }

  const savedPlaceList = () => {
    return (
      <>
        <MDBCol md='6' className="pointer-cursor mt-3">
          <div>
            <img src='https://mdbootstrap.com/img/new/standard/city/027.webp' className='img-fluid rounded' alt='' />
          </div>
        </MDBCol>
      </>
    )
  }

  const activityList = () => {
    const icons = {
      like: "fa-sharp fas fa-regular fa-heart fa-border-color me-1",
      bookmark: "fa fa-bookmark me-1",
      comment: "fa fa-comment-dots me-1",
    }
    const list = [
      { type: 'like', name: 'Vikas' },
      { type: 'comment', name: 'Pawan' },
      { type: 'bookmark', name: 'Ajay' },
    ]

    return map(list, ({ type, name }, index) => (
      <div key={index}>
        <i className={get(icons, type)}></i>
        <span className="header-text-black">You've Commented on {name} <b>Shot</b></span>
      </div>
    ));
  }

  return (
    <div className="container">
      <div className="search-container d-flex justify-content-between align-items-center mb-3">
        {searchBox()}
      </div>
      <div className="follow-suggestion-container mt-3 overflow-x-scroll-custom">
        {sectionHeading('People to follow', 'See all')}
        {followSuggestionList()}
        {followSuggestionList()}
        {followSuggestionList()}
        {followSuggestionList()}
        {followSuggestionList()}
        {followSuggestionList()}
        {followSuggestionList()}
      </div>
      <div className="saved-places-container mt-3 overflow-x-scroll-custom">
        {sectionHeading('You Saved', 'See all')}
        <div className="mt-3 mb-3">
          <MDBRow>
            {savedPlaceList()}
            {savedPlaceList()}
            {savedPlaceList()}
            {savedPlaceList()}
            {savedPlaceList()}
            {savedPlaceList()}
            {savedPlaceList()}
            {savedPlaceList()}
          </MDBRow>
        </div>
      </div>
      <div className="activity-container mt-3">
        {sectionHeading('Last Activity', 'See all')}
        <div className="d-flex flex-column align-items-start mt-3 mb-3">
          {activityList()}
        </div>
      </div>
    </div>
  );
}