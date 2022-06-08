import {
  getFirestore,
  collection,
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";
import { db } from "../firebase/firebase";

/**
 * Assigns data to some state based on the stateFunction
 * @param {string} queryDocument the document to get data from
 * @param {function} stateFunction the setter function to use
 * @param {boolean} toSplit indicates whether the split the data into upcoming/recent or not
 */
async function getData(
  queryDocument,
  stateFunction,
  setters = {},
  toSplit = false
) {
  const docRef = doc(db, "acm-data", queryDocument);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    if (toSplit) {
      stateFunction(docSnap.data(), setters);
    } else {
      stateFunction(docSnap.data());
    }
  } else {
    console.log("No Data exists");
  }
}

async function updateEvents(events) {
  const docRef = doc(db, "acm-data", "test-events");
  console.log(docRef);
  console.log(events);
  try {
    await setDoc(docRef, events);
  } catch (e) {
    console.log(e);
  }
}

export { getData, updateEvents };
