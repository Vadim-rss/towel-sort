module.exports = function towelSort(matrix) {
  if (arguments.length === 0) return []

  const prepMatrix = matrix.map((e, i, a) => {
    return i % 2 ? a[i].reverse() : e
  })

  return prepMatrix.flat()
}