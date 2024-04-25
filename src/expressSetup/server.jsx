const express = require('express');
const bodyParser = require('body-parser');
const admin = require('firebase-admin');

const app = express();
const PORT = process.env.PORT || 5000;

// Initialize Firebase Admin SDK
const serviceAccount = require('./path/to/serviceAccountKey.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();

// Middleware to parse JSON body
app.use(bodyParser.json());

// POST endpoint to handle form submission
app.post('/submit-form', async (req, res) => {
  try {
    const formData = req.body;

    // Perform any necessary validation here

    // Store the form data in Firebase Realtime Database
    await db.collection('formData').add(formData);

    res.status(200).send('Form data submitted successfully');
  } catch (error) {
    console.error('Error submitting form data:', error);
    res.status(500).send('Internal server error');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
