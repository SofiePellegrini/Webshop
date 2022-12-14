/* eslint-disable */
import React from 'react';

import { VisibilityContext } from 'react-horizontal-scrolling-menu';

import { HiOutlineArrowSmRight } from 'react-icons/hi';
import { HiOutlineArrowSmLeft } from 'react-icons/hi';
import { IconContext } from 'react-icons';

function Arrow({
  children,
  disabled,
  onClick,
}: {
  children: React.ReactNode,
  disabled: boolean,
  onClick: VoidFunction,
}) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      style={{
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        right: '1%',
        opacity: disabled ? '0' : '1',
        userSelect: 'none',
        border: 'none',
        backgroundColor: 'transparent',
      }}
    >
      {children}
    </button>
  );
}

export function LeftArrow() {
  const {
    isFirstItemVisible,
    scrollPrev,
    visibleItemsWithoutSeparators,
    initComplete,
  } = React.useContext(VisibilityContext);

  const [disabled, setDisabled] = React.useState(
    !initComplete || (initComplete && isFirstItemVisible)
  );
  React.useEffect(() => {
    // NOTE: detect if whole component visible
    if (visibleItemsWithoutSeparators.length) {
      setDisabled(isFirstItemVisible);
    }
  }, [isFirstItemVisible, visibleItemsWithoutSeparators]);

  return (
    <Arrow disabled={disabled} onClick={() => scrollPrev()}>
      <IconContext.Provider value={{ size: '3em' }}>
        <HiOutlineArrowSmLeft />
      </IconContext.Provider>
    </Arrow>
  );
}

export function RightArrow() {
  const { isLastItemVisible, scrollNext, visibleItemsWithoutSeparators } =
    React.useContext(VisibilityContext);

  // console.log({ isLastItemVisible });
  const [disabled, setDisabled] = React.useState(
    !visibleItemsWithoutSeparators.length && isLastItemVisible
  );
  React.useEffect(() => {
    if (visibleItemsWithoutSeparators.length) {
      setDisabled(isLastItemVisible);
    }
  }, [isLastItemVisible, visibleItemsWithoutSeparators]);

  return (
    <Arrow disabled={disabled} onClick={() => scrollNext()}>
      <IconContext.Provider value={{ size: '3em' }}>
        <HiOutlineArrowSmRight />
      </IconContext.Provider>
    </Arrow>
  );
}
