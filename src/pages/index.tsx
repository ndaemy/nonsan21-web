import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import ClientOnly from '../components/ClientOnly';
import TwoWeekReport from '../components/TwoWeekReport';

function Home() {
  const user = {
    name: '홍길동',
    birthday: '20. 10. 21.',
    joinDate: '20. 10. 21.',
    company: '주식회사 왓챠',
    cellPhone: '010-1234-5678',
    startAt: '20. 10. 21.',
    endAt: '20. 10. 28.',
    address: '서울특별시 서초구 강남대로 343 3층 왓챠',
    createDate: '2021년 1월 12일',
  };

  return (
    <>
      <ClientOnly>
        <PDFViewer width='100%' height={720}>
          <TwoWeekReport {...user} />
        </PDFViewer>
        <PDFDownloadLink
          document={<TwoWeekReport {...user} />}
          fileName='test.pdf'
        >
          {({ loading }) => (loading ? 'Loading document...' : 'Download now!')}
        </PDFDownloadLink>
      </ClientOnly>
    </>
  );
}

export default Home;
