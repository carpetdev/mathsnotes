Let $R$ be a commutative ring and $a,b,d\in R$. Then $d$ is a **common divisor** of $a$ and $b$ if $d\mid a$ and $d\mid b$. Have ${} d$ is a $gcd(a,b)$ (**greatest common divisor**) if $d$ is a common divisor of $a$ and $b$ and any common divisor of $a$ and $b$ divides $d$. Inductively, $\gcd(a_1,\dots,a_n)=\gcd(\gcd(a_1,\dots,a_{n-1}),a_n)\ \forall n\geq 3$.

GCDs need not exist. For example, in $R=\mathbb{Z}[i\sqrt{5}]$, $4$ and $6$ have no greatest common divisor (both have common divisors $2$ and $1+i\sqrt{5}$). GCDs are unique up to associates.

For some $a\in R$ where $a\neq 0$ and $a\notin R^\times$, and $b,c\in R$, $a$ is:
- **irreducible** if $a=bc$ implies $a\sim b$ or $a\sim c$
- **prime** if $a\mid bc$ implies $a\mid b$ or $a\mid c$.

Irreducible implies prime but the converse only holds e.g. in a UFD (ID where all nonzero non-invertible elements have factorisations into irreducibles that are unique up to order and associates).

An ideal $I\lhd R$ is **prime** if $I\neq R$ and $ab\in I$ then $a\in I$ or $b\in I$.

${} \spec(R) = \{I\lhd R \mid I\text{ prime}\} {}$ is the **prime ideal spectrum** of $R$ and $\mspec(R)=\{I\lhd R \mid I \text{ maximal}\}$ is the **maximal ideal spectrum** of $R$.

Example:
$R = \mathbb{Z}[X]$, $(x)$ is prime but not maximal.

Exercise:
- $a \in R$ prime $\iff Ra=(a)\in\spec(R) {}$
- $a\in R$ irreducible $\iff Ra {}$ is maximal among the proper principal ideals of $R$
- $\mspec(R)\subseteq \spec(R)$

