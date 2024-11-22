Isomorphisms of categories is too restrictive! E.g. let $\mathbf{Bij}$ be the category of finite sets and bijections, and $\mathbf{Perm}$ the category with $\ob(\mathbf{Perm})=\mathbb{N}$ and $\mathbf{Perm(m,n)=\begin{cases}\Sigma_n& m=n\\ \varnothing& \text{otherwise}\end{cases}}$. Then $\mathbf{Perm}\to\mathbf{Bij}$ is not an isomorphism but we should have some notion of equivalence between them.

A functor $F\colon \cat{C}\to \cat{D}$ is an **equivalence** if there exists:
1. A functor $G\colon \cat{D}\to \cat{C}$
2. Natural isomorphisms $\eta\colon1_\cat{C}\overset{\cong}{\implies}GF$, $\varepsilon\colon FG \overset{\cong}{\implies}1_\cat{D}$

Note: $G$ is also an equivalence.

Theorem:
Let $F\colon \cat{C}\to \cat{D}$ be a functor. The following are equivalent:
1. $F$ is an equivalence
2. $F$ is:
    - essentially surjective on objects (for all $Y\in\cat{D}$ there exists ${} X\in\cat{C}$ such that $F_oX\cong Y$)
    - faithful (each $F_{X,Y}$ is injective)
    - full (each $F_{X,Y}$ is surjective)

Example:
$U\colon\mathbf{Grp}\to \mathbf{Set}$, $(G,\cdot,1)\mapsto G$. is faithful but not essentially surjective ($\varnothing$ is not a group) or full (arbitrary functions need not be homomorphisms).

Proof of Theorem:
$\circled{1}\implies\circled{2}:$ Assume $F\colon \cat{C}\to \cat{D}$ with $G\colon \cat{D}\to \cat{C}$, $\eta\colon 1_\cat{C}\cong GF$, $\varepsilon\colon FG\cong 1_\cat{D}$.
- Let $Y\in\cat{D}$ and define $X\coloneqq GY$. Then $FX=FGY\overunderset{\cong}{\varepsilon_Y}{\longrightarrow}Y$.
- Let $X\overunderset{f}{g}{\rightrightarrows}Y \in \cat{C}$ satisfy $Ff=Fg$. Then also $GFf=GFg$. By naturality, $f=\eta_y^{-1}\cdot GFf\cdot \eta_X=\eta_y^{-1}\cdot GFg\cdot \eta_X=g$.
    Lemma: $GF\eta_X=\eta_{GFX}$
    Proof: The following diagram commutes by naturality of $\eta$ on $\eta_X$ and <span class=red>because</span> $\eta_X$ is an isomorphism:
```tikz
\usepackage{tikz-cd, amsmath, amssymb}\begin{document}\begin{tikzcd}[every label/.append style={font=\small}]
\color{red}GFX \ar[color=red, ddr, bend right, "1_{GFX}"']\ar[color=red, dr, "\eta_X^{-1}"]\ar[color=red, drr, bend left, "1_{GFX}"]\\
& X \rar["\eta_X"]\dar["\eta_X"'] & GFX\dar["GF\eta_X"]\\
& GFX\rar["\eta_{GFX}"'] & GFGFX & \square
\end{tikzcd}\end{document}
```
- Let $X,Y\in\cat{C}$ and $g\in\cat{D}(FX,FY)$. Define $f\coloneqq X\xrightarrow{\eta_X}GFX\xrightarrow{Gg}GFY\xrightarrow{\eta_Y^{-1}}Y$. The following diagram commutes:
```tikz
\usepackage{tikz-cd, amsmath, amssymb}\begin{document}\begin{tikzcd}[every label/.append style={font=\small}, column sep=huge, row sep=large]
GFX\rar["\eta_{GFX}"]\rar[bend left=60, "GF\eta_X", "\scriptsize\text{(lemma)}"']\dar["Gg"']\ar[dr, phantom, "\substack{\text{(naturality of }\\\eta\text{ on }Gg\text{)}}"] & GFGFX\dar["GFGg"]\\
GFY\rar["\eta_{GFY}"]\rar[bend right=60, "GF\eta_Y"', "\scriptsize\text{(lemma)}"] & GFGFY\\
\end{tikzcd}\end{document}
```
So $GFf=Gg$, but by faithfulness of $G$ (because of the symmetry), this means $Ff=g$, i.e. $F$ is full. //

