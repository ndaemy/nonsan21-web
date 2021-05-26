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
    fontSize: 10,
  },
  title: {
    marginTop: '20mm',
    textAlign: 'center',
    fontWeight: 700,
    fontSize: 18,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: '8mm 25mm 0 25mm',
    borderTop: '0.2mm solid black',
    borderBottom: '0.2mm solid black',
  },
  infoTitle: {
    padding: '1mm 2mm',
  },
  flexRow: {
    flexDirection: 'row',
  },
  flexColumn: {
    flexDirection: 'column',
  },
  flexGrow1: {
    flexGrow: 1,
  },
  textRight: {
    textAlign: 'right',
  },
  textPadding: {
    padding: '1mm 2mm',
  },
  paddingLeftTap: {
    paddingLeft: '8mm',
  },
  borderBottom1: {
    borderBottom: '0.1mm solid black',
  },
  borderLeft1: {
    borderLeft: '0.1mm solid black',
  },
  borderLeft2: {
    borderLeft: '0.2mm solid black',
  },
});

function OneWeekReport() {
  return (
    <Document>
      <Page size='A4' style={styles.page}>
        <View style={styles.title}>
          <Text>재택근무 중 업무수행 내역서</Text>
        </View>
        <View style={styles.info}>
          <View style={styles.infoTitle}>
            <Text>인적사항 등</Text>
          </View>
          <View
            style={[styles.flexColumn, styles.borderLeft2, styles.flexGrow1]}
          >
            <View style={[styles.flexRow, styles.borderBottom1]}>
              <View style={[styles.flexGrow1]}>
                <Text style={styles.textPadding}>성명</Text>
                <Text style={[styles.textPadding, styles.paddingLeftTap]}>
                  홍길동
                </Text>
              </View>
              <View style={[styles.flexGrow1, styles.borderLeft1]}>
                <Text style={styles.textPadding}>생년월일</Text>
                <Text style={[styles.textPadding, styles.paddingLeftTap]}>
                  2000. 00. 00.
                </Text>
              </View>
              <View style={[styles.flexGrow1, styles.borderLeft1]}>
                <Text style={styles.textPadding}>편입일</Text>
                <Text style={[styles.textPadding, styles.paddingLeftTap]}>
                  2000. 00. 00.
                </Text>
              </View>
            </View>
            <Text style={styles.textPadding}>소속</Text>
            <Text style={[styles.textPadding, styles.paddingLeftTap]}>
              주식회사 왓챠
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
}

export default OneWeekReport;
