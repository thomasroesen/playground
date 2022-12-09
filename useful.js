// Shuffle array
const shuffle = (arr) => arr.sort(() => Math.random() - 0.5)
const arr = [1,2,3,4,5,6,7,8,9,10]
console.log(shuffle(arr))

// Copy to clipboard
const copyToClipBoard = (text) => navigator.clipboard?.writeText && 
navigator.clipboard.writeText(text)
copyToClipBoard('copied son')

// Get unique elements
const getUnique = (arr) => [... new Set(arr)]
const array = [1, 1, 2, 3, 3, 4, 4, 4, 5, 5]
console.log(getUnique(array))

// Detect dark mode
const isDarkMode = () =>
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;
console.log(isDarkMode());

// Scroll to top
const scrollToTop = (element) =>
  element.scrollIntoView({ behavior: "smooth", block: "start" });

// Scroll to bottom
const scrollToBottom = (element) =>
  element.scrollIntoView({ behavior: "smooth", block: "end" });


// Generate random color
const generateRandomHexColor = () =>
  `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;
