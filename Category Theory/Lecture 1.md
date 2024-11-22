Definition:
A **category** $\cat{C}$ consists of

1. A class $\ob(\cat{C})$
2. For every $X,Y \in \ob(\cat{C)}$, a class $\cat{C}(X,Y)$
3. For every $X, Y, Z \in \ob(C)$, a function $\cat{C}(Y,Z) \times \cat{C}(X,Y) \overset{\cdot}{\longrightarrow} \cat{C}(X,Z)$
4. For every $X\in\ob(\cat{C)}$, an element $1_X \in \cat{C}(X,X)$

such that

1. (associativity) $\forall f \in \cat{C}(X,Y),\ g \in(Y, Z),\ h\in \cat{C}(Z,W),\ h\cdot(g\cdot f)=(h\cdot g)\cdot f \tag{s}$
2. (unitality) $\forall f\in \cat{C}(X,Y), f\cdot1_X=f,\ 1_X\cdot f=f$

Notation:

- $X\in\ob(\cat{C)}$ is an **object** of $\cat{C}$
- $f \in \cat{C}(X,Y)$ is a **morphism** (or map, or arrow) from $X$ to $Y$, written $f\colon X\to Y$
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

- $\mathbf{Set}$, sets, functions
- $\mathbf{Grp}$, groups, group homomorphisms
- $\mathbf{Ring}$, rings, ring homomorphisms
- $\mathbf{Top}$, topological spaces, continuous functions (open maps give a different category)
- $\mathbf{Mod}_R$, $R$-modules, $R$-module homomorphisms

Definition: A category $\cat{C}$ is

- **locally small** if for every $X,Y\in \ob(C),\ \cat{C}(X,Y)$ is a set
- **small** if locally small and $\ob(\cat{C)}$ is a set

## Monoids as categories

Let $(M,\ \cdot,\ 1)$ be a monoid (group without inverses). We define a category $\cat{M}$ as follows

- $\ob(\cat{M)}=\{ * \}$
- $\cat{M}(*,*)=M$
- Composition is given by the monoid operation $\cdot$
- The identity on $*$ is given by the monoid identity

## Posets as categories

Let $(P,\ \leq)$ be a poset. We define a category $\cat{P}$ as follows

- $\ob(\cat{P)}=P$
- For $x, y\in P$, $${} \cat{P}(x,y)=\begin{cases}
\{ * \}  & x\leq y\\ \\
\varnothing & \text{otherwise}
\end{cases} {}$$
- For $x \in P,\ 1_x = * \in \cat{P}(x,x)$

## Basic notions

Fix a category $\cat{C}$.

Definition:
Let ${} f\colon X \to Y {}$ be a map in $\cat{C}$.

- An **inverse** of $f$ is a map ${} g\colon Y\to X {}$ such that $g\cdot f=1_X$ and $f\cdot g=1_Y$

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

Example:

- In $\mathbf{Set}$, isomorphism = bijection
- In $\mathbf{Grp}$, $\mathbf{Ring}$, $\mathbf{Vect}_K$, etc., isomorphism = usual notions.
- In $\mathbf{Top}$, isomorphism = homeomorphism

Definition:
An object $T$ of $\cat{C}$ is said to be **terminal** if ${} \forall X \in \cat{C}\ \exists!f\colon X\to T {}$

Remark:
Let $T, T'\in \cat{C}$. Assume that $T, T'$ are terminal. Then there exists a unique isomorphism ${} f\colon T\to T' {}$ (since any map $T\to T$ is the identity).

Example:

- In ${} \mathbf{Set}$, $\{ * \}$ is terminal
- In ${} \mathbf{Grp} {}$, $\{ * \}$ is terminal
- In $\mathbf{Rel}$, $\varnothing$ is terminal
