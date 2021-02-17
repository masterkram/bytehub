# Linear equations

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

\left[\begin{array}{rrr|r}
   3 & 4 & 2 \\
    5 & -3 & 8 \\

  \end{array}\right]
:::