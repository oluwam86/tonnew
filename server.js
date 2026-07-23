import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(__dirname));

// Main route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// 404 handler
app.use((req, res) => {
    res.status(404).sendFile(__dirname + '/index.html');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
