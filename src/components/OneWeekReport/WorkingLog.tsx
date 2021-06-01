import { Text, View } from '@react-pdf/renderer';
import { styles } from '../styles/OneWeekReportStyle';

function WorkingLog() {
  return (
    <View style={styles.workingLog}>
      <View style={styles.infoTitle}>
        <Text>일자</Text>
      </View>
      <View style={[styles.flexRow, styles.borderLeft2, styles.flexGrow1]}>
        <View style={[styles.flexGrow1, styles.alignItemsCenter]}>
          <Text style={styles.textPadding}>근무 상황</Text>
        </View>
        <View
          style={[
            styles.flexGrow1,
            styles.alignItemsCenter,
            styles.borderLeft1,
          ]}
        >
          <Text style={styles.textPadding}>업무수행 내용</Text>
        </View>
      </View>
    </View>
  );
}

export default WorkingLog;
