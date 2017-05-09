import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {green600, teal300, teal500, teal700} from 'material-ui/styles/colors';

export default getMuiTheme({
  fontSize: 14,
  fontFamily: 'Comfortaa',
  palette: {
    primary1Color: teal700,
    primary2Color: teal500,
    primary3Color: teal300,
    accent1Color: green600
  },
  toolbar: {
    backgroundColor: teal700
  },
  flatButton: {
    textTransform: 'none',
    fontWeight: 'bold',
    fontSize: 15,
    buttonFilterColor: green600
  },
  button: {
    height: 36
  }
});
