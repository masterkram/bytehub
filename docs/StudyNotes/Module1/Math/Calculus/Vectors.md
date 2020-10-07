# Vectors

## Three dimensional coordinate systems.
additional to x and y axes there is also a z axis in three dimensional coordinate systems.

### Coordinate planes:
Coordinate planes are planes that pass through two axes.

These are the coordinate planes in three dimensions:
+ xz-plane (y = 0)
+ xy-plane (z = 0)
+ yz-plane (x = 0)

### Distance
The distance between the points $P(x_1, y_1, z_1)$ and $Q(x_2, y_2, z_2)$
is defined as $|PQ| = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2}$ (pythagoras)

### Spheres
A sphere with center P and radius $r \ge 0$ is defined as the set of all points $X \in \mathbb{R}^3$ with distance r to P.

+ If P = (a,b,c) then (x,y,z) is on the sphere whenever $\sqrt{(x - a)^2 + (y - b)^2 + (z - c)^2} = r$ (the point (x,y,z) is at r distance from p so its in the sphere)

+ This is equivalent to $(x - a)^2 + (y - b)^2 + (z - c)^2 = r^2$

## Vectors
Magnitude and direction.

Example: Speed has a value and a direction.

The vector $\overrightarrow{PQ}$ is the directed line segment with initial point P and terminal point Q.

### Conventions and notation
+ Two vectors with the same length and the same direction are considered to be the same.
+ The name of a vector can be written in bold: **v** or underlined <ins>v</ins>

### Standard position and component form

+ A vector is in **standard position** if the origin is its initial point.
+ If the vector equals OP where O is the origin and P = (x, y, z), then we write **v** on **component form**:
$v = \langle x, y, z \rangle$

::: theorem
If vector **v** has initial point $P \langle x_1, x_2, x_3 \rangle$ and terminal point $Q \langle x_2, y_2, y_3 \rangle$ then

$v = \overrightarrow{PQ} = \langle x_2 - x_1 , y_2 - y_1, z_2 - z_1 \rangle$
:::

#### Definition:
*The length of the vector v with initial point P and terminal point Q is denoted as $|v|$ and is defined as the distance between P and Q.*

$|v| = |PQ|$

+ If $v = \langle x,y,z \rangle$, then $|v| = \sqrt{x^2 + y^2 + z^2}$ *(in standard position)*

+ If $v = \overrightarrow{PQ}$  then **$|v| = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2}$**

### Unit Vectors
*a unit vector is a vector with length = 1.*
+ if $v \neq 0$, then $\frac{v}{|v|}$ is a unit vector

### Direction
The direction of a non-zero vector v is the vector $\frac{v}{|v|}$

+ Directions are unit vectors.
+ If a direction is in standard position, its end point lies on the unit circle (in $\mathbb{R}^2$), or the unit sphere (in $\mathbb{R}^3$)

### Special vectors

+ **zero vector**: all components are 0, notaion: **0**
+ **standard base vectors**:
    + $\mathbb{R}^2 \langle 1,0 \rangle \langle 0,1 \rangle$
    + $\mathbb{R}^3 \text{:} \langle 1,0,0 \rangle \langle 0,1,0 \rangle \langle 0,0,1 \rangle$

### Scalar multiplication of vectors
Scalar multiplication of a vector v with a real number a results in a shorter or longer vector with the same or opposite direction as v.
$$v = \langle v_1, ... , v_n \rangle
av = \langle av_n1, ..., av_n\rangle \forall a \in \mathbb{R}$$

### Sum of two vectors
Two visual ways:
+ head to tail construction: shift v such that the initial point of v is the same as the terminal point of u.

+ parallelogram construction: shift v such that the initial points if u and v coincide.

algebraically:
$$u = \langle u_1, ... , u_n \rangle
v = \langle v_1, ... , v_n \rangle
u + v = \langle u_1 + v_1, ... u_n + v_n \rangle$$

#### Properties
+ $u + v = v + u$
+ $(u+v)+w = u+(v+w)$
+ $u+0 = u$
+ $u + (-u) = 0$
+ $0u = 0$
+ $1u = u$
+ $a(b\boldsymbol{u}) = (ab)\boldsymbol{u}$
+ a(u + v) = au + av
+ (a + b)u = au + bu

### The difference of two vectors.
visually:
+ head to head: shift the vectors such that the initial points coincide
+ v - u is the vector from the head of u to the head of v.
+ u - v is the vector from the head of v to the head of u.

### Dot product
The dot product of two vectors v and u:

$u \cdot v = v_1u_1 + v_2u_2 + ... + u_nu_v$

+ the dot product is a number.
+ the dot product can be used to describe the length of the vector: $|v| = \sqrt{v \cdot v}$

#### Properties
+ $u \cdot v = v \cdot u$
+ $(cu) \cdot v = u \cdot (cv) = c(u \cdot v)$
+ $u \cdot (v + w) = u \cdot v + u \cdot w$
+ $u \cdot u = u^2$
+ $u \cdot 0 = 0$

### The angle between unit vectors.
if u and v are unit vectors, and $\theta$ is the angle between u and v, then:

$u \cdot v = \cos{\theta}$

if u and v are non-zero vectors and $\theta$ is the angle between u and v, then

$u \cdot v = |u||v|\cos{\theta}$

### Orthogonality
two vectors u and v are orthogonal or perpendicular if $u \cdot v = 0$

+ if $u \neq 0, v \neq 0$, then the angle between u and b is $\frac{\pi}{2}$
+ if u = 0 or v = 0 then there is no angle between u and v but we still say that u and v are orthogonal.
+ we denote orthogonal vectors with the "$\perp$" symbol : $v \perp u$

### Projection

<img src="./vector_projection.svg">

+ $w - cv \perp v$ in other words:

$(u - av) \cdot v = 0$

$proj_v u = (\frac{u \cdot v}{|v|^2})v$

### Cross Product