Not all connected spaces are path connected. E.g. $X=\left\{ \left( x,\sin\left( \frac{1}{x} \right) \right) \mid x>0 \right\} \cup \{(x,0)\mid x\leq 0\}$ with the relative topology from $\mathbb{R}^2$.

Given an equivalence relation on a topological space $X$, the quotient set $X/\unsim$ inherits a natural topology called the **quotient topology**: A subset ${} U\subseteq X/\unsim {}$ is defined to be open if $\pi ^{-1}(U)\subseteq X$ is open in $X$, where ${} \pi\colon X\to X/\unsim {}$ is the projection map given by $\pi(x) = [x]$. Notice that $\pi$ is continuous by definition when $X/\unsim$ is equipped with the quotient topology. Exercise: Check this defines a topology.

Example:
1. $X = \mathbb{R}$, $x\sim y$ if $x-y\in \mathbb{Z}$. ${} X/\unsim {}$ is homeomorphic to $S^1 = \{(x_1,x_2)\in \mathbb{R}^2 \mid x_1^2+x_2^2=1\}$. For instance, the map $f\colon X/\unsim\to S^1,\ [x]\mapsto(\cos 2\pi x, \sin 2\pi x)$ is a homeomorphism. Exercise: Check.
2. The quotient topology might not preserve the Hausdorff property. E.g.
	1. $X = \mathbb{R}$, $x\sim y$ if there exists $n\in \mathbb{Z}$ such that $x=2^ny$. For any $\varepsilon>0$ and any $x\neq 0$, the interval $(-\varepsilon,\varepsilon)$ contains $2^nx$ for some very negative $n$. So the only open set containing $[0]$ is $X/\unsim$ itself.
	2. (Bug-eyed line) $X = \{(x,y)\in \mathbb{R}^2\mid |y|=1\} \subseteq \mathbb{R}^2$ with the relative topology. $(x,y)\sim(x',y')$ if $(x,y)=(x',y')$ or $(x,y)=(x',-y'),\ x\neq 0$. Then $X/\unsim = \{0_+=[(0,1)],\ 0_-=[(0,-1)]\}\cup \{[x]=[(x,1)] : x\neq 0\}$. Exercise: $0_+$ and $0_-$ cannot be separated with open sets.

A **distance function** on a set $X$ is a mapping $d:X\times X \to[0,\infty)$ which for all $x,y,z\in X$ satisfies:
1. $d(x,y)=d(y,x)$
2. $d(x,y)=0 \iff x=y$
3. $d(x,z) \leq  d(x,y) + d(y,z)$

A set $X$ equipped with a distance function $d$ inheritss a natural topology called the **metric topology**: A subset $U$ is defined to be open if for every $x\in U$ there exists $R>0$ such that $B_R(x)\subseteq U$ (where $B_R(x)=\{y\in X\mid d(x,y)<R\}$ is the open ball of radius $R$ centred at $x$). The resulting topological space is called a **metric space**.

Remark:
We have different ways of defining the same topology on a space $X$. For instance, if $X=\mathbb{R}^n$:
1. Product topology: $\mathbb{R}^n=\underbrace{ \mathbb{R}\times \dots\times \mathbb{R} }_{ n\text{ times} }$
2. Metric topology: $d(x,y)\coloneqq \sqrt{\sum_{i=1}^n(x_i-y_i)^2}$

Different distance functions can also give the same topology. E.g. on $\mathbb{R}^n$, $d(x,y)=\max\{|x_i-y_i|:i=1,\dots,n\}$ gives the usual topology.

$X$ is **compact** if every open cover (family of open sets $\{U_\alpha\mid\alpha \in A\}$ such that $X=\bigcup_{\alpha \in A}U_\alpha$) has a finite subcover.

Example:
1. $[0,1]$ is compact.
2. $\mathbb{R}$ is not compact. $\{(-n,n)\mid n\in \mathbb{Z}^+\}$ is an open cover with no finite subcovers.

Theorem (Heine-Borel):
A subset $C\subseteq \mathbb{R}^n$ is compact if an only if it is closed and bounded.

---

In the following, $U,V,W$ will denote open subsets of $\mathbb{R}^m, \mathbb{R}^n, \mathbb{R}^p$, respectively. We will denote the Euclidean norm of $\mathbb{R}^n$ as $\lVert x \rVert_n \coloneqq \sqrt{\sum_{i=1}^n x_i^2}$.

A function $f\colon U\to V$ is **differentiable at $a\in U$** if there exists a linear map $df_a\colon \mathbb{R}^n\to \mathbb{R}^n$ such that
$$
\lim_{ h \to 0 } \frac{\lVert f(a+h)-f(a)-df_a h \rVert_n }{\lVert h \rVert_n } = 0
$$
The map $df_a$, if it exists, is unique and it is called the **differential of $f$ at $a$**. With the usual choice of basis in $\mathbb{R}^m$ and $\mathbb{R}^n$, the matrix representing $df_a$, called the **Jacobian matrix**, is
$$
J = \begin{pmatrix}
\left.\frac{\partial f^1}{\partial x^1}\right|_a  & \dots & \left.\frac{\partial f^1}{\partial x^m}\right|_a \\
\vdots & \ddots & \vdots \\
\left.\frac{\partial f^n}{\partial x^1}\right|_a  & \dots & \left.\frac{\partial f^n}{\partial x^m}\right|_a
\end{pmatrix}
$$
Lemma:
$f\colon U\to V$ is differentiable at $a\in U$ if every partial derivative $\frac{\partial f^\alpha}{\partial x^i}$ exists and it is continuous at $a$.

Remark:
Only the existence of partial derivatives is not enough to have differentiability. E.g. $f\colon \mathbb{R}^2\to \mathbb{R}$ $$f(x,y)=\begin{cases}
\frac{xy}{\sqrt{x^2+y^2}} & (x,y)\neq 0\\ \\
\hfil0\hfil & (x,y)=0
\end{cases}$$
$f$ is not differentiable at $(0,0)$, but the partial derivative at $(0,0)$ exists.

$f\colon U\to V$ is **$K$ times continuously differentiable** (or of class $C^K$ where $K\in \mathbb{Z}^+$) if all partial derivatives of $f$ up to and including the order $K$ exist and are continuous. $f$ is **smooth** (or of class $C^\infty$) if it is $C^K$ for all $K\in \mathbb{Z}^+$.