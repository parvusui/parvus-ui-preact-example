import { h, render } from 'preact';
import Main from './components/Main';
import { ThemeProvider } from 'parvus-ui';

const theme = {
  backgroundColor: '#fefefe',
  neutralColor: '#f9f9f9',
  primaryColor: '#673ab8',
  secondaryColor: '#6c757d',
  tertiaryColor: '#fefefe',
  successColor: '#3cb371',
  errorColor: '#c9302c',
  warningColor: '#ffa500',
  borderRadius: '.5rem',
  fontColor: '#000000',
  fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif'
};

export default {
  renderApp: () => {
    render(
      <ThemeProvider theme={theme}>
        <Main />
      </ThemeProvider>,
      window.document.getElementById('content')
    );
  }
};
