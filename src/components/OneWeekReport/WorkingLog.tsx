import { Text, View } from '@react-pdf/renderer';
import { styles } from '../styles/OneWeekReportStyle';

function WorkingLog() {
  return (
    <View style={styles.workingLog}>
      <View style={styles.flexRow}>
        <View style={styles.infoTitle}>
          <Text>일자</Text>
        </View>
        <View style={[styles.flexRow, styles.borderLeft2, styles.flexGrow1]}>
          <View style={[styles.halfColumn, styles.alignItemsCenter]}>
            <Text style={styles.textPadding}>근무 상황</Text>
          </View>
          <View
            style={[
              styles.halfColumn,
              styles.alignItemsCenter,
              styles.borderLeft1,
            ]}
          >
            <Text style={styles.textPadding}>업무수행 내용</Text>
          </View>
        </View>
      </View>
      <View style={[styles.flexRow, styles.borderTop1]}>
        <View style={styles.dates}>
          <Text style={styles.textPadding}>1월 2일</Text>
          <Text style={styles.textPadding}>월요일</Text>
        </View>
        <View style={[styles.flexRow, styles.borderLeft2, styles.flexGrow1]}>
          <View style={[styles.halfColumn, styles.alignItemsCenter]}>
            <Text style={styles.textPadding}>시작시간: 10:00</Text>
            <Text style={styles.textPadding}>시작시간: 10:00</Text>
          </View>
          <View
            style={[
              styles.halfColumn,
              styles.alignItemsCenter,
              styles.borderLeft1,
            ]}
          >
            <Text style={styles.textPadding}>무언가를 뚜닥뚜닥</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default WorkingLog;
