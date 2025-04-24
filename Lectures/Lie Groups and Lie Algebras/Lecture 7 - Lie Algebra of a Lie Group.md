A **Lie algebra** $L$ is a vector space endowed with a bilinear operation $[\cdot,\cdot]\colon L\times L\to L$ (called commutator or Lie bracket) satisfying:
- (skew-symmetry) $[a,b]=-[b,a]$
- (Jacobi identity) $[a,[b,c]]+[b,[c,a]] + [c,[a,b]] = 0$

Example:
- Euclidean space $\mathbb{R}^3$ with the cross product
- Smooth vector fields on a manifold with the standard Lie bracket of vector fields
- Any vector space with the trivial commutator $[u,v]=0$
- The space $\mat{n}$ of all square matrices with the matrix commutator $[A,B]=AB-BA$

If a Lie algebra $L$ is finite-dimensional, it is often convenient to define the operation $[\cdot,\cdot]$ by means of structure coefficients. To do this, consider a basis $e_1,\dots,e_n$ in $L$. Then we have $[e_i,e_j]=c_{ij}^ke_k$ where $c_{ij}^k\in \mathbb{R}$ are certain real numbers called the **structure coefficients**. Altogether they form the **structure tensor** of $L$. These coefficients satisfy:
- $c_{ij}^k=-c_{ji}^k$
- $c_{il}^kc_{jm}^l + c_{jl}^kc_{mi}^l + c_{ml}^kc_{ij}^l = 0$

If $a=a^ie_i$ and $b=b^je_j$, we have $[a,b]=c_{ij}^ka^ib^je_k$.

Let $G$ be a connected Lie group. Consider the space of all left-invariant vector fields on $G$ (isomorphic to $T_eG$). This space is closed under the Lie bracket, so it gives us a natural bilinear operation on the space of left-invariant vector fields. Skew-symmetry and Jacobi identity are properties of this Lie bracket already. We denote this space $\mathfrak{g}$.

Alternatively, if we have a local coordinate system $(x^1,\dots,x^n)$ in the neighbourhood of the identity, then we get a natural basis $e_1=\frac{\partial}{\partial x^1},\dots, e_n=\frac{\partial}{\partial x^n}$ for the tangent space $\mathfrak{g}=T_eG$. Then the Lie bracket in local coordinates just measures the difference between $x\cdot y$ and $y\cdot x$. If multiplication is $(x\cdot y)^k = x^k + y^k + b_{ij}^kx^iy^j + \dots$ then the structure coefficients in this local system are $c_{ij}^k = b_{ij}^k - b_{ji}^k$.

Alternatively again, for any element $a\in G$, we define the map $A_a\colon G\to G$, $A_a(x) = axa^{-1}$ (**adjoint action** of $G$ on itself). The differential at the identity is denoted $\Ad_a\colon T_eG\to T_eG$. Let $\xi_0,\eta_0\in T_eG$. Consider the one-parameter subgroup $\exp(t\xi_0)$ and take $\Ad_{\exp(t\xi_0)}(\eta_0)$. This is a curve lying in $\mathfrak{g}$ and we define $[\xi_0,\eta_0] \coloneqq \left.\frac{d}{dt}\right|_{t=0} \Ad_{\exp(t\xi_0)}(\eta_0) = \left.\frac{d}{dt}\right|_{t=0}\left.\frac{d}{ds}\right|_{s=0}\exp(t\xi_0)\exp(s\eta_0)\exp(-t\xi_0)$.

Proposition:
Let $G\subseteq\GL(n,\mathbb{R})$ be a matrix Lie group, and $\mathfrak{g}=T_EG$ be the tangent space at the identity. The tangent space $\mathfrak{g}=T_EG$ is closed under the standard matrix commutator, and this operation is exactly the Lie bracket as in the third definition.

Proof:
Using that the derivative of a linear operator is itself, $[A,B] = \left.\frac{d}{dt}\right|_{t=0}\Ad_{\exp(tA)}B = \left.\frac{d}{dt}\right|_{t=0}exp(tA)B\exp(-tA)$ $= \left( \left.\frac{d}{dt}\right|_{t=0}\exp(tA) \right)B\exp(-0\cdot A) + \exp(0\cdot A)B\left( \left.\frac{d}{dt}\right|_{t=0}\exp(-tA) \right) = AB-BA$. $\blacksquare$

Example:
$\SO(n)= \{X\in \GL(n,\mathbb{R}) \mid X\tran = X^{-1},\ \det X = 1\}$. The tangent space $T_E\SO(n)$ consists of skew-symmetric matrices. Indeed, let $A\in T_E\SO(n)$. Consider any curve $X(t)\subseteq\SO(n)$ such that $X(0)=E$ and $X'(0)=A$. For this curve, we have $X(t)\tran X(t) = E$. Differentiating, we get $0 = \left.\frac{d}{dt}\right|_{t=0}X\tran(t)X(t)=(X\tran)'(0)X(0)+X\tran(0)X'(0) = A\tran + A$. Conversely, suppose $A\tran=-A$. Then the curve $\exp(tA)$ lies in $\SO(n)$ since $\exp(tA)\tran = \exp(tA\tran) = \exp(-tA) = \exp(tA)^{-1}$ and $\det\exp(tA)=e^{\tr(tA)} = 1$.

Equivalence of definitions 1 and 3:
Let $\xi, \eta$ be smooth vector fields and $\Phi^t$ be the flow of $\xi$. Then the Lie bracket $[\xi,\eta]$ at a fixed point $x\in M$ can be written as $[\xi,\eta](x) =  \left.\frac{d}{dt}\right|_{t=0} d\Phi^{-t}(\eta(\Phi^t(x)))$. Here $d\Phi^t$ is the differential of $\Phi^t$ viewed as a linear map from $T_xM$ to $T_{\Phi^t(x)}M$, and $d\Phi^{-t}=(\Phi^t)^{-1}$ is the inverse map. In our case of Lie groups, $\xi$ and $\eta$ are left-invariant, $x=e$, $\Phi^t(x) = \exp(t\xi_0)$ and $\eta(\Phi^t(x)) = \eta(\exp(t\xi_0)) = dL_{\exp(t\xi_0)}\eta_0$ (since $\eta$ is left-invariant). Then $d\Phi^{-t}(\eta(\Phi^t(x))) = dR_{\exp(-t\xi_0)} \circ dL_{\exp(t\xi_0)}\eta_0$, which is exactly $\Ad_{\exp(t\xi_0)}\eta_0$.

Equivalence of definitions 2 and 3:
In local coordinates, $\exp(t\xi_0)^k = t\xi_0^k + \dots$, so $\exp(t\xi_0)\exp(s\eta_0)\exp(-t\xi_0) = s\eta_0^k + st(b_{ij}^k - b_{ji}^k)\xi_0^i\eta_0^j + \dots$, which differentiates to give the formula in $\circled{2}$.
