import * as admin from "Firebase-admin";
admin.initializeApp();

import * as functions from "firebase-functions";

// // Start writing functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest(async(request, response) => {
    functions.logger.info("Hello logs!", { structuredData: true });
    admin.firestore().collection('test').add({testMessage:"some messages"});
    response.send("Hello from Firebase!");
});
