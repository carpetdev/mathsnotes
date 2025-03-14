Let $\cat{I}\ar{F}\cat{C}$ be a diagram of shape $\cat{I}$ and suppose it has a limit $\Delta\lim(F)\Ar{F}F$. A functor $G\colon C\to D$ **preserves** the limit of $F$ if $\lim{GF}\cong G\lim(F)$. A functor $\cat{c}\ar{G}\cat{D}$ is (finitely) continuous if it preserves all limits of diagrams $\cat{I}\ar{F}\cat{C}$ where $\cat{I}$ is a (finite) small category.

Example:
- The forgetful functors $\mathbf{Grp}, \mathbf{Top}\ar{U}\mathbf{Set}$ and $\mathbf{Cat}\ar{\ob}\mathbf{Set}$ preserve all limits and their left adjoints $\mathbf{Grp}\ra{F}\mathbf{Set}$ and $\mathbf{Top}, \mathbf{Cat} \ra{\operatorname{disc}}\mathbf{Set}$ preserve all colimits. 
    - $F(X\amalg Y) \cong FX + FY$

Theorem:
Right adjoints preserve limits *(dually, left adjoints preserve colimits)*

Lemma:
Right adjoints preserve terminal objects

Proof:
$\cat{D}(X,R 1)\underset{\text{(adjointness)}}{\cong}\cat{C}(LX,1)\underset{\text{(terminality)}}{\cong}1$$\blacksquare$

Proposition:
Given an adjunction
```tikz
\usepackage{tikz-cd, amsmath, amssymb}\begin{document}\begin{tikzcd}[every label/.append style={font=\small}]
\mathcal{C}\rar[phantom, "\bot"]\rar[shift right=3, "R"'] & \mathcal{D}\lar[shift right=3, "L"']
\end{tikzcd}\end{document}
```
and $\cat{I}\ar{F}\cat{C}$ a diagram, there is an adjunction
```tikz
\usepackage{tikz-cd, amsmath, amssymb}\begin{document}\begin{tikzcd}[every label/.append style={font=\small}]
\operatorname{Cones}(F)\rar[phantom, "\bot"]\rar[shift right=3, "R_*"'] & \operatorname{Cones}(RF)\lar[shift right=3, "L_*"']
\end{tikzcd}\end{document}
```

Proof:
$$
\begin{align}
\cones(F)& \ar{R_*} \cones(RF)\\
(c, \Delta c\Ar{\phi}F)& \longmapsto (Rc, \Delta Rc\Ar{R\phi} RF)\\[2em]
\cones(F)& \ra{L_*} \cones(RF)\\
\llap{(Ld, \Delta Ld\Ar{L\psi}LRF\Ar{\varepsilon F}F)}& \longleftarrow{\raise{.4pt}{\hspace{-4.5pt}\shortmid} (d, \Delta d\Ar{\psi}RF)}
\end{align}
$$
Exercise: Check $R_*, L_*$ extend to functors and that $\varepsilon_*, \eta_*$ give natural transformations and the triangle identities hold. $\blacksquare$

Proof 1 of theorem (for single limits):
Limits are terminal objects in the category of cones. Use the proposition and lemma. $\blacksquare$

Proposition:
Adjunctions compose
```tikz
\usepackage{tikz-cd, amsmath, amssymb}\begin{document}\begin{tikzcd}[every label/.append style={font=\small}]
\mathcal{A}\rar[phantom, "\bot"]\rar[shift right=3, "R"'] & \mathcal{B}\lar[shift right=3, "L"']\rar[phantom, "\bot"]\rar[shift right=3, "U"'] & \mathcal{C}\lar[shift right=3, "F"']
\end{tikzcd}\end{document}
```

Proof:
$\cat{A}(LFX,Y)\cong \cat{B}(FX,RY) \cong\cat{C}(X,URY)$. Exercise: Check naturality in $X\in\cat{C}$ and $Y\in\cat{A}$. $\blacksquare$

Proposition:
If $\cat{I}$ is a category and
```tikz
\usepackage{tikz-cd, amsmath, amssymb}\begin{document}\begin{tikzcd}[every label/.append style={font=\small}]
\mathcal{C}\rar[phantom, "\bot"]\rar[shift right=3, "R"'] & \mathcal{D}\lar[shift right=3, "L"']
\end{tikzcd}\end{document}
```
is an adjunction, then
```tikz
\usepackage{tikz-cd, amsmath, amssymb}\begin{document}\begin{tikzcd}[every label/.append style={font=\small}]
[\mathcal{I},\mathcal{C}]\rar[phantom, "\bot"]\rar[shift right=3, "{[\mathcal{I},R]}"'] & {[\mathcal{I},\mathcal{D}]}\lar[shift right=3, "{[\mathcal{I},L]}"']
\end{tikzcd}\end{document}
```
is an adjunction.

