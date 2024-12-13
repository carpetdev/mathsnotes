## Functors and Natural Transformations

A **functor** $F\colon \cat{C}\to\cat{D}$ consists of a function $F_o\colon\ob(\cat{C})\to\ob(\cat{D})$ and functions $F_{X,Y}\colon\cat{C}(X,Y)\to\cat{D}(F_oX,F_oY)$ for all $X,Y\in\cat{C}$ such that:
1. If
```tikz
\usepackage{tikz-cd}\begin{document}\begin{tikzcd}
X\rar["f"] & Y\rar["g"] & Z
\end{tikzcd}\end{document}
```
then $F(g\circ_\cat{C}f)=Fg\circ_\cat{D}Ff$
2. If
```tikz
\usepackage{tikz-cd}\begin{document}\begin{tikzcd}
X\rar["1_X"] & X
\end{tikzcd}\end{document}
```
then $F 1_X=1_{FX}$

Example:
- $\mathbf{Grp} \overset{U}{\longrightarrow}\mathbf{Set}$
  - $(G,*,1)\longmapsto G$
  - $\big( f\colon(G,*,1)\to(H,*,1) \big) \longmapsto (G\to H)$
- $\mathbf{Top} \overset{U}{\longrightarrow} \mathbf{Set}$
  - $(X,\tau)\longmapsto X$
- $\mathbf{Set}\longrightarrow\mathbf{Grp}$

```tikz
\usepackage{tikz-cd, amsmath}\begin{document}\begin{tikzcd}
X\dar["f"']\rar[maps to] & \text{Free group on X}\dar["\text{group homomorphism}"]\\
Y\rar[maps to] & \text{Free group on Y}
\end{tikzcd}\end{document}
```

- $\mathbf{Set}\overset{\text{indisc}}{\longrightarrow}\mathbf{Top}$

```tikz
\usepackage{tikz-cd, amsmath, amssymb}\begin{document}\begin{tikzcd}
X\dar["f"']\rar[maps to] & (X,\{\varnothing,X\})\dar["\text{continuous function}"]\\
Y\rar[maps to] & (Y, \{\varnothing,Y\})
\end{tikzcd}\end{document}
```

- $\mathbf{Set}\overset{\text{disc}}{\longrightarrow}\mathbf{Top}$

```tikz
\usepackage{tikz-cd, amsmath, amssymb}\begin{document}\begin{tikzcd}
X\dar["f"']\rar[maps to] & (X,\mathcal{P}(X))\dar["\text{continuous function}"]\\
Y\rar[maps to] & (Y, \mathcal{P}(Y))
\end{tikzcd}\end{document}
```

- Let $(P,\leq)$, $(Q,\lesssim)$ be posets and $\cat{P}$, $\cat{Q}$ the corresponding categories. Monotone maps $F$ ($x\leq y\implies Fx\lesssim Fy$) correspond to functors $\underline{F}$.
- Let $M,\ N$ be monoids and $\cat{M},\ \cat{N}$ be the corresponding categories. Monoid homomorphisms correspond to functors.

We can compose functors (Exercise: this is well defined):

```tikz
\usepackage{tikz-cd, amsmath, amssymb}\begin{document}\begin{tikzcd}
\mathcal{C}\rar["F"] & \mathcal{D}\rar["G"] & \mathcal{E}\\
\text{ob}\mathcal{(C)}\rar["F_o"] & \text{ob}\mathcal{(D)}\rar["G_0"] & \text{ob}\mathcal{(E)}\\
\mathcal{C}(X,Y)\rar["F_{X,Y}"] & \mathcal{D}(FX,FY)\rar["G_{X,Y}"] & \mathcal{E}(GFX,GFY)\\
\end{tikzcd}\end{document}
```

For any category $\cat{C}$, we have a functor $1_\cat{C}\colon\cat{C}\to\cat{C}$, which has $1_{\ob(\cat{C})}$ and $1_{X,Y}$ all identities. Exercise: There is a (large) category with objects given by (small) categories and morphisms given by functors.

