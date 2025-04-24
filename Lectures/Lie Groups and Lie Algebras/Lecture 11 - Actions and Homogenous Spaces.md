Let $G$ be a Lie group and $M$ a smooth manifold. An **action** of $G$ on $M$ is a group action $F\colon G\times M\to M$ such that $F$ is smooth. Note that $\hat{a} \coloneqq F(a,\cdot)$ is a diffeomorphism., so we may think of the action as a map $\hat{\phantom{x}}\colon G \to \Diff(M)$ which is a homomorphism of groups (or even a homomorphism of Lie groups if we think of $\Diff(M)$ as an infinite-dimensional Lie group).

Example:
- Left action and adjoint actions of $G$ on itself; $L_a(x) = ax$, and $A_a(x)=axa^{-1}$
- Natural action of $\GL(n,\mathbb{R})$ on $\mathbb{R}^n$
- Action of $\SL(2,\mathbb{R})$ on the complex upper half-plane by fractional linear transformations (Mobius transformations)
- Action of $(\mathbb{R},+)$ on $T^2$ by translations $t\mapsto\big((\phi_1,\phi_2) \mapsto (\phi_1+at,\phi_2+bt)\big)$

As a Lie algebra of $\Diff(M)$, it is natural to consider the space $\Vect(M)$ of smooth vector fields on $M$ (since one-parameter subgroups of $\Diff(M)$ are flows). For $\xi\in\mathfrak{g}$, the vector field $\hat{\xi}$ on $M$ is defined as $\hat{\xi}(x) = \left.\frac{d}{dt}\right|_{t=0}\widehat{\exp t\xi(x)}$. Thinking of an action as a homomorphism to $\Diff(M)$, we can consider the differential of this map as a homomorphism $\mathfrak{g}\to \Vect(M)$.

Proposition:
$\hat{\phantom{x}}\colon \mathfrak{g}\to \Vect(M)$ is an antihomomorphism of Lie algebras ($\widehat{[\xi,\eta]} = -[\hat{\xi},\hat{\eta}]$).

Proof:
Let $u,v$ be two vector fields on $M$ and $\Phi_u^t, \Phi_v^s$ be the corresponding flows viewed as one-parameter gropus of diffeomorphisms. We may say that $\Phi^t_u=\exp tu$ and $\Phi^s_v = \exp sv$. Then the standard Lie bracket of $u$ and $v$ can be defined by $[u,v](x) = \left. \frac{d^2}{dt\,ds} \right|_{t=0,\,s=0} \Phi_u^{-t}\Phi_v^s\Phi_u^t(x)$, which differs with the standard definition of the Lie algebra commutator by a sign. $\blacksquare$

Theorem:
A smooth action $G\to \Diff(M)$ of a connected Lie group $G$ can be uniquely reconstructed from its differential $\mathfrak{g}\to \Vect(M)$. Note, this theorem doesn't give existence, just uniqueness.

The **orbit** of a point $x\in M$ is $\mathcal{O}(x)=\{\hat{g}(x) \mid g\in G\}$. $M$ can be presented as the disjoint union of orbits. In general, $\mathcal{O}(x)$ is not necessarily a submanifold, but it is always an immersed submanifold. The **stabiliser subgroup** (or isotropy group or stationary subgroup) of a point $x\in M$ is ${} \St(x)=\{g\in G \mid \hat{g}(x)= x\} {}$. This is a closed subgroup (and so Lie). If $y\in \mathcal{O}(x)$, then there is $a\in G$ such that $y=\hat{a}(x)$ and $\St(y) = a\St(x)a^{-1}$. An **invariant** of an action of $G$ on $M$ is a smooth function $f\colon M\to \mathbb{R}$ with the property $f(\hat{g}(x)) = f(x)$ for any $x\in M,\ g\in G$.

Proposition:
Let $G$ be a connected Lie group acting on $M$. Then $f\colon M\to \mathbb{R}$ is an invariant if and only if $f$ satisfies $\hat{\xi}(f)=0$ for any $\xi\in g$.

Sketch Proof:
A function is invariant if and only if it is constant on all orbits, if and only if it doesn't change along every tangent vector.

