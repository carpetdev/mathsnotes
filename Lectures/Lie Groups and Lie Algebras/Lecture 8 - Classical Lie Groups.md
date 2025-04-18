# $\GL(n,\mathbb{R})=\{X\in \mat{n}(\mathbb{R}) \mid \det X \neq 0\}$
- $\dim\GL(n,\mathbb{R}) = n^2$
- $\GL(n,\mathbb{R})$ is not compact (not closed or bounded)
- $\GL(n,\mathbb{R})$ has two connected components, given by positive and negative determinant
- The Lie algebra $\gl(n,\mathbb{R})$ consists of all $n\times n$ matrices

# $\SL(n,\mathbb{R}) = \{X\in \mat{n}(\mathbb{R}) \mid \det X = 1\}$
- $\dim\SL(n,\mathbb{R}) = n^2 -1$
- $\SL(n,\mathbb{R})$ is not compact (closed but not bounded)
- $\SL(n,\mathbb{R})$ is connected
- The Lie algebra $\sl(n,\mathbb{R})$ consists of traceless matrices
    - $A\in \sl(n,\mathbb{R}) \iff \exp(tA)\subseteq \SL(n,\mathbb{R}) \iff \det\exp(tA)=1 \iff e^{t\tr A} = 1 \iff \tr A = 0$
- $\SL(n,\mathbb{R})$ is a normal subgroup of $\GL(n,\mathbb{R})$ and the quotient group is isomorphic to $\mathbb{R}^*$ (take the homomorphism $\det\colon GL(n,\mathbb{R})\to \mathbb{R}^*$)
- $\SL(n,\mathbb{R})$ is not simply connected; $\pi_1(\SL(n,\mathbb{R})) = \begin{cases}\mathbb{Z}_2& n>2\\ \mathbb{Z}& n=2\end{cases}$

# Lie group $G_\mathcal{B}$ associated with a bilinear form $\mathcal{B}$
- Let $\mathcal{B}$ be a bilinear form on $\mathbb{R}^n$ (e.g. inner product, symplectic form). This can be naturally given a matrix $B=(b_{ij})$ once a basis is chosen
- $G_\mathcal{B} = \{X\in \GL(n,\mathbb{R}) \mid \mathcal{B}(Xu,Xv) = \mathcal{B}(u,v)\ \forall u,v\in \mathbb{R}^n\}$
- $G_\mathcal{B}$ is an algebraic linear group (and hence a Lie subgroup of $\GL(n,\mathbb{R})$). In matrix notation, $G_\mathcal{B}=\{X\in \GL(n,\mathbb{R}) \mid X\tran BX=B\}$
- The Lie algebra $\mathfrak{g}_\mathcal{B} = \{A\in \gl(n,\mathbb{R}) \mid A\tran B + \mathcal{B}\tran A = 0\}$
    - ${} A\tran B + B\tran A =0 \iff \exp(tA)\tran B \exp(tA) = B {}$
    - $\impliedby$ is from differentiating
    - $\implies$ is since ${} BA^n = (-A\tran)^nB {}$ and hence $\underset{}{\mathcal{B}}\exp(tA) = \exp(-tA\tran)\underset{}{\mathcal{B}}$
- If bilinear forms $\mathcal{B}_1, \mathcal{B}_2$ are equivalent, i.e. ${} B_1=C\tran B_2C {}$ for some $C\in \GL(n,\mathbb{R})$, then $G_{\mathcal{B}_1}$ and $G_{\mathcal{B}_2}$ are isomorphic by conjugation $\Phi\colon G_{\mathcal{B}_1}\to G_{\mathcal{B}_2}$, $X\mapsto CXC^{-1}$

## $B = E$
- $G_\mathcal{B}= \O(n)$
- $\dim\O(n) = n(n-1)/2$
    - $\O(n)$ is compact (closed and bounded)
- $\O(n)$ has two connected components, determinant $\pm1$
- $\SO(n)$ is not simply connected; $\pi_1(\SO(n,\mathbb{R})) = \begin{cases}\mathbb{Z}_2& n>2\\ \mathbb{Z}& n=2\end{cases}$
- The Lie algebra $\so(n)$ consists of skew-symmetric matrices
- Each one-parameter subgroup in $\SO(n)$ is conjugate to $X(t)$ block diagonal with blocks $X_i$ where each $X_i$ is either $\begin{pmatrix}\cos\phi_it&-\sin\phi_it\\\sin\phi_it&\cos\phi_it\end{pmatrix}$ or $1$

## $B = E_{p,q} = \operatorname{diag}(\underbrace{1,\dots,1}_{p}, \underbrace{-1,\dots,-1}_{q})$
- We assume that $p+q=n$ so that $\mathcal{B}$ is non-degenerate. In addition, neither $p$ nor $q$ is $0$.
- ${} G_\mathcal{B} \eqqcolon \O(p,q) {}$
- $\O(1,3)$ is called the Lorentz group
- $\dim\O(p,q) = n(n-1)/2$
- $\O(p,q)$ is not compact
- $\O(p,q)$ has 4 connected components; $\SO(p,q) = \O(p,q)\cap \SL(n,\mathbb{R})$ has 2 connected components
- $\det X = \pm 1$ for $X\in \O(p,q)$
- The Lie algebra $\so(p,q)$ is matrices $A=\begin{pmatrix}A_1& A_2\\ A_3&A_4\end{pmatrix}$ where $A_1$ has dimension $p\times p$, $A_1,A_4$ are skew-symmetric, and $A_3\tran = A_2$. Equivalently, $E_{p,q}A$ is skew-symmetric

## $\mathcal{B}$ non-degenerate skew-symmetric form $\mathcal{J}$
- Usually take $J = J_{2n} = \begin{pmatrix}0& E_n\\ -E_n& 0\end{pmatrix}$ (odd-dimensional skew-symmetric matrices are degenerate)
- $G_\mathcal{B} \eqqcolon \operatorname{Sp}(2n,\mathbb{R})$ is called the symplectic group
- $\dim\operatorname{Sp}(2n,\mathbb{R}) = n(2n+1)$
- $\operatorname{Sp}(2n,\mathbb{R})$ is not compact
- $\operatorname{Sp}(2n,\mathbb{R})$ is connected
- $\det X=1$ for $X\in \operatorname{Sp}(2n,\mathbb{R})$
- The Lie algebra $\mathfrak{sp}(2n,\mathbb{R})$ is matrices $A=\begin{pmatrix}A_1& A_2\\ A_3&A_4\end{pmatrix}$ where $A_1$ has dimension $n\times n$, $A_1=-A_4\tran$ and $A_3,A_4$ are symmetric. Equivalently, $JA$ is symmetric
- $\operatorname{Sp}(2n,\mathbb{R})$ is not simply connected; $\pi_1(\operatorname{Sp}(2n,\mathbb{R})) = \mathbb{Z}$