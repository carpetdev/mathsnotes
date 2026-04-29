- $\set{\text{loop braids}} \ar{\text{closure}} \set{\text{welded links}}/\text{welded R moves} \ar{tube} \set{\text{ribbon knotted tori}}$
- A solution $(X,r)$ to YBE is a welded solution if $t_{1,2}t_{2,3}r_{1,2} = r_{2,3}t_{1,2}t_{2,3}$ and $t_{1,2}r_{2,3}r_{1,2} = r_{2,3}r_{1,2}t_{2,3}$ where $t(x,y)=(y,x)$
    - E.g. Given a group $G$, $r(x,y) = (xyx^{-1},x)$ is a welded solution (arises nicely from action of fundamental group on space of loop braids?)
    - E.g. Given a group $G$ acting on an abelian group $A$, ${} r\colon (A\times G)\times (A\times G) \to \text{same} {}$, $r((X,x), (Y,y)) = \big((x\rhd Y, xyx^{-1}), (XY(x\rhd Y)^{-1}, x)\big)$ (action of $\pi$-module)
- A skew brace $B$ gives a solution $r_B$
- Thm (Colazzo, Faria Martins, Lebed, Trappeniers): A skew brace is welded if and only if
    1. $B$ is biskew
    2. $(B,\circ)/\ker\rho$ is abelian ($\rho$ is from skew brace definition)
    - E.g. $\ker\rho = B$ and biskew $\iff (B,\cdot\op,\cdot)$
        - E.g. Given $(G,\cdot\op,\cdot), (A,+,+)$ ($A$ abelian) along with $\phi\colon (G,\cdot\op)\to \operatorname{Aut}(A,+)$, $(G,\cdot\op,\cdot)\ltimes_\phi(A,+,+)$ is welded