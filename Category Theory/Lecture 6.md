Let $\cat{I}$ be a category (shape/indexing category). The category of **$\cat{I}$ shaped diagrams** in a category $\cat{C}$ is the functor category $[\cat{I},\cat{C}]$. The functor $\begin{align}\cat{C}&\overset{\Delta}{\longrightarrow}[\cat{I},\cat{C}]\\ x&\longmapsto(i\mapsto x)\end{align}$ is called the **constant functor**. $\cat{C}$ has **limits of shape $\cat{I}$** if $\Delta$ has a right adjoint.

Example:
- (Terminal object) $\cat{I}=\varnothing$. Then $[\cat{I},\cat{C}]=1$ and a right adjoint $T$ corresponds to a terminal object in $\cat{C}$ since $1(*,*)\cong \cat{C}(X,T*)$ for all $X\in \cat{C}$.
- (Binary product) $\cat{I} = \{\bullet\phantom{\to}\bullet\}$. Then $[\cat{I},\cat{C}]\cong\cat{C}\times\cat{C}$. The universal property definition of right adjunctions gives us an object and morphisms which we denote  $X\overset{\pi_X}{\longleftarrow}X\times Y\overset{\pi_Y}{\longrightarrow}Y$. Then for any $X\overset{p_X}{\longleftarrow}P\overset{p_Y}{\longrightarrow}Y$ we have
```tikz
\usepackage{tikz-cd, amsmath, amssymb}\begin{document}\begin{tikzcd}[every label/.append style={font=\small}]
&P\ar[dl, bend right=20, "p_X"']\ar[dr, bend left=20, "p_Y"]\dar[dashed, "!"', "u"]\\
X& \lar["\pi_X"] X\times Y \rar["\pi_Y"'] & Y
\end{tikzcd}\end{document}
```
- (Arbitrary product) $\cat{I}$ a discrete category on a set. We get an object denoted $\prod_{i\in \cat{I}}X_i$ and the counit gives maps $\prod_{i\in\cat{I}}X_i\overset{\pi_j}{\longrightarrow}X_j$ such that for a collection of maps there is a unique map making all of the following diagrams commute:
```tikz
\usepackage{tikz-cd, amsmath, amssymb}\begin{document}\begin{tikzcd}[every label/.append style={font=\small}]
P\dar[dashed] \ar[dr, "p_i"]\\
\displaystyle\prod_{i\in\mathcal{I}}X_i\rar["\pi_i"'] & X_i
\end{tikzcd}\end{document}
```
- (Equaliser) $\cat{I}=\{\bullet\rightrightarrows\bullet\} {}$. Then $[\cat{I},\cat{C}]$ consists of parallel pairs of maps as objects and commutative diagrams as morphisms. Given $X\overunderset{f}{g}{\rightrightarrows}Y$, there is an object $\Eq(f,g)$ (the **equaliser**) and a map $e\colon \Eq(f,g)\to X$ such that $fe=ge$ and satisfying the following universal property:
```tikz
\usepackage{tikz-cd, amsmath, amssymb}\begin{document}\begin{tikzcd}[every label/.append style={font=\small}]
E\dar[dashed, "!"', "u"]\ar[dr, "e'"]\\
\operatorname{Eq}(f,g)\rar["e"]& X\rar[shift left, "f"]\rar[shift right, "g"']& Y
\end{tikzcd}\end{document}
```
- (Pullback) $\cat{I}=$
```tikz
\usepackage{tikz-cd, amsmath, amssymb}\begin{document}\begin{tikzcd}[every label/.append style={font=\small}, every matrix/.append style={left delimiter=\{, right delimiter=\}}]
&\bullet\dar\\
\bullet\rar&\bullet
\end{tikzcd}\end{document}
```
A **pullback** is an object $X\times_ZY$ satisfying the following universal property:
```tikz
\usepackage{tikz-cd, amsmath, amssymb}\begin{document}\begin{tikzcd}[every label/.append style={font=\small}]
P\ar[drr, bend left, "p_Y"]\ar[ddr, bend right, "p_X"']\ar[dr, dashed, "!"', "u"]\\
& X\times_ZY\rar["\pi_Y"]\dar["\pi_X"'] & Y\dar["g"]\\
& X\rar["f"'] & Z
\end{tikzcd}\end{document}
```
- (Tower) $\cat{I}= \{0\leftarrow 1\leftarrow 2\leftarrow \cdots\} = (\mathbb{N},\leq)$. A **tower** in a category is $X_0\underset{f_0}{\leftarrow}X_1\underset{f_1}{\leftarrow}X_2\underset{f_2}{\leftarrow}\cdots$. The limit of this diagram is an $L$ with a collection of maps $\pi_n$ such that the following diagrams commute:
```tikz
\usepackage{tikz-cd, amsmath, amssymb}\begin{document}\begin{tikzcd}[every label/.append style={font=\small}]
L\rar["\pi_n"]\ar[dr, "\pi_{n-1}"'] & X_n\dar["f_{n-1}"]\\
& X_{n-1}
\end{tikzcd}\end{document}
```

Consider $\mathbf{Set}$. $1=\{*\}$ is the terminal object. Products are given by cartesian products. Equalisers are given by $\Eq(f,g)=\{x\mid f(x)=g(x)\}$. Pullbacks are given by $X\times_ZY=\{(x,y)\mid f(x)=g(y)\}$ for $f\colon X\to Z,\ g\colon Y\to Z$. Limits of towers are sequences where $x_i\in X_i$ and $f_{i-1}(x_i)=x_{i-1}$.

Given a specific diagram $\cat{I}\overset{F}{\longrightarrow}\cat{C}$ of shape $\cat{I}$ in $\cat{C}$, a limit $L\in \cat{C}$ has a constant functor $\cat{I}\overset{\Delta L}{\longrightarrow}\cat{C}$. The **category of cones over $F$** ($\mathbf{Cones}(F)$) has objects the pairs $(L\in\cat{C},\ \Delta L\overset{\phi}{\Longrightarrow}F)$ and morphisms are maps $L\overset{l}{\longrightarrow}L'$ such that $\phi=\phi'\circ\Delta l$. A **limit of $\cat{I}\overset{F}{\longrightarrow}\cat{C}$** is a terminal object in $\mathbf{Cones}(F)$. This means some $L$ with maps $\pi_i\colon L\to F(i)$ such that for $(L',p)$ another cone, there is a unique map $u$ making the following diagram commute for all  $\alpha \in\cat{I}(i,j)$:
```tikz
\usepackage{tikz-cd, amsmath, amssymb}\begin{document}\begin{tikzcd}[every label/.append style={font=\small}, row sep=large]
&L'\ar[ddl, bend right=20, "p_i"']\ar[ddr, bend left=20, "p_j"]\dar[dashed, "!"', "u"]\\
&L\ar[dl, "\pi_i"']\ar[dr, "\pi_j"]\\
F(i)\ar[rr, "F\alpha"']&&F(j)
\end{tikzcd}\end{document}
```
