- Reps are functors from group algebra (as category with one object) to category of vector spaces. Can tensor reps
    - More generally can work with any $\mathbb{k}$-algebra $\mathcal{A}$ and reps are functors from this
    - To define the tensor product of reps we compose maps ${} \mathcal{A}\ar{\Delta}\mathcal{A}\otimes'_\mathbb{k}\mathcal{A} \ar{\cat{M}\otimes_\mathbb{k}\cat{N}}\cat{Vect}_\mathbb{k}\otimes'\cat{Vect}_\mathbb{k} \ar{\widetilde{\otimes}_\mathbb{k}} \cat{Vect}_\mathbb{k} {}$ using
        1. $\cat{Alg}_\mathbb{k}$ is a monoidal cat with $\otimes'_\mathbb{k}$ and unit $K$
        2. There is a coalgebra structure on $\mathcal{A}$
        3. $\cat{Vect}_\mathbb{k}$ is an object in $\cat{Alg}_\mathbb{k}$
        4. $\cat{Vect}_\mathbb{k}$ is a monoidal category with $\otimes_\mathbb{k}$ which factors over $\otimes'_\mathbb{k}$, $\otimes_\mathbb{k}\colon \cat{Vect}_\mathbb{k}\times \cat{Vect}_\mathbb{k}\to\cat{Vect}_\mathbb{k}\otimes' \cat{Vect}_\mathbb{k} \ar{\widetilde{\otimes}} \cat{Vect}_\mathbb{k}$
- Want to generalise this to 2-cats
- A 2-cat is **locally additive** if comp biadditive, bilinear and each morphism set is small, idempotent complete $\mathbb{k}$-linear additive category
- $\cat{Vect}_\mathbb{k}$ becomes $\frak{A}_\mathbb{k}$, a 2-cat with objects small idempotent completel $\mathbb{k}$-linear cats, 1-morphisms $\mathbb{k}$-linear functors, 2-morphsims natural transformations
    - This is a locally additive 2-cat
- A 2-rep is a $\mathbb{k}$-linear 2-functor $M\colon \cat{C}\to\frak{A}_\mathbb{k}$
- Monoidal cat becomes a monoidal 2-cat (2-cat with a pseudofunctor $\cat{C}\times\cat{C}\to \cat{C}$)
- Thm (folklore): $(\frak{A}_\mathbb{k}, \otimes)$ is a monoidal 2-cat.
- For objects $C,D\in\frak{A}_\mathbb{k}$, have a category $C\otimes D$ with objects $\bigoplus_i(X_i,Y_i)$, morphisms $C(X,X')\otimes_\mathbb{k}D(Y,Y')$
- $\cat{Alg}_\mathbb{k}$'s replacement is given by the following:
    - Thm (JY): There is a tricat ${} \mathscr{A}_\mathbb{k} {}$ with objects locally additive 2-cats, 1-mors $\mathbb{k}$-linear pseudofunctors, 2-mors strong nat trans, 3-mors are ...
    - Thm: Have almost a mon 2-cat
- Coalgebra structure on $\cat{A}$ becomes a comonoidal structure on $\mathscr{A}$