The set of invariants forms a ring, and if $f_1,\dots,f_k$ are invariants, then any smooth function $F(f_1,\dots,f_k)$ is an invariant too. The number of "functionally independent" invariants is bounded by the codimension of a generic orbit.

Example:
- $\SO(3)\curvearrowright \mathbb{R}^3$ has orbits either spheres centred at the origin or just the origin (exceptional orbit). $\St((0,0,1)) = \{\begin{pmatrix}\cos t& -\sin t& 0\\ \sin t& \cos t& 0\\ 0& 0& 1\end{pmatrix}\} \cong \SO(2)\subseteq\SO(3)$. This is similar for other points, except the stabiliser of the origin is $\SO(3)$. $f(x,y,z)=x^2+y^2+z^2$ is essentially the only invariant
- $\mathbb{R} \curvearrowright T^2$ for $a/b$ irrational has irrational windings as orbits (immersions of $\mathbb{R}$) and trivial stabilisers. There are no smooth invariants since orbits are everywhere dense. Locally, we have an invariant $f(\phi_1,\phi_2)=b\phi_1-a\phi2$
- $\mathbb{R} \curvearrowright T^2$ for $a/b=n/m$ rational with $m$ minimal has orbits diffeomorphic to $S^1$ and stabilisers equal to $\alpha\mathbb{Z}$ ($\alpha=2\pi n/a$). There is essentially one invariant function $f(\phi_1,\phi_2)= m\phi_1-n\phi_2$ (we need to take $2\pi$ periodic functions of this)
- Adjoint action of $\GL(n,\mathbb{R})$ on itself. For $C\in \GL(n,\mathbb{R})$, we consider $\hat{C}(X)=A_C(X)=CXC^{-1}$. The orbit of $X$ consists of all matrices similar to $X$. Two matrices belong to the same orbit if an only if they have the same Jordan normal form. The stabiliser of $X$ consists of non-degenerate matrices commuting with $X$. The basis invariants of this actions are the coefficients of the characteristic polynomial of $X$, in particular trace and determinant.

An action of $G$ on $M$ is called **transitive** if the only orbit is $M$.
- Let $G$ act on $M$ transitively. For $x\in M$, we can consider the projection $\pi\colon G\to M$, $\pi(g)=\hat{g}(x)$. Then $G_y=\{g\in G\mid \hat{g}(x)=y\} = \pi^{-1}(y)$. We can see that $g_1,g_2\in G_y$ if and only if $g_1^{-1}g_2\in \St(x)$. This means that $g_1$ and $g_2$ belong to the same left coset of the stabiliser group. Thus, there is a natural bijection between $M$ and the space $G/\St(x)$ of left cosets.
- Conversely, if $H\subseteq G$ is a closed subgroup, then we can consider the canonical projection $G\to G/H$ and a natural action $\hat{a}(gH)=(ag)H$. Notice that the stabiliser of this action for the subgroup $H$ (viewed as a left coset) is this subgroup itself.
 
Theorem:
Let $H\subseteq G$ be a Lie subgroup. Then the space of left cosets $G/H$ can be endowed with the structure of a smooth manifold in such a way that:
- The canonical projection is smooth and is a locally trivial fibration
- The canonical action $G\curvearrowright G/H$ is smooth
- If $H$ is normal the $G/H$ is a Lie group and $\pi$ is a Lie group homomorphism
- $\dim G/H$ = $\dim G - \dim H$
This smooth structure is unique.

A smooth manifold $M$ endowed with a transitive structure of a Lie group $G$ is called a **homogeneous space** of $G$. The theorem says that every homogeneous space is isomorphic to some $G/H$.

Example:
- $\SO(3)$ acts transitively on $S^2$ and $S^2=\SO(3)/\SO(2)$
- $\SL(2,\mathbb{R})$ acts transitively on the upper half plane $L$ and $L = \SL(2,\mathbb{R})/\SO(2)$
- $\GL(n,\mathbb{R})$ acts transitively on the space $\mathcal{P}$ of positive definite bilinear forms (by $\hat{X}(B) = XBX\tran$) and $\mathcal{P}=\GL(n,\mathbb{R})/\O(n)$