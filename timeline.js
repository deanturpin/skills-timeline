#!/usr/bin/node

"use strict"

// The year today
const pres = parseInt(new Date().getFullYear())

var skills = [

	// Education
	["School",		1980, 1992],
	["6th form",	1992, 1994],
	["University",	1994, 1998],

	// Skills
	["C++",			1999, pres],
	["Embedded",	1998, pres],
	["SC",			1998, pres],
	["Vim",			1998, pres],
	["VxWorks",		1998, 2009],
	["Unix",		1998, 2009],
	["Networking",	2003, pres],
	["Regex",		2007, pres],
	["Bash",		2009, pres],
	["Linux	",		2009, pres],
	["Subversion",	2012, pres],
	["VMware",		2012, pres],
	["STL",			2013, pres],
	["C++11/14",	2015, pres],
	["Agile",		2015, pres],
	["Clang",		2015, pres],
	["Iwyu",		2015, pres],
	["JavaScript",	2016, pres],
	["Git",			2015, pres],
	["Lua",			2016, pres],
	["Haskell",		2016, pres],
]

// Create range variable and initialise to out of range
var range = function() {

	this.min,
	this.max
}

range.min = 3000
range.max = 0

// Parse to find min and max
for (var i = 0; i < skills.length; ++i) {

	const skill = skills[i][0]
	const start = skills[i][1]
	const end = skills[i][2]

	skills[i][skills[i].length] = end - start
	const duration = skills[i][3]

	// Get min and max years
	if (start < range.min)
		range.min = start

	if (end > range.max)
		range.max = end
}

console.log("range", range.min, range.max)

// Parse to print bars
for (var i = 0; i < skills.length; ++i) {

	const skill = skills[i][0]
	const start = skills[i][1]
	const end = skills[i][2]
	const duration = skills[i][3]

	var bar = ""
	for (var j = 0; j <= range.max - range.min - duration; ++j)
		bar += " "

	for (var j = 0; j <= duration; ++j)
		bar += "-"

	console.log(bar, duration, skill)
}
