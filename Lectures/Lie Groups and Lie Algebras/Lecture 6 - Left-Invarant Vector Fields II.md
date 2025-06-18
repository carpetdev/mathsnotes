Let $G$ be a matrix Lie group. Then a tangent vector to $G$ at $X_0$ can be considered as a certain $n\times n$ matrix by differentiating every component the velocity vector seen as a matrix. The tangent space $T_XG$ is a certain subspace of $\mat{n}$ which depends on $X$, unless $G=\GL(n,\mathbb{R})$ in which case the tangent space is always the whole matrix space.

Proposition:
Let $A$ be an arbitrary $n\times n$ matrix viewed as a tangent vector to $\GL(n,\mathbb{R})$ at $E=\Id$. Then the corresponding left-invariant vector field on $\GL(n,\mathbb{R})$ is $\xi(X)=XA$.

Proof:
Left multiplication is a linear map so it coincides with its differential. $\blacksquare$

Proposition:
The one-parameter subgroup of ${} \GL(n,\mathbb{R}) {}$ corresponding to $A$ is $\exp(tA)=e^{tA}=E+tA+t^2A^2/2! + t^3A^3/3! + \dots$.

Proof:
First, note this series converges for any $A$ and $t$ absolutely and uniformly on any interval. Moreover, the resulting matrix function is smooth w.r.t. $t$ and we have $\frac{d}{dt}e^{tA}=Ae^{tA}=e^{tA}A$ and $e^{(t+s)A}=e^{tA}e^{sA}$ (not true for arbitrary indices). Now either see that $e^{tA}$ is an integral curve of the left-invariant vector field corresponding to $A$, or that $e^{tA}$ is the one-parameter subgroup corresponding to $A$. $\blacksquare$

The above also holds for arbitrary matrix Lie groups by the uniqueness property of one-parameter subgroups.

Corollary:
Let $\mathfrak{g}=T_EG\subseteq \mat{n}$ be the tangent space of a matrix group $G\subseteq\GL(n,\mathbb{R})$ at the identity. Then the tangent space at any other point $X\in G$ is $T_XG = X\cdot\mathfrak{g} = \mathfrak{g}\cdot X$.

Corollary:
In the above notation, consider a system of linear ODEs $\frac{dx}{dt} = A(t)x$ for $x\in\mathbb{R}^n$. Let $A(t)\in\mathfrak{g}$ for any $t\in\mathbb{R}$. Then the fundamental solution $X(t)$ belongs to $G$ for any $t\in\mathbb{R}$ (i.e. $X$ such that $X'(t) = A(t)X(t)$ and $X(0)=E$).

Returning to general setting, the **exponential map** $\exp\colon T_eG\to G$ is defined by $\exp(\xi_0) = \left. \exp(t\exp_0) \right|_{t=1}$.

Properties of the exponential map:
- $\exp$ is smooth and globally defined on $T_eG$
- The differential of $\exp$ at zero is the identity operator
- $\exp$ is a local diffeomorphism at a neighourhood of zero 

Theorem:
Any Lie group $G$ is parallelisable (has trivial tangent bundle).

Proof:
Define $\phi\colon G\times\mathbb{R}^n\to TG$ by $(x,\xi_0)\mapsto (x, dL_x(\xi_0))$ for some $\xi_0\in T_eG$. $\blacksquare$

Corollary:
Any Lie group is orientable and so the only closed surface which is a Lie group is the torus.

Proposition:
Let ${} G\subseteq \GL(n,\mathbb{R}) {}$ be a matrix Lie group and $A,B\in\mathfrak{g}=T_EG$. Let $\xi(X)=XA$ and $\eta(X)=XB$ be the corresponding left-invariant vector fields. Then the Lie bracket of $\xi,\eta$ is the left-invariant vector field of the form $X(AB-BA)$.

Corollary:
The tangent space at the identity $\mathfrak{g}=T_EG$ of any matrix Lie group is closed under the matrix commutator.

Proof:
Notice that it suffices to prove the formula for $\GL(n,\mathbb{R})$ only (standard property of the Lie bracket in submanifolds). In local coordinates, $[\xi,\eta]_{ij} = \xi_{kl}\frac{\partial \eta_{ij}}{\partial x_{kl}} - \eta_{kl}\frac{\partial \xi_{ij}}{\partial x_{kl}}$. We have $\xi_{kl}= x_{k\alpha}a_{\alpha l}$ and $\eta_{kl} = x_{k\alpha}b_{\alpha l}$. Hence, $[\xi,\eta]_{ij}= x_{k\alpha}a_{\alpha l}\frac{\partial}{\partial x_{kl}}(x_{i\beta}b_{\beta j}) - \dots = x_{i\alpha}a_{\alpha\beta}b_{\beta j} - x_{i\alpha}b_{\alpha\beta}a_{\beta j}$. $\blacksquare$

