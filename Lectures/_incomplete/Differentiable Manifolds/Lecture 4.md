Example:
- Any open subset $U \subseteq \mathbb{R}^n$ is a smooth manifold with a single chart $(U,\text{id})$.
- The sphere $S^n\subseteq\mathbb{R}^{n+1}$ (with the relative topology), where $S^n=\{x\in\mathbb{R}^{n+1}\mid x_1^2+\dots+x_{n+1}^2=1\}$, is a smooth manifold. $U_\pm=S^n\setminus\{(0,\dots,0,\pm 1)\}$, $\phi_\pm\colon \mathbb{R}^{n+1}\to \mathbb{R}^n$, $\phi_\pm(\underbrace{x_1,\dots,x_n}_{\bar{x}},x_{n+1})=\frac{\bar{x}}{1\mp x_{n+1}}$. Given $p=\phi_+(x_1,\dots,x_{n+1}) = \frac{\bar{x}}{1-x_{n+1}}$, $|p|^2=\frac{1-x_{n+1}^2}{(1-x_{n+1})^2}=\frac{1+x_{n+1}}{1-x_{n+1}}$. Therefore, $x_{n+1}=\frac{|p|^2-1}{|p|^2+1}$. Similarly, $\bar{x}=\frac{2p}{|p|^2+1}$. Thus, $\tau_{-+}\phi_-\circ\phi_+^{-1}(p)=\frac{p}{|p|^2}$. So $\tau_{-+}$ is smooth on $\phi_+(U_+\cap U_-) = \mathbb{R}^n\setminus\{0\}$. Note that $\tau_{-+}^2=\text{id}$, so $\tau_{-+}=\tau_{+-}$ and the latter is also smooth on $\phi_-(U_+\cap U_-)$.
- Any topological space X homeomorphic to a smooth manifold can be given the structure of a smooth manifold by going through the homeomorphism and using the same differentiable structure. E.g. the square by using the radial projection homeomorphism to the circle.

Since we don't like things like the bug-eyed line being manifolds, we now ask manifolds to be second countabilty and Hausdorffness.

Theorem:
Every connection manifold is path connected.

Proof:
Define an equivalence relation $\sim$ on $M$ in the following way: ${} x\sim y\iff$ there exists a continous map $f\colon [0,1]\to M$ such that $f(0)=x$ and $f(1)=y$. 

Claim that $[x]\in M/\unsim$ is open in $M$. If $y\in[x]$ and $(U,\phi)$ centred at $y$ then $\phi(U)$ is open in $\mathbb{R}^n$ and contains $\phi(y)$. Then it is possible to find $\varepsilon>0$ such that $B_\varepsilon(\phi(y))\subseteq\phi(U)$. Now, for every $z\in\phi^{-1}(B_\varepsilon(\phi(y)))$, we have $z\sim y$ since we can pull back a path in $\phi(U)$. Therefore, $z\sim x$, so $[x]$ contains the open set $\phi^{-1}(B_\varepsilon(\phi(y)))$. //

Thus, the equivalence classes are an open partition of $M$, so by connectedness there must be only one. ${} \blacksquare {}$