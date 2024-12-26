Let $R$ be a commutative ring and $a,b,d\in R$. Then $d$ is a **common divisor** of $a$ and $b$ if $d\mid a$ and $d\mid b$. Have ${} d$ is a $gcd(a,b)$ (**greatest common divisor**) if $d$ is a common divisor of $a$ and $b$ and any common divisor of $a$ and $b$ divides $d$. Inductively, $\gcd(a_1,\dots,a_n)=\gcd(\gcd(a_1,\dots,a_{n-1}),a_n)\ \forall n\geq 3$.

GCDs need not exist. For example, in $R=\mathbb{Z}[i\sqrt{5}]$, $4$ and $6$ have no greatest common divisor (both have common divisors $2$ and $1+i\sqrt{5}$). GCDs are unique up to associates.

For some $a\in R$ where $a\neq 0$ and $a\notin R^\times$, and $b,c\in R$, $a$ is:
- **irreducible** if $a=bc$ implies $a\sim b$ or $a\sim c$
- **prime** if $a\mid bc$ implies $a\mid b$ or $a\mid c$.

Irreducible implies prime but the converse only holds e.g. in a UFD (ID where all nonzero non-invertible elements have factorisations into irreducibles that are unique up to order and associates).

An ideal $I\lhd R$ is **prime** if $I\neq R$ and $ab\in I$ then $a\in I$ or $b\in I$.

$\spec(R) = \{I\lhd R \mid I\text{ prime}\}$ is the **prime ideal spectrum** of $R$ and $\mspec(R)=\{I\lhd R \mid I \text{ maximal}\}$ is the **maximal ideal spectrum** of $R$.

Example:
$R = \mathbb{Z}[X]$, $(x)$ is prime but not maximal.

Exercise:
- $a \in R$ prime $\iff Ra=(a)\in\spec(R) {}$
- $a\in R$ irreducible $\iff Ra {}$ is maximal among the proper principal ideals of $R$
- $\mspec(R)\subseteq \spec(R)$

Lemma:
$I,J,K\lhd R$ with $K\in\spec(R)$. If $I\cap J \subseteq K$ then either $I\subseteq K$ or $J\subseteq K$ (or both).

Proof:
Suppose $I\nsubseteq K$. Pick $a\in I\setminus K$. Then for all $b\in J$, $ab\in I\cap J\subseteq K \in \spec(R) \implies b\in K$. $\blacksquare$

Theorem:
$I\lhd R$.
- $I\in\spec(R)\iff R/I$ is an integral domain
- $I\in \mspec(R)\iff R/I$ is a field
- $R$ is a principal ideal domain $\iff$ $\spec(R)=\{(0)\}\cup\mspec(R)$

$I\lhd R$ is **nilpotent** if there exists an $n\in \mathbb{N}$ such that $\{\sum_{i=1}^k a_1^{(i)}\dots a_n^{(i)} \mid a_j^{(i)}\in I\ \forall i,j\}=I^n=(0)$. $I$ is **nil** if every element is nilpotent.

Theorem (First Isomorphism):
$f\in \hom(R,S)$ induces a ring isomorphism $\bar{f}\colon R/\ker(f)\to \im(f)$.

Corollary:
- For every ideal $I\lhd R$, there exists $f\in\hom(R,X)$ such that $I=\ker(f)$ for some commutative ring $X$ (in fact $X=R/I$
- $f\in\hom(R,S)$ with $\bar{f}\in\operatorname{Iso}(R/\ker(f), \im(f))$. Then 
    1. $\bar{f}$ induces an inclusion preserving bijection $$\{I\lhd R \mid \ker(f)\subseteq I\} \longleftrightarrow \{I\lhd R/\ker(f)\}$$ and restricting to prime or maximal ideals is still a bijection.
    2. $\forall I\lhd R$ such that $I\supseteq\ker(f)$, the quotient map $\pi\colon R\to R/I$ induces a ring isomorphism $R/I\to \frac{R/\ker(f)}{I/\ker(f)}$

---

$\phi\colon R\to S \in \hom(R,S)$. Suppose ${} J\lhd S$. Then $\phi^{-1}(J) = \{a\in R \mid \phi(a)\in J\} \lhd R$. Exercise: If $J\in\spec(S)$, then $\phi^{-1}(S)\in\spec(R)$. But if $I\lhd R$, then $\phi(I)$ need not be an ideal of $S$, unless $\phi$ is surjective. Also, $\phi^{-1}(J)$ for $J\in\mspec(S)$ need not be in $\mspec(R)$.

$\phi\colon R\to S$ ring homomorphism, $I\lhd R$, $J\lhd S$.
- $J\c=\phi^{-1}(J)$ is the **contraction** of $J$ to $R$
- $I\e=S\phi(I)$ is the **expansion** of $I$ to $S$ (smallest ideal of $S$ containing $\phi(I)$)
- $\phi^*\colon \spec(S)\to\spec(R)$, $J\mapsto\phi^*(J)=\phi^{-1}(J)$ is the **induced morphism**

Example:
- $\phi\colon \mathbb{Z}\to \mathbb{Z}/12$. $\spec(\mathbb{Z})=\{(0), \underset{\rlap{p\text{ prime}}}{(p)}\}$, $\spec(\mathbb{Z}/12)=\{(2), (3)\}$ and $\phi^*$ is the inclusion.
- $\phi=\ev_0\colon \mathbb{Z}[X]\to \mathbb{Z}$. Then $\phi^*$ is the inclusion.