// Shows a picture from client/public/images. If the file is not there yet, shows a
// dashed placeholder saying which photo is needed and the file name to save it as.
import { useState } from 'react';
import { photoUrl } from '../photos.js';

export function Photo({ photo, map = false }) {
  const [missing, setMissing] = useState(false);
  if (missing) {
    return (
      <figure className={`photo placeholder ${map ? 'map' : ''}`}>
        <span className="ph-tag">{map ? 'Map needed' : 'Photo needed'}</span>
        <strong>{photo.label}</strong>
        <span>{photo.hint}</span>
        <code>client/public/images/{photo.file}</code>
      </figure>
    );
  }
  return (
    <figure className={`photo ${map ? 'map' : ''}`}>
      <img src={photoUrl(photo.file)} alt={photo.label} loading="lazy" onError={() => setMissing(true)} />
    </figure>
  );
}

export function Gallery({ photos }) {
  return (
    <div className="gallery">
      {photos.map((p) => <Photo key={p.file} photo={p} />)}
    </div>
  );
}

// One photo at a time with small "1 / 2" buttons: fits narrow cards (used for each room).
export function PhotoSwitcher({ photos }) {
  const [i, setI] = useState(0);
  return (
    <div className="switcher">
      <Photo key={photos[i].file} photo={photos[i]} />
      {photos.length > 1 && (
        <div className="switcher-dots" role="group" aria-label="Choose photo">
          {photos.map((p, j) => (
            <button key={p.file} type="button" className={j === i ? 'active' : ''} aria-pressed={j === i} aria-label={p.label} onClick={() => setI(j)}>
              {j + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
