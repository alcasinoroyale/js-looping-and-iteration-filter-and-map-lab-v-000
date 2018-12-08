// Code your solution here:
function driversWithRevenueOver(driver, revenue) {
  return driver.filter(function(name) {
    return name.revenue > revenue
  });
}
