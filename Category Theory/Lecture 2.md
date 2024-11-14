## Functors and Natural Transformations
A functor $F\colon \cat{C}\to\cat{D}$ consists of a function $F_0\colon\Ob(\cat{C})\to\Ob(\cat{D})$ and functions $F_{X,Y}\colon\cat{C}(X,Y)\to\cat{D}(F_0X,F_0Y)$ for all $X,Y\in\cat{C}$ such that:
```tikz
\usepackage{tikz-cd}\begin{document}\begin{tikzcd}
X\rar["f"] & Y\rar["g"] & Z
\end{tikzcd}\end{document}
```
1. $F(g\circ_\cat{C}f)=Fg\circ_\cat{D}Ff$
```tikz
\usepackage{tikz-cd}\begin{document}\begin{tikzcd}
X\rar["1_X"] & X
\end{tikzcd}\end{document}
```
2. $F 1_X=1_{FX}$

Example:
- $\cat{Grp} \overset{U}{\longrightarrow}\cat{Set}$
	- $(G,*,1)\longmapsto G$
	- $\big( f\colon(G,*,1)\to(H,*,1) \big) \longmapsto (G\to H)$
- $\cat{Top} \overset{U}{\longrightarrow} \cat{Set}$
	- $(X,\tau)\longmapsto X$
- $\cat{Set}\longrightarrow\cat{Grp}$
```tikz
\usepackage{tikz-cd}\begin{document}\begin{tikzcd}
X\dar["f"']\rar[maps to] & \mbox{Free group on X}\dar["\mbox{group homomorphism}"]\\
Y\rar[maps to] & \mbox{Free group on Y}
\end{tikzcd}\end{document}
```
- $\cat{Set}\overset{\text{disc}}{\longrightarrow}\cat{Top}$
```tikz
\usepackage{tikz-cd, amssymb}\begin{document}\begin{tikzcd}
X\dar["f"']\rar[maps to] & (X,\{\varnothing,X\})\dar["\mbox{continuous function}"]\\
Y\rar[maps to] & (Y, \{\varnothing,Y\})
\end{tikzcd}\end{document}
```

