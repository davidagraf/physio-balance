import { useState } from 'react';

import GalleryModal from './GalleryModal.jsx';

export default function Gallery({ uris }: {uris: string[]}) {
  const [modalStartIndex, setModalStartIndex] = useState<number | null>(null);

  return (
    <div className="gallery">
      {modalStartIndex !== null && (
        <GalleryModal
          startIndex={modalStartIndex}
          uris={uris}
          close={() => setModalStartIndex(null)}
        />
      )}
      <div className="gallery__wrapper">
        {uris.map((uri, i) => (
          <div
            key={i}
            className="gallery__thumbnail"
            onClick={() => setModalStartIndex(i)}
          >
            <img src={uri} />
          </div>
        ))}
      </div>
    </div>
  );
}