Proof:
- $[\cat{I},\cat{C}]\ar{[\cat{I},\cat{R}]}[\cat{I},\cat{D}]$ is well defined as a functor:
$(\cat{I}\longrightarrow\cat{C}) \overset{[\cat{I},\cat{R}]}{\longmapsto} (\cat{I}\longrightarrow\cat{C}\ar{R}\cat{D})$ on objects and
```tikz
\usepackage{tikz-cd, amsmath, amssymb}\begin{document}\begin{tikzcd}[every label/.append style={font=\small}, every matrix/.append style={left delimiter=(, right delimiter=)}]
\mathcal{I}\rar[bend left=40, "F", ""'{name=U}]\rar[bend right=40, "G"', ""{name=D}] & \mathcal{C}
\ar[Rightarrow, from=U, to=D, "\phi"]
\end{tikzcd}
$\overset{[\mathcal{I}, \mathcal{R}]}{\longmapsto}$
\begin{tikzcd}[every label/.append style={font=\small}, every matrix/.append style={left delimiter=(, right delimiter=)}]
\mathcal{I}\rar[bend left=40, "F", ""'{name=U}]\rar[bend right=40, "G"', ""{name=D}] & \mathcal{C}\rar["R"] & \mathcal{D}
\ar[Rightarrow, from=U, to=D, "\phi"]
\end{tikzcd}
\end{document}
```
on morphisms, i.e. $(R\phi)_X = R(\phi_X)$. This preserves identities and composition. //
- Similarly, $[\cat{I},\cat{L}]$ is also a functor.
    Lemma: For a natural transformation
```tikz
\usepackage{tikz-cd, amsmath, amssymb}\begin{document}\begin{tikzcd}[every label/.append style={font=\small}]
\mathcal{C}\rar[bend left=40, "F", ""'{name=U}]\rar[bend right=40, "G"', ""{name=D}] & \mathcal{D}
\ar[Rightarrow, from=U, to=D, "\phi"]
\end{tikzcd}\end{document}
```
and a category $\cat{I}$, have a natural transformation
```tikz
\usepackage{tikz-cd, amsmath, amssymb}\begin{document}\begin{tikzcd}[every label/.append style={font=\small}]
[\mathcal{I},\mathcal{C}]\rar[bend left, "{[\mathcal{I},F]}", ""'{name=U}]\rar[bend right, "{[\mathcal{I},G]}"', ""{name=D}] &[5em] {[\mathcal{I},\mathcal{D}]}
\ar[Rightarrow, from=U, to=D, "{[\mathcal{I},\phi]}"]
\end{tikzcd}\end{document}
```
whose component on $H\in[\cat{I},\cat{C}]$ is the natural transformation
```tikz
\usepackage{tikz-cd, amsmath, amssymb}\begin{document}\begin{tikzcd}[every label/.append style={font=\small}]
\mathcal{I}\rar["H"]& \mathcal{C}\rar[bend left=40, "F", ""'{name=U}]\rar[bend right=40, "G"', ""{name=D}] & \mathcal{D}
\ar[Rightarrow, from=U, to=D, "\phi"]
\end{tikzcd}\end{document}
```
whose component on $i\in \cat{I}$ is given by $FHi\ar{\phi_{Hi}}GHi$. $\square$ $\blacksquare$

Proof 2 of theorem (for all limits):
We have that adjunctions compose and adjunctions lift to functor categories. Construct the adjoint to $\cat{D}\ar{\Delta}[\cat{I},\cat{D}]$ as follows:
```tikz
\usepackage{tikz-cd, amsmath, amssymb}\begin{document}\begin{tikzcd}[every label/.append style={font=\small}, column sep=huge, row sep=huge]
\mathcal{C}\rar[shift right=2, "\Delta"']\rar[phantom, "\scriptstyle\top"]\dar[shift left=2, "U"]\dar[phantom, "\dashv"] & {[\mathcal{I}, \mathcal{C}]}\lar[shift right=2, "\text{lim}"', color=red]\dar[shift left=2, "{[\mathcal{I}, U]}"]\dar[phantom, "\dashv"]\\
\mathcal{D}\uar[shift left=2, "F", color=red]\rar[shift right=2, "\Delta"']\rar[phantom, "\scriptstyle\top"] & {[\mathcal{I}, \mathcal{D}]}\uar[shift left=2, "{[\mathcal{I}, F]}", color=red]\lar[dashed, shift right=2, color=red]
\end{tikzcd}\end{document}
```
$\blacksquare$

Example:
- The underlying set of a product of groups/rings/graphs is the product of the underlying sets.
- $X\mapsto\coprod_{n\in\mathbb{N}}X^n$ preserves all colimits as it's a left adjoint. It also preserves pullbacks (not related to this result).