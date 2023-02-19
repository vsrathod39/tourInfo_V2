import { useEffect, useState } from 'react';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { isEqual } from 'lodash';

export default function Timeline() {
  const likeCount = 0;
  const commentCount = 0;
  const [timelineFilter, setTimelineFilter] = useState('all');

  const toggleHeartIcon = (e: any) => {
    e.target.classList.toggle('active');
    const isActive = e.target.classList.contains('active');
    isActive ? e.target.classList.add('fas') : e.target.classList.remove('fas');
  }

  const toggleTimelineActiveFilter = (filter: string) => {
    setTimelineFilter(filter);
  }

  const shortList = () => {
    return (<>
      <MDBCol md='4'>
        <div>
          <div>
            <img src='https://mdbootstrap.com/img/new/standard/city/047.webp' className='img-fluid rounded' alt='' />
          </div>
          <div className='d-flex justify-content-between align-items-center mt-3 mb-3'>
            <div className='d-flex align-items-center'>
              <div className="square rounded-circle border border-1 timeline-post-pic-size d-flex justify-content-center align-items-center">
                <img
                  src='https://mdbootstrap.com/img/new/standard/city/047.webp'
                  className='rounded-circle timeline-post-pic-size'
                  alt={`icon - ${'Vikas'}`}
                />
              </div>
              <div className="ms-2">
                <span className='header-text-black'>Vikas</span>
              </div>
            </div>
            <div className='d-flex align-items-center'>
              <i onClick={toggleHeartIcon} className="me-2 fa-sharp fa-regular fa-heart fa-border-color pointer-cursor"></i>
              <span className='me-3 header-text-black'>{likeCount}</span>
              <i className="me-2 fa-sharp fa-regular fa-comment-dots pointer-cursor"></i>
              <span className='header-text-black'>{commentCount}</span>
            </div>
          </div>
        </div>
      </MDBCol>
    </>)
  }

  return (
    <>
      <MDBRow className='mb-3'>
        <div className='d-flex justify-content-between align-items-center'>
          <div>
            <span className='header-text-bold'>Timeline</span>
          </div>
          <div className='d-flex justify-content-center align-items-center gao-5 header-timeline-filter-list'>
            <div onClick={() => toggleTimelineActiveFilter('all')} className='d-flex flex-column me-3'>
              <span className='w-100 header-text-light header-timeline-filter pointer-cursor'>All</span>
              {isEqual(timelineFilter, 'all') && <span className='header-timeline-filter-item-underline'></span>}
            </div>
            <div onClick={() => toggleTimelineActiveFilter('following')} className='d-flex flex-column me-3'>
              <span className='w-100 header-text-light header-timeline-filter pointer-cursor'>Following</span>
              {isEqual(timelineFilter, 'following') && <span className='header-timeline-filter-item-underline'></span>}
            </div>
            <div onClick={() => toggleTimelineActiveFilter('newest')} className='d-flex flex-column me-3'>
              <span className='w-100 header-text-light header-timeline-filter pointer-cursor'>Newest</span>
              {isEqual(timelineFilter, 'newest') && <span className='header-timeline-filter-item-underline'></span>}
            </div>
            <div onClick={() => toggleTimelineActiveFilter('popular')} className='d-flex flex-column'>
              <span className='w-100 header-text-light header-timeline-filter pointer-cursor'>Popular</span>
              {isEqual(timelineFilter, 'popular') && <span className='header-timeline-filter-item-underline'></span>}
            </div>
          </div>
        </div>
      </MDBRow>
      <MDBRow>
        {shortList()}
        {shortList()}
        {shortList()}
        {shortList()}
        {shortList()}
        {shortList()}
        {shortList()}
        {shortList()}
      </MDBRow>
    </>
  );
}