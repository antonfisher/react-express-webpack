import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {green100, green300, lightGreen900, lightGreen800} from 'material-ui/styles/colors';

export default getMuiTheme({
  fontSize: 14,
  palette: {
    primary1Color: lightGreen800,
    primary2Color: green300,
    primary3Color: lightGreen900,
    accent1Color: green300
  },
  toolbar: {
    backgroundColor: lightGreen800
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
