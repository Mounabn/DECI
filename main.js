// Decision Making 

//Leap Year Checker
function estBissextile(annee) {
    if ((annee % 4 === 0 && annee % 100 !== 0) || annee % 400 === 0) {
      return true;
    } else {
      return false;
    }
  }


//   Ticket Pricing:
  function prixBillet(age) {
    switch (true) {
      case age <= 0:
        return "veuillez saisir un age valide";
      case age <= 12:
        return 10;
      case age >= 13 && age <= 17:
        return 15;
      case age >= 18:
        return 20;
      default:
        return "age invalide";
    }
  }

  //Recursion:


//   Power Function:
  function Puissance(base, exposant) {
    if (exposant === 0) {
      return 1;
    } else {
      return base * Puissance(base, exposant - 1);
    }
  }

//   Fibonacci Sequence:
  function fibonacci(n) {
    if (n <= 1) {
      return n;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }