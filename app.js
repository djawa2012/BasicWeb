function User (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.printName = function pName () {
        console.log(this.firstName, this.lastName);
    }
}

var john = new User("John", "Doe");
var smith = new User("Walter", "Smith");

john.printName();
smith.printName();

// prototype.
User.prototype.printLNameFirst = function pName () {
    console.log(this.lastName+",", this.firstName);
}

john.printLNameFirst();
smith.printLNameFirst();

User.prototype.age = 0;

john.age = 10;
smith.age = 11;

User.prototype.showAge = function () {
    console.log(this.firstName, this.lastName, "is", this.age, "years old");
}

john.showAge();
smith.showAge();

console.log("*********", "Modules", "**********");
var movies = require("./movies");

movies.avatar();
movies.chappie();

console.log("*********", "Modules II", "**********");
var favs = require("./Favs");

favs.printFavFood();
favs.printFavColor();

console.log("*********", "Modules III Shared Module", "**********", "All variables are shared by default");
require("./ford");
require("./toyota");

console.log("*********", "Modules IV Non-Shared Module", "**********", "Variables ar'nt shared by default");
require("./emily");
require("./buky");

console.log("*********", "Modules V Core Modules", "**********");
var fs = require("fs"); //file system
fs.writeFileSync("report.log", "data report");
console.log("Reading file to console RAW", fs.readFileSync("report.log") );
console.log("Reading file to console", fs.readFileSync("report.log").toString() );

var path = require("path");
var reportFile = "~/workspaceBasic/BasicWeb/report.log";

console.log( path.normalize(reportFile) );
console.log(path.basename(reportFile));
console.log(path.dirname(reportFile));
console.log(path.extname(reportFile));

console.log(__dirname);
console.log(__filename);