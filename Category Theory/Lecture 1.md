Definition:
A **category** $\mathbb{C}$ consists of
1. A class $\Ob(\mathbb{C})$
2. For every $X,Y \in \Ob(\mathbb{C)}$, a class $\mathbb{C}(X,Y)$
3. For every ${} X, Y, Z \in \Ob(C) {}$, a function $\mathbb{C}(Y,Z) \times \mathbb{C}(X,Y) \overset{\cdot}{\longrightarrow} \mathbb{C}(X,Z)$
4. For every ${} X\in\Ob(\mathbb{C)} {}$, an element $1_X \in \mathbb{C}(X,X)$

such that
1. (associativity) $\forall f \in \mathbb{C}(X,Y),\ g \in(Y, Z),\ h\in \mathbb{C}(Z,W),\ h\cdot(g\cdot f)=(h\cdot g)\cdot f \tag{s}$
2. (unitality) $\forall f\in \mathbb{C}(X,Y), f\cdot1_X=f,\ 1_X\cdot f=f$

Notation:
- ${} X\in\Ob(\mathbb{C)} {}$ is an **object** of $\mathbb{C}$
- $f \in \mathbb{C}(X,Y)$ is a **morphism** (or map, or arrow) from $X$ to $Y$, written $f:X\to Y$
- $g\cdot f$ is the **composite** of $f$ and $g$
```tikz
\usepackage{tikz-cd}\begin{document}\begin{tikzcd}
X\rar{f}\ar[rr, bend right,"g\cdot f"'] & Y\rar{g} & Z
\end{tikzcd}\end{document}
```
- $1_X$ is the **identity** on $X$
```tikz
\usepackage{tikz-cd}\begin{document}\begin{tikzcd}
X\rar{1_X}&X
\end{tikzcd}\end{document}
```
Examples (category, objects, morphisms):
- $\cat{Set}$, sets, functions
- $\cat{Grp}$, groups, group homomorphisms
- $\cat{Ring}$, rings, ring homomorphisms
- $\cat{Top}$, topological spaces, continuous functions (open maps give a different category)
- $\cat{Mod}_R$, $R$-modules, $R$-module homomorphisms

Definition: A category $\mathbb{C}$ is
- **locally small** if for every ${} X,Y\in \Ob(C),\ \mathbb{C}(X,Y) {}$ is a set
- **small** if locally small and $\Ob(\mathbb{C)}$ is a set
## Monoids as categories
Let $(M,\ \cdot,\ 1)$ be a monoid (group without inverses). We define a category $\cat{M}$ as follows
- ${} \Ob(\cat{M)}=\{ * \} {}$
- $\cat{M}(*,*)=M$
- Composition is given by the monoid operation $\cdot$
- The identity on $*$ is given by the monoid identity
## Posets as categories
Let $(P,\ \leq)$ be a poset. We define a category $\cat{P}$ as follows
- ${} \Ob(\cat{P)}=P {}$
- For $x, y\in P$, $${} \cat{P}(x,y)=\begin{cases}
\{ * \},  & \text{if }x\leq y\\ \\
\varnothing, & \text{otherwise}
\end{cases} {}$$
- For $x \in P,\ 1_x = * \in \cat{P}(x,x)$
## Basic notions
Fix a category $\mathbb{C}$.

Definition:
Let $f:X \to Y$ be a map in $\mathbb{C}$.
- An **inverse** of $f$ is a map $g:Y\to X$ such that $g\cdot f=1_X$ and $f\cdot g=1_Y$
```tikz
\usepackage{tikz-cd}\begin{document}\begin{tikzcd}
X \rar{f} \ar[rd, bend right, "1_X"'] & Y\dar{g}\\
& X
\end{tikzcd} and \begin{tikzcd}
Y \rar{g} \ar[rd, bend right, "1_Y"'] & X\dar{f}\\
& Y
\end{tikzcd}\end{document}
```
- $f$ is an **isomorphism** if there exists an inverse for it

Examples:
- In $\cat{Set}$, isomorphism = bijection
- In $\cat{Grp}$, $\cat{Ring}$, $\cat{Vect}_K$, etc., isomorphism = usual notions.
- In $\cat{Top}$, isomorphism = homeomorphism

Definition:
An object $T$ of $\mathbb{C}$ is said to be **terminal** if $\forall X \in \mathbb{C}\ \exists!f:X\to T$

Remark:
Let $T, T'\in \mathbb{C}$. Assume that $T, T'$ are terminal. Then there exists a unique isomorphism $f:T\to T'$ (since any map $T\to T$ is the identity).

Examples:
- In $\cat{Set}$, $\{ * \}$ is terminal
- In $\cat{Grp}$, $\{ * \}$ is terminal
- In $\cat{Rel}$, $\varnothing$ is terminal