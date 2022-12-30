import useUser from '../../data/user';
import AvatarUpload from '../AvatarUpload/AvatarUpload';
import { Modal } from '../Modal/Modal';
import styles from './EditAvatarModal.module.css';

function EditAvatarModal({ hidden, setHidden, ...props }) {
  const user = useUser(1);
  const { id, first_name: first, avatar } = user || {};

  return (
    <Modal hidden={hidden} setHidden={setHidden}>
      <div className={styles.container} {...props}>
        <AvatarUpload
          image={avatar}
          seed={`${id}-${first}`}
          close={() => setHidden(true)}
        />
      </div>
    </Modal>
  );
}

export default EditAvatarModal;
