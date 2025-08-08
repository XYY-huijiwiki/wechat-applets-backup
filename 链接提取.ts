import fs from "fs";

// Read the text file
const wxssPath = "./1.json";
const wxssContent = fs.readFileSync(wxssPath, "utf-8");

// Regex to match http and https URLs
const urlRegex = /https?:\/\/[^\s'"]+/g;
const urls = wxssContent.match(urlRegex) || [];

// Join URLs with \n
const output = urls.join("\n");

// Save to 下载列表.txt
fs.writeFileSync("下载列表.txt", output, "utf-8");
