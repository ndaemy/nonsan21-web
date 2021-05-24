import {
  Document,
  Font,
  Page,
  StyleSheet,
  Text,
  View,
} from '@react-pdf/renderer';

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

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    fontFamily: 'Nanum Gothic',
  },
  title: {
    marginTop: '20mm',
    textAlign: 'center',
    fontWeight: 700,
  },
});

function OneWeekReport() {
  return (
    <Document>
      <Page size='A4' style={styles.page}>
        <View style={styles.title}>
          <Text>재택근무 중 업무수행 내역서</Text>
        </View>
      </Page>
    </Document>
  );
}

export default OneWeekReport;
