- Involutive set theoretical solutions to YBE $(X,r)$ (assume $r$ bijective)
    - Write $r(x,y) = (\lambda_x(y), \rho_y(x))$, then get $\rho_y(x)=\lambda_{\lambda_x(y)}^{-1}(x)$
    - For prime sized sets, there is only one indecomposable solution up to isomorphism
    - To classify solutions for size $p^2$, Silvia 2024 used skew braces
- Skew braces produce solutions
    - If additive group is abelian then get involutive solution by setting $\lambda_a(b) = -a+a\circ b$ (which is related to the skew brace relation)
    - Conversely, have the multiplicative permutation group by taking all $\lambda_x$ of the solution, and define addition on generators by $\lambda_x+\lambda_y\coloneqq\lambda_x\circ\lambda_{\lambda^{-1}(x)}(y)$. Taking the $\lambda$ action as above gives $\lambda_{\lambda_x}(\lambda_y) = \lambda_{\lambda_x(y)}$ (where only the first $\lambda$ is the action and the last one is from the solution -- the other ones are from the formal multiplicative permutation group)
- Consider the retraction map $\operatorname{Ret}\colon X\to \mathcal{G}(X,r)$, $x\mapsto\lambda_x$ to the group defined above
    - $\operatorname{Ret}(X)$ is again a solution and (2022) if $X$ is indecomposable then so is $\operatorname{Ret}(X)$ and for finite $X$, $|\operatorname{Ret}(X)|$ divides $|X|$. We'll use this to classify solutions of $p^2$
    1. If $|\operatorname{Ret}(X)| = 1$, then we have constant permutation solution
    2. If $p$, then $|\operatorname{Ret}(\operatorname{Ret}(X))| = 1$ which is classified (2023)
    3. If $p^2$ (irretractible), then
        1. If $\mathcal{G}$ is a $p$-group, $\operatorname{Fix}(\mathcal{G}) = \{a\in \mathcal{G} \mid \lambda_b(a)=a\ \forall b\}\neq 0$, and we get $\operatorname{Ret}(X)=\operatorname{Fix}(\mathcal{G})\circ x\circ \operatorname{Fix}(\mathcal{G})$
        2. In general, take a Sylow $p$-subgroup and then $(X,r)\cong(X,r')$ with $\mathcal{G}(X,r')$ being this subgroup