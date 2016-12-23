#!/usr/bin/node

"use strict"

// The year today
const now = parseInt(new Date().getFullYear())

var skills = [

	// Education
	["School",		1980, 1994],
	["University",	1994, 1998],

	// Skills
	["C++",			1999, now],
	["Embedded",	1998, now],
	["SC",			1998, now],
	["Vim",			1998, now],
	["VxWorks",		1998, 2009],
	["Unix",		1998, 2009],
	["Networking",	2003, now],
	["Regex",		2007, now],
	["Bash",		2009, now],
	["Linux	",		2009, now],
	["Subversion",	2012, now],
	["VMware",		2012, now],
	["STL",			2013, now],
	["C++11/14",	2015, now],
	["Agile",		2015, now],
	["Clang",		2015, now],
	["Iwyu",		2015, now],
	["JavaScript",	2016, now],
	["Git",			2015, now],
	["Lua",			2016, now],
	["Haskell",		2016, now],
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
	for (var j = 0; j <= duration; ++j)
		bar += "-"

	console.log(bar, duration, skill)
}
