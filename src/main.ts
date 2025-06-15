import { mount } from 'svelte'
import App from './App.svelte'

const appContainer = document.getElementById('app');

if(appContainer) {
  // appContainer.style.height = '';
}

const app = mount(App, {
  target: appContainer!,
})

export default app
