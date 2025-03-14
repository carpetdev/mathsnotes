A **Lie group** $G$ is a group which is a smooth manifold such that the group operations (multiplication and inversion) are smooth. We usually denote the identity as $e$.

Let $U$ be a neighbourhood of $e\in G$ with local coordinates putting $e$ at $(0,0,\dots,0)$. Take an element $x\in U$ with coordinates $(x^1,\dots,x^n)$ and $y\in U$ with coordinates $(y^1,\dots,y^n)$. If we multiply them, then the components of $z=x\cdot y$ are smooth functions of $x$ and $y$: $z^k=z^k(x^1,\dots,x^n,y^1,\dots,y^n)$.

Proposition:
$z^k=x^k+y^k+\sum_{i,j}b_{ij}^kx^iy^j+\cdots$ (terms of degree $\geq 3$). Similarly, if we consider the inversion map $x\mapsto u=x^{-1}$, then $u^k=-x^k+\sum_{i,j}b_{ij}^kx^ix^j+\cdots$ (terms of degree $\geq 3$).

Proof:
In general, the Taylor expansion of an arbitrary smooth function can be written with summation convention as $z^k=a_0+l_jx^j+m_jy^j+a_{ij}x^ix^j+b_{ij}x^iy^j+c_{ij}y^iy^j+\cdots$. To find coefficients, we set $x=e$ to get $y^k=a_0+m_jy^j+c_{ij}y^iy^j+\cdots$. Thus, $a_0=0,\ c_{ij}=0,\ m_j = \delta_{kj}$. Similar for $y=e$ shows that $a_{ij}=0, l_j=\delta_{kj}$.