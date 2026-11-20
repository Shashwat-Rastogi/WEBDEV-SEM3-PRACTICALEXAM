const fs=require("fs");
fs.writeFile("student.txt", "Hello, this file has report card for students", (err) => {
  if (err) throw err;
  console.log("File successfully created");
});
fs.readFile("student.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log("Content of file:");
  console.log(data);
});
fs.appendFile("student.txt", " File of CSE 3rd Sem", (err) => {
  if (err) throw err;
  console.log("File updated");
});
fs.unlink("student.txt", (err) => {
  if (err) throw err;
  console.log("File deleted");
});
