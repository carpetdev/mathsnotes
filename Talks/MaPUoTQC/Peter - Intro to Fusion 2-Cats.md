- A **fusion category** is a finitely semisimple linear (over $\mathbb{k}$) monoidal category with duals and a simple unit
    - E.g. $\cat{Rep}(A)$ for $A$ a fdim Hopf alg with antipode
- Finitely semisimple: there exists finitely many simple objects up to isomorphism and every object is a finite $\oplus$ of simples
- $X$ is simple if $\End(X)$ is a simple algebra
    - $\mathbb{k}=\mathbb{C}$: can only have $\End(X) \cong \mathbb{C}$
    - $\mathbb{k}=\mathbb{R}$, $\cat{Rep}_\mathbb{R}(\mathbb{Z}/3)$ has simples $1$ and $\sigma\colon g\mapsto \begin{pmatrix}0&-1\\1&-1\end{pmatrix}$ and $\End(\sigma)\cong \mathbb{C}$
- In a 2-cat, if $X$ is an object, $\End(X)$ is a monoidal 1-cat. In a semisimple 2-cat, $\End(X)$ is a (multi)fusion 1-cat
- Schur's Lemma/Maschke's Theorem: If $X,Y$ simple, $\operatorname{Hom}(X,Y)$ is an indecomposable bimodule between division algebras or 0
- In a F2C, $X,Y$ simple means $\operatorname{Hom}(X,Y)$ is indecomposable $\End(X)-\End(Y)$ cat. Isomorphic $\not\impliedby$Connected ($\exists$ non-zero morphism)

Examples:
- $\cat{2Vec}[G]$ for $G$ a finite group: objects are elements of $G$, morpshisms are $\delta_{g,h}\cat{Vec}$, $g\otimes h = gh$. Idempotent complete.

Thm: BF2C is (BF1C, some groups, a cocycle)