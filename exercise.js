const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

const publicPath = path.join(__dirname, 'public');


app.get("/public",(req,res) =>{
  res.sendFile(__dirname+`/publicHTML.html`);
})

app.get("/public/folder1",(req,res) =>{
  res.sendFile(__dirname+`/folder1HTML.html`);
})

app.get("/public/folder2",(req,res) =>{
  res.sendFile(__dirname+`/folder2HTML.html`);
})

app.get("/public/folder1/subfolder1",(req,res) =>{
  res.sendFile(__dirname+`/subfolder1HTML.html`);
})

app.get("/public/folder1/subfolder2",(req,res) =>{
  res.sendFile(__dirname+`/subfolder2HTML.html`);
})

app.get("/public/folder1/subfolder2/subfolder3",(req,res) =>{
  res.sendFile(__dirname+`/subfolder3HTML.html`);
})

app.get("/public/folder1/subfolder2/subfolder3/subfolder4",(req,res) =>{
  res.sendFile(__dirname+`/subfolder4HTML.html`);
})

app.get("/public/folder2/subfolder5",(req,res) =>{
  res.sendFile(__dirname+`/subfolder5HTML.html`);
})


// ------------------ DOC PDF CSV PPT -------------------------------------------------------------------------------------------

app.get("/public/app.js",(req,res) =>{
  res.sendFile(__dirname+`/public/app.js`);
})

app.get("/public/index.html",(req,res) =>{
  res.sendFile(__dirname+`/public/index.html`);
})

app.get("/public/presentation.pptx",(req,res) =>{
  res.sendFile(__dirname+`/public/presentation.pptx`);
})

app.get("/public/public.zip",(req,res) =>{
  res.sendFile(__dirname+`/public/public.zip`);
})

app.get("/public/readme.txt",(req,res) =>{
  res.sendFile(__dirname+`/public/readme.txt`);
})

app.get("/public/student.csv",(req,res) =>{
  res.sendFile(__dirname+`/public/student.csv`);
})

app.get("/public/folder1/doc.pdf",(req,res) =>{
  res.sendFile(__dirname+`/public/folder1/doc.pdf`);
})

app.get("/public/folder1/subfolder1/doc1.pdf",(req,res) =>{
  res.sendFile(__dirname+`/public/folder1/subfolder1/doc1.pdf`);
})

app.get("/public/folder1/subfolder2/doc2.pdf",(req,res) =>{
  res.sendFile(__dirname+`/public/folder1/subfolder2/doc2.pdf`);
})

app.get("/public/folder1/subfolder2/index2.html",(req,res) =>{
  res.sendFile(__dirname+`/public/folder1/subfolder2/index2.html`);
})

app.get("/public/folder1/subfolder2/readme2.txt",(req,res) =>{
  res.sendFile(__dirname+`/public/folder1/subfolder2/readme2.txt`);
})

app.get("/public/folder1/subfolder2/subfolder3/doc3.pdf",(req,res) =>{
  res.sendFile(__dirname+`/public/folder1/subfolder2/subfolder3/doc3.pdf`);
})

app.get("/public/folder1/subfolder2/subfolder3/index3.html",(req,res) =>{
  res.sendFile(__dirname+`/public/folder1/subfolder2/subfolder3/index3.html`);
})

app.get("/public/folder1/subfolder2/subfolder3/readme3.txt",(req,res) =>{
  res.sendFile(__dirname+`/public/folder1/subfolder2/subfolder3/readme3.txt`);
})

app.get("/public/folder1/subfolder2/subfolder3/subfolder4/doc4.pdf",(req,res) =>{
  res.sendFile(__dirname+`/public/folder1/subfolder2/subfolder3/subfolder4/doc4.pdf`);
})

app.get("/public/folder1/subfolder2/subfolder3/subfolder4/index4.html",(req,res) =>{
  res.sendFile(__dirname+`/public/folder1/subfolder2/subfolder3/subfolder4/index4.html`);
})

app.get("/public/folder1/subfolder2/subfolder3/subfolder4/readme4.txt",(req,res) =>{
  res.sendFile(__dirname+`/public/folder1/subfolder2/subfolder3/subfolder4/readme4.txt`);
})

app.get("/public/folder2/subfolder5/app.js",(req,res) =>{
  res.sendFile(__dirname+`/public/folder2/subfolder5/app.js`);
})

app.get("/public/folder2/subfolder5/student.csv",(req,res) =>{
  res.sendFile(__dirname+`/public/folder2/subfolder5/student.csv`);
})

// ------------------------ IMAGES --------------------------------------------------------------------------------------

app.get("/public/folder",(req,res) =>{
  res.sendFile(__dirname+`/folder.png`);
})

app.get("/public/html",(req,res) =>{
  res.sendFile(__dirname+`/html.png`);
})

app.get("/public/javascript",(req,res) =>{
  res.sendFile(__dirname+`/javascript.png`);
})

app.get("/public/pdf",(req,res) =>{
  res.sendFile(__dirname+`/pdf.png`);
})

app.get("/public/pptx",(req,res) =>{
  res.sendFile(__dirname+`/pptx.png`);
})

app.get("/public/txt",(req,res) =>{
  res.sendFile(__dirname+`/txt.png`);
})

app.get("/public/csv",(req,res) =>{
  res.sendFile(__dirname+`/csv.png`);
})

app.get("/public/zipfolder",(req,res) =>{
  res.sendFile(__dirname+`/zip-folder.png`);
})


// ------------------------ APP 8080 ----------------------------------------------------------------------

app.listen('8080', () => {
  console.log('running');
});

