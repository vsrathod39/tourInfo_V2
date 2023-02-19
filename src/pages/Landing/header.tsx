import { map } from "lodash";
import React, { useRef, useState } from "react";
import { IPeople } from "./interface";

export default function Header() {
  const [rightScrollValue, setRightScrollValue] = useState(false);
  const [leftScrollValue, setLeftScrollValue] = useState(true);
  const scrollContainer = useRef<HTMLDivElement>(null);

  const peopleList: Array<IPeople> = [
    { url: 'https://picsum.photos/200/300?random=1', name: 'random', id: '467673fff1er' },
    { url: 'https://picsum.photos/200/300?random=1', name: 'random', id: '467673ff' },
    { url: 'https://picsum.photos/200/300?random=1', name: 'random', id: '46767ff1er' },
    { url: 'https://picsum.photos/200/300?random=1', name: 'random', id: '467673\fff12' },
    { url: 'https://picsum.photos/200/300?random=1', name: 'random', id: '46767ff12' },
    { url: 'https://picsum.photos/200/300?random=1', name: 'random', id: '46763\fff12' },
    { url: 'https://picsum.photos/200/300?random=1', name: 'random', id: '467fff12' },
    { url: 'https://picsum.photos/200/300?random=1', name: 'random', id: '4asd673fff12' },
    { url: 'https://picsum.photos/200/300?random=1', name: 'random', id: '467asd73fff12' },
    { url: 'https://picsum.photos/200/300?random=1', name: 'random', id: '467673aff12' },
    { url: 'https://picsum.photos/200/300?random=1', name: 'random', id: '467673aafff12' },
    { url: 'https://picsum.photos/200/300?random=1', name: 'random', id: '467673aafaf12' },
    { url: 'https://picsum.photos/200/300?random=1', name: 'random', id: '467673fff1fr2' },
    { url: 'https://picsum.photos/200/300?random=1', name: 'random', id: '467673fffsg' },
    { url: 'https://picsum.photos/200/300?random=1', name: 'random', id: '467673ffsg2' },
    { url: 'https://picsum.photos/200/300?random=1', name: 'random', id: '467673fgrt12' },
    { url: 'https://picsum.photos/200/300?random=1', name: 'random', id: '467673ft12' },
    { url: 'https://picsum.photos/200/300?random=1', name: 'random', id: '467673rgrfff12' },
    { url: 'https://picsum.photos/200/300?random=1', name: 'random', id: '467673ffdg12' },
  ];
  const renderPeopleList = (peopleList: Array<IPeople>) => {
    return map(peopleList, ({ url, name, id }) => (
      <a onClick={storiesOnclickHandler} key={id} className="story me-2 pointer-cursor">
        <div className="profile d-flex justify-content-center align-items-center">
          <img src={url} className='rounded-circle' alt="" />
        </div>
        <div className="title header-text-light">{name}</div>
      </a>
    ))
  }

  const storiesOnclickHandler = (e: any) => {
    const stories = document.querySelectorAll('.story');
    stories.forEach((s) => {
      s.classList.remove('active');
    });
    e.currentTarget.classList.add('active');
  };

  const scrollLeft = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollLeft -= 150;
      setLeftScrollValue(scrollContainer.current.scrollLeft === 0);
      setRightScrollValue(false);
    }
  }

  const scrollRight = () => {
    if (scrollContainer.current) {
      const scrollValueBefore = scrollContainer.current.scrollLeft;
      scrollContainer.current.scrollLeft += 150;
      setLeftScrollValue(false);
      setRightScrollValue(scrollValueBefore === scrollContainer.current.scrollLeft);
    }
  }

  return (
    <div className="w-100 d-flex justify-content-center align-items-center">
      <button onClick={scrollLeft} className={`scroll-button scroll-button-left primary-bg-color ${leftScrollValue ? 'invisible' : 'visible'}`}>
        <i className="fa fa-chevron-left"></i>
      </button>
      <div ref={scrollContainer} className="d-flex justify-content-between align-items-center story overflow-x-scroll-custom pe-2 ps-2">
        {
          renderPeopleList(peopleList)
        }
      </div>
      <button onClick={scrollRight} className={`scroll-button scroll-button-right primary-bg-color ${rightScrollValue ? 'invisible' : 'visible'}`}>
        <i className="fa fa-chevron-right"></i>
      </button>
    </div>
  );
}