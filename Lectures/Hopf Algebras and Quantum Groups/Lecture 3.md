We obtain the definition of a coalgebra by reversing the arrows in the definition of an algebra. Recall that an algebra is a vector space $A$ equipped with linear maps $m\colon A\otimes A\to A$ and ${} \varepsilon\colon \mathbb{C}\to A$ which obey the associative and identity laws.

A **coalgebra** is a non-zero vector space $C$ equipped with linear maps $\Delta\colon C\to C\otimes C$ (coproduct) and $\varepsilon\colon C\to \mathbb{C}$ (counit) satisfying the following properties:
1. (Coassociativity) The following commutes:
```tikz
\usepackage{tikz-cd, amsmath, amssymb}\begin{document}\begin{tikzcd}[arrows=<-,every label/.append style={font=\small}]
& C\otimes C\otimes C \ar[dl, "\text{id}_C\otimes \Delta"']\ar[dr, "\Delta\otimes \text{id}_C"]\\
C\otimes C \ar[dr, "\Delta"'] && C\otimes C\ar[dl, "\Delta"]\\
& C
\end{tikzcd}\end{document}
```
2. (Counit law) The following commutes:
```tikz
\usepackage{tikz-cd, amsmath, amssymb}\begin{document}\begin{tikzcd}[arrows=<-, every label/.append style={font=\small}]
\mathbb{C}\otimes C \dar["\varepsilon\otimes\text{id}_C"']\rar["\cong"]& C\dar["\text{id}_C", equal] & C\otimes \mathbb{C}\lar["\cong"']\dar["\text{id}_C\otimes\varepsilon"]\\
C\otimes C\rar["\Delta"'] & C & C\otimes C\lar["\Delta"]
\end{tikzcd}\end{document}
```
It's not simple to give analogues of the element-wise laws -- we'll see this later.

A **subcoalgebra** is a subspace $D\subseteq C$ such that $\Delta(D)\subseteq D\otimes D$, where the latter is interpreted as a subspace of $C\otimes C$, and $\varepsilon(D)\ni 1$, i.e. $D\nsubseteq \ker\varepsilon$. A **coideal** is a subspace ${} K\subseteq C {}$ such that $\Delta(K)\subseteq K\otimes \mathbb{C} + \mathbb{C}\otimes K$. To form a **factor coalgebra**, we only allow $K$ to be a proper coideal, i.e. $\varepsilon(K)=\{0\}$. Let $q\colon C\twoheadrightarrow C/K$ be the quotient map. The map $C\ar{\Delta}C\otimes C\ar{q\otimes q}C/K\otimes C/K$ descends to the quotient map $\bar{\Delta}\colon C/K\to C/K\otimes C/K$ which satisfies the coassociative law. Similarly, $\varepsilon$ descends to $\bar{\varepsilon}$ which satisfies the counit law.

Note, $D\subseteq C$ subspace $\implies C^* \supseteq D^\perp\coloneqq \{\xi\in C^*\mid \xi(D)=\{0\}\}$ and $D^*\cong C^*/D^\perp$. $D^\perp$ is called the **annihilator** of $D$ in $C^*$.

Theorem (Algebra-coalgebra duality):
Let $(C, \Delta, \varepsilon)$ be a coalgebra. Then $(A,m,\eta)$ is an algebra, where $A=C^*$, $m=\left. \Delta^* \right|_{C^*\otimes C^*}\  {}$, $\eta=\varepsilon^*$ (note this doesn't work the other way). Moreover, $D$ is a subcoalgebra of $C$ $\iff$ $I=D^\perp$ is a proper ideal of $A$; and $K$ is a coideal of $C$ $\iff$ $B=K^\perp$ is a subalgebra of $A$. $D^*\cong A/I$ and $(C/K)^*\cong B$.

Explanation:
Recall $\Delta^*\colon (C\otimes C)^*\to C^*$, and that $C^*\otimes C^* \subseteq (C\otimes C)^*$. So $m$ can be restricted from $\Delta^*$. Coassociativity and the counit law dualise exactly to associativity and the identity law (restricted to a subspace). Note that $m^*(A^*)$ is not necessarily a subspace of $A^*\otimes A^*$, so the converse doesn't necessarily hold (when $\dim A = \infty$).

Theorem:
If $(A,m,\eta)$ is an algebra and $\dim A<\infty$, then $(A^*,m^*,\eta^*)$ is a coalgebra.

The product of $a$ and $b$ is denoted $ab$. What about the coproduct of an element $x\in C$? Elements of $C\otimes C$ are of the form $\sum_{i=1}^{N}y_i\otimes z_i$ for $y_i,z_i\in C$. **Sweedler notation** says to write $\Delta x = \sum_{i=1}^{N}x_{(1)i}\otimes x_{(2)i} = \sum x_{(1)}\otimes x_{(2)}$.

Let $C$ be a coalgebra. An element $g\in C$ is **grouplike** if $\Delta g = g\otimes g$ and $\varepsilon(g)=1$.

Example (coalgebra with basis of grouplikes):
Let $G$ be a set, ${} C\coloneqq\mathbb{C}G {}$, $\Delta(g)\coloneqq g\otimes g$, $\varepsilon(g)\coloneqq 1$ for all $g\in G$. The coassociative and counit laws clearly hold on basis elements, so $C$ is a coalgebra.

Let $C$ be a coalgebra with a unit (i.e. a distinguished grouplike element) ${} \mathbf{1} {}$. An element $x\in C$ is **primitive** if ${} {} \Delta x = x\otimes \mathbf{1} + \mathbf{1}\otimes x {} {}$. Note $\operatorname{P}(C)\coloneqq\{x\in C\mid x\text{ is primitive}\}$ is a coideal of $C$.

A **coaction** of a coalgebra $C$ on $V$ is a linear map $\delta\colon V\to C\otimes V$ such that the following commute:
1. 
```tikz
\usepackage{tikz-cd, amsmath, amssymb}\begin{document}\begin{tikzcd}[every label/.append style={font=\small}]
C\otimes C\otimes V & C\otimes V \lar["\Delta\otimes \mathrm{id}"']\\
C\otimes V \uar["\mathrm{id}\otimes\delta"] & V \lar["\delta"] \uar["\delta"']
\end{tikzcd}\end{document}
```
2. 
```tikz
\usepackage{tikz-cd, amsmath, amssymb}\begin{document}\begin{tikzcd}[every label/.append style={font=\small}]
\mathbb{C}\otimes V & C\otimes V \lar["\varepsilon\otimes \mathrm{id}"']\\
& V\ar[ul, "\cong"]\uar["\delta"']
\end{tikzcd}\end{document}
```

For $\dim C < \infty$, coactions of $C$ are in 1:1 correspondence with actions of $C^*$. For the infinite case, see the Fundamental Theorem of Coalgebras.