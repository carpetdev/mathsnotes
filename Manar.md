# Passport photograph magmas and congruences
## Construction of passport photograph magmas
- Pictures represented by an element of $\mathcal{P}([0,1]\times[0,1])$ (black and white pictures)
- A magma is a pair consisting of a set with closed binary operation
- Here we use a stack-shrink operation:
    - $\operatorname{stack}\colon \mathcal{P}([0,1]^2)\times\mathcal{P}([0,1]^2)\to \mathcal{P}{([0,1]\times[0,2])}$, $(a,b)\mapsto\{(x,y+1)\mid (x,y)\in a\}\cup b$
    - $\operatorname{shrink}\colon \mathcal{P}([0,1]\times[0,2])\to \mathcal{P}([0,1]^2)$, $a\mapsto \{(x,y/2)\mid (x,y)\in a\}$
    - The binary operation $\boxtimes$ is given by a commutative diagram
```tikz
\usepackage{tikz-cd, amsmath, amssymb}\begin{document}\begin{tikzcd}[every label/.append style={font=\small}]
\mathcal{P}([0,1]^2)\times\mathcal{P}([0,1]^2)\ar[rr, "\boxtimes"]\ar[dr, "\operatorname{stack}"']&& \mathcal{P}([0,1]^2)\\
&\mathcal{P}([0,1]\times[0,2])\ar[ur, "\operatorname{shrink}"']
\end{tikzcd}\end{document}
```

- Proposition: The pair $M=(\mathcal{P}([0,1]^2), \boxtimes)$ is a magma
- We have a generalisation to $[0,1]^d$
## Examples of submagmas
- Checking if subsets are closed under composition
- Proposition: The pair $(\mathcal{P}([0,1]\times[0,1), \boxtimes)$ is a submagma
- Let $(f)=\{(f(y),y)\mid y\in[0,1]\}$, $\operatorname{PL}(0,1) = \{\text{piecewise linear functions from }[0,1]\text{ to }[0,1]\}$
- $L_1=\{(f)\mid f \in \operatorname{PL}(0,1) \}$ does not form a submagma as composition isn't closed
- However, $L_2 = \{(f)\mid f \in \operatorname{PL}(0,1),\ f(0)=f(1)=1/2\}$ works
- Proposition: $(L_2,\boxtimes)$ is a submagma (braid-like submagma with single string)
- $B_2=\{(f)\cup(g)\mid f,g \in \operatorname{PL}(0,1),\ f(0)=f(1)=1/3,\ g(0)=g(1)=2/3,\ g(y)>f(y)\ \forall y \in[0,1]\}$ is two strings
- In dimension two we recover the familiar case
## Magma congruences and quotient magmas
- Let $a,b,a',b'\in\mathcal{P}([0,1]^2)$. Then a **magma congruence** on $M$ is an equivalence relation such that $a\sim a'$ and $b\sim b'$ $\implies a\boxtimes b \sim a'\boxtimes b'$
- Note $(a\boxtimes b)\boxtimes c \neq a\boxtimes (b\boxtimes c)$, but we can relate the two with the function $$x\mapsto\begin{cases}
x/2 & 0\leq x\leq 1/2 \\
x-1/4 & 1/2\leq x \leq 3/4 \\
2x-1 & 3/4\leq x \leq 1
\end{cases}$$
- Have a group action $*$ by ${} G=\operatorname{Homeo}([0,1],[0,1]) {}$ on $\mathcal{P}([0,1]^2)$ as $f*P = \{(x,f(y)\mid (x,y)\in P)\}$
- The equivalence relation from the orbits of $G\curvearrowright \mathcal{P}([0,1]^2)$ is in fact a magma congruence by the next proposition.
- Define $\boxplus\colon G^2\to G$ by (do we need orientation preserving?) $$(f\boxplus f')(x) = \begin{cases}
\frac{f'(2x)}{2} & 0\leq x \leq 1/2\\
\frac{1+f(2x-1)}{2} & 1/2\leq x \leq 1
\end{cases}$$
- Proposition: $(f\boxplus f')(a\boxtimes b)=fa\boxtimes f'b$
So we need (get?) closure in our homeo group under the $\boxplus$ operation.  We get the Thompson group??
