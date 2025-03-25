# Classification Programmes
- Typically everything we care about is encodable by reals
- Want a definable map $f$ from objects encoded by reals to invariants encoded by reals up to equivalences such that $x\sim y\iff f(x)\sim f(y)$
- Definable means Borel
    - A set is Borel if it's in the least $\sigma$-algebra containing the open sets
    - A function is Borel if preimages of Borel are Borel
    - Chuch's thesis for Borel: anything "hands-on definable" is Borel
# Quandles
Consider algebraic structures with a single binary operation $*$ such that:
1. $\forall a,b,c\quad a*(b*c)=(a*b)*(a*c)$
    - Just 1 gives a "left distributive algebra" / "shelf"
    - Note: left multiplication is a homomorphism
2. ${} \forall a,c\ \exists!b\quad a*b=c {}$
    - Just 1 and 2 gives a "rack"
    - E.g. group conjugation
3. $\forall a\quad a*a=a$
    - Just 1-3 gives a "quandle"
4. $\forall a,b\quad a*(a*b)=b$
    - All 4 gives a "kei" /  "involutive quandle"
# (Countable) graphs
As complicated as you get for countable first order structures. We only ever consider countable structures - assume underlying set is $\mathbb{N}$.
- Directed graph: $(\mathbb{N},E=\{(m,n)\in\mathbb{N}^2\mid \text{there's an edge from }m\text{ to }n\})$
- Quandle: $(\mathbb{N}, *=\{(m,n,k)\in\mathbb{N}^3\mid m*n=k\})$
- Structures $\leftrightarrow$ subsets of $\mathbb{N}^a$ $\leftrightarrow$ elements of $2^{\mathbb{N}^a}$

An isomorphism relation is Borel complete if every isomorphism relation for any kind of first order structure Borel reduces to it.

Theorem (ABT, Miller):
Isomorphisms of quandles is Borel complete

Proof:
(Directed) graphs is Borel compl$e$te. If we can encode graphs into quandles, that will show Borel completeness for quandles. Suppose $\tau$ is a bijection from $X$ to itself. Want to define $a*b=\tau b$ for all $a,b$, but that won't work. Say that $\phi\colon X\to \mathcal{P}X$ is $\tau$-replete if $\phi(a)\ni a$, $\phi(a)$ is closed under $\tau$ and $\tau^{-1}$, and $\phi(a)=\phi(\tau a)$. Given $\tau$-replete $\phi$, get a quandle by defining $a*b=\begin{cases}b &a\in b\\ \tau b& \text{else}\end{cases}$ (Kamada "dynamical quandle"). Given graph $G=(V,E)$, define a quandle on $V\times\{0,1\}$ as the dynamical quandle derived from the involution $\tau(v,0)=(v,1)$ and $\phi(v,i)=\{(w,j)\mid \text{there is an edge from }w\text{ to }v\}$. This encodes a quandle with left multiplication just checking if your point moves or not. Some respecting of isomorphisms going on. Note this isn't functorial.

whats the second connection he mentioned