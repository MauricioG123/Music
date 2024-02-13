var musicValue;
var noteEnharmonic;
const musicMajorScale = [];
const musicMinorScale = [];
const musicMajorTriad = [];
const musicMinorTriad = [];
const musicAugmentedTriad = [];
const musicDiminishedTriad = [];
const progArray = [];
const musicNotes = ["Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G"];
const musicEnharmonics = ["A#", "Bb", "C#", "Db", "D#", "Eb", "F#", "Gb", "G#", "Ab"];
var progDict = {
    "I" : 0,
    "i" : 0,
    "I+" : 0,
    "i-" : 0,
    "II" : 1,
    "ii" : 1,
    "II+" : 1,
    "ii-" : 1,
    "III" : 2,
    "iii" : 2,
    "III+" : 2,
    "iii-" : 2,
    "IV" : 3,
    "iv" : 3,
    "IV+" : 3,
    "iv-" : 3,
    "V" : 4,
    "v" : 4,
    "V+" : 4,
    "v-" : 4,
    "VI" : 5,
    "vi" : 5,
    "VI+" : 5,
    "vi-" : 5,
    "VII" : 6,
    "vii" : 6,
    "VII+" : 6,
    "vii-" : 6,
};

var musicValue = prompt("Pick a Note");
let progression = prompt("Pick Progression");
const strProgArray = progression.split(" ");
if (!musicNotes.includes(musicValue)) {
    
    enharmonicTranslation();

} 

createMajorScale(musicValue);
createMinorScale(musicValue);
convertProgression();

function enharmonicTranslation() {

   noteEnharmonic = musicEnharmonics.indexOf(musicValue);

   noteEnharmonic = noteEnharmonic + 1;

   musicValue = musicEnharmonics[noteEnharmonic];

}

function createMajorScale(musicNote) {

    var notes = musicNotes.indexOf(musicNote);

    musicMajorScale.push(musicNotes[notes]);
    musicMajorScale.push(musicNotes[notes + 2]);
    musicMajorScale.push(musicNotes[notes + 4]);
    musicMajorScale.push(musicNotes[notes + 5]);
    musicMajorScale.push(musicNotes[notes + 7]);
    musicMajorScale.push(musicNotes[notes + 9]);
    musicMajorScale.push(musicNotes[notes + 11]);
    musicMajorScale.push(musicNotes[notes + 12]);

    console.log(musicMajorScale);

}

function createMinorScale(musicNote) {

    var notes = musicNotes.indexOf(musicNote);

    musicMinorScale.push(musicNotes[notes]);
    musicMinorScale.push(musicNotes[notes + 2]);
    musicMinorScale.push(musicNotes[notes + 3]);
    musicMinorScale.push(musicNotes[notes + 5]);
    musicMinorScale.push(musicNotes[notes + 7]);
    musicMinorScale.push(musicNotes[notes + 8]);
    musicMinorScale.push(musicNotes[notes + 10]);
    musicMinorScale.push(musicNotes[notes + 12]);

    console.log(musicMinorScale);

}

function createMajorTriads(x) {

    var majorValue = x
    var triadValue = musicMajorScale[majorValue];
    var startingPoint = musicNotes.indexOf(triadValue)

    musicMajorTriad.push(musicNotes[startingPoint]);
    musicMajorTriad.push(musicNotes[startingPoint + 4]);
    musicMajorTriad.push(musicNotes[startingPoint + 7]);

}

function createMinorTriads(x) {

    var majorValue = x
    var triadValue = musicMajorScale[majorValue];
    var startingPoint = musicNotes.indexOf(triadValue)

    musicMinorTriad.push(musicNotes[startingPoint]);
    musicMinorTriad.push(musicNotes[startingPoint + 3]);
    musicMinorTriad.push(musicNotes[startingPoint + 7]);

}

function createAugmentedTriads(x) {

    var majorValue = x
    var triadValue = musicMajorScale[majorValue];
    var startingPoint = musicNotes.indexOf(triadValue)

    musicAugmentedTriad.push(musicNotes[startingPoint]);
    musicAugmentedTriad.push(musicNotes[startingPoint + 4]);
    musicAugmentedTriad.push(musicNotes[startingPoint + 8]);

}

function createDiminishedTriads(x) {

    var majorValue = x
    var triadValue = musicMajorScale[majorValue];
    var startingPoint = musicNotes.indexOf(triadValue)

    musicDiminishedTriad.push(musicNotes[startingPoint]);
    musicDiminishedTriad.push(musicNotes[startingPoint + 3]);
    musicDiminishedTriad.push(musicNotes[startingPoint + 6]);

}

function convertProgression() {
    
    for (let i = 0; i < strProgArray.length; i++ ) {

    if (strProgArray[i] == "I" || strProgArray[i] == "II" || strProgArray[i] == "III" || strProgArray[i] == "IV" || strProgArray[i] == "V" || strProgArray[i] == "VI" || strProgArray[i] == "VII") {
        
        progArray[i] = progDict[strProgArray[i]];

        createMajorTriads(progArray[i]);

        console.log(musicMajorTriad);

        musicMajorTriad.length = 0;

    }
    
    if (strProgArray[i] == "i" || strProgArray[i] == "ii" || strProgArray[i] == "iii" || strProgArray[i] == "iv" || strProgArray[i] == "v" || strProgArray[i] == "vi" || strProgArray[i] == "vii") {
        
        progArray[i] = progDict[strProgArray[i]];

        createMinorTriads(progArray[i]);

        console.log(musicMinorTriad);

        musicMinorTriad.length = 0;

    }

    if (strProgArray[i] == "I+" || strProgArray[i] == "II+" || strProgArray[i] == "III+" || strProgArray[i] == "IV+" || strProgArray[i] == "V+" || strProgArray[i] == "VI+" || strProgArray[i] == "VII+") {
        
        progArray[i] = progDict[strProgArray[i]];

        createAugmentedTriads(progArray[i]);

        console.log(musicAugmentedTriad);

        musicAugmentedTriad.length = 0;

    }

    if (strProgArray[i] == "i-" || strProgArray[i] == "ii-" || strProgArray[i] == "iii-" || strProgArray[i] == "iv-" || strProgArray[i] == "v-" || strProgArray[i] == "vi-" || strProgArray[i] == "vii-") {
        
        progArray[i] = progDict[strProgArray[i]];

        createDiminishedTriads(progArray[i]);

        console.log(musicDiminishedTriad);

        musicDiminishedTriad.length = 0;

    }
    

}
}
