#!/usr/bin/node

"use strict"

const today = Date()
console.log("today", today)

var skills = [
	["C++", Date("1998"), Date("2016")],
	["Linux", Date("2006"), Date("2016")]
]

console.log("total skills", skills.length)

for (var i = 0; i < skills.length; ++i)
	console.log(skills[i][0], skills[i][1], skills[i][2])

