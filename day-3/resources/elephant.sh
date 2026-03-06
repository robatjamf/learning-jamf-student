#!/usr/bin/env bash
# African Elephant ANSI art — Victoria Falls edition
# Run with:  bash elephant.sh

declare -A C
C['.']=$'\033[0m '            # space
C['l']=$'\033[38;5;252m█'    # light gray — body
C['s']=$'\033[38;5;240m█'    # dark gray  — ear / shadow
C['w']=$'\033[38;5;255m█'    # near-white — tusks
C['e']=$'\033[38;5;226m█'    # yellow     — eye
C['t']=$'\033[38;5;248m█'    # mid-gray   — trunk

rows=(
  '....................lllllll...................'
  '...............lllllllllllllll...............'
  '............lllllllllllllllllllll............'
  '..........lllllllllllllllllllllllll..........'
  '.........lllllllllllllllllllllllllll.........'
  '........lllllsssssllllllllllllllllllll.......'
  '.......lllllssssssssllllllllllllllllllll.....'
  '......lllllssssssssss.llllllllllllllllllll...'
  '......llllssssssss.e..llllllllllllllllllll...'
  '.....lllllsssssss.....llllllllllllllllllll...'
  '.....lllllssssss......llllllllllllllllllll...'
  '.....lllll............llllllllllllllllllll...'
  '.....llll.....ww......llllllllllllllllllll...'
  '.....llll....wwww.....llllllllllllllllllll...'
  '.....llllt...ww.....llllllllllllllllllllll...'
  '......lltttt.......llllllllllllllllllllllll..'
  '.......ttttt......llllllllllll..llllll.lllll.'
  '.......ttttt......lllllllllll...lllll..lllll.'
  '.......ttttt......lllllllllll...lllll..lllll.'
  '.......ttttt......lllllllllll...lllll..lllll.'
  '.......llllllllllllllllllllllllllllllllllll..'
)

reset=$'\033[0m'
for row in "${rows[@]}"; do
  for ((i=0; i<${#row}; i++)); do
    ch="${row:i:1}"
    printf '%b' "${C[$ch]:-${reset} }"
  done
  printf '%b' "${reset}\n"
done
