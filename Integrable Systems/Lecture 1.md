## Brief history
- Kepler, Newton (1600-87), two-body problem in celestial mechanics (**Kepler problem**)
- Euler (1760), problem of two fixed centres
	- Plugging in imaginary numbers gives approximate solution for oblate spheroid
- Jacobi (1837), geodesics on ellipsoids and separation of variables  Hamilton-Jacobi equation
- C. Neumann, Weierstrass, Clebsch, Kovalevskaya (1859-89), new examples of integrability in mechanics
- Korteweg and de Vries (1895), shallow water equation (**KdV equation**) to explain Scott Russell's (1837) observation of solitary wave (**solitons**)
- Arnold (1963), global version of Liouville's theorem (**Liouville-Arnold theorem**)
- Gardner, Green, Kruskal and Miura (1967), inverse spectral transform method (**ISTM**) for KdV equation, the rise of the soliton theory
- Flaschka, Manakov, Moser (1974-75), finite-dimensional version of ISTM, examples of Toda lattice and Calogero-Moser system
## 
Have the form
$$
\dot{p_i} = -\frac{ \partial H }{ \partial q_i } ,\ \dot{q_i} = \frac{ \partial H }{ \partial p_i }
$$

^8fdc36

where $i=1,\dots,n$ and $H=H(p,q)$ is called the **Hamiltonian** of the system.

The evolution of a function $F(p,q)$ is given by
$$
\dot{F}=\sum_{i=1}^n \left( \frac{ \partial F }{ \partial p_i } \dot{p_i} + \frac{ \partial F }{ \partial q_i } \dot{q_i} \right) = \sum_{i=1}^{n} \left( -\frac{ \partial F }{ \partial p_i } \frac{ \partial H }{ \partial q_i } +\frac{ \partial F }{ \partial q_i } \frac{ \partial H }{ \partial p_i }  \right)
$$

^84769a

