import { Text, View } from '@react-pdf/renderer';
import { styles } from '../styles/OneWeekReportStyle';

function PersonalInfo() {
  return (
    <View style={styles.info}>
      <View style={styles.infoTitle}>
        <Text>인적사항 등</Text>
      </View>
      <View style={[styles.flexColumn, styles.borderLeft2, styles.flexGrow1]}>
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
  );
}

export default PersonalInfo;
