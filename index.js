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

function printData(data) {
  document.write("<h1>Result</h1>")
  const notes = data.children[0].children;
  for (let i = 0; i < notes.length; i++) {
    const note = notes[i];
    const items = note.children;
    document.write("+ " + note.nodeName + " " + note.getAttribute("name"));
    document.write("<br>");
    for (let j = 0; j < items.length; j++) {
      let item = items[j];
      document.write("- " + item.nodeName + ": " + item.innerHTML);
      document.write("<br>");
    }
    document.write("<br>");
  }
}
