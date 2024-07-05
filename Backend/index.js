const express = require('express');

const app = express();
const PORT = process.env.PORT || 6000;

// ========== BodyParser
app.use(express.json());

app.post('/api/signup', (req, res) => {
    // console.log(res.send("User Signup"));
    console.log("User data ======> ", req.body);
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})