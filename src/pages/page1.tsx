import { Layout } from '~/layout';
import { Banner, Benefits, Services, Solutions } from '~/sections';

const Page1 = () => {
  return (
    <Layout>
      <Banner />
      <Services index='right' />
      <Services index='left' />
      <Solutions />
      <Benefits />
    </Layout>
  );
};
export default Page1;
