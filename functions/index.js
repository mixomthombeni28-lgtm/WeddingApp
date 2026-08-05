const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();
const db = admin.firestore();

exports.validateInvite = functions.https.onCall(async (data) => {
  const { token } = data;

  const snap = await db.collection("guests")
    .where("token", "==", token).get();

  if (snap.empty) throw new Error("Invalid");

  const guest = snap.docs[0].data();

  if (guest.used) throw new Error("Already used");
  if (guest.expiresAt.toDate() < new Date()) throw new Error("Expired");

  return guest;
});

exports.submitRSVP = functions.https.onCall(async (data) => {
  const { token, attending } = data;

  const snap = await db.collection("guests")
    .where("token", "==", token).get();

  const doc = snap.docs[0];

  await doc.ref.update({
    rsvp: attending,
    used: true
  });

  return { success: true };
});