---
layout: "blog-post"
blog: true
title: "含时微扰理论"
subtitle: "Time-Dependent Perturbation Theory"
date: "2026-11-19 00:00:01 +0000"
permalink: "/blog/2026-11-19-quantum-time-dependent-perturbation/"
lang: "zh-CN"
math: true
author_profile: false
comments: false
share: false
related: false
description: "从含时薛定谔方程推导跃迁振幅，计算指数衰减与简谐扰动下的跃迁几率。"
---

定态微扰求能级和本征态的修正。这里给定系统的初态，求含时扰动把它带到各个末态的几率。设 $$H=H_0+\lambda V(\vec r,t)$$，$$H_0$$ 的本征态满足 $$H_0\phi_n=E_n\phi_n$$。

## 展开系数的演化

无扰动时，$$\phi_n$$ 随时间只多一个相位。记 $$\omega_n=E_n/\hbar$$，$$\psi_n(\vec r,t)=\phi_n(\vec r)e^{-i\omega_n t}$$。扰动下的波函数写成

$$
\Psi(\vec r,t)=\sum_n c_n(t)\psi_n(\vec r,t)
=\sum_n c_n(t)e^{-i\omega_n t}\phi_n(\vec r).
$$

代入含时薛定谔方程。时间导数作用在 $$\psi_n$$ 上给出 $$i\hbar\partial_t\psi_n=E_n\psi_n$$，与右边的 $$H_0$$ 项抵消。

$$
i\hbar\sum_n\dot c_n\lvert\psi_n(t)\rangle
=\lambda\sum_n c_n V(t)\lvert\psi_n(t)\rangle .
$$

在两边乘 $$\langle\psi_k(t)\rvert$$，得到系数满足的方程。

$$
i\hbar\dot c_k=\lambda\sum_n\langle\psi_k(t)\vert V(t)\vert\psi_n(t)\rangle c_n
=\lambda\sum_n V_{kn}(t)e^{i\omega_{kn}t}c_n,
\qquad
V_{kn}(t)=\langle\phi_k\vert V(t)\vert\phi_n\rangle,\quad
\omega_{kn}=\frac{E_k-E_n}{\hbar}.
$$

这时 $$c_k(t)$$ 就是去掉自由演化相位后的振幅。系统处在第 $$k$$ 态的几率为 $$\lvert c_k(t)\rvert ^2$$。

## 逐阶展开与跃迁几率

写 $$c_k=c_k^{(0)}+\lambda c_k^{(1)}+\lambda^2c_k^{(2)}+\cdots$$，比较 $$\lambda$$ 的各次幂。

$$
\begin{aligned}
i\hbar\dot c_k^{(0)} &=0,\\
i\hbar\dot c_k^{(1)} &=\sum_n V_{kn}(t)e^{i\omega_{kn}t}c_n^{(0)},\\
i\hbar\dot c_k^{(2)} &=\sum_n V_{kn}(t)e^{i\omega_{kn}t}c_n^{(1)}.
\end{aligned}
$$

和波恩近似类似，把上一阶的结果代回去就能算下一阶。设 $$t=t_0$$ 时系统处于 $$\phi_i$$，取 $$c_n(t_0)=\delta_{ni}$$，即 $$c_n^{(0)}=\delta_{ni}$$、$$c_n^{(j)}(t_0)=0$$（$$j\geq1$$）。积分得到一阶振幅。

$$
c_k^{(1)}(t)=\frac{1}{i\hbar}\int_{t_0}^t V_{ki}(t')e^{i\omega_{ki}t'}\,dt' .
$$

如果 $$V(\vec r,t)=v(\vec r)f(t)$$，空间积分和时间积分可以分开。对 $$k\ne i$$，$$c_k^{(0)}=0$$，所以用一阶振幅可得

$$
P_{i\to k}(t)\approx\lambda^2|c_k^{(1)}(t)|^2
=\frac{\lambda^2}{\hbar^2}|\langle\phi_k\vert v\vert\phi_i\rangle|^2
\left|\int_{t_0}^t f(t')e^{i\omega_{ki}t'}\,dt'\right|^2 .
$$

空间矩阵元给出两个态的耦合，时间积分取出扰动在跃迁频率 $$\omega_{ki}$$ 上的分量。用这个近似时，初态流出的总几率应远小于 1。

### 例子：无限深势阱，加一个指数衰减的扰动

势阱为 $$0<x<a$$，初态为基态，扰动为 $$\lambda V(x,t)=\lambda x^2 e^{-t/\tau}$$（$$t\geq0$$）。求充分长时间后跃迁到第 2 态的几率。势阱本征态为

$$
\phi_n(x)=\sqrt{\frac2a}\sin\frac{n\pi x}{a},
\qquad
E_n=\frac{n^2\pi^2\hbar^2}{2ma^2},
\qquad
\omega_{21}=\frac{3\pi^2\hbar}{2ma^2}.
$$

先算空间矩阵元。两个正弦相乘可以写成两个余弦之差。