Given $\mathbf{Cat}$ is a (large) category, we have a notion of isomorphism in $\mathbf{Cat}$.

```tikz
\usepackage{tikz-cd, amsmath, amssymb}\begin{document}\begin{tikzcd}
\mathcal{C}\rar[shift left, "F"] & \mathcal{D}\lar[shift left, "F^{-1}"]
\end{tikzcd}\end{document}
```

$FF^{-1}=1_\cat{D}$ and $F^{-1}F=1_\cat{C}$.

In practice, this is too restrictive (we usually want $FF^{-1}X \cong X$ instead of equality).

---

```tikz
\usepackage{tikz-cd, amsmath, amssymb}\begin{document}\begin{tikzcd}
\mathcal{C}\rar[shift left, "F"]\rar[shift right, "G"'] & \mathcal{D} \quad\text{functors}
\end{tikzcd}\end{document}
```

A **natural transformation** $\phi\colon F\Rightarrow G$ consists of a family of maps in $\cat{D}$, $\{\phi_X\colon FX\to GX\}_{X\in\ob(\cat{C})}$ satisfying for $f\colon X\to Y$ in $\cat{C}$ the **naturality square**:
```tikz
\usepackage{tikz-cd, amsmath, amssymb}\begin{document}\begin{tikzcd}
FX\rar["Ff"]\dar["\phi_X"']&FY\dar["\phi_Y"]\\
GH\rar["Gf"']&GY
\end{tikzcd}\end{document}
```
If all $\phi_X$ are isomorphisms then we call $\phi$ a **natural isomorphism**. Exercise: check this is the same as being an isomorphism in $[\cat{C},\cat{D}]$.

Example:
```tikz
\usepackage{tikz-cd, amsmath, amssymb}\begin{document}\begin{tikzcd}[every label/.append style={font=\small}]
\mathbf{CRing}\rar[bend left, "\big(\text{M}_{n,n}(-)){,}\ \text{matrix mult\textsuperscript{n}}\big)", ""{name=U, below}]\rar[bend right, "U"', ""{name=D}] &[5em] \mathbf{Mon}
\ar[Rightarrow, from=U, to=D, "\det" pos=0.6]
\end{tikzcd}\end{document}
```
The family of maps corresponds to monoid homomorphisms which are natural, and $\det$ satisfies these properties (Exercise: check).

Proposition:
Given categories $\cat{C}$, $\cat{D}$, there is a category $[\cat{C},\cat{D}]$ with $\ob{}[\cat{C},\cat{D}]\coloneqq\{\text{functors }\cat{C} \overset{F}\to\cat{D}\}$ and $[\cat{C},\cat{D}](F,G) \coloneqq \{\text{natural transformations from }F \text{ to }G\}$. We call this a functor category.

Proof:
First, we set ${(1_F)}_X\colon FX\to FX$ to be the identity $1_{FX}$. Next, we need to define the composite for $F\overset{\phi}{\longrightarrow}G\overset{\psi}{\longrightarrow}H$, $(\psi\circ\phi)\colon F\to H$. Set $(\psi\circ\phi)_X=\psi_X\circ\phi_X$. This is natural, since for $f\in\cat{C}(X,Y)$
```tikz
\usepackage{tikz-cd, amsmath, amssymb}\begin{document}\begin{tikzcd}[every label/.append style={font=\small}]
FX\rar["\phi_X"]\dar["Ff"']\ar[rr, bend left=40, "(\psi\circ\phi)_X"] & GX\rar["\psi_X"]\dar["Gf"] & HX\dar["Hf"]\\
FY\rar["\phi_Y"']\ar[rr, bend right=40, "(\psi\circ\phi)_Y"'] & GY\rar["\psi_Y"'] & HY
\end{tikzcd}\end{document}
```
commutes. Left to check the category axioms are satisfied. $\blacksquare$
