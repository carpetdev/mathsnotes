$G$ is a connected Lie group and $\mathfrak{g}$ is its Lie algebra. The adjoint representation of $G$ on $\mathfrak{g}$ is defined by $\Ad_g\eta = \left.\frac{d}{dt}\right|_{t=0}g\cdot\exp t\eta\cdot g^{-1}$ and of $\mathfrak{g}$ on itself by $\ad_\xi\eta =\left.\frac{d}{dt}\right|_{t=0}\Ad_{\exp t\xi}\eta = [\xi,\eta]$.

Properties:
- $\Ad_g$ is an automorphism of $\mathfrak{g}$ (in particular a homomorphism)
- $\ad_\xi$ is a derivation of $\mathfrak{g}$, i.e. $\ad_\xi[\eta_1,\eta_2] = [\ad_\xi\eta_1,\eta_2] + [\eta_1, \ad_\xi\eta_2]$ (this is the Jacobi identity)
- $\mathfrak{h}\subseteq\mathfrak{g}$ is an invariant subspace under the adjoint action if and only if $\mathfrak{h}$ is an ideal in $\mathfrak{g}$
- The adjoint representation induces two natural representations of $G$ (and of $\mathfrak{g}$): on each ideal and on the corresponding quotient Lie algebra $\mathfrak{g}/\mathfrak{h}$
- The adjoint representation is completely reducible if and only if $\mathfrak{g}$ is reductive, i.e. a direct sum of Lie algebras $\mathfrak{g}=\mathfrak{g}_1\oplus\dots\oplus\mathfrak{g}_k$ (these will be either simple -- non-abelian and with no ideals -- or one-dimensional)
- The adjoint representation $\Ad$ ($\ad$) is faithful if and only if $G$ ($\mathfrak{g}$) has no centre

Example:
Consider the adjoint action of $\SL(2,\mathbb{R})$ on $\sl(2,\mathbb{R})$, the Lie algebra of traceless matrices. This action has a natural invariant function $f(A)=\det A$. The adjoint orbits are related to the level surfaces $\det A = \alpha$. These are of three types:
    1. One-sheet hyperboloids for $\alpha >0$
    2. Two-sheet hyperboloids for $\alpha< 0$
    3. Cone for $\alpha=0$
The orbits are the whole one-sheet hyperboloid, halves of the two-sheet hyperboloid, halves of the cone without the vertex, and the vertex (zero matrix). These correspond exactly to different types of conjugacy classes for $2\times2$ matrices (with zero trace): $\begin{pmatrix}\lambda& 0\\ 0& -\lambda\end{pmatrix}$, $\begin{pmatrix}0& \pm\mu\\ \mp\mu& 0\end{pmatrix}$ $\mu>0$, $\begin{pmatrix}0& \pm1\\ 0 & 0\end{pmatrix}$, $\begin{pmatrix}0&0\\0&0\end{pmatrix}$.

The **coadjoint representation** $\Ad^*$ is dual to $\Ad$. Let $a\in \mathfrak{g}^*$. Then $\Ad_g^*a(\eta) = a(\Ad_g^{-1}\eta)$. Similarly, $\ad_\xi^*a(\eta) = a(-\ad_\xi\eta) = -a([\xi,\eta])$. Notice that we still have the relation $\ad_\xi^*a = \left.\frac{d}{dt}\right|_{t=0}\Ad_{\exp t\xi}^*a$.

Recall that in symplectic geometry and Hamiltonian mechanics, a **Poisson bracket** on a smooth manifold $M$ is defined to be a bilinear operation on the space of smooth functions $\{\cdot,\cdot\}\colon C^\infty(M)\times C^\infty(M)\to C^\infty(M)$ which satisfies skew-symmetry, the Jacobi identity and also the Leibniz rule: $\{f,g_1g_2\} = g_1\{f,g_2\} + g_2\{f,g_2\}$. In local coordinates, the Poisson bracket is defined by $\{f,g\}=\sum_{i,j}a^{ij}(x)\frac{\partial f}{\partial x^i}\frac{\partial g}{\partial x^j}$ where $a^{ij}(x)$ is a skew-symmetric $(2,0)$-tensor satisfying a certain non-trivial differential relation which amounts to the Jacobi identity (Poisson tensor). If this tensor $a^{ij}$ is non-degenerate everywhere, then the manifold $M$ turns out to be symplectic with respect to the symplectic form $\omega$ obtained from the Poisson tensor by inversion $\omega_{i\alpha}a^{\alpha j} = \delta^j_i$.

