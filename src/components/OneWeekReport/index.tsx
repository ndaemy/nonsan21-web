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
  ],
});

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    fontSize: 10,
    fontFamily: 'Nanum Gothic',
    backgroundColor: 'white',
  },
  container: {
    margin: '64px 42px',
  },
  title: {
    fontSize: 18,
    fontWeight: 700,
    textAlign: 'center',
    margin: '0 0 14px',
  },
  infoTable: {
    flexDirection: 'row',
    width: '100%',
    height: 80,
    borderTop: 1,
    borderBottom: 1,
    margin: '10px 0',
  },
  infoTableTitle: {
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRight: 0.5,
  },
  infoTableContent: {
    flexDirection: 'column',
    width: '100%',
  },
  infoTableRow: {
    flexDirection: 'row',
    alignItems: 'center',
    lineHeight: 1.4,
    height: 40,
  },
  infoTableRowItem: {
    flexGrow: 1,
    padding: '5px 8px',
    height: '100%',
  },
  borderBottomHalf: {
    borderBottom: 0.5,
  },
  borderLeftHalf: {
    borderLeft: 0.5,
  },
  tab: {
    marginLeft: 4,
  },
});

function Index() {
  return (
    <Document>
      <Page size='A4' style={styles.page}>
        <View style={styles.container}>
          <View style={styles.title}>
            <Text>재택근무 중 업무수행 내역서</Text>
          </View>
          <View style={styles.infoTable}>
            <View style={styles.infoTableTitle}>
              <Text>인적사항 등</Text>
            </View>
            <View style={styles.infoTableContent}>
              <View style={[styles.infoTableRow, styles.borderBottomHalf]}>
                <View style={styles.infoTableRowItem}>
                  <Text>성명</Text>
                  <Text style={styles.tab}>홍길동</Text>
                </View>
                <View style={[styles.infoTableRowItem, styles.borderLeftHalf]}>
                  <Text>생년월일</Text>
                  <Text style={styles.tab}>20. 10. 21.</Text>
                </View>
                <View style={[styles.infoTableRowItem, styles.borderLeftHalf]}>
                  <Text>편입일</Text>
                  <Text style={styles.tab}>20. 10. 21.</Text>
                </View>
              </View>
              <View style={styles.infoTableRow}>
                <View style={styles.infoTableRowItem}>
                  <Text>소속</Text>
                  <Text style={styles.tab}>주식회사 왓챠</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}

export default Index;
