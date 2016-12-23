#!/usr/bin/node

"use strict"

const now = new Date()

var skills = [

	// Education
	["School",		new Date("1980"), new Date("1994")],
	["University",	new Date("1994"), new Date("1998")],

	// Skills
	["C++",			new Date("1999-01-01"), now],
	["Embedded",	new Date("1998-01-01"), now],
	["SC",			new Date("1998-01-01"), now],
	["Vim",			new Date("1998-01-01"), now],
	["VxWorks",		new Date("1998-01-01"), new Date("2009")],
	["Unix",		new Date("1998-01-01"), new Date("2009")],
	["Networking",	new Date("2003-01-01"), now],
	["Regex",		new Date("2007-01-01"), now],
	["Bash",		new Date("2009-01-01"), now],
	["Linux	",		new Date("2009-01-01"), now],
	["Subversion",	new Date("2012-01-01"), now],
	["VMware",		new Date("2012-01-01"), now],
	["STL",			new Date("2013-01-01"), now],
	["C++11/14",	new Date("2015-01-01"), now],
	["Agile",		new Date("2015-01-01"), now],
	["Clang",		new Date("2015-01-01"), now],
	["Iwyu",		new Date("2015-01-01"), now],
	["JavaScript",	new Date("2016-01-01"), now],
	["Git",			new Date("2015-09-01"), now],
	["Lua",			new Date("2016-01-01"), now],
	["Haskell",		new Date("2016-01-01"), now],
]

console.log("total skills", skills.length)

for (var i = 0; i < skills.length; ++i)
	console.log(
		skills[i][0],
		skills[i][1].getFullYear(),
		skills[i][2].getFullYear())