To every Poisson bracket, one can assign three natural objects: Casimir functions, Hamiltonian vector fields and symplectic leaves. A smooth function $f\colon M\to \mathbb{R}$ is a **Casimir function** if $\{f,g\}\equiv 0$ for any $g\in C^\infty(M)$. In other words, the Casimir functions are those from the centre of $C^\infty(M)$, viewed as the Lie algebra with the Poisson bracket. In terms of the Poisson tensor $a^{ij}$, a Casimir function $f$ can be characterised by the system of partial differential equations $\sum_i a^{ij}(x)\frac{\partial f}{\partial x^i} = 0$ for $j=1,\dots,\dim M$, or equivalently $A(df) = 0$. The number of functionally independent Casimir functions cannot exceed the corank of the Poisson tensor (at a general point).

To each function $h$ on $M$, one can assign a natural **Hamiltonian** vector field $X_h^j = \sum_i a^{ij}(x)\frac{\partial h}{\partial x^i}$ in local coordinates or $X_h(g)=\{h,g\}$ in invariant terms, thinking of a vector field as a derivation. $h\mapsto X_h$ is a Lie algebra homomorphism (Jacobi identity) from $C^\infty(M)$ to $\Vect(M)$. In particular, Hamiltonian vector fields form a subalgebra in $\Vect(M)$.

Let $x\in M$. The **symplectic leaf** $\mathcal{O}_x$ through $x$ is defined to be the set of those points $y\in M$ which can be obtained from x by translations along Hamiltonian vector fields, i.e. they are "orbits of the infinite-dimensional Lie group" of Hamiltonian transformations.

Theorem:
- A Poisson manifold $M$ can be presented as a disjoint union of symplectic leaves
- Locally, symplectic leaves are smooth submanifolds in $M$. Globally, they can be treated as immersed manifolds but not necessarily embedded
- The tangent space to $\mathcal{O}_x$ at $x\in M$ consists exactly of Hamiltonian vectors $X_h(x)$, $h\in C^\infty(M)$
- The Poisson structure can be naturally restricted onto every symplectic leaf $\mathcal{O}_X$ in the sense that if $\left. f_1 \right|_{\mathcal{O}_x} = \left. f_2 \right|_{\mathcal{O}_x}$ and $\left. g_1 \right|_{\mathcal{O}_x} = \left. g_2 \right|_{\mathcal{O}_x}$ then $\left. \{f_1,g_1\} \right|_{\mathcal{O}_x} = \left. \{f_2,g_2\} \right|_{\mathcal{O}_x}$
- The restricted Poisson structure on $\mathcal{O}_x$ is non-degenerate so that $\mathcal{O}_x$ is a symplectic manifold
- If $f$ is a Casimir function, then $\left. f \right|_{\mathcal{O}_x}$ is constant. Conversely, if $f$ is constant on every symplectic leaf, then $f$ is a Casimir function.

Let $f,g\colon \mathfrak{g}^*\to \mathbb{R}$ be two smooth functions on the dual space $\mathfrak{g}^*$ of a Lie algebra $\mathfrak{g}$. Then their differentials can naturally be treated as elements of $\mathfrak{g}^{**}=\mathfrak{g}$. This allows us to define a Poisson bracket on $\mathfrak{g}^*$ (called Lie-Poisson bracket) by $\{f,g\}(x) = x([df(x),dg(x)])$. Equivalently, we can consider the Poisson tensor on $\mathfrak{g}^*$ given by $a_{ij}(x) = \sum_kc_{ij}^kx_k$. Here the structure coefficients of $\mathfrak{g}$ with respect to a certain basis and $(x_1,\dots,x_n)$ are the (global) coordinates related to the dual basis.

Theorem:
1. The Lie-Poisson bracket is a well-defined Poisson bracket
2. Its Casimir functions are exactly the invariants of the coadjoint representation
3. Its symplectic leaves are exactly the orbits of the coadjoint representation
4. Each coadjoint orbit carries a natural structure of a symplectic manifold

