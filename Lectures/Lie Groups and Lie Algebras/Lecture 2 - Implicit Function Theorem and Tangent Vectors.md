Example (Manifold):
- Any open subset of a vector space $\mathbb{R}^n$
- Graph of a smooth function
- Two-dimensional surfaces
- Spheres $S^n$ and projective spaces $\mathbb{R}P^n$
- Lie groups
- Homogenous spaces of Lie groups
- Subsets in $\mathbb{R}^n$ given by a system of equations (with certain "regularity" condition) - see theorem

Theorem (Implicit function):
In $\mathbb{R}^n$, consider a system of equations $$\begin{cases}f_1(x_1,\dots,x_n)=0\\ \vdots\\ f_k(x_1,\dots,x_n)=0\end{cases}$$ where $f_i$ are smooth and $k\leq n$. Let $M\subseteq\mathbb{R}^n$ be the set of solutions. If the rank of the Jacobi matrix $$J=\begin{pmatrix}
\frac{\partial f_1}{\partial x_1} & \dots & \frac{\partial f_1}{\partial x_n} \\
\vdots & \ddots & \vdots \\
\frac{\partial f_k}{\partial x_1}  & \dots & \frac{\partial f_k}{\partial x_n}
\end{pmatrix}$$ is maximal ($=k$) at any point $P\in M$, then $M$ carries the natural structure of a smooth manifold of dimension $n-k$.

Example:
- Consider the group $\O(3)\subseteq\mathbb{R}^9$. The condition ${} AA\tran=\Id {}$ is a matrix equation which is equivalent to the system of 6 independent usual equations with 9 unknowns (these conditions are that the rows of $A$ are an orthonormal basis in $\mathbb{R}^3$). Thus, we have a 3 dimensional manifold.
- Consider the surface $V$, a cone, in $\mathbb{R}^3$ given by $x^2+y^2-z^2=0$. The differential $df=(2x,2y,-2z)$ is nowhere zero except at the origin. So we get that $V\setminus\{(0,0,0)\}$ is a surface.

---

We want to define tangent vectors as velocity vectors of smooth curves. Suppose $\gamma(t)$ is a smooth curve in $M$, i.e. a smooth map $\gamma\colon (-\varepsilon,\varepsilon)\to M$. In local coordinates, we have $\gamma(t)=(x^1(t),\dots,x^m(t))$ and the velocity vector to $\gamma$ at $P=\gamma(0)$ is $\frac{d\gamma}{dt}(0)=\left( \frac{dx^1}{dt}(0),\dots,\frac{dx^m}{dt}(0) \right)$. But now if we change to coordinates $(x^{1'},\dots,x^{m'})$, the tangent vector transforms as $$(\xi^1,\dots,\xi^m)\mapsto(\xi^{1'},\dots,\xi^{m'})=\left( \sum_{i=1}^{m} \frac{\partial x^{1'}}{\partial x^i} \xi^i,\dots,\sum_{i=1}^{m} \frac{\partial x^{m'}}{\partial x^i} \xi^i \right)$$
Thus, we insist that a tangent vector should be defined in all coordinate systems in a way that agrees with the above change of coordinates.

Remember that although the transformation of tangent vectors for a fixed point is linear (given by Jacobian matrix), the transformation of local coordinates is not necessarily.

Alternatively, we can use the following notion to describe tangent vectors. A linear mapping $A\colon C^\infty\to\mathbb{R}$ is called a **derivation** (first order differential operator) at a point $P\in M$ if it satisfies the Leibniz rule: $A(f\cdot h)=A(f)\cdot h(P)+A(h)\cdot f(P)$. We have a correspondence between tangent vectors as described above and derivations of this kind (called the **directional derivative** along $\xi$) by $\xi\mapsto A_\xi$ where $A_\xi(f)=\left. \frac{d}{dt} \right|_{t=0}f(\gamma(t))=\sum_i\frac{\partial f}{\partial x^i}\xi^i$ where $\gamma$ is a smooth curve such that $\gamma(0)=P,\ \frac{d\gamma}{dt}(0)=\xi$. This is a bijective correspondence.

So we actually define a **tangent vector** to $M$ at a point $P$ as a derivation at $P$. Usually we denote $A_\xi$ as just $\xi$, so we write $\xi(f)=\sum_i\xi^i\frac{\partial f}{\partial x^i}$, and even $\xi=\sum_i\xi^i\frac{\partial}{\partial x^i}$.
