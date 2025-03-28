A (set-valued) **presheaf** on a category $\cat{C}$ is a functor $\cat{C}\op\to \mathbf{Set}$.

Example:
Let $\cat{C}$ be a category and $X\in \ob(\cat{C})$. Then there is a presheaf $\cat{C}(-,X)\colon \cat{C}\op\to \mathbf{Set}$ mapping $f\colon V\to W$ to $\cat{C}(W,X)\to\cat{C}(V,X)$ given by $g\mapsto g\circ f$.

A **representation** for a presheaf $F\colon \cat{C}\op\to \mathbf{Set}$ consists of:
1. an object $X\in\cat{C}$
2. a natural isomorphism $\cat{C}(-,X)\overset{\phi}{\cong} F$.

A presheaf is called **representable** if it has a representation.

A functor $\cat{C}\to\mathbf{Set}$ is called representable if $(\cat{C}\op)\op\to \mathbf{Set}$ is a representable functor on $\cat{C}\op$.

Example:
- $\mathbf{Grp}\ar{U}\mathbf{Set}$. Have $\mathbf{Grp}((\mathbb{Z},+,0),(G,\cdot,e))\cong U(G,\cdot,e)=G$.
- $\mathbf{Top}\ar{U}\mathbf{Set}$ is represented by $*$.
- $\mathbf{Top}\op\to\mathbf{Set}$, $X\mapsto \mathcal{O}(X)$ (open subsets of $X$). This is represented by the object $S=\{0,1\}$ with $\mathcal{O}(S)$ generated by $\{1\}$.
- $\mathbf{Set}\op\to\mathbf{Set}$, ${} X\mapsto\{\text{subsets of }X\} {}$. Representing object is ${} \underline{2}=\{0, 1\} {}$.
- $\mathbf{Cat}\to\mathbf{Set}$, $\cat{C}\mapsto\operatorname{Arr}(\cat{C})$ has representing object $\{\bullet\to\bullet\}$.
- $\mathbf{Cat}\to\mathbf{Set}$, $\cat{C}\mapsto\operatorname{Iso}(\cat{C})$ has a representing object $\{\bullet\leftrightarrows\bullet\}$.

The category of presheaves on $\cat{C}$ is the functor category $[\cat{C}\op,\mathbf{Set}]$.

Example:
Let $h\colon Y\to Z$ be a morphism in a $\cat{C}$. We have morphisms
```tikz
\usepackage{tikz-cd, amsmath, amssymb}\begin{document}\begin{tikzcd}[every label/.append style={font=\small}]
\mathcal{C}^\mathrm{op}\rar[bend left, "{\mathcal{C}(-,Y)}"]\rar[bend right, "{\mathcal{C}(-,Z)}"']& \mathbf{Set}
\end{tikzcd}\end{document}
```
and a natural transformation $\cat{C}(-,h)\colon \cat{C}(-,Y)\Rightarrow \cat{C}(-,Z) {}$.

Proof:
Let $f\in\cat{C}(A,B)$. We need the following diagram to commute:
```tikz
\usepackage{tikz-cd, amsmath, amssymb}\begin{document}\begin{tikzcd}[every label/.append style={font=\small}]
\mathcal{C}(B,Y)\rar["{\mathcal{C}(B,h)}"]\dar["{\mathcal{C}(f,Y)}"'] & \mathcal{C}(B,Z)\dar["{\mathcal{C}(f,Z)}"]\\
\mathcal{C}(A,Y)\rar["{\mathcal{C}(A,h)}"'] & \mathcal{C}(A,Z)
\end{tikzcd}\end{document}
```
This is true by associativity. $\square$

A natural transformation between representable functors is **representable** if it is of the form $\cat{C}(-,h)\colon \cat{C}(-,Y)\Rightarrow \cat{C}(-,Z)$.

Lemma (Yoneda):
Let $F\colon \cat{C}\op\to \mathbf{Set}$ be a presheaf and $X\in\cat{C}$. Then there is a bijection $[\cat{C}\op,\mathbf{Set}](\cat{C}(-,X),F) \cong F(X)$ which is natural in $X\in\cat{C}$ and $F\in[\cat{C}\op,\mathbf{Set}]$.

Idea: Presheaves can be canonically built as colimits (gluing) of representable ones.

Proposition:
$\cat{C}(X,-)\colon \cat{C}\to \mathbf{Set}$ preserve limits.

Proposition:
$\cat{C}\hookrightarrow[\cat{C}\op,\mathbf{Set}]$, $X\mapsto(\cat{C}(-,X)\colon \cat{C}\op\to \mathbf{Set})$ is a fully faithful functor.

Idea: Presheaves can be thought of as "variable sets".

A morphism $f\colon X\to Y$ is called **mono** if $fg=fh\implies g=h$ for $W\overunderset{g}{h}{\rightrightarrows}X$.

Proposition:
Monos in $\mathbf{Set}$ are precisely the injection functions.

Proposition:
Equalisers (when they exist) are monomorphisms.
