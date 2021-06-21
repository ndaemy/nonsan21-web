import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import ClientOnly from '../components/ClientOnly';
import TwoWeekReport from '../components/TwoWeekReport';

function Home() {
  return (
    <>
      <ClientOnly>
        <PDFViewer width='100%' height={720}>
          <TwoWeekReport />
        </PDFViewer>
        <PDFDownloadLink document={<TwoWeekReport />} fileName='test.pdf'>
          {({ loading }) => (loading ? 'Loading document...' : 'Download now!')}
        </PDFDownloadLink>
      </ClientOnly>
    </>
  );
}

export default Home;
