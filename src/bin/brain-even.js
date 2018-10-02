#!/usr/bin/env node
import { AskUserName, YesNo } from '..';

console.log('Welcome to the Brain Games!\n');
console.log('Answer "yes" if number even otherwise answer "no".\n');

const userName = AskUserName();

YesNo(userName);
