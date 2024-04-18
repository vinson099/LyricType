const Genius = require("genius-lyrics");
const Client = new Genius.Client("9YJB6Aq-skpffzxkR4NNEEwpAlJ3pink_rwZ7q03ACWJZPy2dtaxKV6xnCQ4j81M"); // Scrapes if no key is provided

const searches = await Client.songs.search("faded");
console.log(searches)