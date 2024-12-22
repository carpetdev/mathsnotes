The **colimit** of $\cat{I}\overset{F}{\longrightarrow}\cat{C}$ is the limit of $\cat{C}\op\overset{F\op}{\longrightarrow}\cat{D}\op$. $\cat{C}$ has all **colimits of shape $\cat{I}$** if $\cat{C}\overset{\Delta}{\longrightarrow}\cat{C}^\cat{I}$ has a left adjoint. Note an adjunction
```tikz
\usepackage{tikz-cd, amsmath, amssymb}\begin{document}\begin{tikzcd}[every label/.append style={font=\small}, column sep=large]
\mathcal{D}\rar[phantom, "\bot^\eta_\varepsilon"]\rar[bend right, "U"'] & \mathcal{C}\lar[bend right, "F"']
\end{tikzcd}\end{document}
```
corresponds to an adjunction
```tikz
\usepackage{tikz-cd, amsmath, amssymb}\begin{document}\begin{tikzcd}[every label/.append style={font=\small}, column sep=large]
\mathcal{D}^\mathrm{op}\rar[phantom, "\top^{\varepsilon^\mathrm{op}}_{\eta^\mathrm{op}}"]\rar[bend right, "U^\mathrm{op}"'] & \mathcal{C}^\mathrm{op}\lar[bend right, "F^\mathrm{op}"']
\end{tikzcd}\end{document}
```

Example:
- (Initial object) $\cat{I}=\varnothing$. The colimit of the unique functor $\varnothing\to\cat{C}$ is called an initial object.
    - In $\mathbf{Set}$, the initial object is $\varnothing$.
- (Coproduct) $\cat{I}=\{\bullet\phantom{to}\bullet\}$. The colimit of $\cat{I}\overset{(X,Y)}{\longrightarrow}\cat{C}$ is called the coproduct of $X$ and $Y$.
    - In $\mathbf{Set}$, coproducts are disjoint unions.
    - In $\mathbf{Grp}$, a coproduct $G+H= \left< g\in G,\ h\in H \mid g_1=g_2 \text{ in } G,\ h_1=h_2 \text{ in } H \right>$.
- (Coequaliser) $\cat{I}=\{\bullet\rightrightarrows\bullet\}$. Universal property as follows:
```tikz
\usepackage{tikz-cd, amsmath, amssymb}\begin{document}\begin{tikzcd}[every label/.append style={font=\small}]
X\rar[shift left, "f"]\rar[shift right, "g"'] & Y\rar["q"]\ar[dr, "r"']& \operatorname{Coeq}(f,g)\dar[dashed, "!"', "u"]\\
&&Z
\end{tikzcd}\end{document}
```
   - In $\mathbf{Set}$, ${} \coeq(f,g) = Y/\unsim {}$ where $\unsim$ is the smallest equivalence relation such that $f(x)\sim g(x)$ for all $x\in X$. $q$ is the quotient map for this equivalence relation.
       - For $X\overunderset{1_X}{f}{\rightrightarrows}X$, the equaliser is $\{x\mid x=f(x)\}$ (fixed points) and the coequaliser is the set of orbits of $f$.
- (Pushout) $\cat{I}=$
```tikz
\usepackage{tikz-cd, amsmath, amssymb}\begin{document}\begin{tikzcd}[every label/.append style={font=\small}, every matrix/.append style={left delimiter=\{, right delimiter=\}}]
\bullet\rar\dar& \bullet\\
\bullet
\end{tikzcd}\end{document}
```
   - In $\mathbf{Set}$, the pushout of $f\colon Z\to X$ and $g\colon Z\to Y$ is the set $(X+Y)/\unsim$ where $f(x)\sim g(x)$ generates the equivalence relation (this is the dual to constructing pullbacks from binary products and equalisers). In $\mathbf{Top}$, this construction can be seen as gluing.