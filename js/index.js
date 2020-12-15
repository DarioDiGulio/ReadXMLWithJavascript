var xhr = new XMLHttpRequest();
xhr.open("GET", "data/data.xml");

// If specified, responseType must be empty string or "document"
xhr.responseType = "";

// Force the response to be parsed as XML
xhr.overrideMimeType("text/xml");

xhr.onload = function () {
  if (xhr.readyState === xhr.DONE && xhr.status === 200) {
    printData(xhr.responseXML);
  }
};

xhr.send();

function filterChilds(childes) {
  let newChilds = [];
  for (let i = 0; i < childes.length; i++) {
    if (i % 2 !== 0) {
      newChilds.push(childes[i]);
    }
  }
  return newChilds;
}

function printData(data) {
  console.log("Result");
  const notes = filterChilds(data.childNodes[0].childNodes);
  for (let i = 0; i < notes.length; i++) {
    const note = notes[i];
    const items = filterChilds(note.childNodes);
    console.log("+ " + note.localName + " " + note.getAttribute("name"));
    for (let j = 0; j < items.length; j++) {
      let item = items[j];
      console.log("- " + item.localName + ": " + item.textContent);
    }
  }
}
