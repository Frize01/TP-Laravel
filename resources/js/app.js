import './bootstrap';
import EditorJS from '@editorjs/editorjs';


import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();

const editor = new EditorJS({
    holder: 'editorjs',
    tools: {
        header: {
            class: require('@editorjs/header'),
            inlineToolbar: true,
        },
        list: {
            class: require('@editorjs/list'),
            inlineToolbar: true,
        },
        paragraph: {
            class: require('@editorjs/paragraph'),
            inlineToolbar: true,
        },
    }
});
