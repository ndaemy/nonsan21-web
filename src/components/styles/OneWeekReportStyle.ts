import { StyleSheet } from '@react-pdf/renderer';

export const styles = StyleSheet.create({
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
  personalInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: '8mm 25mm 0 25mm',
    borderTop: '0.2mm solid black',
    borderBottom: '0.2mm solid black',
  },
  workingInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: '2mm 25mm 0 25mm',
    borderTop: '0.2mm solid black',
    borderBottom: '0.2mm solid black',
  },
  workingLog: {
    flexDirection: 'column',
    justifyContent: 'center',
    margin: '2mm 25mm 0 25mm',
    borderTop: '0.2mm solid black',
    borderBottom: '0.2mm solid black',
  },
  infoTitle: {
    padding: '1mm 2mm',
    width: '22mm',
    textAlign: 'center',
  },
  halfColumn: {
    width: '69mm',
  },
  dates: {
    width: '22mm',
    textAlign: 'center',
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
  },
  flexGrow1: {
    flexGrow: 1,
  },
  alignItemsCenter: {
    alignItems: 'center',
  },
  textRight: {
    textAlign: 'right',
  },
  textPadding: {
    padding: '1mm 2mm',
  },
  paddingLeftTap: {
    paddingLeft: '6mm',
  },
  borderTop1: {
    borderTop: '0.1mm solid black',
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
