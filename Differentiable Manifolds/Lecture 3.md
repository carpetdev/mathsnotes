$f\colon U\to V$ is a **diffeomorphism** if $f$ is bijective and both $f$ and $f^{-1}$ are smooth.

Example:
$f\colon x\mapsto x^3$ is a smooth bijection from $\mathbb{R}$ to itself, but $f^{-1}$ is not smooth at $0$.

Lemma (Chain Rule):
$U\subseteq\mathbb{R}^m, V\subseteq\mathbb{R}^n, W\subseteq\mathbb{R}^p$ open subsets. If $f\colon U\to V$ is differentiable at $a\in U$ and $g\colon V\to W$ is differentiable at $f(a)$, then $g\circ f$ is differentiable at $a$ and $d(g\circ f)_a = dg_{f(a)}\circ df_a$.

If $f\colon U\to \mathbb{R}^n$ is $C^1$, then $a\in U$ is a **regular point** of $f$ if $df_a\colon \mathbb{R}^m\to \mathbb{R}^n$ has maximal rank. $p\in \mathbb{R}^n$ is a **regular value** if every point $a\in f^{-1}(p)$ is a regular point.

Theorem (Inverse Function):
Let $U$ be an open subset of $\mathbb{R}^n$, $f\colon U\to \mathbb{R}^n$ be $C^K$ and $a\in U$ be a regular point of $f$. Then there exist open sets $\widetilde{U}$ and $\widetilde{V}$ containing $a$ and $f(a)$, respectively, such that $f$ maps $\widetilde{U}$ bijectively to $\widetilde{V}$ and $\left. f^{-1} \right|_\widetilde{V}$ is $C^K$ (true also for $K=\infty$).

Let $f\colon \mathbb{R}^2\to \mathbb{R}$ and consider the points satisfying $f(x,y)=0$. Say we have a point $(a,b)$ on this curve. When can we locally around $(a,b)$ view the curve as the graph of some smooth function $g$ with $g(b)=a$? If we require $\frac{\partial f}{\partial y}(x)\neq 0$, we have hopes to have a positive answer to the question.

Theorem (Implicit Function):
Let ${} U,\ V {}$ be open subsets of $\mathbb{R}^m,\ \mathbb{R}^n$ and $f\colon U\times V\to \mathbb{R}^n$ be a $C^K$ map. Assume $f(a,b)=0$ and define $\bar{f}\colon V\to \mathbb{R}^n,\ \bar{f}(y)=f(a,y)$. If $d\bar{f}_b\colon \mathbb{R}^n\to \mathbb{R}^n$ is invertible, then there exist open sets $\widetilde{U}\subseteq U, \widetilde{V}\subseteq V$ with $a\in \widetilde{U}, b\in \widetilde{V}$ and a unique $C^K$ function $g\colon \widetilde{U}\to \widetilde{V}$ with $g(a)=b$ such that for all $x\in \widetilde{V}$, $f(x,g(x))=0$ (true also for $K=\infty$).

---

An **atlas** on a topological space $M$ consists of:
1. An open covering $\{U_i\mid i\in I\}$
2. For each $i$ a homeomorphism $\phi_i\colon U_i\to \Omega_i$ where $\Omega_i$ is an open set in $\mathbb{R}^n$
3. For any $i,j\in I$ such that $U_i \cap U_j \neq \varnothing$ the function $\phi_j\circ \phi_i^{-1}\colon \phi_i(U_i\cap U_j)\to \phi_j(U_i\cap U_j)$ is smooth (**transition maps**)

Two atlases $\{(U_i,\phi_i)\mid i\in I\}$ and $\{(V_j,\psi_j)\mid j\in J\}$ are **equivalent** if their union in an atlas for $M$.

Remark:
- A **differentiable structure** on $M$ is an equivalence class of atlases on $M$. $M$ together with a differentiable structure is called a **smooth manifold**.
- Each pair $(U_i,\phi_i)$ is called a **coordinate chart** and defines local coordinates on $M$, usually denoted with $x^i$ or $y^i$ (${} i\in\{1,2,\dots,n\} {}$).
- From the definition, $\tau_{ij}=\phi_i\circ\phi_j^{-1}$ is bijective and $\tau_{ji}=\tau_{ij}^{-1}$ must be smooth. Hence each $\tau_ij\colon \phi_j(U_i\cap U_j)\to \phi_i(U_i\cap U_j)$ is a diffeomorphism.
- If $M$ is connected, each $\phi_i$ must inject into the same Euclidean space (can't find diffeomorphisms between open sets $U\to V$ where $U,V$ are open subsets of $\mathbb{R}^n,\mathbb{R}^m$ if $n\neq m$). So $n$ is defined to be the **dimension** of the manifold.
- Given two different atlases on $M$, they may or may not be equivalent. I.e. they may or may not define the same manifold.
- We can make other requirements on the transition maps $\tau_{ij}$. For instance
    - $C^0$ = topological manifold
    - $C^K$ = $C^K$ manifold
    - Real analytic = analytic manifold
    - If ${} n=2m {}$, then $\mathbb{R}^n\simeq \mathbb{C}^m$ and $\tau_{ij}$ are holomorphic = complex manifold.