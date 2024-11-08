# Definitions and first examples

>[!def] Ring
>![[Ring#Definition|clean no-h]]

>[!exm]
>![[Ring#Example|clean no-h]]
^2602ea
- sorted up to here

> [!def] Algebra
> An algebra A over a field [[Notation#$K$]] (or a $K$-algebra) is a [[ring]] which is also a [[Module#^8fdbee|vector space]] under the same addition and a scalar multiplication satisfying $$\lambda \cdot (xy) = (\lambda \cdot x) y = x(\lambda \cdot y)$$ for all $\lambda \in K,\ x, y\in A$.
> 
> The **dimension** of a $K$-algebra $A$ is the dimension of $A$ as a $K$-vector space. The $K$-algebra is termed finite- or infinite-dimensional based on the vector space, and commutative or not based on the ring.
^b4fb14

The condition in [[#^b4fb14]] says that the scalars commute with everything. Formally, since $A$ is a vector space, and $1_{A}$ is a non-zero vector, it follows that the map $\lambda\mapsto\lambda \cdot1_{A}$ from $K$ to $A$ is injective and we can identify $K$ as a subset of $A$. So, for all $\lambda \in K$ and $x \in A$, we can write $\lambda x$ for $(\lambda \cdot1_{A})x$ and $$\lambda x=(\lambda \cdot1_{A})x=\lambda \cdot(1_{A}x)=\lambda \cdot(x1_{A})=x(\lambda \cdot1_{A})=x\lambda$$

>[!exm]
>1. The field $K$ is a commutative $K$-algebra of dimension 1
>2. The field $\mathbb{C}$ is also an $\mathbb{R}$-algebra of dimension 2 with basis $\{ 1, i \}$, where $i^2=-1$. More general, if $K$ is a subfield of a larger field $L$, then $L$ is an algebra over $K$ where addition, multiplication and scalar multiplication are given by addition and multiplication in $L$

>[!exm]
>The ring of $n\times n$ matrices over a field $K$ (see [[#^2602ea]]) form a $K$-algebra. It has dimension $n^2$. Let us consider the **matrix units** $E_{ij}$ for $1\leq i,j\leq n$. The matrix $E_{ij}=(e_{kl}^{ij})_{1\leq k,l\leq n}$ is such that $$e_{kl}^{ij}=\begin{cases}
1, & \text{if $k=i$ and $l=j$}\\
0, & \text{otherwise.}
\end{cases}$$
The matrix units form a basis for $M_{n}(K)$.

>[!exm]
>Polynomial rings $K[X]$ and $K[X,Y]$ are commutative infinite-dimensional $K$-algebras.

>[!exm]
>Let $V$ be a $K$-vector space and consider the $K$-linear maps on $V$ $$End_{K}(V)=\{ \alpha : V \to V \mid \text{$\alpha$ is $K$-linear} \}$$
>This is a $K$-algebra taking the composition of maps as multiplication, and addition and scalar multiplication defined pointwise, i.e. $$(\alpha+\beta)(v)=\alpha(v)+\beta(v) \text{ and } (\lambda\alpha)(v)=\lambda(\alpha(v))$$ for $\alpha,\beta \in \text{End}_{K}(V),\ \lambda \in K \text{, and } v \in V.$

Since a $K$-algebra $A$ is a $K$-vector space, it is often convenient to fix a basis, say $\{ b_{1}, b_{2}, \dots \}$. Then, it is sufficient to know the products $$b_{r}b_{s}\quad (r, s \geq1)$$
Then one can express arbitrary elements $x,y\in A$ as a *finite* linear combination of elements in the basis, i.e. $x=\sum_{i}\lambda_{i}b_{i}$ and $y=\sum_{j}\mu_{j}b_{j}$, and use the distributive laws to compute the product of $x$ and $y$ $$\left( \sum_{i}\lambda_{i}b_{i} \right) \left( \sum_{j}\mu_{j}b_{j} \right) = \sum_{i,j}\lambda_{i}\mu_{j}b_{i}b_{j} $$
If $A$ is finite-dimensional, we may display these products in a multiplication table.

More precisely. each product $b_{i}b_{j}$ again lies in $A$, so can be expressed uniquely as a linear combination of basis elements, i.e. $b_{i}b_{j} = \sum_{k}c_{ij}^k b_{k}$. Thus, one only needs to define the scalars $c_{ij}^k\in K$, called the **structure coefficients**.

>[!exm]
> For $\mathbb{C}$ an $\mathbb{R}$-algebra, the basis $\{ 1_{\mathbb{C}}, i \}$ recovers the usual complex multiplication.

>[!def] Direct product
>If $A_{1}, A_{2}, \dots, A_{n}$ are $K$-algebras, their **direct product** is the algebra with underlying vector space $$A_{1}\times A_{2}\times \cdots A_{n}=\{ (a_{1},a_{2},\dots,a_{n}) \mid a_i\in A_i,\ i=1,2,\dots,n \}$$ and component-wise addition and multiplication.

>[!def] Opposite algebra
>If $A$ is any $K$-algebra, then the **opposite algebra** $A^{op}$ of $A$ has the same underlying $K$-vector space as $A$, but the multiplication, denoted by $*$, is given by $a* b=ba$ for all $a, b\in A$.

>[!def] Division algebra
>A $K$-algebra $A$ is called a **division algebra** if every non-zero element $a\in A$ is invertible, i.e. there exists $b\in A$ such that $ab=1=ba$ (we write $b=a^{-1}$).

Division algebras have no zero divisors. Below is a famous example of a division algebra which isn't a field, discovered by Hamilton.

>[!exm]
>The algebra $\mathbb{H}$ of **quaternions** is the 4-dimensional $\mathbb{R}$-algebra with basis $\{ 1, i, j, k \}$ and multiplication defined by $i^2=j^2=k^2=-1$ and $ij=k$, $ji=-k$, $jk=i$, $kj=-i$, $ki=j$, $ik=-j$, extended to linear combinations.