$\circled{2}\implies\circled{1}:$ Assume $F\colon C\to\cat{D}$ essentially surjective, full and faithful. Define ${} G_o {}$ such that for $Y\in\cat{D}$, $FGY\overset{\large\varepsilon_Y}{\cong}Y$ in $\cat{D}$. Note that the maps $\cat{C}(GX,GY)\to\cat{D}(FGX,FGY)$ are bijections. Define $G_{X,Y}$ to make the following diagram commute:
```tikz
\usepackage{tikz-cd, amsmath, amssymb}\begin{document}\begin{tikzcd}[every label/.append style={font=\small}]
FGX\rar[dashed, "FGf"]\dar["\varepsilon_X"']&FGY\\
X\rar["f"']&Y\uar["\varepsilon_Y^{-1}"']
\end{tikzcd}\end{document}
```
This diagram also gives naturality to $\varepsilon$. Functoriality of $G$ is given by the following diagram commuting:
```tikz
\usepackage{tikz-cd, amsmath, amssymb}\begin{document}\begin{tikzcd}[every label/.append style={font=\small}]
FGX\rar[dashed, "FGf"]\dar["\varepsilon_X"']&FGY\rar[dashed, "FGg"]\dar["\varepsilon_Y"']&FGZ\dar["\varepsilon_Z"]\\
X\rar["f"']&Y\rar["g"']&Z
\end{tikzcd}\end{document}
```
since $F$ is faithful and ${} \varepsilon_Z^{-1}\circ gf\circ\varepsilon_X {}$ is $FG(gf)$ by definition. Exercise: Check $G$ respects identities.

Define $\eta_X$ by $F\eta_X=\varepsilon_{FX}^{-1}$ (note that $\eta_X\in\cat{C}(X,GFX)\overset{F}{\to}\cat{D}(FX,FGFX)\ni\varepsilon_{FX}^{-1}$). To show the naturality square
```tikz
\usepackage{tikz-cd, amsmath, amssymb}\begin{document}\begin{tikzcd}[every label/.append style={font=\small}]
X\rar["\eta_X"]\dar["f"'] & GFX\dar["GFf"]\\
Y\rar["\eta_Y"'] & GFY
\end{tikzcd}\end{document}
```
observe that the following commutes (top-left, bottom-right by definition of $\eta$; top-right by naturality of $\varepsilon$ on $Ff$; other two by unitality):
```tikz
\usepackage{tikz-cd, amsmath, amssymb}\begin{document}\begin{tikzcd}[every label/.append style={font=\small}, column sep=huge, row sep=huge]
& FGFX\dar["\varepsilon_{FX}"]\rar["FGFf"] & FGFY\dar["\varepsilon_{FY}"]\\
FX\ar[ur, "F\eta_X"]\rar["1_{FX}"]\ar[rr, bend right=10, "Ff"']\dar["Ff"] & FX\rar["Ff"] & FY\\
FY\ar[rr, "F\eta_Y"]\ar[urr, near start, "1_{FY}"] && FGFY\uar["\varepsilon_{FY}"']
\end{tikzcd}\end{document}
```
Finally, use the fullness of $F$ to define $\eta_X^{-1}\colon FGX\to X$, then use faithfulness to check it is an inverse. // $\blacksquare$

Moral:
- Fullness lets you choose morphisms
- Faithfulness lets your check equations between morphisms by applying the functor