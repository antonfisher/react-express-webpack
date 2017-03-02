import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {green100, green300, lightGreen600, lightGreen500} from 'material-ui/styles/colors';

export default getMuiTheme({
  fontSize: 14,
  palette: {
    primary1Color: lightGreen500,
    primary2Color: green300,
    primary3Color: lightGreen600,
    accent1Color: green300
  },
  toolbar: {
    backgroundColor: lightGreen500
  },
  flatButton: {
    textTransform: 'none',
    fontWeight: 'bold',
    fontSize: 15,
    buttonFilterColor: green100
  },
  button: {
    height: 36
  },
});
