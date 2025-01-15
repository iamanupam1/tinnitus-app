const admin = require("firebase-admin");
const fs = require("fs");
const csv = require("csv-parser");

// Initialize Firebase Admin SDK
const serviceAccount = require("./tinnitus-auth-firebase-adminsdk-2osv7-03e65738a4.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const auth = admin.auth();

/**
 * Read CSV file and bulk upload users to Firebase Auth
 * @param {string} filePath - Path to the CSV file
 */
async function bulkUploadUsers(filePath) {
  const users = [];

  // Read CSV file and parse users
  fs.createReadStream(filePath)
    .pipe(csv())
    .on("data", (row) => {
      if (row.email && row.password) {
        users.push({
          email: row.email,
          password: row.password,
        });
      }
    })
    .on("end", async () => {
      console.log(`Parsed ${users.length} users. Starting upload...`);
      for (const user of users) {
        try {
          const userRecord = await auth.createUser({
            email: user.email,
            password: user.password,
            disabled: true,
          });
          console.log(`Successfully created user: ${userRecord.email}`);
        } catch (error) {
          console.error(`Failed to create user ${user.email}: ${error.message}`);
        }
      }
      console.log("Bulk upload completed.");
    });
}

// Provide the path to your CSV file here
const filePath = "./user.csv";
bulkUploadUsers(filePath);
