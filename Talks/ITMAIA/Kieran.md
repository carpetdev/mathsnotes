# Lie algebras and associated algebras
- Lie algebra is a vector space $\mathfrak{g}$ with a binary operation $[\cdot,\cdot]\colon \mathfrak{g}\times\mathfrak{g}\to \mathfrak{g}$ which is alternating, bilinear but not necessarily associative. Instead it satisfies the Jacobi identity: $[X,[Y,Z]] + [Y,[Z,X]] + [Z,[X,Y]] = 0$
- ${} \mathfrak{g} = \mat{n}(\mathbb{C}) {}$ and the commutator bracket forms a Lie algebra
    - Example: $\mathfrak{sl}_2$ is the vector space of traceless 2x2 matrices (i.e. of the form $(a, b; c, -a)$) with commutator bracket is our favourite. This is a 3-dimensional space with basis $E=(0, 1; 0, 0)$, $F=(0, 0; 1, 0)$, $H=(1, 0; 0, -1)$
- For a vector space $V$, $\mathfrak{gl}(V) = (\End(V), [\cdot,\cdot])$ with the commutator bracket (choosing a basis). A Lie algebra representation is a homomorphism $\rho\colon \mathfrak{g}\to \mathfrak{gl}(V)$
    - Have $\mathfrak{sl}_2\to \mathfrak{gl}_2$ where the basis elements go to their matrix representations
    - Adjoint representation is $\mathfrak{g}\to \End(\mathfrak{g})$, $X\mapsto [X,-]$
- Bilinear form is non degenerate if $B(v,u)=0$ for all $u\in V$ implies $v=0$. It is $\mathfrak{g}$-invariant on a $\mathfrak{g}$-representation $(V,\rho)$ if $B(\rho(x)u,v)+B(u,\rho(x)v)=0$
- $\mathfrak{g}$ is reductive if its adjoint representation has an invariant non-degenerate form - assume for U and Cl
    - For $\mathfrak{sl}_2$ we can take the form $(X,Y)\mapsto \operatorname{tr}(XY)$. Also works for $\mathfrak{gl}_n$
- If $(V,\rho_1)$, $(U,\rho_2)$ are $\mathfrak{g}$-representations, then $V\otimes U$ can be made into a $\mathfrak{g}$-rep by $\rho_{v\otimes u}(X)(v\otimes u) = \rho_V(X)(v)\otimes u + v\otimes \rho_U(X)(u)$
- So $T(V)$ now becomes a $\mathfrak{g}$-rep where $\mathfrak{g}$ acts by derivations
- The (two-sided ideal) kernel $T(V)\to S(V)$ is a subrepresentation, so $S(V)$ has a quotient representation structure
- Universal enveloping algebra $U(\mathfrak{g}) = T(\mathfrak{g}) / \langle X\otimes Y - Y\otimes X - [X,Y] \rangle$ is infinite dimensional associative algebra containing $\mathfrak{g}$ as a sub Lie algebra
- $\mathfrak{g}$ and $U(\mathfrak{g})$ are Morita equivalent (representations are in bijection)
- $\dim(\bigwedge(\mathfrak{g})) = 2^{|\mathfrak{g}|}$
- Clifford algebra $Cl(\mathfrak{g}, k) = T(\mathfrak{g}) / \langle X\otimes Y + Y\otimes X + 2k(X,Y) \rangle$
---
# Flavours of cohomology
- Cohomology assigns an algebraic object/invariant to a geometric object
- de Rham cohomology assigns an algebraic invariant to a manifold which measures how badly the fundamental theorem of calculus fails 
- Assume reductive so we can translate $\bigwedge(\mathfrak{g}^*)$ into $\bigwedge(g)$
- Lie algebra lets you take the cochain complex and talk about elements of Lie algebra instead
- $\bigwedge(\mathfrak{g})^\mathfrak{g}\subseteq \ker{d}, \ker{\delta}$ where $\delta$ is the homology d map
- Hodge decomposition says $\bigwedge(\mathfrak{g})= \im{d}\oplus\ker{d}\cap\ker{\delta}\oplus\im{\delta}$. Overall we get that the cohomology is isomorphic to $\bigwedge(\mathfrak{g})^\mathfrak{g}= \ker{d}\cap\ker{\delta}$
- Hopf-Samelson Theorem: $\bigwedge(\mathfrak{g})^\mathfrak{g}\cong\bigwedge(\mathfrak{h})$ some ${} \mathfrak{h} {}$
- Kostent: $Cl(\mathfrak{g})^\mathfrak{g}=Cl(\mathfrak{h})$