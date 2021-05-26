import { Document, Font, Page, Text, View } from '@react-pdf/renderer';
import { styles } from '../styles/OneWeekReportStyle';
import PersonalInfo from './PersonalInfo';

Font.register({
  family: 'Nanum Gothic',
  fonts: [
    {
      src: '/fonts/NanumGothic-Regular.ttf',
      fontWeight: 'normal',
    },
    {
      src: '/fonts/NanumGothic-Bold.ttf',
      fontWeight: 700,
    },
    {
      src: '/fonts/NanumGothic-ExtraBold.ttf',
      fontWeight: 800,
    },
  ],
});

function Index() {
  return (
    <Document>
      <Page size='A4' style={styles.page}>
        <View style={styles.title}>
          <Text>재택근무 중 업무수행 내역서</Text>
        </View>
        <PersonalInfo />
      </Page>
    </Document>
  );
}

export default Index;