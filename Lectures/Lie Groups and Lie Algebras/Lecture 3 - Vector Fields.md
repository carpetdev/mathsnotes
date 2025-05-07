The **tangent space** $T_P M$ to $M$ at point $P$ is the set of all tangent vectors at $P$. This is a vector space of the same dimension as $M$. The **tangent bundle** $TM$ of a smooth manifold $M$ is the set of pairs $(P,\xi)$, where $P\in M,\ \xi\in T_P M$. The charts for $TM$ are defined as follows. Take a chart $U$ for $M$ with local coordinates $(x^1, \dots, x^m)$. Consider the subset in $TM$ corresponding to $U$: $$TU=\{(P,\xi)\in TM \mid P\in U\}$$Since we have fixed a local coordinate system on U, each tangent vector $\xi\in T_P M,\ P\in U$ is unique determined by its components $(\xi^1,\dots, \xi^m)$. Thus, there is a natural bijection between $TU$ and $\Phi(U)\times\mathbb{R}^m\subseteq\mathbb{R}^{2m}$: $$(P,\xi)\leftrightarrow (x^1,\dots,x^m,\xi^1,\dots,\xi^m)$$ The transition functions between such charts $TU_1$ and $TU_2$ are smooth, so the tangent bundle $TM$ carries the structure of a smooth manifold of dimension $2m$.

Assume that at each point $P\in M$, we have a certain tangent vector $\xi(P)\in T_P M$. This object is called a **vector field** on $M$. In local coordinates, the components of $\xi$ are functions $\xi(x)= (\xi^1(x^1,\dots,x^m),\dots,\xi^m(x^1,\dots,x^m))$. The vector field is said to be smooth if these functions are smooth.

To each vector field $\xi=\xi(P)$, one can assign a natural system of first order ODEs on $M$: $\frac{dx}{dt}(t)=\xi(x)$. Vice versa, any ODE of this kind (autonomous in $t$) determines a vector field on M. Note, changing coordinates transforms both sides of the ODE in the same way.

Smooth curves $\gamma(t)=(x^1(t),\dots,x^m(t))$ satisfying the ODE are called **integral curves** of this dynamical system. According to the uniqueness and existence theorem for ODEs, for each $P\in M$, there is a unique integral curve $\gamma(t)$ such that $\gamma(0)=P$ and $t\in(-\epsilon,\epsilon)$. If each integral curve can be defined for $t\in(-\infty, \infty)$, then the vector field $\xi$ is called **complete**. Note we have incomplete vector fields, like a constant vector field on the disc (we reach infinity in finite time). On the other hand, any smooth vector field on a compact manifold is complete.

If $\xi$ is complete, then for any $t\in \mathbb{R}$ we can define a diffeomorphism $\Phi^t=\Phi^t_\xi\colon M\to M$ which is simply the translation along integral curves by $t$. To find the image of $P\in M$ under $\Phi^t$, we take the (unique) integral curve $\gamma$ such that $\gamma(0)=P$ and define $\Phi^t(P)=\gamma(t)$. An important property is that $\Phi^s\circ\Phi^t=\Phi^{s+t}$. In such a situation, we say that $\Phi^t$ is a one-parameter group of diffeomorphisms (or a **flow**). Vice versa, each one-parameter group of diffeomorphisms $\Phi^t$ on $M$ defines a vector field by $$\xi(P)=\left. \frac{d}{dt}  \right|_{t=0}\Phi^t(P)$$
Conclusion: vector fields on $M$ = autonomous ODE on $M$ = one-parameter groups of diffeomorphisms (if we have completeness).

Example:
1. $\xi=(x,y)$ on $\mathbb{R}^2$. The integral curves are $\gamma(t)=(x_0e^t, y_0e^t)$ and the diffeomorphisms $\Phi^t$ are homotheties centred at the origin with dilation factor $e^t$.
2. $\xi_{(x,y,u,v)} = (-y,x,-v,u)$ on $S^3$. The integral curves are $(x_0\cos t-y_0\sin t, y_0\cos t+x_0\sin t, u_0\cos t-v_0\sin t, v_0\cos t + u_0\sin t)$. This is a circle of radius $1$ centred at the origin and lying in the 2-dimensional plane spanned by the vectors $P$ and $\xi(P)$. The corresponding diffeomorphism $\Phi^t$ can be understood as the composition of two rotations by angle $t$ in the $xy$ and $uv$ planes. In fact, this is an example of a left-invariant vector field on $\SU(2)$.

The **Lie bracket** of vector fields is a bilinear differential operator which assigns, to any two vector fields $\xi$ and $\eta$ on a smooth manifold $M$, a new vector field denoted by $[\xi,\eta]$. In local coordinates, the components are defined by $[\xi,\eta]^k=\xi^i\frac{\partial \eta^k}{\partial x^i}-\eta^i\frac{\partial \xi^k}{\partial x^i}]$ (using summation convention). If we think of vector fields as derivations, then the bracket is defined by $[\xi,\eta](f)=\xi(\eta(f))-\eta(\xi(f))$ (note the second derivatives cancel out in this formula so it checks out).

