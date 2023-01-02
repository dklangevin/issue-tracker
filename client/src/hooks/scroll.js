import { useState, useEffect, useCallback, useMemo } from 'react';

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState();
  const [windowHeight, setWindowHeight] = useState(0);

  const handleScroll = useCallback(() => {
    const position = window.pageYOffset;
    const direction =
      position > scrollPosition
        ? 'down'
        : position < scrollPosition
        ? 'up'
        : null;
    setScrollPosition(position);
    setScrollDirection(direction);
    setWindowHeight(window.innerHeight);
  }, [scrollPosition]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return { scrollPosition, scrollDirection, windowHeight };
};

export const useBottomNavHidden = () => {
  const { scrollPosition, scrollDirection, windowHeight } = useScrollPosition();
  const [lastScrollDirection, setLastScrollDirection] = useState();
  const [intitialPosition, setInitialPosition] = useState(scrollPosition);

  const SCROLL_DOWN_THRESHOLD = 60;
  const SCROLL_UP_THRESHOLD = 10;

  useEffect(() => {
    if (scrollDirection !== lastScrollDirection) {
      setLastScrollDirection(scrollDirection);
      setInitialPosition(scrollPosition);
    }
  }, [scrollPosition, scrollDirection]);

  return useMemo(() => {
    // always show scroll bar when scrolled to the top
    if (scrollPosition === 0) {
      return false;
    }

    const delta = Math.abs(scrollPosition - intitialPosition);

    // hide the nav if user has scrolled DOWN past the threshold
    if (scrollDirection === 'down') {
      return scrollPosition > 0 && delta > SCROLL_DOWN_THRESHOLD;
    }
    // show the nav if the user has scrolled UP past the threshold
    else if (scrollDirection === 'up') {
      return !(scrollPosition < windowHeight && delta > SCROLL_UP_THRESHOLD);
    }
    // show the nav if the user hasn't scrolled yet
    else {
      return false;
    }
  }, [scrollPosition, scrollDirection]);
};
