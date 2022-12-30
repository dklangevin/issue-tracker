import { useEffect, useRef, useState } from 'react';
import useUser, { uploadAvatar } from '../../data/user';
import { AddFile } from '../../icons';
import { generateLinearGradientBackground } from '../../util';
import Button from '../Button/Button';
import styles from './AvatarUpload.module.css';

export default function AvatarUpload({ image, seed, close = () => {} }) {
  const ref = useRef();
  const [file, setFile] = useState();
  const [preview, setPreview] = useState(image);
  const [loading, setLoading] = useState(false);

  const user = useUser(1);
  const { id } = user || {};

  useEffect(() => {
    setPreview(image);
  }, [image]);

  const handleImageChange = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    const inFile = e.target.files[0];
    reader.onloadend = () => {
      setFile(inFile);
      setPreview(reader.result);
    };
    reader.readAsDataURL(inFile);
  };

  const handleUpload = () => {
    setLoading(true);
    const formData = new FormData();
    formData.append('file', file);
    uploadAvatar(id, formData)
      .catch((error) => console.log(error))
      .finally(() => {
        setLoading(false);
        close();
      });
  };

  return (
    <div className={styles.container}>
      <section className={styles.top}>
        {preview ? (
          <img
            src={preview}
            alt="avatar"
            className={styles.image}
            onClick={() => ref.current.click()}
          />
        ) : (
          <div
            style={{
              background: generateLinearGradientBackground(seed || ''),
            }}
            onClick={() => ref.current.click()}
            className={styles.image}
          />
        )}
        <input
          type="file"
          ref={ref}
          className={styles.input}
          onClick={() => ref.current.click()}
          onChange={handleImageChange}
        />
        <div>
          <Button
            onClick={() => ref.current.click()}
            appearance="secondary"
            className={styles.selectFile}
          >
            Select File <AddFile />
          </Button>
          <ul>
            {/* <li>One image file</li> */}
            <li>Image must be less than 200x200 pixels</li>
          </ul>
        </div>
      </section>
      <section className="flex-row">
        <Button appearance="secondary" onClick={close}>
          Cancel
        </Button>
        <Button onClick={handleUpload} disabled={!file} loading={loading}>
          Save
        </Button>
      </section>
    </div>
  );
}
