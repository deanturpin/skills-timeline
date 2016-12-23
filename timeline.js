#!/usr/bin/node

"use strict"

const now = new Date()

var skills = [

	// Education
	["School",		new Date("1980"), new Date("1994")],
	["University",	new Date("1994"), new Date("1998")],

	// Skills
	["C++",			new Date("1999-01-01"), new Date("2017-01-01")],
	["Embedded",	new Date("1998-01-01"), new Date("2017-01-01")],
	["SC",			new Date("1998-01-01"), new Date("2017-01-01")],
	["Vim",			new Date("1998-01-01"), new Date("2017-01-01")],
	["VxWorks",		new Date("1998-01-01"), new Date("2009-01-01")],
	["Unix",		new Date("1998-01-01"), new Date("2009-01-01")],
	["Networking",	new Date("2003-01-01"), new Date("2017-01-01")],
	["Regex",		new Date("2007-01-01"), new Date("2017-01-01")],
	["Bash",		new Date("2009-01-01"), new Date("2017-01-01")],
	["Linux	",		new Date("2009-01-01"), new Date("2017-01-01")],
	["Subversion",	new Date("2012-01-01"), new Date("2017-01-01")],
	["VMware",		new Date("2012-01-01"), new Date("2017-01-01")],
	["STL",			new Date("2013-01-01"), new Date("2017-01-01")],
	["C++11/14",	new Date("2015-01-01"), new Date("2017-01-01")],
	["Agile",		new Date("2015-01-01"), new Date("2017-01-01")],
	["Clang",		new Date("2015-01-01"), new Date("2017-01-01")],
	["Iwyu",		new Date("2015-01-01"), new Date("2016-01-01")],
	["JavaScript",	new Date("2016-01-01"), new Date("2017-01-01")],
	["Git",			new Date("2016-01-01"), new Date("2017-01-01")],
	["Lua",			new Date("2016-01-01"), new Date("2017-01-01")],
	["Haskell",		new Date("2016-01-01"), new Date("2017-01-01")],
]

console.log("total skills", skills.length)

for (var i = 0; i < skills.length; ++i)
	console.log(
		skills[i][0],
		skills[i][1].getFullYear(),
		skills[i][2].getFullYear())
