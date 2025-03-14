```tikz
\usepackage{tikz-cd, amsmath, amssymb}\begin{document}\begin{tikzcd}[arrows=Rightarrow]
{R \text{ a field}}\rar & {R \text{ an ED}}\rar & {R \text{ a PID}}\rar & {R \text{ a UFD}}\rar\dar & {R \text{ an ID}}\dar\\
& {R[X] \text{ an ED}}\rar & {R[X] \text{ a PID}}\rar & {R[X] \text{ a UFD}}\rar & {R[X] \text{ an ID}}
\ar[shorten <=2ex, shorten >=1ex, from=1-1, to=2-2]
\ar[from=2-3, to=1-1, to path={ -- ([yshift=-3ex]\tikztostart.south) -| (\tikztotarget)}] 
\end{tikzcd}\end{document}
```
