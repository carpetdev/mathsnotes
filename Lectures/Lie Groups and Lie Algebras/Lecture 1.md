A **Lie group** $G$ is a space which possesses the structure of a group and a smooth manifold, such that multiplication and inverse are both smooth.

Example:

- General linear group $\GL(n,\mathbb{R})$ (topology from $\mathbb{R}^{n^2}$ )
- Special linear group $\operatorname{SL}(n,\mathbb{R})$
- Orthogonal groups $\operatorname{O}(n,\mathbb{R}),\, \operatorname{SO}(n,\mathbb{R})$
- Symplectic group $\operatorname{Sp(2n,\mathbb{R})}$
- Unitary groups $\operatorname{U}(n), \operatorname{SU}(n)$
- Triangular group, upper triangular group
- Any intersection of the above

${} \SO(2)=\{\text{2x2 matrices }A \mid AA\tran =\Id,\,\det(A)=1\} {}$. This is specifically matrices of the form $\begin{pmatrix}\cos\phi& -\sin\phi\\ \sin\phi& \cos\phi\end{pmatrix}$. As a smooth manifold, $\SO(2)$ is a circle.

${} \O(2) = \{\text{2x2 matrices }A \mid AA\tran =\Id\} {}$ is matrices of the form $\begin{pmatrix}\cos\phi &\mp\sin\phi\\ \sin\phi& \pm\cos\phi\end{pmatrix}$ is a disjoint union of two circles.

${} \SL(2,\mathbb{R}) = \left\{A=\begin{pmatrix}a&b\\ c&d\end{pmatrix} \Biggm| \det A = ad-bc = 1\right\} {}$ is a second order hypersurface in $\mathbb{R}^4$.

Proposition:
$\SL(2,\mathbb{R})$ is three-dimensional and diffeomorphic to $S^1\times\mathbb{R}^2$.

Proof Sketch:
Change variables to $a=x+y,\ d=x-y,\ b=u+v,\ c=u-v$ so that $ad-bc=x^2-y^2-u^2+v^2=1$. If $(y,u)\in\mathbb{R}^2$, then $(x,v)$ is in a circle of radius defined by the equation. Remains to check that the fibre bundle is trivial.

${} \U(2)=\left\{A=\begin{pmatrix}a&b\\ c&d\end{pmatrix}\Biggm| a,b,c,d\in \mathbb{C},\ AA^\dagger=\Id \right\} {}$.

Proposition:
$\SU(2)$ is three-dimensional and diffeomorphic to $S^3$. $\U(2)$ is four-dimensional and diffeomorphic to $S^3\times S^1$.

Proof Sketch:
We get three equations, $a\bar{a}+b\bar{b}=1$, $c\bar{a}+d\bar{b}=0$, $c\bar{c}+d\bar{d}=1$. The first gives that $(a,b)$ is in a 3-sphere of radius 1 and the next two give that $(c,d)=\lambda(-\bar{b},\bar{a})$ with $|\lambda|=1$. Note $\det A = \lambda$, so $\SU(2)$ is in bijection with the 3-sphere. For $\U(2)$, the additional parameter is independent on the unit circle.

Abelian Lie groups:

- Any (finite-dimensional) vector space $V$ over $\mathbb{R}$ carries a natural structure of an abelian Lie group.
- A torus $T^n=S^1\times\dots\times S^1$ is also an abelian Lie group. We can also represent this a a matrix Lie group given by $(\phi_1,\dots,\phi_n)\mapsto \operatorname{diag}(e^{i\phi_1},\dots,e^{i\phi_n})$.
  Actually, the above (and products of them) are the only connected abelian Lie groups.

We can also give $\mathbb{R}^3$ another Lie group structure with ${} (x_1,x_2,x_3)\cdot(y_1,y_2,y_3)=(x_1+y_1,x_2+y_2,x_3+y_3+x_3y_3) {}$. This has a matrix representation $\begin{pmatrix}1& x_1& x_3\\ 0& 1& x_2\\ 0& 0& 1\end{pmatrix}$. This is still diffeomorphic as a manifold to $(\mathbb{R}^3,+)$, but is different as a Lie group.

$\GL(n,\mathbb{R}) = \{\text{matrices with non-zero determinant}\}$ is a smooth manifold of dimension $n^2$ since it's an open subset of the vector space $\mathbb{R}^{n^2}$. It consists of two connected components (determinant greater or less than zero).

Proposition:
For $\GL(2,\mathbb{R})$, each component is diffeomorphic to $S^1\times \mathbb{R}^3$.

Proof Sketch:
Can write $A\in\GL(2,\mathbb{R})$ as $A=cA'$, where $c=\sqrt{\det A}>0$ and $A'\in\SL(2,\mathbb{R})$. Thus, $\GL^+(2,\mathbb{R})\cong\SL(2,\mathbb{R})\times\mathbb{R}^+$.

Questions:

1. What topological properties do matrix Lie groups have (dimension, compactness, connectedness, etc.)?
2. What are topological obstructions for a manifold to carry the structure of a Lie group?
3. What differential geometry can we do (left- and right-invariant vector fields, one-parameter subgroups, exponential map)?
