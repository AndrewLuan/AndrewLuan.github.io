---
layout: blog-post
blog: true
title: 微分几何
subtitle:
date: 2026-11-21 00:00:01 +0000
permalink: /blog/geometry/
lang: zh-CN
math: true
author_profile: false
comments: false
share: false
related: false
description:
---

为了研究Riemann Geometry GFM (Inspired by ICDM 2026)而作的笔记

## 流形，切空间

- 二维欧氏空间 $\mathbb R^2$：一张无限大的平面。
- 三维欧氏空间 $mathbb R^3$：我们日常生活中的三维空间。
这两个空间有一个共同特点：可以直接用坐标表示位置，并进行向量加法。
但现在考虑一个球面：
$$
 \mathcal M=S^2 =\{(x,y,z)\in\mathbb R^3:x^2+y^2+z^2=1\}
$$
移动后的点已经不在球面上,这说明：对于弯曲空间，不能简单地通过向量加法更新位置。
一个空间整体上可以弯曲，但在每个点附近，都可以用欧氏空间的坐标描述。
虽然球面是弯曲的，但在其上一点 $p$ 附近，可以用一张平面近似它。
把这张**切平面中的方向向量组成的向量空间叫作切空间**：
$$
T_p\mathcal M
$$
对于单位球面
$$
 T_pS^2=\{v\in\mathbb R^3:p^\top v=0\} 
$$
虽然球面本身不是线性空间，但每个切空间都是线性空间，可以进行向量加法、矩阵乘法、线性变换、梯度计算等机器学习常见操作。
## 指数映射（Exponential Map），对数映射（Logarithmic Map）

指数映射是一种操作：输入**一个位置 $p$ 和切向量 $v$，输出球面上的新位置**。理解为弯曲空间中的向量加法
$$
\exp_p:T_p\mathcal M\to\mathcal M
$$
对于单位球面：
$$
 \exp_p(v) = \cos(\|v\|)p+ \sin(\|v\|)\frac{v}{\|v\|} 
$$
其中 $v\ne0$，并定义 $\exp_p(0)=p$。
![[Pasted image 20261121143224.png|406]]

在黎曼优化中，经常使用：
$$
 p_{k+1} = \exp_{p_k}(-\eta\,\operatorname{grad}f(p_k)) 
$$
对应梯度下降

**给定流形上的两个点 $p,q$，我们希望找到一个切向量 $v$，使得 $\exp_p(v)=q$** ，这就是对数映射：
$$
 \log_p(q)=v
$$
![[Pasted image 20261121143847.png|440]]


## 平行移动，联络（Connection）

平行移动解决了流行上两个不同切空间的关联。
假设球面上有两个节点$p_i,p_j\in\mathcal M$ 
它们分别有特征：$h_i\in T_{p_i}\mathcal M$ ，$h_j\in T_{p_j}\mathcal M$
定义映射：
$$
P_{j\to i}: T_{p_j}\mathcal M\to T_{p_i}\mathcal M 
$$
满足：
$$
 P_{j\to i}(h_j)\in T_{p_i}\mathcal M 
$$
是可以合法地进行：
$$
  h_i'=h_i+P_{j\to i}(h_j) 
$$
平行移动让特征相对于曲面本身尽可能不旋转。解释这一点就需要**联络**。
在欧氏空间中，向量场$V(x)$ 的变化可以直接用方向导数。但在流形上，不同位置的向量属于不同的切空间，不能直接做差分。
定义协变导数$\nabla_XY$，其中 \(X,Y\) 是流形上的向量场。
可以理解为：
沿着 X 的方向，观察向量场 Y 如何变化，并扣除仅仅由于曲面弯曲而产生的部分。

一个**仿射联络**（affine connection）∇ 是一个映射，它接受两个向量场 X,Y，输出一个向量场 ∇XY，并满足以下性质：

1. **张量性（对方向 X）**：对任意向量场 Y，映射 X↦∇XY 是 (1,1)-张量，即∇fX+gYZ=f∇XZ+g∇YZ,其中 f,g 为光滑函数。
2. **导子性（对被导向量 Y）**：对任意向量场 X，映射 Y↦∇XY 是导子，即∇X(Y1+Y2)=∇XY1+∇XY2,∇X(fY)=(Xf)Y+f∇XY.

在 Rn 中，普通的方向导数满足所有这些性质，因此它是一个联络。



对于一条曲线$\gamma(t)$，沿途的向量场 $V(t)$ 满足：
$$
 \nabla_{\dot\gamma(t)}V(t)=0 
$$就称为沿曲线平行移动。


通常使用一种自然的联络： **Levi-Civita 联络**。它满足两个重要条件：
- 保持度量：平行移动不改变向量的长度和夹角。
- 无挠：联络满足对称性条件。

对于嵌入欧氏空间的单位球面，Levi-Civita 联络可以通过将普通导数投影到切空间得到：
$$
 \nabla_{\dot\gamma}V = \frac{dV}{dt} - \left\langle \frac{dV}{dt},\gamma \right\rangle\gamma
$$

因此，平行移动的条件就是普通导数的切向分量为零。
这也解释了为什么向量在三维空间中看起来可以旋转，但在球面内仍然是“平行”的。
![[Pasted image 20261121150125.png]]
