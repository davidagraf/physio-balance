import React, { useState, useEffect, useRef } from 'react';
import { Icon } from '../atomic/Icon';
import { Link } from 'react-router';

interface ModalProps {
  title?: string;
  children?: React.ReactNode;
  contentClassName?: string;
}

export default function Modal({ title, children, contentClassName }: ModalProps) {
  const [headerFixed, setHeaderFixed] = useState(false);
  const [showComponent, setShowComponent] = useState(false);
  const divModalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      setShowComponent(true);
    });
  }, []);

  const checkHeaderPos = () => {
    if (!divModalRef.current) return;
    const overflow = divModalRef.current.getBoundingClientRect().top < 0;
    if (overflow !== headerFixed) {
      setHeaderFixed(overflow);
    }
  };

  const close = () => {
    window.history.back();
  };

  const checkClickOutside = (ev: React.MouseEvent) => {
    if (divModalRef.current && !divModalRef.current.contains(ev.target as Node)) {
      close();
    }
  };

  const closeButton = (
    <Link tabIndex={-1} className="button--close" to="/">
      <Icon name="times" />
    </Link>
  );

  const headerContent = (
    <div className="modal__header__content">
      <div key="0" className="modal__header__title">
        <h1>{title}</h1>
      </div>
      {closeButton}
    </div>
  );

  return (
    <div className="modal" onClick={checkClickOutside}>
      <div className="modal__scroll" onScroll={checkHeaderPos}>
        {showComponent && (
          <div className="modal__visible" ref={divModalRef}>
            <div className="modal__header">{headerContent}</div>
            <div className={contentClassName || 'modal__content '}>
              {children}
            </div>
            {headerFixed && (
              <div className="modal__header--fixed">
                {headerContent}
                <div className="modal__header__shadow"/>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
