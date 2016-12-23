#!/usr/bin/node

"use strict"

// Skills and date range
var skills = [

	// Education
	["University",	1994, 1998],

	// Skills
	["C++",			1996, 2017],
	["Embedded",	1998, 2017],
	["SC",			1998, 2017],
	["Vim",			1998, 2017],
	["VxWorks",		1998, 2009],
	["Unix",		1998, 2009],
	["Networking",	2003, 2017],
	["Regex",		2007, 2017],
	["Bash",		2009, 2017],
	["Linux	",		2009, 2017],
	["Subversion",	2012, 2017],
	["VMware",		2012, 2017],
	["STL",			2013, 2017],
	["C++11/14",	2015, 2017],
	["Agile",		2015, 2017],
	["Clang",		2015, 2017],
	["Iwyu",		2015, 2016],
	["JavaScript",	2016, 2017],
	["Git",			2015, 2017],
	["Lua",			2016, 2017],
	["Haskell",		2016, 2017],
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
	for (var j = 0; j < start - range.min; ++j)
		bar += " "

	for (var j = 0; j < duration; ++j)
		bar += "_"

	for (var j = 0; j < range.max - end; ++j)
		bar += " "

	console.log(bar, duration, skill)
}
