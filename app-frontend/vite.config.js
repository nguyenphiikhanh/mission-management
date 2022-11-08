import {createVuePlugin} from "vite-plugin-vue2";
import { fileURLToPath } from 'url';

module.exports = {
  plugins: [createVuePlugin()],
  resolve:{
    alias:{
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    }
  },
};
