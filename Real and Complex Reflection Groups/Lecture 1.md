# Chapter 1 - Basic definitions & initial results
Let $K$ be a field (mostly $\mathbb{R}$ or $\mathbb{C}$) and $V$ be a vector space over $K$.

$\End_K(V)$ is the ring of endomorphisms from $V$ to $V$. We have $\GL(V) \subseteq \End_K(V)$ consisting of the isomorphisms of $V$ to $V$. 

Pick a basis for $V$ and assume that $\dim V=n$. Then $\End_K(V) \cong M_{n\times n}(K)$ and $\GL(V) \cong \GL_n(K)$.

$\bar{\phantom{x}} : \mathbb{C} \to \mathbb{C}$ will be complex conjugation, $\overline{a+ib} = a-ib$. Then we regard $\mathbb{R}$ as a subfield of $\mathbb{C}$ by ${} \mathbb{R} = \{ \lambda \in \mathbb{C} \mid \bar{\lambda} = \lambda \} {}$.

A Hermitian form on $V$ is a map $(\ ,\ ) : V\times V\to \mathbb{C}$ which, for all $w, v, u \in V,\ \lambda \in \mathbb{C}$, satisfies
1. $(u+w,v) = (u,v) + (w,v)$
2. $(\lambda v,w)= \lambda(v,w)$
3. $(v,w) = \overline{(w,v)}$

We'll say the form is sesquilinear. The form is positive definite provided $(v,v) > 0$ for all $v\in V\setminus \{ 0 \}$. Note here that $(v, v)$ is real so this makes sense. We call positive definite Hermitian forms **inner products**. The pair $(V,\ (\ ,\ ))$ is called an **inner product space**. If $V$ is an inner product space, then we can define $\lVert v \rVert = \sqrt{ (v, v) }$ (the length of $v$). We say that $v, w \in V$ are **orthogonal** if and only if $(v,w)=0$. An **orthonormal basis** of $V$ is a basis $\{ v_1,\dots,v_n \}$ such that $${} (v_i,v_j) = \begin{cases}
1 & i=j\\
0 & i\neq j
\end{cases} {}$$
Suppose that $\{ e_1,\dots,e_n \}$ is an orthonormal basis. Let $v,w\in V$ and write $v = \sum_{i=1}^n\lambda_ie_i,\ w = \sum_{i=1}^n\mu_ie_i$. Then $(v, w) = \sum_{i=1}^n\lambda_i\overline{\mu_i}$.

We say that inner products $(\ ,\ )_1$ and ${} ( \ ,\  )_2 {}$ on $V$ are equivalent if there exists $\phi \in \GL(V)$ so that $(v,w)_1 = (\phi(v),\phi(w))_2$.

>[!thm]
>If $(\ ,\ )_1$ and $(\ ,\ )_2$ are inner products on $V$, then they are equivalent.

Continue to assume that $V$ is an inner product space. For $X\subseteq V$, define $X^\perp$ = $\{ v\in V : (v,x)=0\ \forall x \in X \}$. We call this the **orthgonal complemenet** to $X$ in $V$. Have
- $X^\perp$ is a subspace of $V$
- $X^\perp \cap X \subseteq \{ 0 \}$
- $(X^\perp)^\perp = \left< X \right>$

Write $V=U\oplus W$ if $U$ and $W$ are subspaces of $V$ such that $V = U+W$ and $U\cap W=\{ 0 \}$. Further, we write $V=U\perp W$ if and only if $V = U\oplus W$ and $U = W^\perp$.

A **hyperplane** of $V$ is a subspace of $V$ of dimension $\dim V - 1$ (of codimension 1).

>[!lem]
>Suppose that $V$ is an inner product space and $x \in V\setminus \{ 0 \}$. Then $x^\perp$ is a hyperplane of $V$.

Proof:
Define ${} f_x\colon V\to K {}$ by $\sigma\mapsto(\sigma,x)$. This is a linear transformation. Since $x\neq0$, $f_x(x)\neq0$, so $f_x$ is surjective. Hence $x^\perp = \ker f_x$ is a hyperplane. $\blacksquare$

>[!lem] Exercise
>Assume that $V$ is an inner product space and $X=\{ r_1,\dots,r_b \} \subseteq V$. Then ${} \bigcap_{i=1}^nr_i^\perp=\{ 0 \} {}$ if and only if $X$ contains a basis for $V$.