# Linear equations

## Linear Systems

While solving problems in many technical fields we obtain several equations
with many unknowns. A major problem in this case is then to obtain all
possible solutions to this set of equations. In other words, we start with
equations of the form:

\begin{Bmatrix}
f_1(x_1,...,x_n) & =b_1\\
f_2(x_1,...,x_n) & =b_2\\
... & ...\\
f_m(x_1,...,x_n) & =b_m
\end{Bmatrix}

Where \ f_1, . . . , f_m\ are given functions and \ b_1, . . . , b_m\ are known constants. The objective is here to determine all values for the unknowns \ x_1, . . . , x_n\ for which the above set of equations is satisfied

::: theorem Linear equation
\ f(x_1, . . . , x_n) = b\
Is called a linear equation if the function f is linear. In other words for any \ x_1, . . . , x_n \ and \ y_1, . . . , y_n\ and constant c we have:
\ f(x_1+cy_1, x_2+cy_2, . . . , x_n+cy_n)=f (x_1, . . . , x_n)+cf (y_1, . . . , y_n)\

So an equation is linear if it can be written as \ a_1x_1+a_2x_2 + . . . +a_nx_n = b\
:::

The first matrix can also be written in a diffrent notation:
::: theorem Augmented matrix

\begin{Bmatrix}
3x_1&4x_2& =2\\
5x_1&-3x_2 & =8\\
\end{Bmatrix}

The above matrix can be rewritten as:

\left[\begin{array}{rr|r}
3 & 4 & 2 \\
5 & -3 & 8 \\

\end{array}\right]
:::

When we have a matrix we want to get a set of all possible solutions for the set of linear equations, we call this set the **soluatin set**
::: tip
A linear system is **consistent** if the set of linear equations has at least one solution.
:::

To get to the solution set of a linear system we perform elementry operations which are operations on the linear system which don't change the solution set. Such operations are:

- Adding a multiple of one equation to another equation.
- Multiplying one equation with a number unequal to zero.
- Interchanging two equations.

::: tip Equivalence
If tow linear systems have the same solution set the systems are equivalent. So when two linear systems are equivalent then they also have the same number of equations and the same solution set.
:::

We will use these operations to reduce an augmented matrix to either the echelon form or the reduced echelon form.

::: theorem Echelon form
A matrix is in echelon form if

- Nonzero rows are situated above zero rows.
- The first nonzero entry (the pivot entry) of a row is always in a column to the right of the pivots of the rows above it.

Example:

\left[\begin{array}{rrr|r}
2 & -4 & -4 & 1 \\
0 & 4 & 0 & 4 \\
0 & 0 & 1 & 9 \\
\end{array}\right]

:::

::: theorem Reduced echelon form
The matrix is in reduced echelon form (sometimes also called row-reduced echelon form) if, additionally

- Each pivot equals one and is the only nonzero entry in its column.

Given a matrix A. The matrix can always be transformed into a reduced echelon form by elementary row operations. Moreover, this reduced echelon form is unique. The echelon form is not unique.

Example:

\left[\begin{array}{rrr|r}
1 & 0 & 0 & 1 \\
0 & 1 & 0 & 4 \\
0 & 0 & 1 & 9 \\
\end{array}\right]
:::

The solution set can be found by applying the elementry operations:

\left[\begin{array}{rrrr|r}
5 & -3 & -19 & 1 & -7 \\
0 & -3 & -9 & -2 &3 \\
15 & -6 & -48 & 6 & -24 \\
\end{array}\right]

After multiple elementry operations we get it in reduced echelon form:

\left[\begin{array}{rrrr|r}
1 & 0 & -2 & 0 & -2 \\
0 & 1 & -3 & 0 & -1 \\
0 & 0 & 0 & 1 & 0 \\
\end{array}\right]

The **Parametric description** of the solution set then can be given as:
\begin{Bmatrix}
x_1=-2+2x_3\\
x_2=-1+3x_3\\
x_3 is free\\
x_4=0\\
\end{Bmatrix}

The above is a parametric description of the solution set, this can easily be transformed to a vector description using collumn vectors:

\begin{pmatrix}-2 \\-1\\0\\0 \end{pmatrix}+x_3\begin{pmatrix}2 \\3\\1\\0 \end{pmatrix}
As you might notice we first take all the constants in the first collum vector (and 0 for the free variable) and then for each free variable we create a collum vector in which the collumnumber of the free variable gets 1 and then all the mutiples of the free varialbe in the other rows.

These two are both solution sets descriptions. 

But sometimes it doesn't work out:
\left[\begin{array}{rrr|r}
2 & -4 &-4& 1 \\
2 & -4 &-4& 6 \\
4 & -4 &-8& 6 \\
\end{array}\right]
First we notice that if we add -1 times the first row to the second row and -2 times the first row to the third row we get a pivot position and two zeros in the first collum:
\left[\begin{array}{rrr|r}
2 & -4 & -4 & 1 \\
0 & 0 & 0 & 5 \\
0 & 4 & 0 & 4 \\
\end{array}\right]

Then we identify that the second colum also is a pivot colum, so to create a pivot position in the second row we just interchange the second and third row.

\left[\begin{array}{rrr|r}
2 & -4 & -4 & 1 \\
0 & 4 & 0 & 4 \\
0 & 0 & 0 & 5 \\
\end{array}\right]

Now our augmented matrix is in echelon form and we notice that the system is inconsistent as it states that 0 = 5. So it has no solutions (that also could've been noticed upon first sight here but sometimes you find out later).

## Homogeneity
