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
## Hamiltonian systems in $R^{2n}$
Have the form
$$
\dot{p_i} = -\frac{ \partial H }{ \partial q_i } ,\ \dot{q_i} = \frac{ \partial H }{ \partial p_i }
$$
where $i=1,\dots,n$ and $H=H(p,q)$ is called the **Hamiltonian** of the system.

The evolution of a function $F(p,q)$ is given by
$$
\dot{F}=\sum_{i=1}^n \left( \frac{ \partial F }{ \partial p_i } \dot{p_i} + \frac{ \partial F }{ \partial q_i } \dot{q_i} \right) = \sum_{i=1}^{n} \left( -\frac{ \partial F }{ \partial p_i } \frac{ \partial H }{ \partial q_i } +\frac{ \partial F }{ \partial q_i } \frac{ \partial H }{ \partial p_i }  \right)
$$
Define the **Poisson bracket** of two functions $F$ and $G$ on the phase space $R^{2n}$ as
$$
\{ F,G \}\coloneqq\sum_{i=1}^{n} \left( -\frac{ \partial F }{ \partial p_i } \frac{ \partial G }{ \partial q_i } +\frac{ \partial F }{ \partial q_i } \frac{ \partial G }{ \partial p_i }  \right)
$$
