Let $M$ be a connected manifold. Fix a point $x\in M$ and consider all closed curves $\gamma(t)$ starting and ending at $x$. We say two such curves are equivalent if they are homotopic relative to their ends. These equivalence classes are elements of the **fundamental group** $\pi_1(M)$. The product of two loops is obtained by doing one then the other successively. The inverse element is obtained by reversing orientation. A manifold is called **simply connected** if $\pi_1(M)=0$, i.e. any loop is trivial (contractible). 

Theorem (Universal Cover):
For any connected manifold $M$ there exists a manifold $\widetilde{M}$ and a universal covering map $p\colon \widetilde{M}\to M$ such that $\widetilde{M}$ is simply connected and $p$ is as covering (i.e. locally trivial fibration with a discrete fibre -- in particular a local diffeomorphism). $\widetilde{M}$ with these properties is unique (up to unique diffeomorphism).

Now let $G$ be a connected Lie group. Consider its universal cover $\widetilde{G}$ and the covering map $p\colon \widetilde{G}\to G$.

Theorem (Isomorphism Theorem):
$\widetilde{G}$ has a natural structure of a (simply connected) Lie group such that $p$ is a homomorphism of Lie groups. In particular, $G = \widetilde{G}/\Gamma$, where $\Gamma$ is the kernel of $p$. The subgroup $\Gamma$ is discrete and belongs to the centre of $\widetilde{G}$. $\Gamma$ is also isomorphic to $\pi_1(G)$.

Corollary:
The fundamental group of any Lie group is commutative.

Construction of Universal Cover:
Consider a smooth path $\gamma(t)$ between $e\in G$ and a point $x\in G$. It is convenient to represent such a path as the pair $(x,\gamma)$. By definition, the elements of our new group $\widetilde{G}$ will be equivalence classes of such pairs $(x,\gamma)$, i.e. two pairs $(x_1,\gamma_1)$ and $(x_2,\gamma_2)$ define the same point in $\widetilde{G}$ if and only if $x_1=x_2$ and $\gamma_1\sim\gamma_2$. Need to prove the following:
1. $\widetilde{G}$ is a smooth manifold
2. $\widetilde{G}$ is simply connected
3. $\widetilde{G}$ is a group
4. $p(x,\gamma)=x$ is covering map
5. The fibre over $e$ can be identified with $\pi_1(G)$ (as a set)
6. $p$ is a homomorphism
7. $\Gamma=\ker p$ is isomorphic to $\pi_1(G)$ (as a group)
8. $\Gamma$ is commutative

$\circled{1}$ and $\circled{2}$ are standard. $\circled{3}$ is given by the product $(x_1,\gamma_1)\cdot (x_2,\gamma_2) = (x_1\cdot x_2, \gamma_1+x_1\cdot\gamma_2)$ and inverse $(x,\gamma(t))^{-1} = (x^{-1}, x^{-1}\cdot\gamma(1-t))$. $\circled{4}$, $\circled{5}$, $\circled{6}$ and $\circled{7}$ are simple from definitions. $\circled{8}$ is from proving the stronger result that $\Gamma$ belongs to the centre of $\widetilde{G}$: this is true since discrete normal subgroups belong to the centre.

Corollary:
Every connected Lie group $G$ can be represented as $G=\widetilde{G}/\Gamma$ where $\widetilde{G}$ is a simply connected Lie group and $\Gamma\subseteq \widetilde{G}$ is a discrete central subgroup. The pair $(\widetilde{G},\Gamma)$ is unique up to isomorphism.

Corollary:
If $G_1, G_2$ are connected, simply connected Lie groups with the same Lie algebra $\mathfrak{g}$, then they are isomorphic as Lie groups.

Now we understand that $\mathfrak{g}$ allows us to reconstruct $G$ uniquely up to covering, i.e. for a Lie algebra $\mathfrak{g}$, there is a unique simply connected Lie group $\widetilde{G}$ corresponding to $\mathfrak{g}$. Any other Lie group with the same Lie algebra can be obtained by quotienting with respect to a certain discrete central subgroup.

Theorem:
Let $\Phi\colon H\to G$ be a homomorphism of Lie groups. Then TFAE:
1. $\Phi$ is a local diffeomorphism in a certain neighbourhood of the identity
2. The kernel of $\Phi$ is discrete
3. $\Phi$ is a covering
4. $d\Phi\colon \mathfrak{h}\to \mathfrak{g}$ is an isomorphism

Example:
The universal covering group for $\SO(3)$ is $\SU(2)$. To prove this we just need to construct a homomorphism $\rho\colon \SU(2)\to \SO(3)$ with a discrete kernel which will be the fundamental group of $\SO(3)$. $\SU(2)=\left\{\begin{pmatrix}z_1& z_2\\ -\bar{z}_2& \bar{z}_1\end{pmatrix} \Biggm| |z_1|^2 + |z_2|^2 = 1 \right\}$ and $\su(2) = \left\{ \begin{pmatrix}ia& b+ic\\ -b+ic& -ia\end{pmatrix} \Biggm| a,b,c\in \mathbb{R} \right\} \cong \mathbb{R}^3$. We'll prove that the adjoint action of $\SU(2)$ on its Lie algebra is isomorphic to $\SO(3)$. For any two matrices $A,B\in \su(2)$, the symmetric bilinear form $\langle A,B \rangle = -\tr AB$ is positive definite. For $X\in \SU(2)$, $\Ad_X$ preserves this form so belongs to $\SO(3)$. Thus, $\Ad\colon \SU(2)\to \GL(\su(2))$ has image contained in $\SO(3)$. It's easy to see that its image is all of $\SO(3)$. Moreover, the kernel is $\{\pm\Id\}$ and we get that $\SO(3)\cong\SU(2)/\mathbb{Z}_2$.