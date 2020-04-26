import { preloader } from '../constants';

const togglePreloader = () => {
  preloader.classList.toggle('preloader_is-opened');
};

// eslint-disable-next-line import/prefer-default-export
export { togglePreloader };
