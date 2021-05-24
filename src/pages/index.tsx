import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import ClientOnly from '../components/ClientOnly';
import OneWeekReport from '../components/OneWeekReport';

function Home() {
  return (
    <>
      <ClientOnly>
        <PDFViewer width='100%' height={720}>
          <OneWeekReport />
        </PDFViewer>
        <PDFDownloadLink document={<OneWeekReport />} fileName='test.pdf'>
          {({ loading }) => (loading ? 'Loading document...' : 'Download now!')}
        </PDFDownloadLink>
      </ClientOnly>
    </>
  );
}

export default Home;
