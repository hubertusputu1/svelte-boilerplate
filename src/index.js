import App from './Containers/App/index.svelte';
import './Assets/styles/global.scss';

const app = new App({
    target: document.body
});

window.app = app;

export default app;