// vite.config.js
import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';

const pageData = {
    '/index.html': {
        title: 'Starter Project',
    },
};

export default {
    plugins: [
        handlebars({
            context(pagePath) {
                return pageData[pagePath];
            },
            partialDirectory: resolve(__dirname, 'partials'),
        }),
    ],
};