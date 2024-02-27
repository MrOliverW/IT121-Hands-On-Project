function calculatePremium(currentYear, birthYear) {
    // Check for valid birth year (less than current year)
    if (birthYear >= currentYear) {
      alert("Invalid birth year. Please enter a year before the current year.");
      return;
    }
  
    // Calculate age (current year - birth year)
    const age = currentYear - birthYear;
  
    // Calculate decade by dividing age by 10 and rounding down
    const decade = Math.floor(age / 10);
  
    // Calculate premium (decade + 15) * 20
    const premium = (decade + 15) * 20;
  
    return premium;
  }
  
  // Get current year and birth year from user
  const currentYear = parseInt(prompt("Enter the current year: "));
  const birthYear = parseInt(prompt("Enter your birth year: "));
  
  // Calculate and display premium
  const premium = calculatePremium(currentYear, birthYear);
  
  if (premium !== undefined) {
    alert(`Your premium is $${premium}.`);
  }