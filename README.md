## Transformations

### Vector class
3D vector (x, y, z)
Implemented methods:
- <Vector> negate()
- <Vector> add(<Vector> v)
- <Vector> subtract(<Vector> v)
- <Vector> multiply(<Vector> v)
- <Vector> divide(<Vector> v)
- <float> dot(<Vector> v)
- <Vector> cross(<Vector> v)
- <float> length()
- <Vector> normalize()
- <Vector> project(<Vector> v)
- <Vector> reflect(<Vector> v)
- <float> angle(<Vector> v)

### Matrix class
Matrix 4x4
Implemented methods:
- <Matrix> negate()
- <Matrix> add(<Matrix> m)
- <Matrix> subtract(<Matrix> m)
- <Matrix> transpose()
- <Matrix> multiply(<Matrix> m)
- <Vector> multiplyVector(<Vector> v)

### Transformation class
Holds the transformation matrix
Implemented methods:
- translate(<Vector> v)
- scale(<Vector> v)
- rotateX(<float> angle)
- rotateY(<float> angle)
- rotateZ(<float> angle)
- <Vector> transform(<Vector> v): transforms vector v s with saved tranformation matrix.
