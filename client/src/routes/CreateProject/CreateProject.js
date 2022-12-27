import ProjectComponent from '../../components/Project/Project';

export default function CreateProject() {
  // const users = useUsers();

  // const { setProject } = useProjectContext();
  // const navigate = useNavigate();

  // const [name] = useState('New Project');
  // const [description] = useState('');
  // const [addedUsers] = useState([]);

  // const [projectError, setProjectError] = useState('');
  // const [descriptionError, setDescriptionError] = useState('');
  // const [loading, setLoading] = useState(false);

  // const isValid = ({ setErrors = false } = {}) => {
  //   if (name === '' || description === '') {
  //     if (setErrors) {
  //       if (name === '') {
  //         setProjectError('Must enter a project name');
  //       }
  //       if (description === '') {
  //         setDescriptionError('Must enter a project description');
  //       }
  //     }
  //     return false;
  //   }
  //   return true;
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (isValid({ setErrors: true })) {
  //     setProjectError('');
  //     setDescriptionError('');
  //     const body = {
  //       name,
  //       description,
  //       users: addedUsers.map((user) => user.id),
  //     };
  //     setLoading(true);
  //     createProject(body).then(() => {
  //       setLoading(false);
  //       setProject(name);
  //       navigate('/project');
  //     });
  //   }
  // };

  return <ProjectComponent create />;

  // return (
  //   <div className={styles.container} {...props}>
  //     {/* <h3 className="title">Create New Project</h3> */}
  //     <Input
  //       placeholder="Enter project name"
  //       value={name}
  //       onChange={(e) => {
  //         setName(e.target.value);
  //       }}
  //       error={projectError}
  //       className={styles.title}
  //     />
  //     <div className={styles.details}>
  //       <div className={styles.wrapImage}>
  //         <img
  //           className={styles.image}
  //           src={'https://avatar.tobi.sh/abcdegh'}
  //         />
  //         <span>Edit Image</span>
  //       </div>
  //       <form onSubmit={handleSubmit}>
  //         {/* <Input
  //             placeholder="Enter project name"
  //             value={name}
  //             onChange={(e) => {
  //               setName(e.target.value);
  //             }}
  //             error={projectError}
  //             className={styles.title}
  //           /> */}
  //         {/* <Input
  //               placeholder="Enter project description"
  //               value={description}
  //               onChange={(e) => {
  //                 setDescription(e.target.value);
  //               }}
  //               error={descriptionError}
  //               className={styles.description}
  //             /> */}
  //         {/* <textarea
  //             placeholder="Enter project description"
  //             className={styles.description}
  //           /> */}
  //         <TextArea placeholder="Enter project description" />

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
  //         <div className={styles.users}>
  //           {addedUsers.map((user) => (
  //             <span key={user.id} className={styles.user}>
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
  //         <Button type="submit" disabled={!isValid()} loading={loading}>
  //           Create Project
  //         </Button>
  //       </form>
  //     </div>
  //   </div>
  // );
}
