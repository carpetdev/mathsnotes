Proof of theorem:
Let $U\colon \cat{D}\to \cat{C}$ be a functor.

$\circled{1}\implies\circled{2}:$ Suppose we have an adjunction
```tikz
\usepackage{tikz-cd, amsmath, amssymb}\begin{document}\begin{tikzcd}[column sep=large]
\mathcal{D}\rar[phantom, "\bot^\eta_\varepsilon"]\rar[bend right, "U"'] & \mathcal{C}\lar[bend right, "F"']
\end{tikzcd}\end{document}
```
There is a map $\phi_{X,Y}\colon\cat{D}(FX,Y)\xrightarrow{U_{FX,Y}}\cat{C}(UFX,UY)\xrightarrow{\eta_X^*\,=\:\cat{C}(\eta_X,UY)}\cat{C}(X,UY)$ which has inverse $\cat{C}(X,UY)\xrightarrow{F_{X,UY}}\cat{D}(FX,FUY)\xrightarrow{\varepsilon_*\,=\:\cat{D}(FX,\varepsilon_Y)}\cat{D}(FX,Y)$; chasing a morphism $f\colon FX\to Y$ across and back gives $FX\overset{F\eta_X}{\longrightarrow}FUFX\overset{FUf}{\longrightarrow}FUY\overset{\varepsilon_Y}{\longrightarrow}Y$. The following shows this is equal to $f$ (triangle identity and naturality):
```tikz
\usepackage{tikz-cd, amsmath, amssymb}\begin{document}\begin{tikzcd}[every label/.append style={font=\small}]
FX\rar["F\eta_X"]\ar[dr, "1_{FX}"'] & FUFX\rar["FUf"]\dar["\varepsilon_{FX}"] & FUY\dar["\varepsilon_Y"]\\
& FX\rar["f"'] & Y
\end{tikzcd}\end{document}
```
Exercise: Check the other way also gives the identity.

For naturality of $\phi_{X,Y}$, let $x\colon X\to X'$ be a morphism in $\cat{C}$ and $f\colon FX\to Y$ a morphism in $\cat{D}$. Chasing $f$ both ways around $\phi_{X,Y}$'s square for naturality in $X$ gives $X'\overset{\eta_{X'}}{\longrightarrow}UFX'\overset{UFx}{\longrightarrow}UFX\overset{Uf}{\longrightarrow}UY$ and $X'\overset{x}{\longrightarrow}X\overset{\eta_X}{\longrightarrow}UFX\overset{Uf}{\longrightarrow}Y$, which are equal by naturality of $\eta$ on $x$. Exercise: Show naturality in $Y$. //

$\circled{2}\implies\circled{3}:$ Assume $F\colon \cat{C}\to \cat{D}$ is a functor and $\phi_{X,Y}\colon \cat{D}(FX,Y)\to \cat{C}(X,UY)$ are natural bijections. Set $\eta_X\coloneqq\phi_{X,FX}(1_{FX})$ and for $f\colon FX\to Y$ define $f^\#\colon FX\to Y$ by $f^\#\coloneqq \phi_{X,Y}(f)$. Now, $\phi^{-1}_{X,Y}(g)=\phi^{-1}_{X,Y}(g\cdot1_{FX})=Ug\cdot \phi^{-1}_{X,FX}(1_{FX})=Ug\cdot\eta$, which is the universal property. //

$\circled{3}\implies\circled{1}:$ Now assume $X\mapsto FX$ and $\eta_X\colon X\to UFX$ which is universal. First extend $F$ to a functor: Let $f\colon X\to Y$ be a morphism in $\cat{C}$ and define $Ff=f^\#$. Then uniqueness in the universal property gives functoriality. Note this also gives naturality of $\eta$.
```tikz
\usepackage{tikz-cd, amsmath, amssymb}\begin{document}\begin{tikzcd}[every label/.append style={font=\small}]
X\ar[rr, "\eta_X"]\ar[dr, "f"'] &&UFX\ar[dd, "UFf"]& FX\ar[dd, dashed, "Ff"]\\
& Y\ar[dr, "\eta_Y"']\\
& & UFY & FY
\end{tikzcd}\end{document}
```
For $Y\in \cat{D}$, define $\varepsilon_Y=1_{UY}^\# \colon FUY\to Y$ using the universal property, which also then gives one triangle identity:
```tikz
\usepackage{tikz-cd, amsmath, amssymb}\begin{document}\begin{tikzcd}[every label/.append style={font=\small}]
UY\rar["\eta_{UY}"]\ar[dr, bend right, "1_{UY}"'] & UFUY\dar["U\varepsilon_Y"] & FUY\dar[dashed, "!"', "1_{UY}^\#"]\\
& UY & Y
\end{tikzcd}\end{document}
```
The second triangle identity can be obtained from the first using naturality of $\eta$:
```tikz
\usepackage{tikz-cd, amsmath, amssymb}\begin{document}\begin{tikzcd}[every label/.append style={font=\small}]
X\ar[rr, "\eta_X"]\ar[dr, "\eta_X"'] && UFX\dar["UF\eta_X"]\\
& UFX\rar["\eta_{UFX}"]\ar[dr, "1_{UFX}"']& UFUFX\dar["U\varepsilon_{FX}"]\\
&&UFX
\end{tikzcd}\end{document}
```
i.e. $U(\varepsilon_{FX}\circ F\eta_X) = U(1_{FX})$. By uniqueness in the universal property, we have that $\varepsilon_{FX}\circ F\eta_X = 1_{FX}$.

Exercise: Show $\varepsilon$ is a natural transformation. // $\blacksquare$
