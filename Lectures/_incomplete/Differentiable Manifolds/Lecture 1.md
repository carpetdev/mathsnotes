A **topology** on a set $X$ is a collection $\tau=\{U_\alpha \subseteq X \mid \alpha \in A\}$ of subsets, called **open sets**, such that:
1. $X, \varnothing \in \tau$
2. For any subset $A'\subseteq A$, $\bigcup_{\alpha \in A'}U_\alpha \in \tau$
3. For any finite subset $A'\subseteq A$, $\bigcap_{\alpha \in A'}U_\alpha \in \tau$

A set $V\subseteq X$ is **closed** if $X\setminus V$ is open. A **topological space** is a pair $(X,\tau)$, where $\tau$ is a topology on $X$.

A **base** on a set $X$ is a collection $\mathcal{B}$ of subsets of $X$ such that:
1. For all $x \in X$ there exists $B\in \mathcal{B}$ with $x\in B$
2. For all $B_1, B_2 \in \mathcal{B}$ and $x\in B_1\cap B_2$, there exists $B_3\in \mathcal{B}$ with $x\in B_3$ and $B_3 \subseteq B_1\cap B_2$

The topology $\tau$ **generated** by $\mathcal{B}$ is defined as follows: $U\subseteq X$ is open if for all $x\in U$ there is $B\in \mathcal{B}$ with $x\in B\subseteq U$. We say that $\mathcal{B}$ is a **base for** $\tau$.

Remark:
1. Elements of the base are open
2. Open sets can be written as a union of elements of the base (not in a unique way)

Example:
The collection $\mathcal{B}=\{(a,b) \mid a,b\in R,\ a<b\}$ is a base for the topology of $R$.

A topological space $(X, \tau)$ is **second countable** if $\tau$ can be generated by a countable base. E.g. $\mathcal{B}' = \{(a,b) \mid a,b \in \mathbb{Q},\ a<b\}$ generates the usual topology on $\mathbb{R}$, so $\mathbb{R}$ is second countable.

A map ${} f\colon X\to Y {}$ between topological spaces is **continuous** if for every open set $U \subseteq Y$ we have $f^{-1}(U) \subseteq X$ is open.

A sequence ${} y:\mathbb{N}\to X$ **converges** to a limit $x$ if for an open set $U\ni x$ there exists $m\in \mathbb{N}$ such that $y_n\in U$ for all $n \geq m$.

A map ${} f\colon X\to Y {}$ is a **homemorphism** if it is bijective and bicontinuous (continuous with continuous inverse). Two spaces are **homeomorphic** if there is a homemorphism between them.

$X$ is **Hausdorff** if given any distinct pair $x_1,x_2\in X$ there exists open sets $U_1,U_2$ where $x_1\in U_1$ and $x_2\in U_2$ such that $U_1\cap U_2=\varnothing$.

Any non-empty subset $Y$ of a topological space $X$ inherits a natural topology called the **relative topology**: A subset $U\subseteq X$ is defined to be open if there exists an open set $\widetilde{U} \subseteq X$ such that $U=Y\cap \widetilde{U}$.  Notice that $\iota:Y\hookrightarrow X$ is continuous.

Exercise:
Let $f:(-1,1)\to \mathbb{R},\ x\mapsto \frac{x}{1-x^2}$. It is possible to show that $f$ is a homemorphism.

The cartesian product $X\times Y$ of two topological spaces inherits a natural topology called the **product topology**: A subset $U\subseteq X\times Y$ is open if for all $(x,y)\in U$ there exists open sets ${} U_1\subseteq X {}$ and $U_2\subseteq X$ such that $(x,y)\in U_1\times U_2\subseteq U$. The maps $p_1:X\times Y\to X,\ (x,y)\mapsto x$ and $p_2:X\times Y\to Y,\ (x,y)\mapsto y$ are continuous.

A topological space $X$ is **connected** if thre does not exist a pair of non-empty disjoint open subsets $X_1, X_2$ such that $X=X_1\cup X_2$. $X$ is **path connected** if given any pair $x_1,x_2\in X$ there exists a continuous map ${} f\colon [0,1]\to X {}$ such that $f(0)=x_1,\ f(1)=x_2$.  E.g. $\mathbb{R}$ is both connected and path connected. $\mathbb{Q}\subseteq \mathbb{R}$ with the relative topology is neither connected nor path connected.

Theorem:
Every path connected space is connected.

Proof: By contradiction, assume there are disjoint non-empty open sets $X_1,X_2$ such that $X=X_1\cup X_2$. Take $x_1\in X_1,\ x_2\in X_2$. Since $X$ is path connected it is possible to find ${} f\colon [0,1]\to X {}$ continuous such that $f(0)=x_1,\ f(1)=x_2$. But then $f^{-1}(X_1), f^{-1}(X_2)$ are open in $[0,1]$. In addition, they are non-empty. Now, $f^{-1}(X_1)\cup f^{-1}(X_2)=f^{-1}(X_1\cup X_2)=f^{-1}(X)=[0,1]$, but also $f^{-1}(X_1)\cap f^{-1}(X_2)=f^{-1}(X_1\cap X_2)=f^{-1}(\varnothing)=\varnothing \implies [0,1]$ is not connected. $\qea$


