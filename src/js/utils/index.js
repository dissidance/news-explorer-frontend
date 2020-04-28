import {
  preloader, errorTitle,
  errorDescription,
} from '../constants';

const togglePreloader = () => {
  preloader.classList.toggle('preloader_is-opened');
};

const openErrorBlock = (node, titleMessage, descriptionMessage) => {
  node.classList.add('not-found_is-opened');
  errorTitle.textContent = titleMessage;
  errorDescription.textContent = descriptionMessage;
};

const getUserData = () => localStorage.getItem('userData');

// eslint-disable-next-line import/prefer-default-export
export { togglePreloader, openErrorBlock, getUserData };
