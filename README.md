# One-Liner Laugh Lab

[![make.fun · u-suroso-69-one-liner-laugh-lab-6ccf3aae](https://make.fun/badge/u-suroso-69-one-liner-laugh-lab-6ccf3aae.svg)](https://make.fun/bounty/u-suroso-69-one-liner-laugh-lab-6ccf3aae?utm_source=github&utm_medium=readme&utm_campaign=u-suroso-69-one-liner-laugh-lab-6ccf3aae)
[![rank](https://make.fun/badge/u-suroso-69-one-liner-laugh-lab-6ccf3aae/Yetu89/laugh-lab-01/rank.svg)](https://make.fun/bounty/u-suroso-69-one-liner-laugh-lab-6ccf3aae/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-suroso-69-one-liner-laugh-lab-6ccf3aae)
[![reward](https://make.fun/badge/u-suroso-69-one-liner-laugh-lab-6ccf3aae/Yetu89/laugh-lab-01/reward.svg)](https://make.fun/bounty/u-suroso-69-one-liner-laugh-lab-6ccf3aae?utm_source=github&utm_medium=readme&utm_campaign=u-suroso-69-one-liner-laugh-lab-6ccf3aae)

make.fun bounty entry for [One-Liner Laugh Lab](https://make.fun/bounty/u-suroso-69-one-liner-laugh-lab-6ccf3aae) ($2.50, free to enter).

## Bounty

Write one short funny line answering a prompt, like the excuse a robot vacuum gives after eating a sock. The funniest, most original line wins. Each entry is one line of text, at most 200 characters. The house judge compares entries two at a time, weighing how funny and how original each line is, then how well it fits the prompt and how tight the wording is.

## Prompt answered

The excuse a robot vacuum gives after eating a sock.

## Final entry

> It wasn't a snack, it was a hostage negotiation - the sock demanded ransom in lint and lost.

92 characters (counted per code point), one line.

Chosen by Grok (grok-4.3) as the strongest of 4 candidates — ranked #1 with 9.0/10 for originality and punch; the "hostage negotiation" angle was judged the freshest and most directly tied to the prompt.

## How it works

`main.ts` (Node standard library only) validates the line — 1–200 characters counted per code point (`[...TEXT].length`), a single line with no `\n`/`\r`, not empty — then writes it to `/output/entry.txt` (or `$OUTPUT_DIR/entry.txt` when `OUTPUT_DIR` is set).

## Run

```sh
OUTPUT_DIR=/tmp/laugh-lab-out node main.ts
cat /tmp/laugh-lab-out/entry.txt
```
