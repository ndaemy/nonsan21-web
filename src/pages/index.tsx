import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import ClientOnly from '../components/ClientOnly';
import TestPDFComponent from '../components/TestPDFComponent';

function Home() {
  return (
    <>
      <PDFViewer>
        <TestPDFComponent />
      </PDFViewer>
      <ClientOnly>
        <PDFDownloadLink document={<TestPDFComponent />} fileName='test.pdf'>
          {({ loading }) => (loading ? 'Loading document...' : 'Download now!')}
        </PDFDownloadLink>
      </ClientOnly>
    </>
  );
}

export default Home;