Define the **Poisson bracket** of two functions $F$ and $G$ on the phase space ${} \mathbb{R}^{2n}$ as
$$
\{ F,G \}\coloneqq\sum_{i=1}^{n} \left( -\frac{ \partial F }{ \partial p_i } \frac{ \partial G }{ \partial q_i } +\frac{ \partial F }{ \partial q_i } \frac{ \partial G }{ \partial p_i }  \right)
$$
The evolution [[#^84769a]] (and hence [[#^8fdc36]] by setting e.g. $F=p$) can then be written as
$$
\dot{F}=\{ H,F \}
$$
>[!prp]
>The Poisson bracket satisfies the following properties:
>- $\{F, G\} = -\{G,F\}$
>- $\{c_1F_1+c_2F_2, G\} = c_1\{F_1,G\} + c_2\{F_2,G\}$
>- $\{FG,H\} = \{F,H\}G + F\{G,H\}$
>- $\{\{F,G\}, H\} + \{\{G,H\},F\} +  \{\{H,F\},G\} = 0$ (Jacobi identity)

Recall that a **Lie algebra** is a vector space is a vector space $V$ with a skew-symmetric bilinear operation $[x,y]$, satisfying the Jacobi identity $[[x,y],z] + [[y,z],x] + [[z,x], y] = 0$. Thus the space of functions $\mathcal{F}_{2n}$ on the phase space $\mathbb{R}^{2n}$ with respect to the Poisson bracket forms an infinite-dimensional Lie algebra called a **Poisson algebra**.

Vector fields $X=X^i\partial_i$ on $\mathbb{R}^{2n}$ with the natural commutator Lie bracket $[X,Y]$ form another infinite-dimensional Lie algebra, which we will denote $\mathcal{V}ect_{2n}$ .

For every function $H$, we can define the Hamiltonian vector field $X_H$ by $X_H F = \{H,F\}$, or equivalently $X_H=\frac{ \partial H }{ \partial p_i }\frac{ \partial  }{ \partial q_i } - \frac{ \partial H }{ \partial q_i }\frac{ \partial  }{ \partial p_i }$

>[!prp]
>The map $H\to X_H$ defines the Lie algebra homomorphism of Poisson algebras $\mathcal{F}_{2n} \to \mathcal{V}ect_{2n}$ by $[X_F,X_G] = X_{\{F,G\}}$

A function $F$ on the phase space is called an **integral** of the Hamiltonian system with Hamiltonian $H$ if it is preserved by the flow, i.e. $\dot{F}=0$. Equivalently, $\{F,H\}=0$. E.g. the Hamiltonian itself is an integral since $\{H,H\}-0$.

>[!thm] Poisson
>The Poisson bracket of two integrals is an integral of the same Hamiltonian system.

>[!cor]
>The integrals of a Hamiltonian system also form a Lie algebra with respect to the Poisson bracket.

Noether's principle for the Hamiltonian systems says that there is a correspondence between integrals and (continuous) symmetries. E.g. if $F$ is an integral, then the flow with Hamiltonian $F$ (i.e. $X_F(\cdot)$) is a symmetry in the sense that it moves solutions into solutions since the flows of $F$ and $H$ commute.

Example: Consider a **central field system** in $\mathbb{R}^3$, which is a Hamiltonian system with the Hamiltonian $H = \frac{1}{2}|p|^2 + U(|q|),\ p,q\in \mathbb{R}^3$. The conservation of the angular momentum $M=p \times q$ corresponds to the rotational invariance of the system. The Poisson algebra of components of $M$ is nothing else but the Lie algebra $so(3)$ of the orthogonal group $SO(3)$.

The special case of the central field system with potential $U(r) = -\frac{k}{r}$ is called a **Kepler system**. Consider the **two-body problem in celestial mechanics** with the Hamiltonian $H = \frac{1}{2m_1}|p_1|^2 + \frac{1}{2m_2}|p_2|^2 - \frac{\gamma m_1m_2}{q_1-q_2}$ where $q_1,q_2\in \mathbb{R}^3$ are positions of the bodies (say, a planet and Sun) and $m_1, m_2$ are their masses. Exercise: Show that $q=q_1-q_2$ satisfies a Kepler system with $k=\gamma(m_1+m_2)$ and in the centre of mass moving frame with $m_1q_1+m_2q_2=0$, the motions of the bodies are given in terms of Kepler's orbits by $q_1=\frac{m_2}{m_1+m_2}q,\ q_2=-\frac{m_1}{m_1+m_2}q$.

Kepler systems also describe the Hydrogen atom, which is another two-body problem with inverse square central force (Coulomb). This makes the Kepler system probably the most important one in natural sciences. It turns out that besides the obvious rotational symmetry the Kepler system also has a "hidden symmetry", corresponding to a remarkable integral discovered by Laplace (**Laplace's vector**, also known as **Runge-Lenz vector**), $L = p\times M+\frac{kq}{|q|}$. Exercise: Check that Laplace's vector is indeed an integral of Kepler's system which satisfies the following relations with other integrals H and M:
$$
\begin{gather}
(M,L)=0\\
|L|^2=2H|M|^2+k^2
\end{gather}
$$
The conservation of $M$ implies that the orbits are planar. Indeed, $(M_0, q)=(M,q)=(p\times q,q)=0$, so the orbit lies in the plane $\Pi$ perpendicular to $M=M_0$. Since $(M,L)=0$, Laplace's vector $L$ belongs to $\Pi$. Choose it as the polar axis for polar coordinates $(r, \varphi)$ in $\Pi$. We have $(L,q)= |L||q|\cos \varphi,\ r=|q|$. On the other hand $(L,q)=( p\times M+\frac{kq}{|q|}, q ) = (p\times M,q)+k|q|=-|M|^2+kr$. Thus $|L|r\cos \varphi=-|M|^2+kr$, or $r=\frac{p}{1-e\cos \varphi}$, where $p=\frac{|M|^2}{k},\ e=\frac{|L|}{k}=\sqrt{1+2H|M|^2k^{-2}}$.

From geometry, it is known that $r=\frac{p}{1-e\cos \varphi}$ determines a conic section: ellipse if $e<1$, hyperbola if $e>1$, parabola if $e=1$, with one of the foci at the origin (Appollonius, circa 200BC). This implies **Kepler's first law**: *the orbits of the  planets are ellipses with one of the foci at the Sun*. The motion along the ellipse is determined by **Kepler's second law**: *the sectorial veloctiy remains constant along the orbit*. This follows from the realtions $\frac{dS}{dt}=\frac{1}{2}|M|$, where $S(t)$ is the area "shaded" by the planet. **Kepler's third law** describes the relation between the sizes and period ("years") of the orbits: *the square of the periods are proportional to the cube of the major semi-axes of the orbits*, i.e. $\frac{T_1^2}{T_2^2} = \frac{a_1^3}{a_2^3}$.

The following result by Bertrand (1873) showed how exceptional Kepler's system is: *the only central field systems having all bounded orbits closed are Kepler's system and the isotropic harmonic oscillator*.

The **isotropic harmonic oscillator** is the Hamiltonian system in $\mathbb{R}^{2n}$ with $H=\frac{1}{2}|p|^2 + \frac{1}{2}\omega^2 |q|^2$.
>[!thm]
>The orbits of the isotropic harmonic oscillator are ellipses centred at the origin.

Proof: 
Assume for simplicity that $\omega=1$. Then the equations of motion are $\dot{p}=-q, \dot{q}=p$, or for $z=p+iq\in \mathbb{C}^{n}$, $\dot{z}=iz$. Its solutions are circles $z=z_0e^{it}$. The orbits are their projections on $q$-space, which are ellipses. ${} \blacksquare$

Assume again for simplicity that $\omega-1$. $H-\frac{1}{2}(|p|^2+|q|^2),\ p,q\in \mathbb{R}^n$. Then the system has $n^2$ integrals: ${} M_{ij}=p_iq_j-p_jq_i, 1\leq i\leq j\leq n {}$, $N_{ij}=p_ip_j+q_iq_j, 1\leq i\leq j\leq n$. Exercise: Compute the Poisson brackets of these integrals and show that the corresponding Poisson algebra is isomorphic to the Lie algebra $u(n)$ of the unitary group $U(n)$. Note that the obvious rotational symmetry of the system corresponds to the subgroup $O(n)\subseteq U(n)$. Remark: All quadratic functions on the phase space $\mathbb{R}^{2n}$ form a Lie algebra isomorphic to the Lie algebra $sp(2n)$ of the **symplectic group** $Sp(2n)$, which is a natural symmetry group of the phase space.