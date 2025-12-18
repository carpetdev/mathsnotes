1943 Littlewood-Offord:
If $\varepsilon_1,\dots,\varepsilon_n\sim U(\pm1)$ independent, $z_1,\dots,z_n\in \mathbb{C}$, $|z_i|\geq 1$ and $D$ is open disc of radius $\leq 1$. Then $\mathbb{P}(\varepsilon_1z_1 +\dots + \varepsilon_nz_n \in D) \leq \frac{c\log n}{\sqrt n}$, where $c$ is a universal constant.

1945 Erdos:
$\varepsilon_i$ as before, $x_1,\dots, x_n\in \mathbb{R}$, $|x_i|\geq 1$, $I\subseteq \mathbb{R}$ open interval length $\leq 2$, then ${} \mathbb{P}(\varepsilon_1 x_1 +\dots + \varepsilon_n x_n \in I) \leq \frac{1}{2^n}\binom{n}{\lfloor n/2 \rfloor} = \sqrt{2/\pi n} {}$. This is sharp (consider random walk case).

Littlewood-Offord theory does this for a general vector space $\mathbb{R}^d$ and other subsets. This is an **anticoncentration** result.

Erdos Conjecture (reverse theory):
If $v_1,\dots,v_n\in \mathbb{R}^2$, $||v||_2=1$. $\mathbb{P}(||\varepsilon_1 v_1+\dots+\varepsilon_n v_n||_2 \leq 1) \geq \frac{c}{n}$ for some $c>0$.
"Vector Balancing / Discrepancy Theory"

Note this is clear if $n=2k$ for $k$ even (consider each coordinate separately). Sadly false in odd case ($||\sigma_v||_2\geq \sqrt 2$).

2011 Carnielli, Carolino Conjecture:
$\mathbb{P}(||\sigma_v||_2 \leq \sqrt 2) \geq\frac{c}{n}$

Proved in 2024 (He, Navannan, Spivo), but it was already proved in 1980s by Beck in more generality (for $\sqrt d$ we have the bound $c_d/n^{d/2}$, sharp by taking odd number of coordinate vectors).

HJNS conjectured that Erdos conjecture holds for $n$ odd.

Theorem 1 (HPS):
$\forall\ \delta > 0,\ \exists\ c_\delta>0$ such that for unit vectors in $\mathbb{R}^2$ and $n$ odd, $\mathbb{P}(||\varepsilon_1v_1+\dots+\varepsilon_n v_n||_2\leq 1+\delta \leq c_\delta/n)$.

1980s Vector Balancing (Savastyanov, Spencer, Beck, Bareny, Grinberg):
Given unit vectors in $\mathbb{R}^d$, there exists a signing $\eta_1,\dots,\eta_n \in \{\pm1\}$ such that $||\eta_1 v_1+\dots +\eta_n v_n||_2 \leq\sqrt d$.

Refined Vector Balancing (Swanepol, Barany, Ginzburg, Grinberg):
For $n$ odd, and unit vectors in $\mathbb{R}^2$, then there is a signing giving a bound of 1.

Proof Sketch:
Wlog reflect vectors to be in upper half semicircle. Then we claim an alternating sum works. Write $a_1=v_2-v_1$ etc, but $a_n = -v_1-v_n$. Then $w$, the alternating sum of $a_i$ is $-2$ times alternating sum of $v_i$. So we want $||w||_2\leq 2$, which can be shown with some geometric stuff.

Theorem 2 (HPS):
Same setup, $\mathbb{P}(||\sigma_v||_2\leq 1) \geq 0.56^n$ (note that Refined Vector Balancing gives that we have at least one so $\mathbb{P}$ is at least $1/2^n$)

Theorem 3 (HPS):
Erdos conjecture is false for $n$ odd as well (${} n \nequiv d\ (\text{mod } 2) {}$. Can find unit vectors in $\mathbb{R}^d$ wuch that $\mathbb{P}(||\sigma_v||_2\leq \sqrt{d-1}) \leq c_d/n^{(d+1)/2}$

Gurkin improved this bound in counterexample to $(1/\sqrt 2)^n$.

Current state:
Let $F_{d,r}(n) = \inf_{v\in (S^{d-1})^n} \mathbb{P}(||\sigma_v||_2\leq r)$. If $n\equiv d$ mod 2 then $F_{d,r}(n) = \begin{cases}0& r<\sqrt d\\ c_r/n^{d/2} & r\geq \sqrt d\end{cases}$. If $n \nequiv d$ (mod 2), $d = 2$, $n$ odd, then $F_{2,r(n)} = \begin{cases} 0 & r< 1\\ c^n & r = 1\\ c_r/n& r > 1\end{cases}$ 