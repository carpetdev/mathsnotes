Idea: Generalise equivalences so that $\eta, \varepsilon$ are not invertible to capture things like free and forgetful relationships.

Let $\cat{C}$, $\cat{D}$ be categories. An **adjunction** between them consists of functors
```tikz
\usepackage{tikz-cd, amsmath, amssymb}\begin{document}\begin{tikzcd}[every label/.append style={font=\small}]
\mathcal{D}\rar[shift right, "R"'] & \mathcal{C}\lar[shift right, "L"']
\end{tikzcd}\end{document}
```
and natural transformations $\eta\colon 1_\cat{C}\Rightarrow RL$, $\varepsilon\colon LR\Rightarrow 1_\cat{D}$ such that the following **triangle identities** hold:
```tikz
\usepackage{tikz-cd, amsmath, amssymb}\begin{document}\begin{tikzcd}[every label/.append style={font=\small}]
R \rar["\eta. R"]\ar[dr, bend right, "1_R"'] & RLR\dar["R.\varepsilon"]\\
& R
\end{tikzcd} and \begin{tikzcd}[every label/.append style={font=\small}]
L \rar["L.\eta"]\ar[dr, bend right, "1_L"'] & LRL\dar["\varepsilon. L"]\\
& L
\end{tikzcd}\end{document}
```
Often write $L \dashv^\eta_\varepsilon R$ (or just $L\dashv R$). $L$ and $R$ are known as the **left** and **right** **adjoints**. $\eta$ is called the **unit** and $\varepsilon$ is called the **counit**.

Theorem:
Let $\cat{D}\overset{R}{\longrightarrow}\cat{C}$ be a functor. The following are equivalent:
1. There is a functor $L\colon \cat{C}\to \cat{D}$ and natural transformations $\eta\colon 1_\cat{C}\Rightarrow RL$, $\varepsilon\colon LR\Rightarrow 1_\cat{D}$ forming an adjunction
2. (Hom-sets) There is a functor $L\colon \cat{C}\to \cat{D}$ and bijections $\cat{D}(LX,Y)\overunderset{\phi_{X,Y}}{\cong}{\longrightarrow}\cat{C}(X,RY)$ satisfying (naturality in $X,Y$) for $X'\overset{x}{\longrightarrow}X$ in $\cat{C}$ and $Y\overset{y}{\longrightarrow}Y'$ in $\cat{D}$:
```tikz
\usepackage{tikz-cd, amsmath, amssymb}\begin{document}\begin{tikzcd}[every label/.append style={font=\small}]
\mathcal{D}(LX,Y)\dar["{\mathcal{D}(Lx,Y)}"'] \rar["\phi_{X,Y}"] & \mathcal{C}(X,RY)\dar["{\mathcal{C}(x,RY)}"]\\
\mathcal{D}(LX',Y)\rar["\phi_{X',Y}"'] & \mathcal{C}(X',RY)
\end{tikzcd} \quad and \quad \begin{tikzcd}[every label/.append style={font=\small}]
\mathcal{D}(LX,Y)\dar["{\mathcal{D}(LX,y)}"'] \rar["\phi_{X,Y}"] & \mathcal{C}(X,RY)\dar["{\mathcal{C}(X,Ry)}"]\\
\mathcal{D}(LX,Y')\rar["\phi_{X,Y'}"'] & \mathcal{C}(X,RY')
\end{tikzcd}\end{document}
```
3. (Universal Property) $X\mapsto LX$, $\eta_X\colon X\to RLX$ mappings such that for all $X\overset{f}{\to}RY$ there exists a unique $f^\#\colon LX\to Y$ satisfying $R(f^\#).\eta_X=f$, i.e.
```tikz
\usepackage{tikz-cd, amsmath, amssymb}\begin{document}\begin{tikzcd}[every label/.append style={font=\small}]
X\rar["\eta_X"]\ar[dr, bend right, "f"'] & RLX\dar["Rf^\#"] & LX\dar[dashed, "!"', "f^\#"]\\
& RY & Y
\end{tikzcd}\end{document}
```
Note the definition is not symmetric, but in $\circled{3}$, the dual condition for $\varepsilon$ also defines an adjunction:
```tikz
\usepackage{tikz-cd, amsmath, amssymb}\begin{document}\begin{tikzcd}[every label/.append style={font=\small}]
Y\dar[dashed, "!"', "f^\#"] & LY\dar["Lf^\#"']\ar[dr, bend left, "f"]\\
RX & LRX\rar["\varepsilon_X"'] & X
\end{tikzcd}\end{document}
```

Broadly, the first definition lets you do interesting category theory, the second lets you use adjunctions and the third lets you construct them.

Example:
- (Galois connection) In the setting of partial orders with
```tikz
\usepackage{tikz-cd, amsmath, amssymb}\begin{document}\begin{tikzcd}[every label/.append style={font=\small}]
\mathcal{C}\rar[shift right=2, "R"']\rar[phantom, "\bot"] & \mathcal{D}\lar[shift right=2, "L"']
\end{tikzcd}\end{document}
```
then $Lx\leq y \iff x\leq Ry$
- (Free construction)
```tikz
\usepackage{tikz-cd, amsmath, amssymb}\begin{document}\begin{tikzcd}[every label/.append style={font=\small}, column sep=huge]
\mathbf{Mon}\rar["U"']\rar[shift left = 3, phantom, "\bot"] & \mathbf{Set}\lar[dashed, bend right, "F"']
\end{tikzcd}\end{document}
```
We can check the $F$ as follows works with the unit given by inclusion of strings of length one and $f^\#$ by extending $f$ to strings of arbitrary length by induction on the length:
$$FX = \left( \coprod_{n\in\mathbb{N}}X^n, \text{concatenation of strings}, \text{empty string} \right)$$
-
```tikz
\usepackage{tikz-cd, amsmath, amssymb}\begin{document}\begin{tikzcd}[every label/.append style={font=\small}, column sep=huge]
\mathbf{Ab}\rar["U"']\rar[shift left = 3, phantom, "\bot"] & \mathbf{Set}\lar[dashed, bend right, "\text{abelianisation}"']
\end{tikzcd}\end{document}
```
-
```tikz
\usepackage{tikz-cd, amsmath, amssymb}\begin{document}\begin{tikzcd}[every label/.append style={font=\small}, column sep=huge]
\mathbf{k\text{-}Vect}\rar["U"']\rar[shift left = 3, phantom, "\bot"] & \mathbf{Set}\lar[dashed, bend right, "\text{free vector space over }k"']
\end{tikzcd}\end{document}
```
-
```tikz
\usepackage{tikz-cd, amsmath, amssymb}\begin{document}\begin{tikzcd}[every label/.append style={font=\small}, column sep=huge]
\mathbf{Top}\rar\rar[shift left = 3, phantom, "\bot"]\rar[shift right = 3, phantom, "\bot"] & \mathbf{Set}\lar[dashed, bend right, "\text{discrete}"']\lar[dashed, bend left, "\text{indiscrete}"]
\end{tikzcd}\end{document}
```
- If $f\colon X\to Y$ is a function of sets. Then $f^*\colon (\mathcal{P}(Y), \subseteq)\to(\mathcal{P}(X), \subseteq)$ given by $f^*(U)=\{x\in X \mid f(x)\in U\}$ is monotone map (so a functor if we consider the posets as categories). We have adjoints $\exists_f\dashv f^*\dashv\forall_f$ given by $\exists_f(V) = \{y\in Y\mid (\exists x \in V)(f(x)=y)\}$ and $\forall_f(V) = \{y\in Y\mid (\forall x \in V)(f(x)=y)\}$.