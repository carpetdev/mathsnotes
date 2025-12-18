Dehn (1910s), let $G = \langle X \mid R \rangle,\ S = X\cup X^{-1}$  $\DeclareMathOperator{CP}{CP}\DeclareMathOperator{WP}{WP}\DeclareMathOperator{ISO}{ISO}$
1. Word problem ($\operatorname{WP}(G)$): Given a word $w \in S^*$, does there exist an algorithm to check whether $w$ is the identity?
2. Conjugacy problem ($\operatorname{CP}(G)$): Given two words $u,v\in S^*$, does there exist and algorithm to check whether $v = g^{-1}ug$ for some $g \in G$ (i.e. $u\sim v$)?
3. Isomorphism problem ($\operatorname{ISO}(G)$): Let $H = \langle Y \mid T \rangle$. Does there exist an algorithm to determine if $G\cong H$, based on their presentations?
These are examples of decision problems (yes or no output). Decidable if an algorithm exists, undecidable if no such algorithm exists. Note $\CP(G) \implies \WP(G)$, but $\WP(G) \centernot\implies \CP(G)$.

BMV, $u,v\in G,\ \phi\in \operatorname{Aut}(G)$. We say that $u,v$ are **$\phi$-twisted conjugate** ($u\sim_\phi v$) if there exists a $g\in G$ such that $v = \phi(g)^{-1}ug$. This is an equivalence relation.
1. $\DeclareMathOperator{TCP}{TCP}\TCP_\phi(G)$: For $u,v\in S^*$, say whether they represent $\phi$-twisted conjugate elements in $G$
2. $\TCP(G)$: For $u,v,\phi$, same as above (so one extra input to the algorithm)
$\TCP(G)\implies\TCP_\phi(G)\implies\CP(G)$. $\CP(G)\centernot\implies\TCP(G)$.

Ties to Nielsen theory and fixed point theory.

$1\longrightarrow G\longrightarrow G'\longrightarrow H\longrightarrow 1$
(BMV 2009) Knowing about $\TCP$ in $G$ tells you about $\CP$ in $G'$ (e.g. $G$ is free and $H$ is $\mathbb{Z}$).

Examples (decidable TCP):
- Free groups (BMV 2006)
- Free abelian group (linear algebra)
- Polycyclic groups (BMV 2009)
- Braid groups (Gonzalez-Meneses, Ventura 2014)
- Thompson's group $F$ (Burillo, Matucci, Ventura 2016)
- Houghton's groups (Cox 2017)
- Large-type (graph has numbers $\geq 3$) Artin groups (Juhazs 2011, Gemma 2024, Blufstein, Valiunas 2024)
- (Some) right-angled (graph has 2 or nothing) Artin groups (Gemma 2025)

Framework to solve:
1. $\CP(G)$ done
2. $\operatorname{Out}(G)$ "known" (e.g. finite or able to be written in a nice way)
3. $\TCP_\phi(G)$ solved when $\phi\in\operatorname{Out}(G)$
4. Effective solution to the simultaneous conjugacy problem

For $k$-tuples $y$, $z$ in $S^*$, the **$k$-simultaneous conjugacy problem** asks if there is a $g$ such that $z_i = g^{-1} y_i g$ for all $i$.

Proof this is enough to solve:${} \DeclareMathOperator{Inn}{Inn}\DeclareMathOperator{Out}{Out}\DeclareMathOperator{Aut}{Aut} {}$
Let $[\psi]$ denote the equivalence class of $\psi$ is $\operatorname{Out}(G)$. This implies $\phi = L_g\circ \phi$ for $L_g\in \operatorname{Inn}(G)$ and $\phi\in [\psi]$.
Case 1: If $[\psi]$ is trivial, then $v\sim_\psi u \iff v=\psi(w)^{-1}uw \iff v=g^{-1}w^{-1}guw \iff gv=w^{-1}guw$, which is $\CP(G)$
Case 2: If not trivial, then $v\sim_\psi u \iff v=g^{-1}\phi(w)^{-1} guw \iff gv=\phi(w)^{-1}guw$, which is $\TCP_\phi(G)$

Theorem (Gemma 2024):
$\TCP$ is solvable for dihedral Artin groups ($DA_m = \langle a,b \mid \text{braid relation of length} m \rangle$)
1. Already done by Holt Rees 2015
2. Known, e.g. $m$ odd means $\Out(G) = C_2$
3. Took two papers
4. $G/Z(G)\cong C_2 * C_m$ ($m$ odd) hyperbolic (done by Bridson, Howie 2005)