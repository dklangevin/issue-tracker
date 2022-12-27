import { useParams } from 'react-router-dom';

export default function Issue(props) {
  console.log(props);
  const { id } = useParams();
  return <>{id}</>;
}
