const express = require('express');
const app = express();
const cors = require('cors');

const certifications = require('./data/certifications.js');
const blogsData = require('./data/blogsData.js');
const projectsData = require('./data/projectsData.js');

const port = process.env.PORT || 5000;

const corsOptions = {
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json()); // but it's only needed if your API receives JSON in POST/PUT requests.

// Base route
// app.get('/', (req, res) => {
//     res.send('My Portfolio API is running');
// });
app.get('/', (req, res) => {
    res.send(`
        <h1>My Portfolio API is running</h1>
        <p>Available Endpoints:</p>
        <ul>
            <li><a href="/certifications">/certifications</a></li>
            <li><a href="/projects">/projects</a></li>
            <li><a href="/blogs">/blogs</a></li>
        </ul>
    `);
});

// Certifications route
app.get('/certifications', (req, res) => {
    res.json(certifications);
});

// Projects route
app.get('/projects', (req, res) => {
    res.json(projectsData);
});

// Blogs route
app.get('/blogs', (req, res) => {
    res.json(blogsData);
});

app.listen(port, () => {
    console.log(`Chef API is running on port: ${port}`);
})