Properties of the Lie bracket:
- Bilinearity over $\mathbb{R}$
- Skew-symmetric
- Leibniz rule: $[\xi,f\eta]=f[\xi,\eta]+\xi(f)\eta$ for any $f\in C^\infty(M)$
- Jacobi identity: $[\zeta,[\xi,\eta]]+[\xi,[\eta,\zeta]]+[\eta,[\zeta,\xi]]=0$
- If $\xi_1,\dots,\xi_k$ are pairwise commuting, linear independent (at each point) vector fields, then locally there is a coordinate system such that $\xi_1=\frac{\partial}{\partial x^1},\dots,\xi_k=\frac{\partial}{\partial x^k}$
- If $N\subseteq M$ is a submanifold and $\xi, \eta$ are tangent to $N$, then so is $[\xi,\eta]$.
- If $\xi$ and $\eta$ commute ($[\xi,\eta]=0$), then the corresponding flows also commute ($\Phi^t_\xi\circ\Phi^s_\eta=\Phi^s_\eta\circ\Phi^t_\xi$)
- In terms of the Lie derivative, $[\xi,\eta]=\mathcal{L}_\xi \eta$
- In terms of any (symmetric) connection, $[\xi,\eta]=\nabla_\xi\eta-\nabla_\eta\xi$

Let $F\colon M\to N$ be a smooth map, $P\in M$ and $Q=F(P)\in N$. The **differential** $dF$ of $F$ at $P$ is a linear map between the tangent spaces $T_PM$ and $T_QN$ which is defined in the following equivalent ways:

1. Take $\xi\in T_PM$ and choose any curve $\gamma(t)$ through $P$ such that $\gamma'(0)=\xi$. Then ${} \eta=dF(\xi)\coloneqq\left. \frac{d}{dt} \right|_{t=0}F(\gamma(t))\in T_QN$ is the tangent vector to the image of $\gamma$ at the point $Q$.
2. Consider $\xi\in T_PM$ as a derivation. Then $\eta=dF(\xi)$ is the derivation at $Q\in N$ which acts on an arbitrary function $g\colon N\to \mathbb{R}$ as $\eta(g)=\xi(g\circ F)$.
3. Choose local coordinates $(x^1,\dots,x^m)$ and $(y^1,\dots,y^n)$ in some neighbourhoods of $P$ and $Q$ respectively. Then the components of $\eta$ are $\eta^j=\sum_{i=1}^m\frac{\partial f_j}{\partial x^i}\xi^i$. In matrix form, $\eta=dF(\xi)\coloneqq J\cdot\xi$, where $J$ is the Jacobi matrix of $F$ at the point $P$.

A smooth map $F\colon M\to N$ is called an **immersion** if its differential $dF\colon T_PM\to T_{F(P)}N$ is a monomorphism for any $P\in M$, **submersion** if ${} dF {}$ is an epimorphism for any $P\in M$, **embedding** if an immersion and $M$ is homeomorphic to its image. If $dF$ is an isomorphism at each point then we obtain a local diffeomorphism between some neighbourhoods of $P$ and $F(P)$. If in addition there is a neighbourhood of each point in the codomain such that its preimage is a disjoint union of diffeomorphic neighbourhoods, then $F$ is called a **covering**.

Example:
- Smooth regular curve $\gamma\colon \mathbb{R}\to \mathbb{R}^2$ with self-intersections is an immersion
- Consider $T^2$ with angle coordinates. Then $F\colon \mathbb{R}\to T^2$ given by $F(t)=(at,bt)$ for $(a,b)\neq (0,0)$ is an immersion. If $a/b\in\mathbb{Q}$, then the image is a closed curve, else it is an irrational winding. - $F\colon \O(3)\to S^2,\ A\mapsto(a_{11},a_{12},a_{13})$ is a submersion - Any smooth homomorphism of Lie groups is either an immersion or a submersion. If its differential is a linear isomorphism, then it is a covering.
- The orthogonal projection $p\colon S^2\to \mathbb{R}^2=Oxy$ is neither an immersion or a submersion
- $F\colon \mathbb{R}\to S^1, x\mapsto e^{ix}$ is a covering
- $\left. F \right|_{(-2\pi,2\pi)}$ with $F$ as above is not a covering but still a submersion and immersion

A subset $N\subseteq M$ is a **submanifold** if $N$ is a smooth manifold and the natural inclusion $p\colon N\hookrightarrow M$ is an embedding. Equivalently, it can locally be given by a system of equations satisfying the regularity condition (rank of Jacobi matrix is full). So we can always choose local coordinates $z_1,\dots,z_m$ in $M$ such that $N$ is locally given by $z_{k+1}=\dots=z_m=0$ if $N$ is $k$-dimensional.

Theorem:
Any connected smooth $m$-dimensional manifold can be smooth embedded into the Euclidean $2m$-space.
