module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    const options = { month: '2-digit', day: '2-digit', year: 'numeric' };
    console.log("date::", date);
    return new Date(date).toLocaleDateString(undefined, options);
  }
};