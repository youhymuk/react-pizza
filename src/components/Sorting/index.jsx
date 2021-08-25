import React, { useState, useEffect, useRef, memo } from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './index.scss';

import { setSortBy } from '../../store/actions';
import { Button } from '../.';

const Sorting = memo(function Sorting({ sortingList, activeSortType }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const activeSorting = sortingList.find((obj) => obj.type === activeSortType);

  const sortingRef = useRef();

  const dispatch = useDispatch();

  const onTogglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const outsideClickHandler = (e) => {
    const path = e.path || (e.composedPath && e.composedPath());
    const isOutsideClick = !path.includes(sortingRef.current);
    if (isOutsideClick) setIsPopupOpen(false);
  };

  const onSelectSortingItem = (type) => {
    dispatch(setSortBy(type));
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
        <Button
          className="sorting__open-button"
          text={activeSorting.name}
          onClick={onTogglePopup}
        />
      </div>
      {isPopupOpen && (
        <ul className="sorting__popup">
          {sortingList.map((obj, index) => {
            const isActive = activeSortType === sortingList[index].type;

            return (
              <li className="sorting__item" key={`${obj.name}_${index}`}>
                <Button
                  className={classNames('sorting__button', { 'sorting__button--active': isActive })}
                  text={obj.name}
                  onClick={() => onSelectSortingItem(sortingList[index].type)}
                />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
});

Sorting.propTypes = {
  sortingList: PropTypes.array,
};

Sorting.defaultProps = {
  sortingList: [],
};

export default Sorting;
