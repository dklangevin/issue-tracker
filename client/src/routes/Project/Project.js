import useProject from '../../data/project';
import useProjectUsers from '../../data/projects/users';
import useProjectContext from '../../hooks/projectContext';
import styles from './Project.module.css';
import classNames from 'classnames';
import Input from '../../components/Input/Input';
import TextArea from '../../components/TextArea/TextArea';
import Search from '../../components/Search/Search';
import Button from '../../components/Button/Button';
import { Close, Plus } from '../../icons';
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useMemo } from 'react';
import useUsers from '../../data/users';
import ProjectComponent from '../../components/Project/Project';

export default function Project(props) {
  const { project: id } = useProjectContext();
  const project = useProject(id);
  const projectUsers = useProjectUsers(id);
  const [file, setFile] = useState();
  const [preview, setPreview] = useState();
  const [search, setSearch] = useState('');
  const [addedUsers, setAddedUsers] = useState([]);
  const ref = useRef();
  const users = useUsers();

  const invites = [];

  const { name, description } = project || {};

  useEffect(() => {
    if (!file) {
      setPreview();
      return;
    }

    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [file]);

  const searchData = useMemo(
    () =>
      users
        .filter(
          (user) =>
            !addedUsers.map((addedUser) => addedUser.id).includes(user.id)
        )
        .map((user) => ({
          ...user,
          value: `${user.first_name} ${user.last_name} - ${user.email}`,
        })),
    [users, addedUsers]
  );

  return <ProjectComponent />;

  // return (
  //   <div className={styles.container} {...props}>
  //     {/* <h3 className="title">Create New Project</h3> */}
  //     <Input
  //       placeholder="Enter project name"
  //       value={name}
  //       onChange={(e) => {
  //         // setName(e.target.value);
  //       }}
  //       // error={projectError}
  //       className={styles.title}
  //     />
  //     <div className={styles.content}>
  //       <section className={styles.details}>
  //         <div className={styles.wrapImage}>
  //           <img
  //             className={styles.image}
  //             src={preview || 'https://avatar.tobi.sh/abcdegh'}
  //             onClick={() => ref.current.click()}
  //           />
  //           <input
  //             type="file"
  //             ref={ref}
  //             className={styles.input}
  //             onChange={(e) => setFile(e.target.files[0])}
  //           />
  //           <span>Edit Image</span>
  //         </div>
  //         <form>
  //           <TextArea
  //             placeholder="Enter project description"
  //             value={description}
  //           />
  //         </form>
  //       </section>
  //       <section className={styles.membersInvites}>
  //         <div>
  //           <span className={styles.heading}>Members</span>
  //           <ul className={styles.users}>
  //             {projectUsers.length ? (
  //               projectUsers.map(({ user_id, first_name, last_name, role }) => (
  //                 <li key={user_id}>
  //                   <span
  //                     className={classNames([
  //                       styles.role,
  //                       ...(role === 'admin' ? [styles.admin] : []),
  //                     ])}
  //                   >
  //                     {role}
  //                   </span>
  //                   <span>{`${first_name} ${last_name}`}</span>
  //                   <Close className={styles.remove} />
  //                 </li>
  //               ))
  //             ) : (
  //               <span className={styles.placeholder}>
  //                 There are no users in this project
  //               </span>
  //             )}
  //           </ul>
  //         </div>
  //         <Search
  //           title="Invite Users"
  //           data={searchData}
  //           placeholder="Search by name or email"
  //           value={search}
  //           setValue={setSearch}
  //           onChange={(e) => {
  //             setSearch(e.target.value);
  //           }}
  //           onSelect={(val) => setAddedUsers((prev) => [...prev, val])}
  //         />
  //         <div className={styles.addedUsers}>
  //           {addedUsers.map((user) => (
  //             <span key={user.id} className={styles.addedUser}>
  //               {`${user.first_name} ${user.last_name}`}
  //               <Close
  //                 className={styles.remove}
  //                 onClick={() =>
  //                   setAddedUsers((prev) =>
  //                     prev.filter((u) => u.id !== user.id)
  //                   )
  //                 }
  //               />
  //             </span>
  //           ))}
  //         </div>
  //       </section>
  //     </div>
  //   </div>
  // );
}
