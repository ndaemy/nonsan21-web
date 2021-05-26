import { Text, View } from '@react-pdf/renderer';
import { styles } from '../styles/OneWeekReportStyle';

function WorkingInfo() {
  return (
    <View style={styles.work}>
      <View style={styles.infoTitle}>
        <Text>재택근무 등</Text>
      </View>
      <View style={[styles.flexColumn, styles.borderLeft2, styles.flexGrow1]}>
        <View style={[styles.flexRow, styles.borderBottom1]}>
          <View style={[styles.flexGrow1]}>
            <Text style={styles.textPadding}>사유</Text>
            <Text style={[styles.textPadding, styles.paddingLeftTap]}>
              코로나19에 따른 전사 재택근무
            </Text>
          </View>
          <View style={[styles.flexGrow1, styles.borderLeft1]}>
            <Text style={styles.textPadding}>연락처</Text>
            <Text style={[styles.textPadding, styles.paddingLeftTap]}>
              010-1234-5678
            </Text>
          </View>
          <View style={[styles.flexGrow1, styles.borderLeft1]}>
            <Text style={styles.textPadding}>재택기간</Text>
            <Text style={[styles.textPadding, styles.paddingLeftTap]}>
              2000. 00. 00. ~ 00. 00.
            </Text>
          </View>
        </View>
        <Text style={styles.textPadding}>근무지 주소</Text>
        <Text style={[styles.textPadding, styles.paddingLeftTap]}>
          서울특별시 서초구 강남대로 343
        </Text>
      </View>
    </View>
  );
}

export default WorkingInfo;
