// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
//
// domainName("http://github.com/carbonfive/raygun") == "github"
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"

function domainName(url) {
let strArr = url.split(/\.|\//)

if (strArr.includes("www")) {
  return strArr[strArr.indexOf("www") + 1]
} else if (strArr.filter(elem => elem === "").length > 1) {
  return strArr[strArr.indexOf("") + 1]
} else if (strArr[strArr.length - 1] === "") {
  return strArr[0]
}
}
