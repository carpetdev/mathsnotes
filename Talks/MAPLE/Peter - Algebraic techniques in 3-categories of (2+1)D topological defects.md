- (n+1)D topological phases are where low energy states are described by (n+1)D TQFT (functor from (n,n+1)-cobordism category to linear category)
- Cobordism hypothesis says (n+1)D oriented fully-extended TQFTs correspond to fusion (n-1) categories
- Then we can get back to a physical model by the string net model construction (have a triangle)

- Kitaev's toric code (n=2)
- 2d grid. Each edge gets a 2d hilbert space. Vertices $v$. plaquettes (faces) $p$
- Then define a local commuting projector frustration free hamiltonian $H=-\sum_v Z\text{ matrix for adjacent edges} - \sum_p X\text{ matrix for adjacent edges}$ (call first terms $A_v$ and second terms $B_p$)
- Ground states of first part look like loops on the lattice
- Ground states of first part with one plaquette term mutates the loop by flipping colouring of a square (same amplitude)
- A fusion cantegory is a monoidal rigid finitely semisimple linear category with simple unit
    - $\cat{Rep}(G)$ for a finite group
    - $\cat{Vec}[G]$. The set of simple objects $\operatorname{Irr}(\cat{Vec}[G])=G$. $g\otimes h = gh$
    - Ising. $\operatorname{Irr}(\text{Ising}) = \{1,\sigma,\psi\}$. $\psi\otimes\psi \cong 1$, $\sigma\otimes\psi\cong \psi\otimes \sigma\cong \sigma$, $\sigma\otimes\sigma \cong 1\oplus\psi$ (note this isn't strictly associative)
- Anyonic excitations
    - Trace path of 3 zigzags applying $X$ to give an $e$ excitation
    - Trace similar path of $Z$ in dual lattice for $m$ excitation
- Topological defects
    - Smooth and rough boundaries (i.e. half lattice either ending in line or in spikes)
    - $A_v$ becomes 3 $Z$s and $B_v$ becomes 3 $X$s respectively
    - These cancel out the excitations?
- (1+1)D defects correspond to bimodule categories. Equivalence of TQFTs is "Morita equivalence" of fusion categories 
    - 3-categories of topological order
        - Objects are fusion categories (Codimension 0 defects / Bulk)
        - 1-morphisms are bimodule categories (Codimension 1 defects)
        - 2-morphisms are bimodule functors (Codimentions 2 defects)
        - 3-morphisms are bimodule natural transformations (Local operators that preserve ground state)
    - Anyons are topological defects
    - Given an algebra $A$, $A$ is an $A,A$-bimodule with endomorphisms $Z(A)$.
    - Simlarly, anyons in topological bulk from fusion category X have $\End_{X,X}(X)\cong Z(X)$
    - Two algebras are Morita equivalent if there exists an $A,B$-bimodule $M$ and a $B,A$-bimodule N where $M\otimes_B N=A$ and $N\otimes_A M = B$
- More interesting bimodules
    1. Boundary is two lattices at a half gridspace offset (left action is swap 1 and $g$, right action is fixing both)
    2. Ising with action by $\psi$ on both sides decomposes

- Want computation technquies that
    - are practical to implement
    - don't rely on choices of representative
    - have a natural lattice model / string-net representation
- Classification of 1-morphisms [DMNO]
- A $X,Y$-bimodule category $M$ is equivalent to some thing