import React, { useState, useEffect, useRef } from 'react';
import { Icon } from './Icon';

interface GalleryModalProps {
  uris: string[];
  startIndex: number;
  close: () => void;
}

export default function GalleryModal({ uris, startIndex, close }: GalleryModalProps) {
  const [index, setIndex] = useState(startIndex);
  const touchStartXRef = useRef<number | null>(null);

  const next = () => {
    let newIndex = index + 1;
    if (newIndex >= uris.length) {
      newIndex = 0;
    }
    setIndex(newIndex);
  };

  const prev = () => {
    let newIndex = index - 1;
    if (newIndex < 0) {
      newIndex = uris.length - 1;
    }
    setIndex(newIndex);
  };

  const handleKeyDown = (ev: KeyboardEvent) => {
    if (ev.keyCode === 37) {
      prev();
    } else if (ev.keyCode === 39) {
      next();
    }
  };

  const handleTouchStart = (ev: React.TouchEvent) => {
    touchStartXRef.current = ev.nativeEvent.touches[0]?.pageX ?? null;
  };

  const handleTouchEnd = (ev: React.TouchEvent) => {
    const touchEndX = ev.nativeEvent.changedTouches[0]?.pageX;
    if (touchStartXRef.current && touchEndX) {
      if (touchEndX > touchStartXRef.current) {
        next();
      } else if (touchEndX < touchStartXRef.current) {
        prev();
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [index, uris.length]);

  const style = {
    backgroundImage: `url("${uris[index]}")`
  };

  return (
    <div className="gallerymodal" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <button className="gallerymodal__close" onClick={close}>
        <Icon name="times" />
      </button>
      <div className="gallerymodal__prev" onClick={prev}>
        <button className="gallerymodal__prev__button">
          <Icon name="angle-left" />
        </button>
      </div>
      <div className="gallerymodal__next" onClick={next}>
        <button className="gallerymodal__next__button">
          <Icon name="angle-right" />
        </button>
      </div>
      <div className="gallerymodal__imgwrapper">
        <div className="gallerymodal__img" style={style} />
      </div>
    </div>
  );
}
