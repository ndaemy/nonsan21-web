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
    marginTop: 12,
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
  logTable: {
    flexDirection: 'row',
    width: '100%',
    borderTop: 1,
    borderBottom: 1,
    marginTop: 12,
  },
  logTableFirstColumn: {
    flexDirection: 'column',
    flexGrow: 3,
  },
  logTableSecondColumn: {
    flexDirection: 'column',
    flexGrow: 5,
  },
  logTableThirdColumn: {
    flexDirection: 'column',
    flexGrow: 7,
  },
  logTableDayRow: {
    lineHeight: 1.4,
    height: 38,
    paddingTop: 6,
    borderTop: 0.5,
  },
  paddingY8: {
    paddingTop: 8,
    paddingBottom: 8,
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
  marginXAuto: {
    marginLeft: 'auto',
    marginRight: 'auto',
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
          <View style={styles.infoTable}>
            <View style={styles.infoTableTitle}>
              <Text>재택근무 등</Text>
            </View>
            <View style={styles.infoTableContent}>
              <View style={[styles.infoTableRow, styles.borderBottomHalf]}>
                <View style={styles.infoTableRowItem}>
                  <Text>사유</Text>
                  <Text style={styles.tab}>코로나19로 인한 전사 재택근무</Text>
                </View>
                <View style={[styles.infoTableRowItem, styles.borderLeftHalf]}>
                  <Text>연락처</Text>
                  <Text style={styles.tab}>010-1234-5678</Text>
                </View>
                <View style={[styles.infoTableRowItem, styles.borderLeftHalf]}>
                  <Text>재택기간</Text>
                  <Text style={styles.tab}>20. 10. 21. ~ 20. 10. 28.</Text>
                </View>
              </View>
              <View style={styles.infoTableRow}>
                <View style={styles.infoTableRowItem}>
                  <Text>근무지 주소</Text>
                  <Text style={styles.tab}>
                    서울특별시 서초구 강남대로 343 3층 왓챠
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.logTable}>
            <View style={styles.logTableFirstColumn}>
              <View style={styles.paddingY8}>
                <Text style={styles.marginXAuto}>일자</Text>
              </View>
              <View style={styles.logTableDayRow}>
                <Text style={styles.marginXAuto}>1월 1일{`\n`}월요일</Text>
              </View>
              <View style={styles.logTableDayRow}>
                <Text style={styles.marginXAuto}>1월 2일{`\n`}화요일</Text>
              </View>
              <View style={styles.logTableDayRow}>
                <Text style={styles.marginXAuto}>1월 3일{`\n`}수요일</Text>
              </View>
              <View style={styles.logTableDayRow}>
                <Text style={styles.marginXAuto}>1월 4일{`\n`}목요일</Text>
              </View>
              <View style={styles.logTableDayRow}>
                <Text style={styles.marginXAuto}>1월 5일{`\n`}금요일</Text>
              </View>
              <View style={styles.logTableDayRow}>
                <Text style={styles.marginXAuto}>1월 8일{`\n`}월요일</Text>
              </View>
              <View style={styles.logTableDayRow}>
                <Text style={styles.marginXAuto}>1월 9일{`\n`}화요일</Text>
              </View>
              <View style={styles.logTableDayRow}>
                <Text style={styles.marginXAuto}>1월 10일{`\n`}수요일</Text>
              </View>
              <View style={styles.logTableDayRow}>
                <Text style={styles.marginXAuto}>1월 11일{`\n`}목요일</Text>
              </View>
              <View style={styles.logTableDayRow}>
                <Text style={styles.marginXAuto}>1월 12일{`\n`}금요일</Text>
              </View>
            </View>
            <View style={styles.logTableSecondColumn}>
              <View style={styles.paddingY8}>
                <Text style={styles.marginXAuto}>근무 상황</Text>
              </View>
              <View style={styles.logTableDayRow}>
                <Text style={styles.marginXAuto}>
                  시작 시간: 10:00{`\n`}종료 시간: 19:00
                </Text>
              </View>
              <View style={styles.logTableDayRow}>
                <Text style={styles.marginXAuto}>
                  시작 시간: 10:00{`\n`}종료 시간: 19:00
                </Text>
              </View>
              <View style={styles.logTableDayRow}>
                <Text style={styles.marginXAuto}>
                  시작 시간: 10:00{`\n`}종료 시간: 19:00
                </Text>
              </View>
              <View style={styles.logTableDayRow}>
                <Text style={styles.marginXAuto}>
                  시작 시간: 10:00{`\n`}종료 시간: 19:00
                </Text>
              </View>
              <View style={styles.logTableDayRow}>
                <Text style={styles.marginXAuto}>
                  시작 시간: 10:00{`\n`}종료 시간: 19:00
                </Text>
              </View>
              <View style={styles.logTableDayRow}>
                <Text style={styles.marginXAuto}>
                  시작 시간: 10:00{`\n`}종료 시간: 19:00
                </Text>
              </View>
              <View style={styles.logTableDayRow}>
                <Text style={styles.marginXAuto}>
                  시작 시간: 10:00{`\n`}종료 시간: 19:00
                </Text>
              </View>
              <View style={styles.logTableDayRow}>
                <Text style={styles.marginXAuto}>
                  시작 시간: 10:00{`\n`}종료 시간: 19:00
                </Text>
              </View>
              <View style={styles.logTableDayRow}>
                <Text style={styles.marginXAuto}>
                  시작 시간: 10:00{`\n`}종료 시간: 19:00
                </Text>
              </View>
              <View style={styles.logTableDayRow}>
                <Text style={styles.marginXAuto}>
                  시작 시간: 10:00{`\n`}종료 시간: 19:00
                </Text>
              </View>
            </View>
            <View style={styles.logTableThirdColumn}>
              <View style={styles.paddingY8}>
                <Text style={styles.marginXAuto}>수행업무 내용</Text>
              </View>
              <View style={styles.logTableDayRow}>
                <Text style={styles.marginXAuto}>이것 저것</Text>
              </View>
              <View style={styles.logTableDayRow}>
                <Text style={styles.marginXAuto}>이것 저것</Text>
              </View>
              <View style={styles.logTableDayRow}>
                <Text style={styles.marginXAuto}>이것 저것</Text>
              </View>
              <View style={styles.logTableDayRow}>
                <Text style={styles.marginXAuto}>이것 저것</Text>
              </View>
              <View style={styles.logTableDayRow}>
                <Text style={styles.marginXAuto}>이것 저것</Text>
              </View>
              <View style={styles.logTableDayRow}>
                <Text style={styles.marginXAuto}>이것 저것</Text>
              </View>
              <View style={styles.logTableDayRow}>
                <Text style={styles.marginXAuto}>이것 저것</Text>
              </View>
              <View style={styles.logTableDayRow}>
                <Text style={styles.marginXAuto}>이것 저것</Text>
              </View>
              <View style={styles.logTableDayRow}>
                <Text style={styles.marginXAuto}>이것 저것</Text>
              </View>
              <View style={styles.logTableDayRow}>
                <Text style={styles.marginXAuto}>이것 저것</Text>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}

export default Index;
