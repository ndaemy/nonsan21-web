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
    margin: '54px 42px 0',
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
  footer: {
    flexDirection: 'column',
    alignItems: 'center',
    lineHeight: 1.6,
    marginTop: 12,
    width: '100%',
  },
  comment: {
    width: '100%',
  },
  signBlock: {
    marginTop: 12,
    lineHeight: 2.8,
    width: 180,
  },
  signRow: {
    flexDirection: 'row',
  },
  alignCenter: {
    alignSelf: 'center',
  },
  alignRight: {
    alignSelf: 'flex-end',
  },
  marginLeftAuto: {
    marginLeft: 'auto',
  },
});

interface TwoWeekReportProps {
  name: string;
  birthday: string;
  joinDate: string;
  company: string;
  cellPhone: string;
  startAt: string;
  endAt: string;
  address: string;
  createDate: string;
}

function TwoWeekReport({
  name,
  birthday,
  joinDate,
  company,
  cellPhone,
  startAt,
  endAt,
  address,
  createDate,
}: TwoWeekReportProps) {
  return (
    <Document>
      <Page size='A4' style={styles.page}>
        <View style={styles.container}>
          <View style={styles.title}>
            <Text>???????????? ??? ???????????? ?????????</Text>
          </View>
          <View style={styles.infoTable}>
            <View style={styles.infoTableTitle}>
              <Text>???????????? ???</Text>
            </View>
            <View style={styles.infoTableContent}>
              <View style={[styles.infoTableRow, styles.borderBottomHalf]}>
                <View style={styles.infoTableRowItem}>
                  <Text>??????</Text>
                  <Text style={styles.tab}>{name}</Text>
                </View>
                <View style={[styles.infoTableRowItem, styles.borderLeftHalf]}>
                  <Text>????????????</Text>
                  <Text style={styles.tab}>{birthday}</Text>
                </View>
                <View style={[styles.infoTableRowItem, styles.borderLeftHalf]}>
                  <Text>?????????</Text>
                  <Text style={styles.tab}>{joinDate}</Text>
                </View>
              </View>
              <View style={styles.infoTableRow}>
                <View style={styles.infoTableRowItem}>
                  <Text>??????</Text>
                  <Text style={styles.tab}>{company}</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.infoTable}>
            <View style={styles.infoTableTitle}>
              <Text>???????????? ???</Text>
            </View>
            <View style={styles.infoTableContent}>
              <View style={[styles.infoTableRow, styles.borderBottomHalf]}>
                <View style={styles.infoTableRowItem}>
                  <Text>??????</Text>
                  <Text style={styles.tab}>?????????19??? ?????? ?????? ????????????</Text>
                </View>
                <View style={[styles.infoTableRowItem, styles.borderLeftHalf]}>
                  <Text>?????????</Text>
                  <Text style={styles.tab}>{cellPhone}</Text>
                </View>
                <View style={[styles.infoTableRowItem, styles.borderLeftHalf]}>
                  <Text>????????????</Text>
                  <Text style={styles.tab}>
                    {startAt} ~ {endAt}
                  </Text>
                </View>
              </View>
              <View style={styles.infoTableRow}>
                <View style={styles.infoTableRowItem}>
                  <Text>????????? ??????</Text>
                  <Text style={styles.tab}>{address}</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.logTable}>
            <View style={styles.logTableFirstColumn}>
              <View style={styles.paddingY8}>
                <Text style={styles.marginXAuto}>??????</Text>
              </View>
              <View style={styles.logTableDayRow}>
                <Text style={styles.marginXAuto}>1??? 1???{`\n`}?????????</Text>
              </View>
              <View style={styles.logTableDayRow}>
                <Text style={styles.marginXAuto}>1??? 2???{`\n`}?????????</Text>
              </View>
              <View style={styles.logTableDayRow}>
                <Text style={styles.marginXAuto}>1??? 3???{`\n`}?????????</Text>
              </View>
              <View style={styles.logTableDayRow}>
                <Text style={styles.marginXAuto}>1??? 4???{`\n`}?????????</Text>
              </View>
              <View style={styles.logTableDayRow}>
                <Text style={styles.marginXAuto}>1??? 5???{`\n`}?????????</Text>
              </View>
              <View style={styles.logTableDayRow}>
                <Text style={styles.marginXAuto}>1??? 8???{`\n`}?????????</Text>
              </View>
              <View style={styles.logTableDayRow}>
                <Text style={styles.marginXAuto}>1??? 9???{`\n`}?????????</Text>
              </View>
              <View style={styles.logTableDayRow}>
                <Text style={styles.marginXAuto}>1??? 10???{`\n`}?????????</Text>
              </View>
              <View style={styles.logTableDayRow}>
                <Text style={styles.marginXAuto}>1??? 11???{`\n`}?????????</Text>
              </View>
              <View style={styles.logTableDayRow}>
                <Text style={styles.marginXAuto}>1??? 12???{`\n`}?????????</Text>
              </View>
            </View>
            <View style={styles.logTableSecondColumn}>
              <View style={styles.paddingY8}>
                <Text style={styles.marginXAuto}>?????? ??????</Text>
              </View>
              <View style={styles.logTableDayRow}>
                <Text style={styles.marginXAuto}>
                  ?????? ??????: 10:00{`\n`}?????? ??????: 19:00
                </Text>
              </View>
              <View style={styles.logTableDayRow}>
                <Text style={styles.marginXAuto}>
                  ?????? ??????: 10:00{`\n`}?????? ??????: 19:00
                </Text>
              </View>
              <View style={styles.logTableDayRow}>
                <Text style={styles.marginXAuto}>
                  ?????? ??????: 10:00{`\n`}?????? ??????: 19:00
                </Text>
              </View>
              <View style={styles.logTableDayRow}>
                <Text style={styles.marginXAuto}>
                  ?????? ??????: 10:00{`\n`}?????? ??????: 19:00
                </Text>
              </View>
              <View style={styles.logTableDayRow}>
                <Text style={styles.marginXAuto}>
                  ?????? ??????: 10:00{`\n`}?????? ??????: 19:00
                </Text>
              </View>
              <View style={styles.logTableDayRow}>
                <Text style={styles.marginXAuto}>
                  ?????? ??????: 10:00{`\n`}?????? ??????: 19:00
                </Text>
              </View>
              <View style={styles.logTableDayRow}>
                <Text style={styles.marginXAuto}>
                  ?????? ??????: 10:00{`\n`}?????? ??????: 19:00
                </Text>
              </View>
              <View style={styles.logTableDayRow}>
                <Text style={styles.marginXAuto}>
                  ?????? ??????: 10:00{`\n`}?????? ??????: 19:00
                </Text>
              </View>
              <View style={styles.logTableDayRow}>
                <Text style={styles.marginXAuto}>
                  ?????? ??????: 10:00{`\n`}?????? ??????: 19:00
                </Text>
              </View>
              <View style={styles.logTableDayRow}>
                <Text style={styles.marginXAuto}>
                  ?????? ??????: 10:00{`\n`}?????? ??????: 19:00
                </Text>
              </View>
            </View>
            <View style={styles.logTableThirdColumn}>
              <View style={styles.paddingY8}>
                <Text style={styles.marginXAuto}>???????????? ??????</Text>
              </View>
              <View style={styles.logTableDayRow}>
                <Text style={styles.marginXAuto}>?????? ??????</Text>
              </View>
              <View style={styles.logTableDayRow}>
                <Text style={styles.marginXAuto}>?????? ??????</Text>
              </View>
              <View style={styles.logTableDayRow}>
                <Text style={styles.marginXAuto}>?????? ??????</Text>
              </View>
              <View style={styles.logTableDayRow}>
                <Text style={styles.marginXAuto}>?????? ??????</Text>
              </View>
              <View style={styles.logTableDayRow}>
                <Text style={styles.marginXAuto}>?????? ??????</Text>
              </View>
              <View style={styles.logTableDayRow}>
                <Text style={styles.marginXAuto}>?????? ??????</Text>
              </View>
              <View style={styles.logTableDayRow}>
                <Text style={styles.marginXAuto}>?????? ??????</Text>
              </View>
              <View style={styles.logTableDayRow}>
                <Text style={styles.marginXAuto}>?????? ??????</Text>
              </View>
              <View style={styles.logTableDayRow}>
                <Text style={styles.marginXAuto}>?????? ??????</Text>
              </View>
              <View style={styles.logTableDayRow}>
                <Text style={styles.marginXAuto}>?????? ??????</Text>
              </View>
            </View>
          </View>
          <View style={styles.footer}>
            <View style={styles.comment}>
              <Text style={styles.alignCenter}>
                ?????? ?????? ?????????????????? ??? ?????????????????? ???????????????.
              </Text>
              <Text style={styles.alignRight}>{createDate}</Text>
            </View>
            <View style={styles.signBlock}>
              <View style={styles.signRow}>
                <Text>?????????</Text>
                <Text style={styles.marginLeftAuto}>{name}</Text>
                <Text style={styles.marginLeftAuto}>??????</Text>
              </View>
              <View style={styles.signRow}>
                <Text>?????????</Text>
                <Text style={styles.marginLeftAuto}>???????????? ?????????</Text>
                <Text style={styles.marginLeftAuto}>??????</Text>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}

export default TwoWeekReport;
