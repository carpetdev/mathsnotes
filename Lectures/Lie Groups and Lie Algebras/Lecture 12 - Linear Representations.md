A linear representation of $G$ is a particular case of an action: now $M$ is a vector space $V$ and each diffeomorphism $\hat{a}\colon V\to V$ is linear.

A **linear representation** of a Lie group $G$ on a vector space $V$ is a homomorphism $\Phi\colon G\to \GL(V) = \{X\colon V\to V \mid X \text{ is linear and invertible}\}$. If $V=\mathbb{R}^n$, then $\GL(V) = \GL(n,\mathbb{R})$. Each linear representation induces the linear representation of the corresponding Lie algebra on $V$, $\phi=d\Phi\colon \mathfrak{g}\to \End(V) = \gl(V)$. We shall consider only the finite-dimensional case.

Theorem (special case of last lecture):
Let $G$ be connected and simply connected. Then for any linear representation $\phi$ of the Lie algebra $\mathfrak{g}$ on $V$ there is a unique linear representation of the Lie group $G$ on $V$ such that $\phi=d\Phi$.

A **faithful** representation $\Phi$ of $G$ on $V$ where $\Phi$ is injective (this corresponds to an **effective** action). Similar for Lie algebras.

Example:
- All classical matrix groups have standard representations on $\mathbb{R}^n$.
- **Adjoint representation** of $G$ on its Lie algebra $\mathfrak{g}$; $\Ad\colon G\to \GL(\mathfrak{g})$, $\Ad_a(\eta) = \left.\frac{d}{dt}\right|_{t=0}a\exp (t\eta)a^{-1}$
- Adjoint representation of $\mathfrak{g}$ on itself $\ad\colon \mathfrak{g}\to \End(\mathfrak{g})$, $ad_\xi\eta = [\xi,\eta]=\left.\frac{d}{dt}\right|_{t=0}\Ad_{\exp t\xi}(\eta)$. Saying that this is a representation is equivalent to the Jacobi identity (so we can define it for any abstract Lie algebra)
- For any matrix Lie group $G\subseteq GL(n,\mathbb{R})$ one can introduce actions on the space of $n\times n$ matrices, $\Ad_X(B)=XBX^{-1}$ and $\operatorname{Sq}_X(B)=XBX\tran$. In the first case, the space of $n\times n$ matrices is naturally identified with $\End(\mathbb{R}^n)$ and in the second with the space of bilinear forms.

A subspace $L\subseteq V$ is called **$\Phi$-invariant** if it is invariant under any operator $\Phi(g)$ (i.e. $\Phi(g)L \subseteq L$). The same for $\phi$-invariance. $\Phi$ is **irreducible** if it does not admit any non-trivial invriant subspaces, otherwise it is **reducible**. Notice that $L$ being $\Phi$- and $\phi$- invariant are equivalent conditions.

Example:
- The natural representation of $\SO(n)$ on $\mathbb{R}^n$ is irreducible
- The natural representation of the upper triangular group $\operatorname{T}(n)$ on $\mathbb{R}^n$ is reducible; e.g. it has invariant subspace generated by the first basis vector
- The action $\operatorname{Sq}$ is reducible with invariant subspaces all symmetric form and all skew-symmetric forms

If $L\subseteq V$ is an invariant subspace for $\Phi$, then we can restrict our representation onto $L$, $\left. \phi \right|_{L}\colon G\to \GL(L)$. We can also induce quotient representations on $V/L$, ${} \widetilde{\Phi}\colon G\to \GL(V/L) {}$. Similar for $\phi$.

Let $\Phi_1, \Phi_2$ be representations of $G$ on vector spaces $V_1,V_2$ respectively. Then we can construct a natural (sum) representation of $G$ on the direct sum $V_1\oplus V_2$. In matrix form, we just stack blocks diagonally. Conversely, a representation $\Phi$ of $G$ on $V$ is **completely reducible** (or **semisimple**) if it can be presented as the sum of irreducible representations, i.e. $V=V_1\oplus\dots\oplus V_k$ is the direct sum of invariant subspaces and each $\left. \Phi \right|_{V_i}$ is irreducible.

Example:
- The adjoint action of $\SO(n)$ on the vector space of all $n\times n$ matrices is completely reducible with invariant subspaces:
    1. skew-symmetric matrices
    2. scalar matrices $\lambda\cdot \Id,\ \lambda\in \mathbb{R}$
    3. symmetric matrices with zero trace
On each of these subspaces, the representation is irreducible (except for $\SO(4)$, where the space of skew-symmetric matrices further splits into two 3-dimensional invariant subspaces)
- The upper triangular group is reducible but not completely reducible (as an upper triangular matrix can't be turned into a block diagonal matrix by change of basis)
- Any linear representation of a compact Lie group $G$ is completely reducible. The proof follows from the fact that there exists a positive definite $G$-invariant bilinear form $B$ (take an average of all elements of group). Then $L$ being invariant implies that $L^\perp$ is invariant and we can proceed by induction.