import {
  preloader, errorTitle,
  errorDescription,
} from '../constants';

const togglePreloader = (value) => (value === true ? preloader.classList.add('preloader_is-opened') : preloader.classList.remove('preloader_is-opened'));


const openErrorBlock = (node, titleMessage, descriptionMessage) => {
  node.classList.add('not-found_is-opened');
  errorTitle.textContent = titleMessage;
  errorDescription.textContent = descriptionMessage;
};

const getUserData = () => localStorage.getItem('userData');

// eslint-disable-next-line import/prefer-default-export
export { togglePreloader, openErrorBlock, getUserData };
