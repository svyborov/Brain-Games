#!/usr/bin/env node
import { askUserName, yesNoEven } from '..';

console.log('Welcome to the Brain Games!\n');
console.log('Answer "yes" if number even otherwise answer "no".\n');

yesNoEven(askUserName());
