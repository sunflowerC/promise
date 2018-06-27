import tpl from './tpl';
import login from '../login';

export default () => {
  document.getElementById('header').innerHTML = tpl(login());
};
