import { readdir } from 'fs';

readdir('.', (err, files) => {
    if (err) {
        console.error('error:', err);
        return;
    }

    console.log('files in cataloge');
    files.forEach(file => {
        console.log(file);
    });
});