Proof:
1. The tensor $a_{ij}$ is skew-symmetric so we only need to check the Jacobi identity. It suffices to check on the coordinate functions, or more generally for linear functions on $\mathfrak{g}^*$. But these are elements of $\mathfrak{g}$ under the standard identification, and that $\{\xi,\eta\}=[\xi,\eta]$.
2. $\Ad^*$-invariants are of the form $\hat{\xi}(f)=0$ for all ${} \xi\in \mathfrak{g} {}$. In coordinates, this is $-\sum c_{ij}^kx_k\xi^i\frac{\partial f}{\partial x^j}=0$, or equivalently $-\sum c_{ij}^kx_k\frac{\partial f}{\partial x^j}$ for $i=1,\dots,\dim\mathfrak{g}$. This coincides with the equation defining Casimir functions (substituting $a_{ij}(x) = \sum_kc_{ij}^kx_k$ and swapping $i$ and $j$).
3. This fact is dual to the previous statement. We compare the tangent spaces for the $\Ad^*$-orbit $\mathcal{O}(x)$ and the symplectic leaf $\mathcal{O}_x$. The tangent space of $\mathcal{O}(x)$ at $x$ consists of all vectors of the form $\hat{\xi}(x) = \ad_\xi^*x$, $\xi\in \mathfrak{g}$. The tangent space of $\mathcal{O}_x$ at $x$ consists of all Hamiltonian vectors $X_h(x)$. In coordinates, $X_h(x)_j = \sum a_{ij}(x)\frac{\partial h}{\partial x_i} = \sum c_{ij}^kx_k\frac{\partial h}{\partial x_i} = -\ad_{dh(x)}^*x$ where $dh(x)\in \mathfrak{g}$ arbitrary. Thus the tangent spaces for $\mathcal{O}_x$ and for $\mathcal{O}(x)$ are the same at any point so $\mathcal{O}_x=\mathcal{O}(x)$ as required.
4. The symplectic structure $\omega$ on a coadjoint orbit $\mathcal{O}(x)$ can be defined as follows. Let $v_1,v_2$ be tangent vector to $\mathcal{O}(x)$ at $x\in \mathfrak{g}^*$. We have $v_1 = \ad_{\xi_1}^*x$ and $v_2 = \ad_{\xi_2}^*x$, and we set $\omega(v_1,v_2) = x([\xi_1,\xi_2])$. $\blacksquare$

Properties:
- Coadjoint orbits are even-dimensional
- If $x\in \mathfrak{g}^*$, then its stabiliser subalgebra $\St_{\ad^*}(x) = \{\xi\in \mathfrak{g} \mid \ad_\xi^*(x) = 0\}$ is the orthogonal complement to the tangent space to $\mathcal{O}(x)$ at $x$ in the sense that $\xi\in\St_{\ad^*}(x)$ if and only if $v(\xi)=0$ for any $v\in T_x\mathcal{O}(x)$
- If $x\in \mathfrak{g}^*$ is regular, then its stabiliser subalgebra is commutative
- $\Ad^*$-action preserves the Lie-Poisson bracket on $\mathfrak{g}^*$ and the symplectic structure on every $\Ad^*$-orbit $\mathcal{O}(x)$
- If $\mathfrak{g}$ admits a non-degenerate invariant bilinear form, then the adjoint and coadjoint representations are naturally equivalent

A bilinear form $\mathcal{B}\colon \mathfrak{g}\times\mathfrak{g}\to \mathbb{R}$ is **invariant** if $\mathcal{B}(\Ad_g\eta_1,\Ad_g\eta_2) = \mathcal{B}(\eta_1,\eta_2)$ for any $g\in G$, $\eta_1, \eta_2\in \mathfrak{g}$. This can be reformulated as $\mathcal{B}(\ad_\xi\eta_1,\xi_2) + \mathcal{B}(\eta_1,\ad_\xi\eta_2)=0$ for any $\xi,\eta_1,\eta_2\in\mathfrak{g}$. Assume that $\mathfrak{g}$ admits a non-degenerate invariant bilinear form $\mathcal{B}$. Then we can naturally identify $\mathfrak{g}$ and $\mathfrak{g}^*$ by means of $\mathcal{B}$: for each $a\in \mathfrak{g}^*$, there is a unique $\xi_a\in \mathfrak{g}$ such that $a(\eta)=\mathcal{B}(\xi_a,\eta)$. Making this identification gives the coadjoint representation the property $\mathcal{B}(\Ad_g^*a,\eta) = \mathcal{B}(a,\Ad_g^{-1}\eta)$. Using invariance of $\mathcal{B}$, we have $\mathcal{B}(a,Ad_g^{-1}\eta) = \mathcal{B}(\Ad_ga,\eta)$, and by non-degeneracy $\Ad_g^*a = \Ad_ga$. Similarly, $\ad_\xi^*a = \ad_\xi a$.

For matrix Lie algebras, there is a natural bilinear form $\mathcal{B}(\eta_1,\eta_2) = \tr\eta_1\eta_2$. For general Lie algebras, as an invariant form one can consider the Killing form $\mathcal{B}(\eta_1,\eta_2)=\tr\ad_{\eta_1}\ad_{\eta_2}$. For most Lie algebras, these are degenerate, but there are important examples of non-degeneracy (e.g. semisimple Lie algebras). If a matrix Lie algebra $\mathfrak{g}$ satisfies the property $(A\in\mathfrak{g} \implies A\tran\in \mathfrak{g})$ then the form $\mathcal{B}(A_1,A_2)=\tr A_1A_2$ is non-degenerate on $\mathfrak{g}$. This holds in particular for $\gl(n,\mathbb{R})$, $\sl(n,\mathbb{R})$, $\so(n)$, $\so(p,q)$, $\mathfrak{sp}(2n,\mathbb{R})$, so their adjoint and coadjoint representations are equivalent.