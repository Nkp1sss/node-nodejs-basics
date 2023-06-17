import { createReadStream } from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { stdout } from 'process';

const read = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const pathToFile = path.join(__dirname, 'files', 'fileToRead.txt');

    const readableStream = createReadStream(pathToFile, 'utf-8');

    let body = '';
    readableStream.on('data', chunk => body += chunk);
    readableStream.on('end', () => stdout.write(body));
    readableStream.on('error', error => console.log('Error', error.message));
};

await read();
