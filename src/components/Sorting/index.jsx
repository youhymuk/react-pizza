import { React, useState, useEffect, useRef } from 'react';
import classNames from 'classnames';

import './index.scss';

import { Button } from '../.';

const Sorting = () => {
  const sortingList = ['популярности', 'цене', 'алфавиту'];

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);

  const activeLabel = sortingList[activeItem];

  const sortingRef = useRef();

  const togglePopupHandler = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const outsideClickHandler = (e) => {
    const isOutsideClick = !e.path.includes(sortingRef.current);
    if (isOutsideClick) setIsPopupOpen(false);
  };

  useEffect(() => {
    document.body.addEventListener('click', outsideClickHandler);
  }, []);

  return (
    <div className="sorting" ref={sortingRef}>
      <div className="sorting__label">
        <svg
          className="sorting__icon"
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <span className="sorting__desc">Сортировка по:</span>{' '}
        <Button className="sorting__open-button" text={activeLabel} onClick={togglePopupHandler} />
      </div>
      {isPopupOpen && (
        <ul className="sorting__popup">
          {sortingList.map((name, index) => {
            const isActive = activeItem === index;

            return (
              <li className="sorting__item" key={`${name}_${index}`}>
                <Button
                  className={classNames('sorting__button', { 'sorting__button--active': isActive })}
                  text={name}
                  onClick={() => setActiveItem(index)}
                />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Sorting;
