module.exports = (data, test) => {
    const rows = Array.isArray(data) ? data : [data];
  
    rows.forEach((row, index) => {
      test(row, index + 1)
    })
};