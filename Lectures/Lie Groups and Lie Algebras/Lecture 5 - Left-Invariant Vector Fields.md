Note if $F\colon M\to N$ is a diffeomorphism, then $dF([\xi,\eta])=[dF(\xi),dF(\eta)]$. Moreover, $\xi$ and $\eta$ commute (i.e. $[\xi,\eta]=0$) if and only if the corresponding flows commute (i.e. $\Phi^t_\xi\circ\Phi^s_\eta=\Phi^s_\eta\circ\Phi^t_\xi$ locally).

$L_a\colon G\to G$, $x\mapsto a\cdot x$ (left translation by $a\in G$), and similar for $R_a$, are diffeomorphisms of $G$ onto itself. Note left and right translations commute.

A vector field $\xi$ is **left-invariant** if it is preserved under left translations, i.e. for any $a\in G$ $dL_a(\xi)=\xi$, and similar for **right invariant**. So we must have that $dL_a(\xi(x))=\xi(ax)$.

Take an arbitrary tangent vector $\xi_0=\xi(e)\in T_eG$ and then define a tangent vector $\xi(a)\in T_a G$ by putting $\xi(a)\coloneqq dL_a(\xi_0)$. As a result, we obtain a smooth left-invariant vector field: $dL_a(\xi(x)) = dL_a(dL_x(\xi_0)) = dL_{ax}(\xi_0) = \xi(ax)$. So a left-invariant vector field is uniquely determined by it's "initial value" $\xi(e)$, which can be chosen arbitrarily.

Corollary:
The set of left-invariant vector fields is a vector space of dimension $n=\dim G$, which is naturally isomorphic to the tangent space $T_e G$.

Let $\xi$ be a left-invariant vector field on $G$.

Proposition:
Let $\gamma_e(t)$ be the integral curve of $\xi$ passing through $e$. Then the integral curve $\gamma_x(t)$ of $\xi$ passing through $x$ is $x\cdot\gamma_e(t)=L_x(\gamma_e(t))$.

Proof:
$\frac{d}{dt}(L_x(\gamma_e(t))) = dL_x(\xi(\gamma_e(t))) = \xi(L_x(\gamma_e(t)))$, so $L_x(\gamma_e(t))$ is an integral curve of $\xi$. $\blacksquare$

Corollary:
The left translation of any integral curve of $\xi$ is again an integral curve.

Corollary:
The flow $\Phi^t_\xi\colon G\to G$ of $\xi$ is defined by $\Phi^t_\xi(x)=x\cdot\gamma_e(t)$ where $\gamma_e(t)$ is the integral curve of $\xi$ through the identity.

Proposition:
$\xi$ is complete.

Proof:
Assume the integral curve $\gamma_e(t)$ is defined for $t\in(-\epsilon,\epsilon)$. By the previous corollary, we can define the flow on the whole group. Then we extend to all $t$ by iterating: $\Phi^t_\xi = \underbrace{\Phi^{t/k}_\xi\circ\dots\circ\Phi^{t/k}_\xi}_{k\text{ times}}$, where $k$ is sufficiently large so that $t/k\in(-\epsilon,\epsilon)$. $\blacksquare$

A smooth map $f\colon \mathbb{R}\to G$ is a **one-parameter subgroup** of $G$ if $f(s+t)=f(s)\cdot f(t)$ for any $t,s\in \mathbb{R}$.

Proposition:
$\gamma_e(t)$ is a one-parameter subgroup.

Proof:
$\gamma_e(s+t)=\Phi^{s+t}_\xi(t)=\Phi^t_\xi(\Phi^s_\xi(e))=\Phi^t_\xi(\gamma_e(s))=\gamma_e(s)\cdot\gamma_e(t)$. $\blacksquare$

Proposition (converse):
Let $f\colon \mathbb{R}\to G$ be a one-parameter subgroup such that $\frac{df}{dt}(0)=\xi_0$. Then $f(t)$ is exactly the integral curve (through $e$) of the left-invariant vector field $\xi$ on $G$ associated with the initial vector $\xi_0\in T_e G$.

Proof:
$\frac{df}{dt} = \left.\frac{d}{ds}\right|_{s=0} f(t+s) = \left.\frac{d}{ds}\right|_{s=0}f(t)f(s) = \left.\frac{d}{ds}\right|_{s=0} L_{f(t)}f(s) = dL_{f(t)}\left( \left.\frac{d}{ds}\right|_{s=0}f(s) \right)=dL_{f(t)}(\xi_0)= \xi(f(t))$. $\blacksquare$

So tangent vectors to the identity correspond to one-parameter subgroups.  This subgroup is exactly the integral curve of the left (and right) invariant vector field associated with the tangent vector. In particular, integral curves of left and right invariant vector fields passing through the identity are the same.

The one-parameter subgroup $f(t)$ with initial vector $\xi_0=f'(0)\in T_eG$ is denoted by $\exp(t\xi_0)$.

Proposition:
Any left-invariant vector field $\xi$ commutes with any right invariant vector field $\eta$, i.e. $[\xi,\eta]=0$

Proof:
We have $\Phi_\xi^t(x)=x\exp(t\xi_0)$ and $\Phi_\eta^t(x)=\exp(s\eta_0)$, so $\Phi_\xi^t\circ\Phi_\eta^s = \Phi_\eta^s\circ\Phi_\xi^t$. $\blacksquare$

Proposition:
The Lie bracket of two left-invariant vector fields $\xi_1, \xi_2$ is again a left-invariant vector field.

Proof:
$dL_a[\xi_1,\xi_2] = [dL_a\xi_1, dL_a\xi_2] = [\xi_1,\xi_2]$. $\blacksquare$

