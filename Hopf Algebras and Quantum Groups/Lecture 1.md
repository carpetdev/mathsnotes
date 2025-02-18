- Typically use ground field $\mathbb{C}$.
- Every vector space has a basis (Zorn's Lemma), and all bases are of the same cardinality
- Every set is a basis of some vector space (take formal linear combinations)

Proposition (linear extension from basis):
$B$ a basis of $V$, $W$ a vector space, $l\colon B\to W$ a function. Then $\exists\ !$ linear map $L\colon V\to W$ with $\left. L \right|_B=l$.

- $\lin(V,W) = \{L\colon V\to W\mid L\text{ is a linear map}\}$
- $\End(V)=\lin(V,V)$

The dual space $V^* = \lin(V,\mathbb{C})$. If $v\in V$, $\xi\in V^*$, the value $\xi(v)\in\mathbb{C}$ is sometimes written as $\left< v,\xi \right>$. If $B$ is a basis of $V$, we can obtain the **dual system** $B'\subseteq V^*$ as the set of delta functionals for elements of $B$. $B'$ is linearly independent, but it spans $V^*$ if and only if $\dim(V)<\infty$. 

For a map $V\ar{L}W$, the **contragredient** (or **adjoint**) map $W^*\ar{L^*}V^*$ is defined by $\left< v, L^*(\psi) \right>_V = \left< Lv,\psi \right>_W$. Note $V^{**}=V$ and $L^{**}=L$ only hold in finite dimensions.

Proposition (universal mapping property for quotients):
If $L\colon V\to W$ is a linear map such that $U\subseteq\ker(L)$, then $\exists\ !$ $\bar{L}\colon V/U\to W$ such that $L=\bar{L}\circ q$.

A **tensor product** of vector spaces $E,F$ is a space $V$ equipped with a bilinear map $i\colon E\times F\to V$ which has the universal mapping property: whenever $b\colon E\times F\to U$ is bilinear, ${} \exists\ !\ B\colon V\to U {}$ such that $Bi=b$.

Theorem:
A tensor product of $E,F$ exists and if $V, V'$ are two tensor products, then they are isomorphic via linear isomorphism $I$ satisfying
```tikz
\usepackage{tikz-cd, amsmath, amssymb}\begin{document}\begin{tikzcd}[every label/.append style={font=\small}]
E\times F\rar{i}\dar["i'"'] & V\\
V'\ar[ru, dashed, "I"']
\end{tikzcd}\end{document}
```
So the tensor product is unique up to a canonical isomorphism, and we denote it $E\otimes F$.

- Given a basis $\{e_i\}$ of $E$ and $\{f_j\}$ of $F$, $\{e_i\otimes f_j\}$ is a basis of $E\otimes F$
- $E\otimes \mathbb{C}\cong E$
- For $E\ar{L}V,\ F\ar{M}W$, $(L\otimes M)(e\otimes f)=L(e)\otimes M(f)$
- $(E\otimes F)\otimes G \cong E \otimes(F \otimes G) \eqqcolon E\otimes F\otimes G$.