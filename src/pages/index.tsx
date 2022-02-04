import type { NextPage } from 'next';
import ArrayVisualiser from '../components/array-visualiser';

const Visualeyes: NextPage = () => {
  return (
    <div>
      <ArrayVisualiser />
    </div>
  );
};

export async function getServerSideProps() {
  const name = process.env.MY_SECRET;
  console.log(`connection to db with pass: ${name}`);
  return {
    props: {},
  };
}

export default Visualeyes;
