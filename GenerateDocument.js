function generateDocument(characters, document) {
  let characterHash = {} // {B : 1,s : 1,t : 1....}
  let documentHash = {} // {A : 1,l : 1,g : 1....}

  for (let i = 0; i < characters.length; i++) {
    if (characterHash[characters[i]]) { //s
      characterHash[characters[i]]++;
    } else {
      characterHash[characters[i]] = 1;
    }
  }

  for (let i = 0; i < document.length; i++) {
    if (documentHash[document[i]]) { //A
      documentHash[document[i]]++;
    } else {
      documentHash[document[i]] = 1;
    }
  }

  for (key in documentHash) {
    if (!characterHash[key] || documentHash[key] > characterHash[key]) { //1
      return false;
    }
  }

  return true;
}

// next time try without documentHash
