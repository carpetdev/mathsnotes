Yoneda lemma:
Let $\cat{C}$ be a locally small category, $F\colon \cat{C}\op\to \mathbf{Set}$ a presheaf and $X\in\cat{C}$ an object. Then there is a bijection $[\cat{C}\op,\mathbf{Set}](\cat{C}(-,X),F)\to F(X)$ given by $(\phi\colon \cat{C}(-,X)\Rightarrow F)\mapsto \phi_X(1_X)$ which is natural in $X\in\cat{C}$ and $F\in[\cat{C}\op,\mathbf{Set}]$.

Proof:
Define $F(X)\to[\cat{C}\op,\mathbf{Set}](\cat{C}(-,X),F)$ by $u$ maps to $\tilde{u}\colon \cat{C}(-,X)\to F$ given by $\tilde{u}_Y\colon \cat{C}(Y,X)\ni f \mapsto (Ff)(u) \in F(Y)$. Is $\tilde{u}$ natural? For $Z\ar{g}Y$ we need
```tikz
\usepackage{tikz-cd, amsmath, amssymb}\begin{document}\begin{tikzcd}[every label/.append style={font=\small}]
\mathcal{C}(Y,X) \rar["\tilde{u}_Y"] \dar["\mathcal{C}{(g,X)}"'] & FY \dar["Fg"]\\
\mathcal{C}(Z,X) \rar["\tilde{u}_Z"'] & FZ
\end{tikzcd}\end{document}
```
This holds by functoriality of $F$.

To show bijectivity, note that $\phi \mapsto \phi_X(1_X) \mapsto (f \mapsto (Ff)(\phi_X(1_X))) = \phi$ and $u \mapsto (f\mapsto(Ff)(u)) \mapsto u$ (check). Exercise: Check naturality in $X\in \cat{C}$ and $F\in[\cat{C}\op,\mathbf{Set}]$. $\blacksquare$

Yoneda embedding:
For any locally small category $\cat{C}$, there is a fully faithful functor ${} \cat{C}\hookrightarrow[\cat{C}\op,\mathbf{Set}] {}$, ${} X\mapsto \cat{C}(-,X)$.

Proof:
Use the bijection from Yoneda Lemma on $F\coloneqq \cat{C}(-,Y)$ to get $\cat{C}(X,Y)\cong[\cat{C}\op,\mathbf{Set}](\cat{C}(-,X), \cat{C}(-,Y))$. Check fully faithful functor. $\blacksquare$

Representable functors $\cat{C}(X,-)\colon \cat{C}\to \mathbf{Set}$ preserve and **jointly reflect** limits (for $\cat{D}\ar{F}\cat{C}$, $L\in\cat{C}$ is a limit of $F$ if for all $X\in\cat{C}$, $\cat{C}(X,L)$ is the limit of $\cat{C}(X,F-)\colon \cat{D}\to \mathbf{Set}$).

Example (representable notions):
- (Isomorphism) A morphism $f\colon X\to Y$ is an isomorphism if and only if for all $A\in\cat{C}$, $\cat{C}(A,f)\colon \cat{C}(A,X)\to \cat{C}(A,Y)$ is a bijection.
- (Monomorphism) A morphism $f\colon X\to Y$ is mono if and only if for all $A\in\cat{C}$, ${} \cat{C}(A,X)\to \cat{C}(A,Y)$ is injective. Also, $f$ is mono if and only if the following is a pullback:
```tikz
\usepackage{tikz-cd, amsmath, amssymb}\begin{document}\begin{tikzcd}[every label/.append style={font=\small}]
X \rar["1_X"] \dar["1_X"'] & X \dar["f"]\\
X \rar["f"'] & Y
\end{tikzcd}\end{document}
```
- !(Bimorphism) A morphism $f$ is bi if it's mono and epi. In $\mathbf{Ring}$, there are bimorphisms which aren't isomorphisms (e.g. $\mathbb{Z}\hookrightarrow\mathbb{Q}$), so this notion is not representable.

The Yoneda embedding preserves limits. It only the colimit of $\cat{D}\ar{F}\cat{C}$ if any functor $\cat{C}\ar{G}\cat{E}$ preserves this colimit.

Arbitrary presheaves can be seen as colimits of representables. This is analogous to the following. Have the embedding $X\hookrightarrow\underline{2}^X=\mathcal{P}(X)$. Arbitrary subsets are like arbitrary presheaves, while singleton subsets are like representable presheaves. We can write $X\supseteq U = \bigsqcup_{x\in U}\{x\}$, which is like a presheaf being a colimit of representables.