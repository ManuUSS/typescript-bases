"use strict";
(() => {
    //* Enums
    // Se define con la palabra reservada enum
    // también es bueno utilizar UpperCamelCase
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel["min"] = "Min";
        AudioLevel["medium"] = "Med";
        AudioLevel["max"] = "Max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio = AudioLevel.medium;
    console.log({ currentAudio });
})();
//# sourceMappingURL=enums.js.map