$$
\langle\phi_2\vert x^2\vert\phi_1\rangle
=\frac1a\int_0^a x^2\left(\cos\frac{\pi x}{a}-\cos\frac{3\pi x}{a}\right)dx
=-\frac{16a^2}{9\pi^2}.
$$

再算时间积分。

$$
\int_0^t e^{-t'/\tau}e^{i\omega_{21}t'}\,dt'
=\frac{1-e^{-(\tau^{-1}-i\omega_{21})t}}{\tau^{-1}-i\omega_{21}}
\xrightarrow{t\to\infty}\frac1{\tau^{-1}-i\omega_{21}}.
$$

带入得到

$$
P_{1\to2}(\infty)\approx
\frac{\lambda^2}{\hbar^2}
\left(\frac{16a^2}{9\pi^2}\right)^2\frac1{\tau^{-2}+\omega_{21}^2}.
$$

## 简谐微扰 (Sinusoidal Perturbation)

取 $$\lambda V(\vec r,t)=2\lambda v(\vec r)\cos\omega t$$，从 $$t=0$$ 开始作用。把 $$\cos\omega t$$ 写成两个指数。记 $$v_{ki}=\langle\phi_k\vert v\vert\phi_i\rangle$$，$$\Delta_\pm=\omega_{ki}\pm\omega$$。对 $$k\ne i$$，

$$
\begin{aligned}
c_k(t)&\approx\frac{\lambda v_{ki}}{i\hbar}
\int_0^t\left(e^{i\Delta_-t'}+e^{i\Delta_+t'}\right)dt'\\
&=-\frac{\lambda v_{ki}}{\hbar}
\left(\frac{e^{i\Delta_-t}-1}{\Delta_-}+\frac{e^{i\Delta_+t}-1}{\Delta_+}\right)\\
&=-\frac{2i\lambda v_{ki}}{\hbar}
\left(e^{i\Delta_-t/2}\frac{\sin(\Delta_-t/2)}{\Delta_-}
+e^{i\Delta_+t/2}\frac{\sin(\Delta_+t/2)}{\Delta_+}\right).
\end{aligned}
$$

**旋波近似 (Rotating-Wave Approximation)**。看哪个指数项转得慢。靠近共振且扰动持续多个驱动周期时，慢项的振幅随时间积累，快项在积分中相互抵消。

1. **受激吸收 (Stimulated Absorption)**。$$E_k>E_i$$ 且 $$E_k-E_i\approx\hbar\omega$$。此时 $$\lvert \Delta_-\rvert \ll\lvert \Delta_+\rvert $$，保留 $$\Delta_-$$ 项。
2. **受激发射 (Stimulated Emission)**。$$E_k<E_i$$ 且 $$E_i-E_k\approx\hbar\omega$$。此时 $$\lvert \Delta_+\rvert \ll\lvert \Delta_-\rvert $$，保留 $$\Delta_+$$ 项。

![受激吸收的向上跃迁和受激发射的向下跃迁]({{ '/images/blog/advanced-quantum/stimulated-transitions.png' | relative_url }})

靠近相应的共振时，把保留下来的振幅取模平方。

$$
P_{i\to k}(t)\approx
\frac{4\lambda^2|v_{ki}|^2}{\hbar^2}\frac{\sin^2(\Delta t/2)}{\Delta^2},
\qquad
\Delta=
\begin{cases}
\omega_{ki}-\omega & \text{吸收},\\
\omega_{ki}+\omega & \text{发射}.
\end{cases}
$$

两个指数项都显著时，先把振幅相加再取模平方，交叉项给出干涉。[简谐微扰的两项振幅](https://ocw.mit.edu/courses/8-321-quantum-theory-i-fall-2017/81f6e90a6cdd311ca5f3afb32e9da1f2_MIT8_321F17_lec26.pdf)

### 共振峰的形状

看上式的核心 $$F(\Delta,t)=\sin^2(\Delta t/2)/\Delta^2$$。

手绘图里的 $$x$$ 对应这里的失谐 $$\Delta$$。左边固定 $$\Delta$$，右边固定 $$t$$。

![固定失谐时的时间振荡和固定时间时的共振峰]({{ '/images/blog/advanced-quantum/resonance-profile.png' | relative_url }})

- **固定失谐 $$\Delta\ne0$$**。$$F$$ 随时间振荡，周期为 $$2\pi/\lvert \Delta\rvert $$。
- **固定作用时间 $$t$$**。峰在 $$\Delta=0$$，最近的两个零点在 $$\Delta=\pm 2\pi/t$$。时间越长，主峰越窄。
- **正好共振 $$\Delta=0$$**。取极限 $$F(0,t)=t^2/4$$，所以 $$P_{i\to k}\approx(\lambda \lvert v_{ki}\rvert t/\hbar)^2$$。这个结果用于 $$\lambda \lvert v_{ki}\rvert t/\hbar\ll1$$ 的时间范围。
