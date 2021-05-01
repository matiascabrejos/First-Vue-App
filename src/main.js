import { createApp } from 'vue';

import App from './App.vue';

import CharacterDetails from './components/CharacterDetails.vue';

const app = createApp(App);

app.component('character-details', CharacterDetails);

app.mount('#app');

